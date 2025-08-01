"use client";

import React, { useState } from 'react';
import ContactSection from '../ContactSection';
import { contactFormFieldsForBecomePartnerPage } from '@/app/constants';

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


  // Handle contact form field changes
  const handleContactFormChange = (name, value) => {
    setContactFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle contact form submission
  const handleContactFormSubmit = (formData) => {
    console.log('Contact form submitted:', formData);
    // Reset form data after submission
    setContactFormData({
      name: '',
      email: '',
      phone: '',
      companyName: '',
      service: 'Payroll Management',
      designation: '',
      description: ''
    });
  };

  return (
    <ContactSection 
      formFields={contactFormFieldsForBecomePartnerPage}
      onChange={handleContactFormChange}
      onSubmit={handleContactFormSubmit}
      showContactInfo={showLocation}
    />
  );
} 