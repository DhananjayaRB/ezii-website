'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './dinkCouples.module.scss';
import ArticleNavigation from '../ArticleNavigation';
import dinkImage from './assets/dink.png';
import dilemmaImage from './assets/dilema.png';
import oldRegimeImage from './assets/old-regime.png';
import newRegimeImage from './assets/new-regime.png';

export default function DINKCouples() {
  const currentArticleId = 2;

  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleContent}>
        <header className={styles.articleHeader}>
          <Link href="/articles" className={styles.backButton}>
            ← Back to Articles
          </Link>
          <h1 className={styles.articleTitle}>
            Double Income No Kids (DINK) Couples
          </h1>
          <div className={styles.articleMeta}>
            <span className={styles.publishDate}>Published: July 17, 2025</span>
            <span className={styles.readTime}>5 min read</span>
          </div>
        </header>

        <article className={styles.articleBody}>
          {/* Featured Image */}
          <div className={styles.featuredImage}>
            <Image
              src={dinkImage}
              alt="DINK Couples Tax Planning"
              width={512}
              height={341}
              priority
              className={styles.articleImage}
            />
          </div>

          <h3 className={styles.articleIntro}>
            <strong>Tax Profile Series # 2</strong>
          </h3>

          <h3 className={styles.sectionTitle}>
            <strong>Tax Saved Rs 46,904</strong>
          </h3>
          
          <p>
            Ravi aged 39 years and Jayashree aged 35 years are a "DINK" couple residing at Koramangala in Bangalore. 
            Their's is a double income household with no kids. Ravi works as a marketing manager with an MNC and 
            Jayashree works as a Software Engineer with an MNC. From a financial standpoint, they enjoy a good 
            collective income, a very comfortable lifestyle, and good savings as well.
          </p>

          <p>
            Ravi's Annual Cost to Company (CTC) is Rs 25 Lakhs and Jayashree's Annual CTC is Rs 12 Lakhs. 
            The Annual CTC is inclusive of the following benefits:
          </p>

          <ol className={styles.articleList}>
            <li>Rs 25,000 p.a paid towards Medical & Life Insurance paid by the employer inclusive of insurance for their parents.</li>
            <li>Gratuity @ 4.81% of Basic Salary</li>
            <li>Food Coupons of Rs 26,400 p.a.</li>
          </ol>

          <p>
            They live in a rented apartment close to their workplaces and pay a monthly rent of Rs 30,000 per month
            (Out of this Ravi pays Rs 20,000 while Jayashree pays Rs 10,000). Ravi earns a rental income of 
            Rs 20,000 per month from a let-out property that he had purchased when he was single and pays 
            Municipal taxes of Rs 10,000 p.a. To fund the house purchase, he had taken a Home Loan from SBI 
            for which the estimated principal repayment comes to Rs 1.8 Lakhs and Interest comes to Rs 60,000/- 
            in FY 2020-21. Jayashree sold some of her mutual funds due to the decline in the stock market 
            which she had purchased in June 2015 and has made a Long-term capital gain on sale of equity 
            mutual funds amounting to Rs 2 Lakhs in April 2020. Jayshree has Bank Fixed Deposits on which 
            she is estimated to receive an interest income of Rs 1 Lakh during FY 2020-21.
          </p>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Their Tax dilemma!</strong>
          </h2>

          <div className={styles.dilemmaImage}>
            <Image
            src={dilemmaImage}
              alt="Tax Dilemma"
              width={270}
              height={300}
              className={styles.sideImage}
            />
          </div>

          <p>
            Due to the change in the tax law of there being two tax regimes to make a choice from, the HR 
            Managers of both Ravi and Jayashree's company's are demanding from them to make a Tax declaration 
            of opting either for the New regime or the Old Regime, which they have no clue about. Ravi and 
            Jayashree being clueless on tax or any of the regimes decide to seek professional help. Ravi's 
            childhood friend Venkatesh is a CA. Venkatesh seeks Ravi's and Jayashree's Appointment letter, 
            payslips, rent paid, Housing Loan repayment Certificates, Interest estimation, and all other 
            information. Venkatesh takes a day and thereafter pronounces to Ravi and Jayashree – Take the 
            Old Regime. He then presents to them the tax comparison:
          </p>

          <h3 className={styles.subsectionTitle}>
            <strong>Old Tax Regime:</strong>
          </h3>

          <div className={styles.taxImage}>
            <Image
              src={oldRegimeImage}
              alt="Old Tax Regime Comparison"
              width={722}
              height={328}
              className={styles.taxComparisonImage}
            />
          </div>

          <h3 className={styles.subsectionTitle}>
            <strong>New Tax Regime:</strong>
          </h3>

          <div className={styles.taxImage}>
            <Image
            src={newRegimeImage}
              alt="New Tax Regime Comparison"
              width={720}
              height={327}
              className={styles.taxComparisonImage}
            />
          </div>

          <p>
            Ravi and Jayashree with Venkatesh's help were convinced that they can now declare to their HR 
            Manager's the options that they were choosing. He was picking on the Old Tax Regime since he would 
            avoid an annual tax of Rs 28,829 and have a higher net take-home of Rs 28,829 compared to the 
            new regime. She was picking on the Old Tax Regime since she would avoid an annual tax of Rs 18,075 
            and have a higher net take-home of Rs 18,075 compared to the new regime provided an additional tax 
            investment of Rs92,400 is made in 5 years Fixed Deposit with SBI. Therefore as a DINK, they would 
            save taxes by Rs 46,904 with this dual strategy of Old Regime for both of them.
          </p>

          <div className={styles.articleFooter}>
            <p>
              <strong>Need help with your tax planning?</strong> Contact our expert team to optimize your 
              tax savings and choose the right tax regime for your financial situation.
            </p>
          </div>
        </article>

        {/* Navigation Arrows */}
        <ArticleNavigation currentArticleId={currentArticleId} />
      </div>
    </div>
  );
} 