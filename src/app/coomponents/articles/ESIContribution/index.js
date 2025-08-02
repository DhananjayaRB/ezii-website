'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './esiContribution.module.scss';
import ArticleNavigation from '../ArticleNavigation';
import esiContributionImage from './assets/esiContributionImage.png';
import esiReductionImage from './assets/esi-reduction.png';
import esiTableImage from './assets/esi-table.png';

export default function ESIContribution() {
  const currentArticleId = 7;

  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleContent}>
        <header className={styles.articleHeader}>
          <Link href="/articles" className={styles.backButton}>
            ← Back to Articles
          </Link>
          <h1 className={styles.articleTitle}>
            ESI Contribution reduces by 40%
          </h1>
          <div className={styles.articleMeta}>
            <span className={styles.publishDate}>Published: July 2, 2019</span>
            <span className={styles.readTime}>6 min read</span>
          </div>
        </header>

        <article className={styles.articleBody}>
          {/* Featured Image */}
          <div className={styles.featuredImage}>
            <Image
              src={esiContributionImage}
              alt="ESI Contribution Reduction"
              width={512}
              height={341}
              priority
              className={styles.articleImage}
            />
          </div>

          <p className={styles.articleIntro}>
            The Employees' State Insurance Act 1948 (the ESI Act) provides for medical, cash, maternity, disability and dependent benefits to workers whose monthly wages are Rs 21,000/- or Below, a month. ESI typically applies to any organization employing 10 or more workers.
          </p>

          <p>
            The ESI contribution rate which was 6.5% of wages (Employer 4.75% Plus Employee 1.75%) is now reduced to 4% (Employer 3.25% Plus Employee 0.75%) with effect from July 1st, 2019. Reference notification dated June 13, 2019, of The Ministry of Labour and Employment ("Ministry"), by amending Rule 51 of the Employees' State Insurance (Central) Rules, 1950.
          </p>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Last 4 years – Almost doubling of ESI coverage</strong>
          </h2>

          <p>
            ESI, in it's earlier years, in tandem with the economic growth phases was concentrated in the manufacturing sector. Its dispensaries and hospitals were mainly located around the industry belts to cater to the factory workers. Today, with the services sector being the largest economic contributor to GDP, above 50% has brought in a fair number of employers which are more dispersed as well.
          </p>

          <p>
            This changing face of our economy to many more units in the services sector, setting a higher wage threshold for coverage from Rs 10,000/- to Rs 21,000/- per month of wages, better enforcement has seen a doubling of i) No of organizations covered under ESI to 12.85 lacs ii) No of workers covered to 36 million and iii) Aggregate annual contributions to Rs 22,279 Cr in 2018-19.
          </p>

          <div className={styles.centerImage}>
            <Image
              src={esiReductionImage}
              alt="ESI Reduction to 40%"
              width={674}
              height={227}
              className={styles.articleImage}
            />
          </div>

          <p>
            Consequent to this rapid and unexpected growth in ESI numbers, the ESIC has ended up sitting with a huge cash pile of about Rs 84,000 Cr, which has prompted the government decided to make a cut back in contribution rates.
          </p>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Who benefits by this ESI reduction</strong>
          </h2>

          <p>
            This would be not only an interesting question to ask but also a moot one. Would this reduction help employer profitability, or would it put a little more money into the hands of the workers or would it incentivize additional organizations who are on the fringes of the law to get compliant due to affordability and lower their non-compliance risks.
          </p>

          <p>
            Of the three perspectives, the last is a certainty of more organizations coming under the ESI fold and more workers being covered. As far as the first two perspectives, the nature of the employment contract may hold the key to its answer. For example, in the manufacturing sector, let's call as Scenario #1 compensation is generally structured as gross salary and it's earning head components' of Basic, DA, Allowances, etc and on top of it, the employee welfare costs are added to it like PF, ESI, etc. While the private sector in the services sector, let's call as scenario #2 is more Cost to Company (CTC) driven contracts where the CTC is negotiated and frozen. From this CTC, the earning and deduction heads are reverse engineered. In our view, in Scenario #1, it is likely to improve Employer profitability with a very marginal change in employee take-home, while in scenario #2, it is likely that the workers get a little higher take home.
          </p>

          <p>
            The delta for the ESI reduction is illustrated in the table below :
          </p>

          <p><strong>Quantification of the effect of ESI reduction at different Wage Levels (Amount in INR)</strong></p>

          <div className={styles.centerImage}>
            <Image
              src={esiTableImage}
              alt="ESI Reduction Table"
              width={713}
              height={430}
              className={styles.articleImage}
            />
          </div>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Conclusion</strong>
          </h2>

          <p>
            This reduction of ESI contribution by 40% is not only huge but also historic. Seldom does one see the government having a fund surplus, acknowledging the same and passing it back to both business and workers is indeed heartening, responsive and welcome? The annual impact of this reduction is estimated by the industry as Rs 5,000/- crores.
          </p>

          <p>
            It would be insightful for the government to assess to what extent the Rs 84,000 Cr surplus is on account of worker's choice in seeking better private-sector health care to the ESI one. In which case the fund surplus could be better utilized in upgrading and extending the ESI health services.
          </p>

          <p>
            Perhaps, the time has come for the government to change it's health welfare paradigm from numbers and revenues to ensuring they reach across the country of ESI dispensaries and hospitals, monitoring quality and receiving feedback to drive quality and accountability of the care providers, modernization of healthcare facilities and professionalization across the ESI ecosystem and even consider a Nordic model of health voucher system where the worker is issued one and can select his health provider, be it a governmental or a private one, challenging and making healthcare services competitive to ensure that the service receiver gets the best.
          </p>

          <div className={styles.articleFooter}>
            <p>
              <strong>Schedule a Free Demo</strong> and see how EZII simplifies payroll compliance while 
              protecting your organization, just <a href="/contact" rel="noopener noreferrer">reach out to us!</a>
            </p>
          </div>
        </article>

        {/* Navigation Arrows */}
        <ArticleNavigation currentArticleId={currentArticleId} />
      </div>
    </div>
  );
} 