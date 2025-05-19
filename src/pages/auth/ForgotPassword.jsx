import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

function ForgotPassword() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // TODO: Implement actual password reset logic
      console.log('Reset password for:', values.email);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto bg-surface rounded-lg shadow-card overflow-hidden">
          <div className="w-full md:w-1/2 p-8 space-y-6">
            <div className="flex justify-center md:justify-start">
              <h1 className="text-2xl font-bold text-primary-500">Your Logo</h1>
            </div>
            <h2 className="text-3xl font-extrabold text-gray-900">Check your email</h2>
            <p className="text-sm text-gray-600">We've sent you instructions to reset your password. Please check your email.</p>
            <Link to="/login" className="inline-block py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-md">Return to login</Link>
          </div>
          <div className="hidden md:block md:w-1/2">
            <img src="/img/img3.png" alt="Reset confirmation illustration" className="object-cover h-full w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto bg-surface rounded-lg shadow-card overflow-hidden">
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <div className="flex justify-center md:justify-start">
            <h1 className="text-2xl font-bold text-primary-500">Your Logo</h1>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">Reset your password</h2>
          <p className="text-sm text-gray-600">Enter your email address and we'll send you instructions to reset your password.</p>
          <Formik
            initialValues={{ email: '' }}
            validationSchema={forgotPasswordSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="mt-4 space-y-4">
                {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">{error}</div>}
                <div>
                  <Field name="email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Email address" />
                  {errors.email && touched.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                </div>
                <button type="submit" disabled={isSubmitting} className="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white rounded-md">{isSubmitting ? 'Sending...' : 'Send reset instructions'}</button>
              </Form>
            )}
          </Formik>
          <div className="flex space-x-4 mt-4">
            <button className="flex-1 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-md">Facebook</button>
            <button className="flex-1 py-2 bg-danger-500 hover:bg-danger-600 text-white rounded-md">Google</button>
            <button className="flex-1 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-md">Apple</button>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2">
          <img src="/img/img3.png" alt="Forgot password illustration" className="object-cover h-full w-full" />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;