"use client";

import React from 'react';
import Image from 'next/image';
import styles from './testimonialsSection.module.scss';

const testimonialsData = [
  {
    id: 1,
    name: "Priya Bhat",
    designation: "HR Manager of a Services Company",
    testimonial: "EZII Payroll has been a game-changer for our HR department. We have significantly reduced the time spent on administrative tasks, allowing us to focus on more strategic initiatives like employee engagement and development."
  },
  {
    id: 2,
    name: "Ruchi Arora",
    designation: "Employee of a MNC",
    testimonial: "The flexibility of EZII's Flexi Benefit module is a game-changer. I can easily adjust my selections based on my changing needs throughout the year, ensuring that I'm always making the most of my benefits."
  },
  {
    id: 3,
    name: "Arvind",
    designation: "Manager of a Embedded Software Company",
    testimonial: "EZII has made tax planning a breeze. The intuitive declaration process and the ability to modify my declarations throughout the year give me peace of mind. I can easily submit the necessary proofs and feel confident that I'm optimizing my tax benefits within my pay package."
  }
];

export default function TestimonialsSection() {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.mainHeading}>What our clients say</h2>
        <div className={styles.testimonialsGrid}>
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <h3 className={styles.clientName}>
                <Image
                  src="/assets/double-quotes.svg"
                  alt="Quote mark"
                  width={40}
                  height={40}
                  className={styles.quoteMark}
                />
                {testimonial.name}
              </h3>
              <p className={styles.clientDesignation}>{testimonial.designation}</p>
              <p className={styles.testimonialText}>{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 