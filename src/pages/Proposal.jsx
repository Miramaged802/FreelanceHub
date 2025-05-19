import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const proposalSchema = Yup.object().shape({
  coverLetter: Yup.string()
    .min(100, "Cover letter must be at least 100 characters")
    .required("Cover letter is required"),
  bidAmount: Yup.number()
    .min(1, "Bid amount must be greater than 0")
    .required("Bid amount is required"),
  deliveryTime: Yup.number()
    .min(1, "Delivery time must be at least 1 day")
    .required("Delivery time is required"),
  milestones: Yup.string().required("Project milestones are required"),
  expertise: Yup.string().required("Relevant expertise is required"),
  availability: Yup.string().required("Availability is required"),
  attachments: Yup.mixed(),
});

function Proposal() {
  const location = useLocation();
  const navigate = useNavigate();
  const job = location.state?.job;

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Job Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The job you&apos;re trying to apply for doesn&apos;t exist.
          </p>
          <button
            onClick={() => navigate("/jobs")}
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      // TODO: Implement proposal submission
      console.log("Proposal values:", values);
      alert("Your proposal has been submitted successfully!");
      navigate("/jobs");
    } catch (error) {
      console.error("Error submitting proposal:", error);
      alert("There was an error submitting your proposal. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Job Details - Left Side */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-primary-600 mb-4">
                {job.title}
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Budget
                  </h3>
                  <p className="text-primary-600 font-medium">{job.budget}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Duration
                  </h3>
                  <p className="text-gray-600">{job.duration}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Category
                  </h3>
                  <p className="text-gray-600">{job.category}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Description
                  </h3>
                  <p className="text-gray-600 whitespace-pre-wrap">
                    {job.description}
                  </p>
                </div>

                <div className="border-t pt-4 mt-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Skills Required
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {job.skills?.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Proposal Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Submit Your Proposal
              </h1>

              <Formik
                initialValues={{
                  coverLetter: "",
                  bidAmount: "",
                  deliveryTime: "",
                  milestones: "",
                  expertise: "",
                  availability: "",
                  attachments: null,
                }}
                validationSchema={proposalSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched, isSubmitting, setFieldValue }) => (
                  <Form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Bid Amount ($) <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="number"
                        name="bidAmount"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter your bid amount"
                      />
                      {errors.bidAmount && touched.bidAmount && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.bidAmount}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Delivery Time (days){" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Field
                        type="number"
                        name="deliveryTime"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Enter delivery time in days"
                      />
                      {errors.deliveryTime && touched.deliveryTime && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.deliveryTime}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Availability{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Field
                        as="select"
                        name="availability"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select your availability</option>
                        <option value="full-time">
                          Full-time (40hrs/week)
                        </option>
                        <option value="part-time">
                          Part-time (20-30hrs/week)
                        </option>
                        <option value="flexible">Flexible hours</option>
                      </Field>
                      {errors.availability && touched.availability && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.availability}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Relevant Expertise{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Field
                        as="textarea"
                        name="expertise"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Describe your relevant skills and experience..."
                      />
                      {errors.expertise && touched.expertise && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.expertise}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Project Milestones{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <Field
                        as="textarea"
                        name="milestones"
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Break down your delivery plan into milestones..."
                      />
                      {errors.milestones && touched.milestones && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.milestones}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Cover Letter <span className="text-red-500">*</span>
                      </label>
                      <Field
                        as="textarea"
                        name="coverLetter"
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Explain why you're the best fit for this job..."
                      />
                      {errors.coverLetter && touched.coverLetter && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.coverLetter}
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Attachments
                      </label>
                      <input
                        type="file"
                        multiple
                        onChange={(event) => {
                          setFieldValue(
                            "attachments",
                            event.currentTarget.files
                          );
                        }}
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                      />
                      <p className="text-sm text-gray-500 mt-1">
                        Upload portfolio items, certifications, or relevant
                        documents (optional)
                      </p>
                    </div>

                    <div className="flex justify-end space-x-4 pt-6">
                      <button
                        type="button"
                        onClick={() => navigate("/jobs")}
                        className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors flex items-center space-x-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <span>Submit Proposal</span>
                        )}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proposal;
