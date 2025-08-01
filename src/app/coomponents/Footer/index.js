"use client";

import React from 'react';
import Image from 'next/image';
import styles from './footer.module.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* Company Info Section */}
          <div className={styles.footerSection}>
            <div className={styles.logoSection}>
              <div className={styles.logoContainer}>
                <Image
                  src="/assets/footer_logo.webp"
                  alt="EZII Logo"
                  width={120}
                  height={120}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p className={styles.companyTagline}>
                Payroll, Simplified. The EZII Way.
              </p>
            </div>
            <p className={styles.companyDescription}>
              Backed by 20+ years of experience, EZII helps you get it right—payroll, leave management, or attendance—without hassle.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.linkedin.com/company/resolve-business-services/" className={styles.socialLink} aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/resolvebusiness" className={styles.socialLink} aria-label="X (Twitter)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/resolvebusiness/" className={styles.socialLink} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCZeqVFLO720i1Z2EWHXLM4g" className={styles.socialLink} aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Products</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/features" className={styles.footerLink}>Payroll Management</a></li>
              <li><a href="/features" className={styles.footerLink}>Leave Management</a></li>
              <li><a href="/features" className={styles.footerLink}>Attendance Management</a></li>
              <li><a href="/features" className={styles.footerLink}>HR Management</a></li>
              <li><a href="/features" className={styles.footerLink}>Custom Solutions</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Company</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/" className={styles.footerLink}>About Us</a></li>
              <li><a href="https://www.resolveindia.com/career/" className={styles.footerLink}>Careers</a></li>
              <li><a href="/partners" className={styles.footerLink}>Partners</a></li>
                              <li><a href="/#contact" className={styles.footerLink}>Contact</a></li>
              <li><a href="/resources" className={styles.footerLink}>Blog</a></li>
              <li><a href="/#faq" className={styles.footerLink}>FAQ</a></li>
            </ul>
          </div>

          {/* Support Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Support</h4>
            <ul className={styles.footerLinks}>
              <li><a href="/resources" className={styles.footerLink}>Help Center</a></li>
              <li><a href="/resources" className={styles.footerLink}>Documentation</a></li>
              <li><a href="/resources" className={styles.footerLink}>API Reference</a></li>
              <li><a href="/resources" className={styles.footerLink}>Status</a></li>
              <li><a href="/contact" className={styles.footerLink}>Contact Support</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className={styles.footerSection}>
            <h4 className={styles.sectionTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Email:</span>
                <a href="mailto:sales@ezii.co.in" className={styles.contactLink}>sales@ezii.co.in</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Phone:</span>
                <a href="tel:+918904426424" className={styles.contactLink}>+91 8904426424</a>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactLabel}>Address:</span>
                <span className={styles.contactText}>
                  535, 12th Cross, 5th Main Road,<br />
                  RMV Extension, 2nd Stage,<br />
                  HIG Dollars Colony, Bangalore – 560094
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.footerBottom}>
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>
              © {currentYear} EZII. All rights reserved.
            </p>
            <div className={styles.legalLinks}>
              <a href="/privacy-policy" className={styles.legalLink}>Privacy Policy</a>
              <a href="/terms-conditions" className={styles.legalLink}>Terms & Conditions</a>
              <a href="/refunds-cancellations" className={styles.legalLink}>Refunds & Cancellations</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 