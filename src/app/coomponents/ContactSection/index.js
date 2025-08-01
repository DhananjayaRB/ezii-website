"use client";

import React, { useState } from 'react';
import styles from './contactSection.module.scss';

export default function ContactSection({ 
  formFields = [], 
  onChange, 
  onSubmit,
  showContactInfo = true,
  contactInfo = {
    title: "Get in Touch!",
    description: "Leave the hassle of payroll, leave management or attendance to us – We help you get it right",
    contactDetails: [
      {
        icon: "email",
        text: "sales@ezii.co.in"
      },
      {
        icon: "phone", 
        text: "+91 8904426424"
      },
      {
        icon: "location",
        text: "535, 12th Cross,5th Main Road,<br />RMV Extension, 2nd Stage, HIG Dollars Colony,<br />Bangalore – 560094"
      }
    ]
  }
}) {
  const [formData, setFormData] = useState(() => {
    const initialData = {};
    formFields.forEach(field => {
      initialData[field.name] = field.value || '';
    });
    return initialData;
  });

  const [charCount, setCharCount] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Update character count for phone fields
    if (name === 'phone' || name.includes('phone')) {
      setCharCount(prev => ({
        ...prev,
        [name]: value.length
      }));
    }

    // Call parent onChange if provided
    if (onChange) {
      onChange(name, value);
    }
  };

  const handleInputBlur = (name, value, isRequired, minLength) => {
    const newErrors = { ...errors };

    // Validate field on blur
    if (isRequired && !value.trim()) {
      newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
    } else if (minLength && value.trim() && value.trim().length < minLength) {
      newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${minLength} characters`;
    } else if (name.includes('email') && value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        newErrors[name] = 'Please enter a valid email address';
        } else {
        delete newErrors[name];
        }
    } else if (name.includes('phone') && value.trim()) {
        const phoneRegex = /^[6-9]\d{9}$/;
      if (!phoneRegex.test(value)) {
        newErrors[name] = 'Please enter a valid 10-digit phone number';
        } else {
        delete newErrors[name];
      }
        } else {
      delete newErrors[name];
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};

    formFields.forEach(field => {
      const { name, isRequired, minLength, type } = field;
      const value = formData[name];

      if (isRequired && !value.trim()) {
        newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} is required`;
      } else if (minLength && value.trim() && value.trim().length < minLength) {
        newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} must be at least ${minLength} characters`;
      } else if (type === 'email' && value.trim()) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          newErrors[name] = 'Please enter a valid email address';
        }
      } else if (type === 'tel' && value.trim()) {
    const phoneRegex = /^[6-9]\d{9}$/;
        if (!phoneRegex.test(value)) {
          newErrors[name] = 'Please enter a valid 10-digit phone number';
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Call parent onSubmit if provided
    if (onSubmit) {
      onSubmit(formData);
    }
    
    // Simulate form submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessMessage(true);
      
      // Reset form data after successful submission
      const resetData = {};
      formFields.forEach(field => {
        resetData[field.name] = field.value || '';
      });
      setFormData(resetData);
      setCharCount({});
      setErrors({});
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }, 2000);
  };

  const renderContactIcon = (iconType) => {
    switch (iconType) {
      case 'email':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="4" fill="#F05A00"/>
            <path d="M5 7L10 12L15 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'phone':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="4" fill="#F05A00"/>
            <path d="M15 13C15 14.1046 14.1046 15 13 15H7C5.89543 15 5 14.1046 5 13V7C5 5.89543 5.89543 5 7 5H13C14.1046 5 15 5.89543 15 7V13Z" stroke="white" strokeWidth="2"/>
            <path d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12Z" stroke="white" strokeWidth="2"/>
          </svg>
        );
      case 'location':
        return (
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="20" height="20" rx="4" fill="#F05A00"/>
            <path d="M10 2C6.68629 2 4 4.68629 4 8C4 12 10 18 10 18C10 18 16 12 16 8C16 4.68629 13.3137 2 10 2Z" stroke="white" strokeWidth="2"/>
            <circle cx="10" cy="8" r="2" stroke="white" strokeWidth="2"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const renderFormField = (field) => {
    const { name, type, placeholder, isRequired, options, minLength } = field;
    const value = formData[name];
    const error = errors[name];

    switch (type) {
      case 'select':
        return (
          <div className={styles.formGroup} key={name}>
            <select
              name={name}
              value={value}
              onChange={(e) => handleInputChange(name, e.target.value)}
              className={styles.formSelect}
              required={isRequired}
            >
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        );

      case 'textarea':
        return (
          <div className={styles.formGroup} key={name}>
            <textarea
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={(e) => handleInputChange(name, e.target.value)}
              onBlur={(e) => handleInputBlur(name, e.target.value, isRequired, minLength)}
              className={`${styles.formTextarea} ${error ? styles.errorInput : ''}`}
              rows="4"
              required={isRequired}
            />
            {error && <div className={styles.errorMessage}>{error}</div>}
          </div>
        );

      default:
        return (
          <div className={styles.formGroup} key={name}>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={(e) => handleInputChange(name, e.target.value)}
              onBlur={(e) => handleInputBlur(name, e.target.value, isRequired, minLength)}
              className={`${styles.formInput} ${error ? styles.errorInput : ''}`}
              maxLength={type === 'tel' ? "10" : undefined}
              required={isRequired}
            />
            {type === 'tel' && (
              <div className={styles.charCount}>
                {(charCount[name] || 0)} of 10 max characters.
              </div>
            )}
            {error && <div className={styles.errorMessage}>{error}</div>}
          </div>
        );
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className={styles.container}>
        <div className={showContactInfo? styles.contactGrid : styles.contactFlex}>
          {/* Left Section - Contact Information */}
          {showContactInfo && (
          <div className={styles.contactInfo}>
              <h2 className={styles.mainHeading}>{contactInfo.title}</h2>
            <p className={styles.description}>
                {contactInfo.description}
            </p>
            
            <div className={styles.contactDetails}>
                {contactInfo.contactDetails.map((contact, index) => (
                  <div className={styles.contactItem} key={index}>
                <div className={styles.contactIcon}>
                      {renderContactIcon(contact.icon)}
                </div>
                    <span 
                      className={styles.contactText}
                      dangerouslySetInnerHTML={{ __html: contact.text }}
                    />
              </div>
                ))}
              </div>
            </div>
          )}

          {/* Right Section - Contact Form */}
          <div className={styles.contactForm}>
            <form onSubmit={handleSubmit}>
              {formFields.map(renderFormField)}

              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
            
            {showSuccessMessage && (
              <div className={styles.successMessage}>
                <div className={styles.successIcon}>✓</div>
                <div className={styles.successText}>
                  Thanks for contacting us! We will be in touch with you shortly.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 