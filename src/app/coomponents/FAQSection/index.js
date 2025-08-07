"use client";

import React, { useState } from 'react';
import styles from './faqSection.module.scss';
import { faqData } from '@/app/constants';

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>Frequently Asked Questions</h2>
        <div className={styles.faqGrid}>
          {faqData.map((faq) => (
            <div key={faq.id} className={styles.faqItem}>
              <button
                className={`${styles.faqQuestion} ${openFAQ === faq.id ? styles.active : ''}`}
                onClick={() => toggleFAQ(faq.id)}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <span className={styles.arrow}>
                  {openFAQ === faq.id ? '−' : '+'}
                </span>
              </button>
              <div className={`${styles.faqAnswer} ${openFAQ === faq.id ? styles.open : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 