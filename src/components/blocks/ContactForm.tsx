"use client";
import React, { useState } from "react";
import type { ContactFormBlock } from "./types";

export const ContactForm: React.FC<ContactFormBlock> = ({
  title,
  description,
  fields,
  submitLabel = "Envoyer",
  successMessage = "Votre message a été envoyé avec succès.",
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // TODO: Implement form submission logic
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setIsSuccess(true);
    } catch (error) {
      setError("Une erreur est survenue. Veuillez réessayer plus tard.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <svg
            className="mx-auto h-12 w-12 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            {successMessage}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-xl text-center text-gray-600 mb-8">
            {description}
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {fields.map((field, index) => {
            const commonProps = {
              id: field.name,
              name: field.name,
              placeholder: field.placeholder || "",
              required: field.required,
              className:
                "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
            };

            return (
              <div key={index}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label || field.name}
                  {field.required && (
                    <span className="text-red-500 ml-1">*</span>
                  )}
                </label>

                {field.type === "textarea" ? (
                  <textarea
                    {...{
                      ...commonProps,
                      required: commonProps.required || false
                    }}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                ) : (
                  <input
                    {...{
                      ...commonProps,
                      required: commonProps.required || false
                    }}
                    type={field.type}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                )}
              </div>
            );
          })}

          {error && <div className="text-red-600 text-sm mt-2">{error}</div>}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors ${
                isSubmitting ? "opacity-75 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Envoi en cours..." : submitLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
