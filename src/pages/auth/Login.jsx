import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { setCredentials } from "../../store/slices/authSlice";
import { FaGoogle, FaApple } from "react-icons/fa";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = React.useState("");

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      setError("");

      // Get users from localStorage (if any)
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u) =>
          u.email === values.email.toLowerCase().trim() &&
          u.password === values.password
      );

      if (!user) {
        setError("Invalid email or password");
        return;
      }

      // Store current user email
      localStorage.setItem("currentUser", values.email.toLowerCase().trim());

      // Create auth session
      const authUser = {
        ...user,
        isAuthenticated: true,
        token: `auth-token-${Date.now()}`,
        lastLogin: new Date().toISOString(),
      };

      localStorage.setItem("authUser", JSON.stringify(authUser));

      // Update Redux state
      dispatch(
        setCredentials({
          user: {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role,
            specialization: user.specialization,
            companyType: user.companyType,
          },
          token: authUser.token,
          userType: user.role,
        })
      );

      // Navigate to dashboard after successful login
      navigate("/dashboard", { replace: true });
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col md:flex-row bg-white w-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-4 md:px-16 py-10">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-medium text-gray-800 mb-5">
              Welcome back!
            </h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={loginSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form className="space-y-5">
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-gray-500 mb-1"
                    >
                      Email address
                    </label>
                    <Field
                      name="email"
                      type="email"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      placeholder="you@example.com"
                    />
                    {errors.email && touched.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-xs font-medium text-gray-500 mb-1"
                    >
                      Password
                    </label>
                    <Field
                      name="password"
                      type="password"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      placeholder="••••••••"
                    />
                    {errors.password && touched.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="remember"
                        className="h-4 w-4 text-green-700 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember"
                        className="ml-2 text-xs text-gray-500"
                      >
                        Remember me
                      </label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-xs text-primary-600"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-4 rounded-lg text-sm font-semibold text-white transition-colors duration-200 bg-primary-600 hover:bg-primary-700 active:bg-primary-800 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Signing in..." : "Sign in"}
                  </button>
                </Form>
              )}
            </Formik>

            <div className="flex items-center my-5">
              <hr className="flex-grow border-gray-200" />
              <span className="mx-4 text-xs text-gray-400">or</span>
              <hr className="flex-grow border-gray-200" />
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded text-sm">
                <FaGoogle className="mr-2 text-red-500" /> Sign in with Google
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded text-sm">
                <FaApple className="mr-2" /> Sign in with Apple
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-5">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => navigate("/register")}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Sign up
              </button>
            </p>
          </div>
        </div>
        <div className="w-full h-full">
          <img
            src="img/ChatGPT Image May 17, 2025, 09_49_55 PM.png"
            alt="Login illustration"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
