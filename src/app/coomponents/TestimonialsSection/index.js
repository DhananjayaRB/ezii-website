"use client";

import React from 'react';
import Image from 'next/image';
import styles from './testimonialsSection.module.scss';
import { testimonialsData } from '@/app/constants';

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