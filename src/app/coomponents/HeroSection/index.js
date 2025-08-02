import React from 'react';
import styles from './heroSection.module.scss';
import Image from 'next/image';
import ScrollableFeaturesSection from '../ScrollableFeaturesSection';
import PricingSection from '../PricingSection';
import PartnerSection from '../PartnerSection';
import TestimonialsSection from '../TestimonialsSection';
import ContactForm from '../ContactForm';
import FAQSection from '../FAQSection';
import Footer from '../Footer';
// import {BlogPost} from '../articles/test';
const clientLogos = [
  'client-2.webp',
  'client-3.webp',
  'client-4.webp',
  'client-5.webp',
  'client-6.webp',
  'client-7.webp',
  'client-8.webp',
  'client-9.webp',
  'client-10.webp',
  'client-11.webp',
  'client-12.webp',
  'client-13.webp',
  'client-14.webp',
];

const firstRowLogos = clientLogos.slice(0, 6);
const secondRowLogos = clientLogos.slice(6);

export default function HeroSection() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1>Payroll, Simplified</h1>
            <h2 style={{ color: '#F05A00', marginBottom: '2rem' }}>The EZII Way</h2>
            <p className={styles.description}>
              Backed by 20+ years of experience, EZII helps you get it right—payroll, leave management, or attendance—without hassle.
            </p>
            <a href="https://ezii.co.in/onboarding/" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={{
                background: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '2.5rem',
                padding: '1rem 2rem',
                fontSize: '1.1rem',
                fontWeight: 600,
                cursor: 'pointer',
                marginTop: '2rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                Get Started <span style={{ fontSize: '1.1rem', marginLeft: '0.5rem' }}>&rarr;</span>
              </button>
            </a>
          </div>
          <div className={styles.visual} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src="/assets/banner-ezii.webp"
              alt="EZII Payroll Banner"
              width={1035}
              height={695}
              style={{ borderRadius: '1.5rem', maxWidth: '100%', height: 'auto' }}
              priority
            />
          </div>
        </div>
      </section>
      <div className={styles.clientMarqueeWrapper}>
        <div className={`${styles.clientMarquee} ${styles.leftToRight} ${styles.slow}`}>
          {[...firstRowLogos, ...firstRowLogos].map((logo, idx) => (
            <div className={styles.clientLogo} key={`ltr-${idx}`}>
              <Image src={`/assets/clients/${logo}`} alt={`Client ${logo}`} width={120} height={60} />
            </div>
          ))}
        </div>
        <div className={`${styles.clientMarquee} ${styles.rightToLeft} ${styles.slow}`}>
          {[...secondRowLogos, ...secondRowLogos].map((logo, idx) => (
            <div className={styles.clientLogo} key={`rtl-${idx}`}>
              <Image src={`/assets/clients/${logo}`} alt={`Client ${logo}`} width={120} height={60} />
            </div>
          ))}
        </div>
      </div>
      {/* New Section: Business Owners & HR/Finance */}
      <section className={styles.dualCardSection}>
        <h2 className={styles.dualCardHeading}>
          Payroll can be challenging & complex, but it<br />doesn't have to be.
        </h2>
        <div className={styles.dualCardGrid}>
          <div className={styles.dualCard}>
            <div className={styles.dualCardContent}>
              <span className={styles.dualCardFor}>For</span>
              <h3 className={styles.dualCardTitle}>Business Owners</h3>
              <div className={styles.dualCardUnderline}></div>
              <p className={styles.dualCardDesc}>
                Reduce payroll errors and compliance risks, gain control and real-time insights into your workforce costs, drive growth, the future of payroll is here.
              </p>
              <a className={styles.dualCardLink} href="https://ezii.co.in/onboarding/">
                Get started <span className={styles.dualCardArrow}>&rarr;</span>
              </a>
            </div>
            <div className={styles.dualCardIcon}>
              <Image src="/assets/business-owners-1.webp" alt="Business Owners" width={80} height={80} />
            </div>
          </div>
          <div className={styles.dualCard}>
            <div className={styles.dualCardContent}>
              <span className={styles.dualCardFor}>For</span>
              <h3 className={styles.dualCardTitle}>HR/Finance</h3>
              <div className={styles.dualCardUnderline}></div>
              <p className={styles.dualCardDesc}>
                Free your team from payroll tasks. Focus on strategic HR initiatives. Improve employee engagement. Drive better people outcomes.
              </p>
              <a className={styles.dualCardLink} href="https://ezii.co.in/onboarding/">
                Get started <span className={styles.dualCardArrow}>&rarr;</span>
              </a>
            </div>
            <div className={styles.dualCardIcon}>
              <Image src="/assets/business-owners-1.webp" alt="HR/Finance" width={80} height={80} />
            </div>
          </div>
        </div>
      </section>
      
      {/* New Section: EZII Payroll Complexity Meets Simplicity */}
      <section className={styles.complexitySection}>
        <div className={styles.complexityContainer}>
          <div className={styles.complexityContent}>
            <div className={styles.gearIcons}>
              <Image
                src="/assets/feat_robust_control.webp"
                alt="Robust Control Feature"
                width={80}
                height={60}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </div>
            <h5 className={styles.complexityHeading}>
              EZII Payroll: Where Complexity Meets Simplicity
            </h5>
            <p className={styles.complexityDescription}>
              EZII Payroll empowers you to effortlessly configure your unique payroll landscape. From intricate organizational structures and diverse employee types to complex pay rules and intricate compliance regulations, EZII provides the flexibility to tailor the system to your exact needs.
            </p>
          </div>
          <div className={styles.complexityVisual}>
            <Image
              src="/assets/browser_2x-3-768x576.webp"
              alt="EZII Payroll Interface"
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
      
      {/* New Section: EZII Payroll Features with Scrollable Content */}
      <ScrollableFeaturesSection />
      
      {/* New Section: Pricing Section */}
       
      <PricingSection  showHeading={true}/>
      
      {/* New Section: Partner Section */}
      <PartnerSection />
      
      {/* New Section: Testimonials Section */}
      <TestimonialsSection />
      
      {/* New Section: Contact Section */}
      <ContactForm />
      
      {/* New Section: FAQ Section */}
      <FAQSection />
      
      {/* Footer */}
      <Footer />
      {/* <BlogPost /> */}

      
    </>
  );
}
