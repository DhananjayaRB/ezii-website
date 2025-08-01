"use client";

import React, { useState } from 'react';
import styles from './faqSection.module.scss';

const faqData = [
  {
    id: 1,
    question: "What payroll compliances does EZII offer, and why are they important?",
    answer: "Payroll compliance involves adhering to all central and state regulations concerning employee compensation, tax withholdings, benefits, and deductions. Ensuring compliance is crucial to avoid potential legal penalties, financial losses, and reputational risks. EZII offers end-to-end payroll processing, compliance management, and tax calculations. Additionally, we provide access to attendance and leave tracking (coming soon) as part of an integrated HRMS solution, designed to streamline and ensure accurate compliance across payroll functions."
  },
  {
    id: 2,
    question: "How quickly can EZII Payroll software be implemented?",
    answer: "Our payroll software is designed for quick implementation, often faster than many competitors. The onboarding process is streamlined, and our team supports client setup and migration within just 3–5 days."
  },
  {
    id: 3,
    question: "What are the compliance features included in the EZII payroll solution?",
    answer: "Our payroll solution includes automated tax calculations, statutory deductions, Flexible Benefits Plan (FBP) declarations, savings declarations, and reporting to ensure compliance with local laws. The system also provides alerts and updates on regulatory changes to help your business stay compliant."
  },
  {
    id: 4,
    question: "Does the EZII payroll system handle multi-state payroll?",
    answer: "Yes, our platform is designed to handle multi-state payroll, allowing you to process payroll and ensure compliance for employees located in different states."
  },
  {
    id: 5,
    question: "Can EZII Payroll integrate with my existing HRMS or ERP systems?",
    answer: "EZII Payroll offers flexible integration options and can work seamlessly with most HRMS and ERP systems. Our team can assist in setting up integrations based on your organization's specific requirements."
  },
  {
    id: 6,
    question: "What support options are available with EZII payroll?",
    answer: "We offer comprehensive support, including customer assistance during implementation and ongoing support. Our team is available for technical support, compliance updates, and user training."
  },
  {
    id: 7,
    question: "What reports are available in EZII Payroll?",
    answer: "EZII Payroll offers customizable reporting options, including payroll summaries, tax reports, compliance reports, and employee earnings statements. These reports can be tailored to meet your organization's reporting needs."
  },
  {
    id: 8,
    question: "What makes EZII Payroll unique?",
    answer: "EZII offers a customizable solution that adapts to your organization's needs, whether you choose our outsourced service or SaaS platform. Our system is designed to streamline payroll, enhance compliance, and minimize manual work, backed by 25 years of experience in the field."
  },
  {
    id: 9,
    question: "Is there a grace period for payment? What happens to my data after my subscription has ended?",
    answer: "There is no grace period for non-payment, and we do not offer auto-renewal. The features within the application will automatically disable once the expiry date is reached, and you will only have access to reports. Currently, report access is perpetual but may change in the future."
  },
  {
    id: 10,
    question: "How would changes in employee headcount affect my subscription and how would this be managed?",
    answer: "Once the payment is made, no refund is provided in the case of a reduction in headcount. However, during your subscription renewal, you can reduce your headcount, but not midway through your billing cycle. Increasing headcount is simple via the subscription management module, with charges based on the number of months remaining in your billing cycle. For example, if you've paid for 30 employees for the period April 1st – June 30th and add 5 employees on May 15th, you will only be charged for the additional 5 employees in June, though they will have access starting May 15th."
  }
];

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