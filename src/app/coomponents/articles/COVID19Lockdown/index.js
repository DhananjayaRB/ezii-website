'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './covid19Lockdown.module.scss';
import ArticleNavigation from '../ArticleNavigation';
import covidLockdownImage from './assets/covid-lockdown.png';
import covidLockdownIndiaImage from './assets/covid-lockdown-india.png';
import smallBusinessImage from './assets/small-business.png';
import grossSalaryImage from './assets/gross-salary.png';
import cashFlowImage from './assets/cash-flow.png';

export default function COVID19Lockdown() {
  const currentArticleId = 6;

  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleContent}>
        <header className={styles.articleHeader}>
          <Link href="/articles" className={styles.backButton}>
            ← Back to Articles
          </Link>
          <h1 className={styles.articleTitle}>
            COVID-19 Lockdown – Financial Relief to Small Business 3 Months PF Subsidy
          </h1>
          <div className={styles.articleMeta}>
            <span className={styles.publishDate}>Published: April 2, 2020</span>
            <span className={styles.readTime}>8 min read</span>
          </div>
        </header>

        <article className={styles.articleBody}>
          {/* Featured Image */}
          <div className={styles.featuredImage}>
            <Image
              src={covidLockdownImage}
              alt="COVID-19 Lockdown and Financial Relief Measures"
              width={512}
              height={341}
              priority
              className={styles.articleImage}
            />
          </div>

          <p className={styles.articleIntro}>
            With the creeping presence of the Carona virus into Indian shores from January and the slow but increasing trend of infections, the Government finally on March 24th announced a lockdown across the country as social distancing seemed to be the single best preventive. This bold and harsh measure has serious economic consequences on the many millions of Indians.
          </p>

          <div className={styles.imageContainer}>
            <Image
              src={covidLockdownIndiaImage}
              alt="India Lockdown for COVID-19"
              width={396}
              height={297}
              className={styles.alignLeft}
            />
          </div>

          <p>
            On March 26th, the Finance Minister announced a slew of financial relief measures called Pradhan Mantri Garib Kalyan (PMGK) package of Rs 1.70 lac crores to mitigate the economic hardship on millions. The PMGK package is a combination of direct cash transfers, additional Food distribution, free LPG Gas distribution, health insurance to healthcare workers, and a 3 months subsidy of PF contribution for small business. The vulnerable segments attempted to be addressed are daily wage workers, mineral and construction workers, sanitation and health workers, doctors, paramedics, direct payments to farmers, onetime payment to senior citizens, widows.
          </p>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Eligibility of a Small Business:</strong>
          </h2>

          <div className={styles.contentWithImage}>
            <p>
              The Financial relief measures with regard to 3 months subsidy of PF Contributions are 
            </p>
            <div className={styles.imageContainer}>
              <Image
                src={smallBusinessImage}
                alt="Small Business"
                width={300}
                height={180}
                className={styles.alignRight}
              />
            </div>
            <p>
              applicable only to those establishments which employ not more than 100 employees. Further, qualifying criteria is that 90% of the employees have an average salary below Rs 15,000/- a month. Should, the percentage be lower than 90% of the workforce with below Rs 15,000/- salary, then the PF subsidy cannot be availed.
            </p>
          </div>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Many Salary Connotations – PF, Minimum Wages, and CTC.</strong>
          </h2>

          <div className={styles.contentWithImage}>
            <p>
              PF contribution, be it the employer or employee share is computed based on the Basic Salary. While Salary and Compensation structures and practices in India are different based on the sector and salary levels. Most white-collar jobs have a Cost to Company (CTC) concept, where typically the Basic Salary for an employee, which typically is structured at 40% or
            </p>
            <div className={styles.imageContainer}>
              <Image
                src={grossSalaryImage}
                alt="Gross Salary Calculation"
                width={456}
                height={219}
                className={styles.alignLeft}
              />
            </div>
            <p>
              50% of CTC. Should Basic be 50%, then in such sectors the eligibility of the threshold salary, in fact, doubles to almost Rs 30,000/- per month. While in the manufacturing sector, worker's salaries are negotiated based on Gross Salary, which typically comprises Basic, Dearness Allowance, Uniform Allowance, Washing Allowance, Overtime Wages and so on and the Employer PF Contribution is a cost to the business, over and above the Gross Salary.
            </p>
          </div>

          <p>
            While Minimum Wages for different job roles and sectors vary from one State to another and in some States, the minimum wages per month are close to or higher than Rs 15,000/- per month. Therefore, a business that complies with the Minimum Wages of its State Labour laws may end up being excluded from the PF Subsidy as it would not qualify the below Rs 15,000 or the 90% criteria.
          </p>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Cash Flow to Employees:</strong>
          </h2>

          <p>
            Employees can withdraw up to 75% of their PF balances or 3 months of their Basic Salary, the lower of the two to financially sustain themselves and their families during this COVID 19 crisis period.
          </p>

          <div className={styles.contentWithImage}>
            <div className={styles.imageContainer}>
              <Image
                src={cashFlowImage}
                alt="Boosting Cash Flow During COVID-19"
                width={321}
                height={201}
                className={styles.alignRight}
              />
            </div>
            <p>
              Whether the PF contribution subsidy to the business would translate into additional cash flow to the employee is a moot question. Employers could well turnaround and claim that the subsidy is to ease the business's cash flows and not to increase their employees take home.
            </p>
          </div>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Subsidy Availment:</strong>
          </h2>

          <p>
            The expectation under this scheme is that the contract of employment and jobs stay secure during this crisis period. The Employer is expected to pay salaries to its workers sans the PF contribution. This proof of salary payment done at the end of 3 months forms the basis of making a claim for the Government to make their contribution to the PF accounts of the respective workers. The forms and procedures are yet to be notified by the PF Department.
          </p>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Conclusions:</strong>
          </h2>

          <p>
            Had the objectives of the scheme been to subsidize businesses to safeguard employment and it's continuity during this COVID 19 crisis period, it could have been designed more thoughtfully. For example, the ESI scheme has wider coverage than the PF Scheme, as ESI kicks in once a business has 10 employees or more, while in PF it is 20 or more. Further, the ESI scheme is for up to a Gross Salary of Rs 21,000/-, while Rs 15,000/- in PF refers only to Basic Salary, wherein CTC driven sectors the Salary may well be up to Rs 30,000/- a month. The criteria of below 100 employees and 90% are in fact quite irrelevant as the goal is to fund the retiral cost of the lower segment of organized workers. Their plight is no different if their employer has 100 employees or 10,000 employees. The Subsidy to have been more comprehensive could have included ESI as well.
          </p>

          <p>
            The coverage of the current scheme would perhaps cover a maximum of 8 million workers and has an estimated outlay of Rs 5,000 Crores. While had the scheme been formulated for those covered under ESI, the coverage would have been for about 36 million workers.
          </p>

          <p>
            Notwithstanding the PF subsidy funding, this crisis may well force many small businesses to shut shop or resort to wage cuts, due to cash flow challenges. Had the Scheme been linked to ESI, then the Unemployment Insurance cover could have been extended to those workers being laid off during these 3 months. In any case, only recently the ESI Department had slashed contributions by 40% due to the fund surplus of Rs 84,000 Crores that they consistently had over the recent years.
          </p>

          <p>
            In our view, though the PF Subsidy Scheme has been framed with good intentions by the government, the question that remains unanswered is whether the measures announced would be sufficient enough to make a significant economic impact on the lives of the lower-income wage earners in the organized or MSME sector. We believe that a lot more needs to be done on this front.
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