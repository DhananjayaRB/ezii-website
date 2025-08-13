import Navbar from '@/app/coomponents/Navbar';
import Footer from '@/app/coomponents/Footer';
import Button from '@/app/coomponents/Button';
import styles from './partners.module.scss';
import HeaderWithImage from '@/app/coomponents/HeaderWithImage';
import Image from 'next/image';

// Page-specific metadata for SEO
export const metadata = {
  title: 'Partner with EZII - Join Our Partner Program',
  description: 'Join EZII\'s partner program and grow your business with our comprehensive payroll and HR solutions. Choose from Service Partner, Sales Partner, Technology Partner, or Referral Partner programs.',
  keywords: 'EZII partner program, payroll software partners, HR software partners, business partnership, technology partners, referral partners, sales partners, service partners',
  openGraph: {
    title: 'Partner with EZII - Join Our Partner Program',
    description: 'Join EZII\'s partner program and grow your business with our comprehensive payroll and HR solutions.',
    url: 'https://ezii-website.vercel.app/partners',
    type: 'website',
    images: [
      {
        url: 'https://ezii-website.vercel.app/assets/patners/partner_banner.webp',
        width: 1200,
        height: 630,
        alt: 'EZII Partner Program - Join our comprehensive partner program',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner with EZII - Join Our Partner Program',
    description: 'Join EZII\'s partner program and grow your business with our comprehensive payroll and HR solutions.',
  },
};

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "EZII Partner Program",
  "description": "Join EZII's partner program to grow your business with our comprehensive payroll and HR solutions. Choose from Service Partner, Sales Partner, Technology Partner, or Referral Partner programs.",
  "url": "https://ezii-website.vercel.app/partners",
  "mainEntity": {
    "@type": "Organization",
    "name": "EZII",
    "description": "Leading provider of payroll and HR software solutions",
    "url": "https://ezii-website.vercel.app",
    "sameAs": [
      "https://www.linkedin.com/company/ezii",
      "https://twitter.com/ezii"
    ]
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ezii-website.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Partners",
        "item": "https://ezii-website.vercel.app/partners"
      }
    ]
  }
};

export default function PartnersPage() {
  return (
    <>
      <Navbar />
      <div className={styles.backgroundImage}></div>
      <main className={styles.main} role="main">
        <section className={styles.content} aria-labelledby="partner-hero-title">
          <HeaderWithImage
            imageSrc="/assets/patners/partner_banner.webp"
            imageAlt="EZII Partner Program Banner - Join our comprehensive partner program"
            title="Partner with us"
            description="Grow together with EZII and empower your business with our partner program"
            applyPurpleHue
          />
        </section>

        {/* Partner Cards Section */}
        <section className={styles.partnerCardsSection} aria-labelledby="partner-stats-title">
          <div className={styles.partnerCardsContainer}>
            <h2 id="partner-stats-title" className="sr-only">Partner Program Statistics</h2>
            <div className={styles.partnerCardsGrid} role="list">
              {/* Left Card - Large Quantitative */}
              <article className={styles.partnerCard} role="listitem">
                <div className={styles.cardContent}>
                  <div className={styles.cardNumber} aria-label="Over 200">200+</div>
                  <div className={styles.cardLabel}>Connected Partners</div>
                </div>
              </article>

              {/* Middle Card - Feature Description */}
              <article className={styles.partnerCard} role="listitem">
                <div className={`${styles.cardContent} ${styles.middleCard}`}>
                  <div className={styles.middleCardLayout}>
                    <div className={`${styles.cardIcon} ${styles.middleCardIcon}`}>
                      <Image
                        src="/assets/patners/feat_sub-contractor-payroll.webp"
                        alt="Lead tracking and commission management icon"
                        width={80}
                        height={80}
                        loading="lazy"
                        placeholder="blur"
                        style={{
                          filter: 'hue-rotate(240deg) saturate(120%) brightness(100%)'
                        }}
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                      />
                    </div>
                    <div className={`${styles.cardText} ${styles.middleCardText}`}>
                      <h3 className={styles.cardTitle}>Track leads and commissions</h3>
                      <p className={styles.cardDescription}>Increased revenue through scalable partnerships</p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Right Section - Two Smaller Cards */}
              <div className={styles.rightCardsSection} role="list">
                <article className={styles.smallCard} role="listitem">
                  <div className={styles.profileImage}>
                    <Image
                      src="/assets/patners/testimonial-1.jpeg"
                      alt="White-label partnership model illustration"
                      width={120}
                      height={120}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className={styles.smallCardText}>white-label model</div>
                </article>

                <article className={styles.smallCard} role="listitem">
                  <div className={styles.profileImage}>
                    <Image
                      src="/assets/patners/testimonial-2.jpeg"
                      alt="Attractive commission structure illustration"
                      width={120}
                      height={120}
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                  <div className={styles.smallCardText}>Attractive commission structure</div>
                </article>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner Section */}
        <section className={styles.whyPartnerSection} aria-labelledby="why-partner-title">
          <div className={styles.whyPartnerContainer}>
            <div className={styles.whyPartnerContent}>
              <header className={styles.whyPartnerHeading}>
                <h2 id="why-partner-title" className={styles.whyPartnerTitle}>
                  Why<br />Partner<br />with EZII?
                </h2>
              </header>

              <ul className={styles.whyPartnerList} role="list">
                <li className={styles.whyPartnerItem} role="listitem">
                  <div className={styles.whyPartnerIcon} aria-hidden="true">
                    <div className={styles.iconCircle}></div>
                  </div>
                  <div className={styles.whyPartnerText}>
                    <h3 className={styles.whyPartnerItemTitle}>Build expertise with industry-leading solutions</h3>
                    <p className={styles.whyPartnerItemDescription}>Access cutting-edge payroll and HR technology to enhance your service offerings</p>
                  </div>
                </li>

                <li className={styles.whyPartnerItem} role="listitem">
                  <div className={styles.whyPartnerIcon} aria-hidden="true">
                    <div className={styles.iconCircle}></div>
                  </div>
                  <div className={styles.whyPartnerText}>
                    <h3 className={styles.whyPartnerItemTitle}>Dedicated account managers and technical support</h3>
                    <p className={styles.whyPartnerItemDescription}>Get personalized assistance and expert guidance throughout your partnership</p>
                  </div>
                </li>

                <li className={styles.whyPartnerItem} role="listitem">
                  <div className={styles.whyPartnerIcon} aria-hidden="true">
                    <div className={styles.iconCircle}></div>
                  </div>
                  <div className={styles.whyPartnerText}>
                    <h3 className={styles.whyPartnerItemTitle}>Increased revenue through scalable partnerships</h3>
                    <p className={styles.whyPartnerItemDescription}>Grow your business with our proven partner program and comprehensive support</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Partner Benefits Section */}
        <section className={styles.partnerBenefitsSection} aria-labelledby="service-partner-title">
          <div className={styles.partnerBenefitsContainer}>
            <div className={styles.partnerBenefitsContent}>
              <div className={styles.partnerBenefitsImage}>
                <img
                  src="/assets/patners/partnertech.webp"
                  alt="Service Partner benefits - White-label payroll and HR solutions"
                  loading="lazy"
                />
                <div className={styles.servicePartnerOverlay} role="complementary" aria-label="Service Partner Benefit">
                  <img
                    src="/assets/patners/emp-benefit-1.webp"
                    alt="Brand autonomy icon"
                    loading="lazy"
                  />
                  <p>Operate with full brand autonomy</p>
                </div>
                <div className={styles.servicePartnerOverlay2} role="complementary" aria-label="Service Partner Benefit">
                  <img
                    src="/assets/patners/employee-benefit.webp"
                    alt="Scalable platform icon"
                    loading="lazy"
                  />
                  <p>Provide premium services on a robust, scalable platform</p>
                </div>
              </div>

              <div className={styles.partnerBenefitsText}>
                <h2 id="service-partner-title" className={styles.partnerBenefitsTitle}>Service Partner</h2>
                <h3 className={styles.partnerBenefitsSubtitle}>Empower Your Business with Your Brand</h3>
                <p className={styles.partnerBenefitsDescription}>
                  As a Service Partner, you license EZII's software under a white-label model, enabling you to offer payroll and HR solutions with your branding. Tailor our platform to suit your business needs and deliver exceptional services to your clients without building software from scratch.
                </p>

                <div className={styles.idealForBox}>
                  <h3 className={styles.idealForTitle}>Ideal For:</h3>
                  <p className={styles.idealForDescription}>Authorized resellers, dealers of enterprise software, or distributors of technology solutions.</p>
                </div>

                <div className={styles.partnerBenefitsButton}>
                  <Button
                    variant="gradient"
                    href="/becomepartner"
                    aria-label="Become a Service Partner"
                  >
                    Become a Partner
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sales Partner Section */}
        <section className={styles.salesPartnerSection} aria-labelledby="sales-partner-title">
          <div className={styles.salesPartnerContainer}>
            <div className={styles.salesPartnerContent}>
              <div className={styles.salesPartnerText}>
                <h2 id="sales-partner-title" className={styles.salesPartnerTitle}>Sales Partner</h2>
                <h3 className={styles.salesPartnerSubtitle}>Expand Your Portfolio and Boost Revenue</h3>
                <p className={styles.salesPartnerDescription}>
                  Become a Sales Partner and resell EZII software to your network. Leverage your existing market presence to add EZII to your offerings, whether you specialize in Tally, Microsoft, Google Workspace, or biometric solutions.
                </p>

                <div className={styles.idealForBox}>
                  <h3 className={styles.idealForTitle}>Ideal For:</h3>
                  <p className={styles.idealForDescription}>Authorized resellers, dealers of enterprise software, or distributors of technology solutions.</p>
                </div>

                <div className={styles.salesPartnerButton}>
                  <Button
                    variant="gradient"
                    href="/becomepartner"
                    aria-label="Become a Sales Partner"
                  >
                    Become a Partner
                  </Button>
                </div>
              </div>

              <div className={styles.salesPartnerImage}>
                <img
                  src="/assets/patners/business-partnership.jpeg"
                  alt="Sales Partner benefits - Resell EZII software to your network"
                  loading="lazy"
                />
                <div className={styles.salesPartnerOverlay} role="complementary" aria-label="Sales Partner Benefit">
                  <img
                    src="/assets/patners/emp-benefit-1.webp"
                    alt="Commission structure icon"
                    loading="lazy"
                  />
                  <p>Attractive commission structure</p>
                </div>
                <div className={styles.salesPartnerOverlay2} role="complementary" aria-label="Sales Partner Benefit">
                  <img
                    src="/assets/patners/employee-benefit.webp"
                    alt="Premium services icon"
                    loading="lazy"
                  />
                  <p>Provide premium services on a robust, scalable platform</p>
                </div>
                <div className={styles.salesPartnerOverlay3} role="complementary" aria-label="Sales Partner Benefit">
                  <img
                    src="/assets/patners/employee-benefit.webp"
                    alt="Dedicated support icon"
                    loading="lazy"
                  />
                  <p>Dedicated support to help you close deals</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Partner Section */}
        <section className={styles.technologyPartnerSection} aria-labelledby="technology-partner-title">
          <div className={styles.technologyPartnerContainer}>
            <div className={styles.technologyPartnerContent}>
              <div className={styles.technologyPartnerImage}>
                <img
                  src="/assets/patners/inttech.webp"
                  alt="Technology Partner benefits - Create powerful integrations with EZII"
                  loading="lazy"
                />
                <div className={styles.technologyPartnerOverlay} role="complementary" aria-label="Technology Partner Benefit">
                  <img
                    src="/assets/patners/emp-benefit-1.webp"
                    alt="API integration icon"
                    loading="lazy"
                  />
                  <p>Access to EZII's APIs for smooth integration</p>
                </div>
                <div className={styles.technologyPartnerOverlay2} role="complementary" aria-label="Technology Partner Benefit">
                  <img
                    src="/assets/patners/employee-benefit.webp"
                    alt="Co-branding icon"
                    loading="lazy"
                  />
                  <p>Co-branding opportunities for greater visibility</p>
                </div>
                <div className={styles.technologyPartnerOverlay3} role="complementary" aria-label="Technology Partner Benefit">
                  <img
                    src="/assets/patners/employee-benefit.webp"
                    alt="Customer acquisition icon"
                    loading="lazy"
                  />
                  <p>Joint customer acquisition and market penetration</p>
                </div>
              </div>

              <div className={styles.technologyPartnerText}>
                <h2 id="technology-partner-title" className={styles.technologyPartnerTitle}>Technology Partner</h2>
                <h3 className={styles.technologyPartnerSubtitle}>Seamlessly Integrate and Innovate Together</h3>
                <p className={styles.technologyPartnerDescription}>
                  Partner with EZII as a Technology Partner to create powerful integrations that enhance the user experience. From cloud hosting and KYC verification to payments and messaging, our collaborative approach ensures mutual growth and improved client solutions.
                </p>

                <div className={styles.idealForBox}>
                  <h3 className={styles.idealForTitle}>Ideal For:</h3>
                  <p className={styles.idealForDescription}>Technology and Service Providers.</p>
                </div>

                <div className={styles.technologyPartnerButton}>
                  <Button
                    variant="gradient"
                    href="/becomepartner"
                    aria-label="Become a Technology Partner"
                  >
                    Become a Partner
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Partner Section */}
        <section className={styles.referralPartnerSection} aria-labelledby="referral-partner-title">
          <div className={styles.referralPartnerContainer}>
            <div className={styles.referralPartnerContent}>
              <div className={styles.referralPartnerText}>
                <h2 id="referral-partner-title" className={styles.referralPartnerTitle}>Referral Partner</h2>
                <h3 className={styles.referralPartnerSubtitle}>Share and Earn with Ease</h3>
                <p className={styles.referralPartnerDescription}>
                  As a Referral Partner, you can recommend EZII to businesses in your network and earn commissions for every successful conversion. This model is ideal for those who want to monetize their connections without operational involvement.
                </p>

                <div className={styles.idealForBox}>
                  <h3 className={styles.idealForTitle}>Ideal For:</h3>
                  <p className={styles.idealForDescription}>Consultants, business advisors, or individuals with a strong professional network.</p>
                </div>

                <div className={styles.referralPartnerButton}>
                  <Button
                    variant="gradient"
                    href="/becomepartner"
                    aria-label="Become a Referral Partner"
                  >
                    Become a Partner
                  </Button>
                </div>
              </div>

              <div className={styles.referralPartnerImage}>
                <img
                  src="/assets/patners/refre.webp"
                  alt="Referral Partner benefits - Recommend EZII and earn commissions"
                  loading="lazy"
                />
                <div className={styles.referralPartnerOverlay} role="complementary" aria-label="Referral Partner Benefit">
                  <img
                    src="/assets/patners/emp-benefit-1.webp"
                    alt="Commission earnings icon"
                    loading="lazy"
                  />
                  <p>Earn commissions for successful referrals</p>
                </div>
                <div className={styles.referralPartnerOverlay2} role="complementary" aria-label="Referral Partner Benefit">
                  <img
                    src="/assets/patners/employee-benefit.webp"
                    alt="No operational involvement icon"
                    loading="lazy"
                  />
                  <p>No operational involvement required</p>
                </div>
                <div className={styles.referralPartnerOverlay3} role="complementary" aria-label="Referral Partner Benefit">
                  <img
                    src="/assets/patners/employee-benefit.webp"
                    alt="Network monetization icon"
                    loading="lazy"
                  />
                  <p>Monetize your professional network</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Partner Section */}
        <section className={styles.readyToPartnerSection} aria-labelledby="ready-partner-title">
          <div className={styles.readyToPartnerContainer}>
            <div className={styles.readyToPartnerContent}>
              <div className={styles.readyToPartnerText}>
                <h2 id="ready-partner-title" className={styles.readyToPartnerTitle}>
                  Ready to Partner<br />with <span className={styles.eziiHighlight}>EZII</span>?
                </h2>
                <p className={styles.readyToPartnerDescription}>
                  Reimagine Payroll Management with Ezii – Your Partner in Effortless Precision and Seamless Efficiency
                </p>
                <div className={styles.readyToPartnerButton}>
                  <Button
                    variant="proposal"
                    href="/salesexperts"
                    aria-label="Get Free Proposal"
                  >
                    Get Free Proposal
                  </Button>
                </div>
              </div>

              <div className={styles.readyToPartnerImage}>
                <div className={styles.illustrationCircle}>
                  <img
                    src="/assets/patners/cta.webp"
                    alt="Ready to Partner with EZII - Payroll Management Solutions"
                    className={styles.ctaImage}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 