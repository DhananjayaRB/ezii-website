import React from 'react';
import styles from './heroSection.module.scss';
import Image from 'next/image';
import Button from '../Button';
import { TeamOutlined, BarChartOutlined } from '@ant-design/icons';
import ScrollableFeaturesSection from '../ScrollableFeaturesSection';
import PricingSection from '../PricingSection';
import PartnerSection from '../PartnerSection';
import TestimonialsSection from '../TestimonialsSection';
import ContactForm from '../ContactForm';
import FAQSection from '../FAQSection';
import Footer from '../Footer';
import ClientMarquee from '../ClientMarquee';
import { clientLogos } from '@/app/constants';

export default function HeroSection() {
  return (
    <>
      {/* Hero Section with enhanced SEO */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div>
          <div className={styles.content}>
            <h1 id="hero-title">Payroll, Simplified</h1>
            <h2 style={{ color: '#F05A00', marginBottom: '1.5rem' }}>The EZII Way</h2>
            <p className={styles.description}>
              Backed by 20+ years of experience, EZII helps you get it right—payroll, leave management, or attendance—without hassle.
            </p>
            <div style={{ marginTop: '1.5rem' }}>
              <Button
                href="/onboarding"
                variant="brand"
                size="medium"
                icon="→"
                iconPosition="right"
                aria-label="Get Started with EZII Payroll"
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className={styles.visual} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/assets/banner-ezii.webp"
              alt="EZII Payroll Management Software Interface - Simplified Payroll Solutions"
              width={1035}
              height={695}
              style={{ borderRadius: '1.5rem', maxWidth: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
        <div className={styles.heroClientMarquee} aria-label="Trusted by leading companies">
          <div className={`${styles.clientMarquee} ${styles.leftToRight} ${styles.slow}`}>
            {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, idx) => (
              <div className={styles.clientLogo} key={`ltr-${idx}`}>
                <Image
                  src={`/assets/clients/${logo}`}
                  alt={`${logo.replace('.webp', '').replace('.png', '').replace('.jpg', '')} - EZII Client`}
                  width={120}
                  height={60}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Owners & HR/Finance Section with enhanced SEO */}
      <section className={styles.dualCardSection} aria-labelledby="dual-card-heading">
        <h2 id="dual-card-heading" className={styles.dualCardHeading}>
          Payroll can be challenging and complex, but it<br />doesn't have to be.
        </h2>
        <div className={styles.dualCardGrid}>
          <article className={styles.dualCard}>
            <div className={styles.dualCardContent}>
              <div className={styles.dualCardHeader}>
                <div>
                  <span className={styles.dualCardFor}>For</span>
                  <h3 className={styles.dualCardTitle}>Business Owners</h3>
                  <div className={styles.dualCardUnderline}></div>
                </div>
                <div className={styles.dualCardIcon} aria-hidden="true">
                  <BarChartOutlined style={{ fontSize: '45px', color: '#667eea' }} />
                </div>
              </div>
              <div className={styles.dualCardBody}>
                <p className={styles.dualCardDesc}>
                  Reduce payroll errors and compliance risks, gain control and real-time insights into your workforce costs, drive growth, the future of payroll is here.
                </p>
                <Button
                  href="/onboarding"
                  variant="black"
                  size="medium"
                  icon="→"
                  iconPosition="right"
                  className={styles.dualCardLink}
                  aria-label="Get Started for Business Owners"
                >
                  Get started
                </Button>
              </div>
            </div>
          </article>
          <article className={styles.dualCard}>
            <div className={styles.dualCardContent}>
              <div className={styles.dualCardHeader}>
                <div>
                  <span className={styles.dualCardFor}>For</span>
                  <h3 className={styles.dualCardTitle}>HR/Finance</h3>
                  <div className={styles.dualCardUnderline}></div>
                </div>
                <div className={styles.dualCardIcon} aria-hidden="true">
                  <TeamOutlined style={{ fontSize: '45px', color: '#667eea' }} />
                </div>
              </div>
              <div className={styles.dualCardBody}>
                <p className={styles.dualCardDesc}>
                  Free your team from payroll tasks. Focus on strategic HR initiatives. Improve employee engagement. Drive better people outcomes.
                </p>
                <Button
                  href="/onboarding"
                  variant="black"
                  size="medium"
                  icon="→"
                  iconPosition="right"
                  className={styles.dualCardLink}
                  aria-label="Get Started for HR and Finance Teams"
                >
                  Get started
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* EZII Payroll Complexity Meets Simplicity Section with enhanced SEO */}
      <section className={styles.complexitySection} aria-labelledby="complexity-heading">
        <div className={styles.complexityContainer}>
          <div className={styles.complexityContent}>
            <div className={styles.gearIcons} aria-hidden="true">
              <Image
                src="/assets/feat_robust_control.webp"
                alt="Robust Control Feature Icon - EZII Payroll Management"
                width={80}
                height={60}
                style={{ maxWidth: '100%', height: 'auto', filter: 'hue-rotate(240deg) saturate(120%) brightness(100%)' }}
              />
            </div>
            <h3 id="complexity-heading" className={styles.complexityHeading}>
              EZII Payroll: Where Complexity Meets Simplicity
            </h3>
            <p className={styles.complexityDescription}>
              EZII Payroll empowers you to effortlessly configure your unique payroll landscape. From intricate organizational structures and diverse employee types to complex pay rules and intricate compliance regulations, EZII provides the flexibility to tailor the system to your exact needs.
            </p>
          </div>
          <div className={styles.complexityVisual}>
            <Image
              src="/assets/browser_2x-3-768x576.webp"
              alt="EZII Payroll Software Interface - User-friendly Payroll Management Dashboard"
              width={768}
              height={576}
              style={{
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '0.5rem'
              }}
            />
          </div>
        </div>
      </section>

      {/* EZII Payroll Features with Scrollable Content */}
      <ScrollableFeaturesSection />

      {/* Pricing Section */}
      <PricingSection showHeading={true} />

      {/* Client Marquee */}
      <ClientMarquee />

      {/* Partner Section */}
      <PartnerSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Contact Section */}
      <ContactForm />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />
      {/* <BlogPost /> */}
    </>
  );
}
