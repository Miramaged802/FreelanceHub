import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  role: Yup.string()
    .oneOf(["freelancer", "client"], "Please select a role")
    .required("Please select a role"),
  terms: Yup.boolean()
    .oneOf([true], "You must accept the terms and conditions")
    .required("You must accept the terms and conditions"),
});

const freelancerSpecializations = [
  "Web Development",
  "Graphic Design",
  "Writing",
  "Marketing",
  "Translation",
  "Other",
];

const clientCompanyTypes = [
  "Startup",
  "Agency",
  "Enterprise",
  "Individual",
  "Other",
];

function Register() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for show/hide password fields
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const storeUserData = (userData) => {
    try {
      // Get existing users or initialize empty array
      const users = JSON.parse(localStorage.getItem("users") || "[]");

      // Check if email already exists (case-insensitive)
      const emailExists = users.some(
        (user) => user.email.toLowerCase() === userData.email.toLowerCase()
      );

      if (emailExists) {
        return false;
      }

      // Add new user
      users.push({
        ...userData,
        createdAt: new Date().toISOString(),
        lastUpdated: new Date().toISOString(),
      });

      localStorage.setItem("users", JSON.stringify(users));
      return true;
    } catch (error) {
      console.error("Error storing user data:", error);
      throw new Error("Failed to register. Please try again.");
    }
  };

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldError }
  ) => {
    try {
      setIsSubmitting(true);
      setError("");

      // Create user object
      const userData = {
        id: `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.toLowerCase().trim(),
        password: values.password,
        role: values.role,
        specialization:
          values.role === "freelancer" ? values.specialization : "",
        companyType: values.role === "client" ? values.companyType : "",
        isActive: true,
      };

      const success = storeUserData(userData);

      if (success) {
        // Show success message
        alert("Registration successful! Please sign in.");
        resetForm();
        navigate("/login");
      } else {
        setFieldError(
          "email",
          "This email is already registered. Please sign in instead."
        );
      }
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.message || "Registration failed. Please try again.");
    } finally {
      setIsSubmitting(false);
      setSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex flex-col md:flex-row bg-white w-full">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-8 md:px-16 py-10">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl font-medium text-gray-800 mb-5">
              Get Started Now
            </h2>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                confirmPassword: "",
                role: "",
                specialization: "",
                companyType: "",
                terms: false,
              }}
              validationSchema={registerSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, values, setFieldValue }) => (
                <Form className="space-y-5">
                  {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm">
                      {error}
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-xs font-medium text-gray-500 mb-1"
                      >
                        First Name
                      </label>
                      <Field
                        name="firstName"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                        placeholder="John"
                      />
                      {errors.firstName && touched.firstName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.firstName}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-xs font-medium text-gray-500 mb-1"
                      >
                        Last Name
                      </label>
                      <Field
                        name="lastName"
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                        placeholder="Doe"
                      />
                      {errors.lastName && touched.lastName && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.lastName}
                        </p>
                      )}
                    </div>
                  </div>
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
                  {/* Password Field with Show/Hide */}
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block text-xs font-medium text-gray-500 mb-1"
                    >
                      Password
                    </label>
                    <Field
                      name="password"
                      type={showPassword ? "text" : "password"}
                      className="w-full p-2 border border-gray-300 rounded text-sm pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute right-2 top-8 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.password && touched.password && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  {/* Confirm Password Field with Show/Hide */}
                  <div className="relative">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-xs font-medium text-gray-500 mb-1"
                    >
                      Confirm Password
                    </label>
                    <Field
                      name="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      className="w-full p-2 border border-gray-300 rounded text-sm pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      tabIndex={-1}
                      className="absolute right-2 top-8 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                      onClick={() => setShowConfirmPassword((prev) => !prev)}
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.confirmPassword && touched.confirmPassword && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="role"
                      className="block text-xs font-medium text-gray-500 mb-1"
                    >
                      I want to
                    </label>
                    <Field
                      as="select"
                      name="role"
                      className="w-full p-2 border border-gray-300 rounded text-sm"
                      onChange={(e) => {
                        setFieldValue("role", e.target.value);
                        setFieldValue("specialization", "");
                        setFieldValue("companyType", "");
                      }}
                    >
                      <option value="">Select your role</option>
                      <option value="freelancer">Work as a Freelancer</option>
                      <option value="client">Hire Freelancers</option>
                    </Field>
                    {errors.role && touched.role && (
                      <p className="text-red-500 text-xs mt-1">{errors.role}</p>
                    )}
                  </div>
                  {values.role === "freelancer" && (
                    <div>
                      <label
                        htmlFor="specialization"
                        className="block text-xs font-medium text-gray-500 mb-1"
                      >
                        Specialization
                      </label>
                      <Field
                        as="select"
                        name="specialization"
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      >
                        <option value="">Select specialization</option>
                        {freelancerSpecializations.map((spec) => (
                          <option key={spec} value={spec}>
                            {spec}
                          </option>
                        ))}
                      </Field>
                    </div>
                  )}
                  {values.role === "client" && (
                    <div>
                      <label
                        htmlFor="companyType"
                        className="block text-xs font-medium text-gray-500 mb-1"
                      >
                        Company Type
                      </label>
                      <Field
                        as="select"
                        name="companyType"
                        className="w-full p-2 border border-gray-300 rounded text-sm"
                      >
                        <option value="">Select company type</option>
                        {clientCompanyTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </Field>
                    </div>
                  )}
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <Field
                        type="checkbox"
                        id="terms"
                        name="terms"
                        className="h-4 w-4 text-green-700 border-gray-300 rounded"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-xs text-gray-500">
                        I agree to the{" "}
                        <a href="#" className="text-blue-600 hover:underline">
                          Terms and Conditions
                        </a>
                      </label>
                      {errors.terms && touched.terms && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.terms}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting || !touched.terms || !values.terms}
                      className={`w-full py-3 px-4 rounded-lg text-sm font-semibold text-white transition-colors duration-200 ${
                        isSubmitting || !touched.terms || !values.terms
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-blue-600 hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg"
                      }`}
                    >
                      {isSubmitting
                        ? "Creating your account..."
                        : "Create Account"}
                    </button>
                  </div>
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
                <FaGoogle className="mr-2 text-red-500" /> Sign up with Google
              </button>
              <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded text-sm">
                <FaApple className="mr-2" /> Sign up with Apple
              </button>
            </div>

            <p className="text-center text-xs text-gray-500 mt-5">
              Have an account?{" "}
              <Link to="/login" className="text-blue-600">
                Sign in
              </Link>
            </p>
          </div>
        </div>
        <div className="w-full h-full">
          <img
            src="/img/ChatGPT Image May 17, 2025, 09_49_55 PM.png"
            alt="Sign up illustration"
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
