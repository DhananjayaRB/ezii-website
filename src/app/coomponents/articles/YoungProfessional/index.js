'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './youngProfessional.module.scss';
import ArticleNavigation from '../ArticleNavigation';
import youngImage from './assets/young-professional.png';
import dilemmaImage from './assets/dilemma.png';
import comparisonImage from './assets/tax-comparison.png';

export default function YoungProfessional() {
  const currentArticleId = 4;

  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleContent}>
        <header className={styles.articleHeader}>
          <Link href="/articles" className={styles.backButton}>
            ← Back to Articles
          </Link>
          <h1 className={styles.articleTitle}>
            Young Professional – Single
          </h1>
          <div className={styles.articleMeta}>
            <span className={styles.publishDate}>Published: June 3, 2020</span>
            <span className={styles.readTime}>4 min read</span>
          </div>
        </header>

        <article className={styles.articleBody}>
          {/* Featured Image */}
          <div className={styles.featuredImage}>
            <Image
              src={youngImage}
              alt="Young Professional Single"
              width={512}
              height={341}
              priority
              className={styles.articleImage}
            />
          </div>

          <h3 className={styles.articleIntro}>
            <strong>Tax Profile Series #1</strong>
          </h3>

          <p>
            Karishma, hails from Bokaro, aged 27 years, works in an MNC as a Senior Software Engineer at Mumbai. Her annual Cost to Company (CTC) is Rs 12 Lakhs. Karishma along with two of her college mates has taken a 2-bedroom apartment on rent in Bandra. The monthly rent is Rs 45,000/- and her share works to Rs 15,000/. The living and transportation expenses average Rs 15,000. She also sends Rs 10,000 per month to her parents to financially support them. Her monthly cash outflow is about Rs 40,000/-.
          </p>

          <h2 className={styles.sectionTitle}>
            <strong>Karishma's Tax dilemma!</strong>
          </h2>

          <div className={styles.sideImage}>
            <Image
              src={dilemmaImage}
              alt="Tax Dilemma"
              width={283}
              height={184}
              className={styles.rightImage}
            />
          </div>

          <p>
            Her HR Manager is demanding Karishma to make a Tax declaration of the New regime or Old Regime, which she has no idea of. Her financial goal is to minimize her tax outgo of Rs 25,000/- per annum and build her savings kitty as she comes from a middle-class upbringing. Karishma being clueless on tax or any regimes decides to text her friend Ashish, a CA in Delhi for help. Ashish seeks her Appointment letter, payslips, Rent paid, and all other information. He takes a day and thereafter pronounces to Karishma – Take the Old Regime. He then presents to her the comparison:
          </p>

          <div className={styles.comparisonSection}>
            <h3 className={styles.comparisonTitle}>
              <strong>Old Regime</strong> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <strong>New Regime</strong>
            </h3>
            
            <div className={styles.comparisonImage}>
              <Image
                src={comparisonImage}
                alt="Tax Regime Comparison"
                width={706}
                height={419}
                className={styles.taxComparisonImage}
              />
            </div>
          </div>

          <p>
            Now that Karishma with Ashish's help was convinced that she can now declare to HR Manager that she was picking on the Old Tax Regime and would avoid an annual tax of Rs 28,080 and have a higher net take-home of Rs 28,080 and would need to make an additional tax investment of Rs 80,000.
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