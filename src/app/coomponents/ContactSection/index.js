"use client";

import React, { useState, useEffect } from 'react';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import Button from '../Button';
import styles from './contactSection.module.scss';

export default function ContactSection({
  formFields = [],
  onChange,
  onSubmit,
  isSubmitting: externalIsSubmitting = false,
  submitSuccess = false,
  submitError = '',
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
      // Set default values based on field type
      if (field.name === 'service') {
        initialData[field.name] = field.options && field.options.length > 0 ? field.options[0] : '';
      } else {
        initialData[field.name] = field.value || '';
      }
    });
    return initialData;
  });

  const [charCount, setCharCount] = useState({});
  const [errors, setErrors] = useState({});

  // Update form data when formFields change (e.g., when API loads service options)
  useEffect(() => {
    const updatedData = { ...formData };
    formFields.forEach(field => {
      if (field.name === 'service' && field.options && field.options.length > 0) {
        updatedData[field.name] = field.options[0];
      }
    });
    setFormData(updatedData);
  }, [formFields]);

  // Reset form data when submission is successful
  useEffect(() => {
    if (submitSuccess) {
      const resetData = {};
      formFields.forEach(field => {
        if (field.name === 'service' && field.options && field.options.length > 0) {
          resetData[field.name] = field.options[0];
        } else {
          resetData[field.name] = '';
        }
      });
      setFormData(resetData);
      setErrors({});
      setCharCount({});
    }
  }, [submitSuccess, formFields]);

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

    // Call parent onSubmit if provided
    if (onSubmit) {
      onSubmit(formData);
    }
    // No onSubmit handler provided
  };

  const renderContactIcon = (iconType) => {
    const iconStyle = {
      fontSize: '18px',
      color: '#ffffff'
    };

    switch (iconType) {
      case 'email':
        return <MailOutlined style={iconStyle} />;
      case 'phone':
        return <PhoneOutlined style={iconStyle} />;
      case 'location':
        return <EnvironmentOutlined style={iconStyle} />;
      default:
        return null;
    }
  };

  const renderFormField = (field) => {
    const { name, type, placeholder, isRequired, options, minLength, label } = field;
    const value = formData[name];
    const error = errors[name];
    const isDescriptionField = name === 'description' || name === 'brief' || name === 'message';

    const renderLabel = () => {
      if (!label) return null;
      return (
        <label className={styles.formLabel}>
          {label}
          {isRequired && <span className={styles.requiredAsterisk}> *</span>}
        </label>
      );
    };

    switch (type) {
      case 'select':
        return (
          <div key={name} className={isDescriptionField ? styles.fullWidth : ''}>
            {renderLabel()}
            <select
              name={name}
              value={value}
              onChange={(e) => handleInputChange(name, e.target.value)}
              className={`${styles.formSelect} ${isDescriptionField ? styles.fullWidth : ''}`}
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
          <div key={name} className={isDescriptionField ? styles.fullWidth : ''}>
            {renderLabel()}
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
          </div>
        );

      default:
        return (
          <div key={name} className={isDescriptionField ? styles.fullWidth : ''}>
            {renderLabel()}
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
          </div>
        );
    }
  };

  return (
    <section id="contact" className={`${styles.contactSection} ${showContactInfo ? styles.contactGrid : styles.contactFlex}`}>
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

          <div className={styles.buttonContainer}>
            <Button
              type="submit"
              variant="black"
              size="compact"
              disabled={externalIsSubmitting}
            >
              {externalIsSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          </div>
          {submitSuccess && (
            <div className={`${styles.submitStatus} ${styles.submitSuccess}`}>
              Thank you! Your message has been submitted successfully.
            </div>
          )}
          {submitError && (
            <div className={`${styles.submitStatus} ${styles.submitError}`}>
              {submitError}
            </div>
          )}
        </form>
      </div>
    </section>
  );
} 