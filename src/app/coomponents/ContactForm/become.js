"use client";

import React, { useState } from 'react';
import ContactSection from '../ContactSection';
import { contactFormFieldsForBecomePartnerPage } from '@/app/constants';
import { apiHelper } from '@/app/constants/api';

export default function BecomeContactForm({ showLocation = true }) {
  // Contact form state
  const [contactFormData, setContactFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    service: 'Payroll Management',
    designation: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Handle contact form field changes
  const handleContactFormChange = (name, value) => {
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle contact form submission
  const handleContactFormSubmit = async (formData) => {
    try {
      setIsSubmitting(true);
      setSubmitError('');
      setSubmitSuccess(false);

      // Submit form data to API
      const result = await apiHelper.submitContactForm(formData);

      if (result.success) {
        setSubmitSuccess(true);
        // Reset form data after successful submission
        setContactFormData({
          name: '',
          email: '',
          phone: '',
          companyName: '',
          service: 'Payroll Management',
          designation: '',
          description: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }
    } catch (error) {
      // Error submitting form
      setSubmitError('Failed to submit form. Please try again.');

      // Clear error message after 5 seconds
      setTimeout(() => {
        setSubmitError('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Submitting Overlay */}
      {isSubmitting && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          flexDirection: 'column',
          gap: '1rem'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '4px solid #f3f3f3',
            borderTop: '4px solid #3498db',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite'
          }}></div>
          <div style={{ color: 'white', fontSize: '1.1rem', fontWeight: 'bold' }}>
            Submitting your request...
          </div>
          <style jsx>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      <ContactSection
        formFields={contactFormFieldsForBecomePartnerPage}
        onChange={handleContactFormChange}
        onSubmit={handleContactFormSubmit}
        isSubmitting={isSubmitting}
        submitSuccess={submitSuccess}
        submitError={submitError}
        showContactInfo={showLocation}
      />
    </div>
  );
} 