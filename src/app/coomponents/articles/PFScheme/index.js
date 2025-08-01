'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './pfScheme.module.scss';
import ArticleNavigation from '../ArticleNavigation';
import pfImage from './assets/pf-scheme.png';
import moneyImage from './assets/money.png';
import covidImage from './assets/covid.png';
import employeeImage from './assets/employee.png';
import taxImage from './assets/tax-benefits.png';

export default function PFScheme() {
  const currentArticleId = 3;

  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleContent}>
        <header className={styles.articleHeader}>
          <Link href="/articles" className={styles.backButton}>
            ← Back to Articles
          </Link>
          <h1 className={styles.articleTitle}>
            PF Scheme – It's Features & Benefits
          </h1>
          <div className={styles.articleMeta}>
            <span className={styles.publishDate}>Published: June 15, 2020</span>
            <span className={styles.readTime}>8 min read</span>
          </div>
        </header>

        <article className={styles.articleBody}>
          {/* Featured Image */}
          <div className={styles.featuredImage}>
            <Image
              src={pfImage}
              alt="PF Scheme Features and Benefits"
              width={512}
              height={341}
              priority
              className={styles.articleImage}
            />
          </div>

          <p>
            As an employee who is working in a corporate set-up there are several things that one would like to know about the Employee Provident Fund (EPF). This Blog attempts to discuss the features and Benefits of Employee Provident fund Scheme as a Fixed Savings instrument in terms of Applicability, Contributions, Return, Risks, Lock-in period, Liquidity, Tax Benefits, Voluntary PF and highlights the recent relief measures that the government has announced considering the current Covid-19 pandemic.
          </p>

          <h2 className={styles.sectionTitle}>
            <strong>Applicability</strong>
          </h2>
          
          <p>
            It covers every establishment in which 20 or more persons are employed and certain organizations are covered, subject to certain conditions and exemptions even if they employ less than 20 persons each. As per the rules in EPF, an employee whose 'pay' is more than Rs 15,000 a month at the time of joining, is not eligible and is called non-eligible employee. Employees drawing less than Rs 15,000 per month must mandatorily become members of the EPF Scheme. However, an employee who is drawing a 'pay' above the prescribed limit (currently Rs 15,000) can become a member if he and his employer agree.
          </p>

          <div className={styles.sideImage}>
            <Image
              src={moneyImage}
              alt="Money and Savings"
              width={333}
              height={185}
              className={styles.rightImage}
            />
          </div>

          <h2 className={styles.sectionTitle}>
            <strong>Contribution Amount</strong>
          </h2>
          
          <p>
            For Salaried individuals, the monthly contribution towards the Employee's Provident Fund (EPF) remains the only forced savings mechanism. Every month 12% of the (Basic salary+ Dearness Allowance) along with a matching contribution by the employer flows into the EPF account. For an employee drawing more than Rs 15,000 per month, it would mean that an employee can opt for a maximum deduction of Rs 1,800 (12% of Rs 15,000) instead of 12% of the (Basic salary+ Dearness Allowance). From the employer's contribution, 8.33% goes into a pension vehicle—the Employee's Pension Scheme (EPS) but it is calculated on Rs 15,000 a month and 3.67% towards the EPF. So for every employee with basic pay equal to Rs 15,000 or more, the diversion is Rs 1,250 each month into EPS. If the basic pay is less than Rs 15000 per month, then 8.33% of that full amount will go into EPS. Additionally, the employer also pays 0.5% of Basic Salary towards Employee's Deposit Linked Insurance Scheme (EDLI) or a max of Rs 75/- per employee per month, 0.01% towards EDLI handling Charges and 0.65% towards EPF Administrative Charges.
          </p>

          <p>
            Employees Deposit Linked Insurance Scheme (EDLI) is an insurance cover provided by the EPFO (Employees Provident Fund Organisation) for private sector salaried employees. The registered nominee receives a lump-sum payment in the event of the death of the person insured, during the period of the service. The maximum pay-out that the nominee receives under EDLI is capped at Rs 6 Lakhs.
          </p>

          <h2 className={styles.sectionTitle}>
            <strong>COVID-19</strong>
          </h2>

          <div className={styles.sideImage}>
            <Image
              src={covidImage}
              alt="COVID-19 Pandemic"
              width={310}
              height={182}
              className={styles.rightImage}
            />
          </div>
          
          <p>
            Due to the COVID-19 pandemic, Government of India has provided the following relaxations:
          </p>

          <ul className={styles.articleList}>
            <li>The EPF contributions for May, June, and July have been reduced to 10% instead of 12% for Non-government organizations.</li>
            <li>Under the Pradhan Mantri Garib Kalyan Yojana, ( PMGKY) Government of India will pay the employer and employee contribution to EPF account of employees from March to June 2020 (Now extended up to August 2020) for establishments with up to 100 employees and where 90% of those employees draw a salary of less than Rs 15,000 per month. The Government has provided liquidity support of Rs 2,500 Crores for the same.</li>
          </ul>

          <p>
            The intention of this change seems to be to ensure liquidity support to the businesses and to safeguard the employment and its continuity for lower-paid employees during the COVID-19 crisis period.
          </p>

          <h2 className={styles.sectionTitle}>
            <strong>Voluntary Provident Fund (VPF) Contributions</strong>
          </h2>
          
          <p>
            The VPF is an extension of the EPF that allows the subscriber to invest beyond the 12% threshold while providing the same tax benefits and return. While the PPF carries an investment limit of Rs 1.5 lakh per annum, there is no such restriction on VPF. Besides, unlike PPF returns that fluctuate in line with 10-year government bonds yield, the interest rate on VPF is the same as that of the EPF.
          </p>

          <p>
            Though hiking the PF Contribution would mean lesser net take-home pay, it would be suitable for those employees who are closer to retirement and those who are in the higher-income earning bracket since it fetches a higher return than other fixed return instruments providing for more financial stability later. Young savers would be better off opting for a higher equity component through the NPS or equity funds rather than enhancing their debt allocation through VPF.
          </p>

          <h2 className={styles.sectionTitle}>
            <strong>Returns</strong>
          </h2>
          
          <p>
            EPF is currently offering an interest rate of 8.5% for Financial Year 2019-20 which is higher than fixed return tax saving investment instruments like PPF and National Savings Certificate which presently are offering a return of 7.1% (7.9% up to FY 2019-20) and 6.8% respectively. The rates of return are the highest in the current scenario with the highest safety as compared to even the Debt mutual funds. Interest is credited to the member's account on the Monthly running balances.
          </p>

          <h2 className={styles.sectionTitle}>
            <strong>Risks</strong>
          </h2>
          
          <p>
            EPF is a government-backed retirement savings scheme that offers a guaranteed risk-free rate of return
          </p>

          <h2 className={styles.sectionTitle}>
            <strong>Lock-in Period</strong>
          </h2>
          
          <p>
            EPF is locked in Up to retirement except for special circumstances as covered below where they can be withdrawn prematurely.
          </p>

          <div className={styles.sideImage}>
            <Image
              src={employeeImage}
              alt="Employee Provident Fund"
              width={336}
              height={168}
              className={styles.rightImage}
            />
          </div>

          <h2 className={styles.sectionTitle}>
            <strong>Liquidity</strong>
          </h2>
          
          <p>
            The subscribers will have access to their EPF account at the time of retirement from an organization or their nominees receive the same in the event of their untimely death. According to the EPF Act, for claiming the final PF settlement, one has to retire from service after attaining 55 years of age. The total EPF balance includes the employee's contribution and that of the employer, along with the accrued interest. There is, however, a window to partially withdraw the amount for those nearing retirement. Anyone over 54 can withdraw up to 90 percent of the accumulated balance with interest.
          </p>

          <h3 className={styles.subsectionTitle}>
            <strong>Scenarios of Premature withdrawal</strong>
          </h3>
          
          <p>
            The money in the EPF account can be withdrawn prematurely as a non-refundable advance prior to the retirement of the following conditions are fulfilled:
          </p>

          <ol className={styles.articleList}>
            <li>With effect from December 6, 2018, the employees can withdraw 75% of their PF money after remaining unemployed for 1 month and balance 25% after he is out of employment for 60 straight days or more. Prior to this, an employee could make such withdrawal only after remaining unemployed for more than 60 days.</li>
            <li>50% of the employee's share of the PF money can be withdrawn for the marriage of self, Siblings, or children if the EPF account has been maintained for at least 7 years.</li>
            <li>50% of the employee's share of the PF money can be withdrawn for Education of self or children after Class 10 if the EPF account has been maintained for at least 7 years.</li>
            <li>90% of the PF money (Both employer and employee's share) can be withdrawn by the subscriber for Home Loan repayment if the EPF account is at least 10 years old</li>
            <li>Up to a maximum of 24 times of Monthly Basic Salary + DA for Purchase of a Plot and up to 36 times of Monthly Basic Salary + DA for construction of a House subject to the balances in the EPF can be withdrawn if the EPF account is at least 5 years old.</li>
            <li>Up to a maximum of 6 months of Monthly Basic Salary + DA or employee's contribution + Accrued interest whichever is lower for a medical emergency of self or family member without any service period requirement.</li>
          </ol>

          <p>
            <strong>Final Settlement Process:</strong> To withdraw money, the employee may now use 'Universal Account Number' (UAN) based Form 19' and in effect bypass the employer signature requirement. This facility will be available to all those subscribers whose Universal Account Number (UAN) is activated and seeded with the KYC details like bank account and Aadhaar number. The claim can be submitted online on the Member e-Sewa portal.
          </p>

          <p>
            <strong>Advance Availment Process:</strong> If an employee has to Know Your Customer (KYC) compliant Universal Account Number (UAN), which is activated and seeded to his bank account, he does not have to go through his employer to get hold of his EPF. The UAN Based Form 31 (New) can be directly submitted to the EPFO. Else, he may fill in Form 31 and submit it to the EPFO through his employer. The claim can be submitted online on the Member e-Sewa portal, provided Aadhaar is linked to UAN.
          </p>

          <p>
            <strong>COVID-19 pandemic rule:</strong> The subscriber can withdraw up to 75% of the Provident Fund Balance (Employee's Share & Employer's Share) or 3 months Basic Salary& Dearness Allowance, whichever is lower. Online Claims under COVID-19 are being processed under auto mode within 72 hours by EPFO. The EPFO sends a cheque to the Bank within 1-3 days to deposit the same within the Bank account. It means that the subscriber can get the PF money in his Bank account within a maximum period of 5 days from the date of claims submission.
          </p>

          <div className={styles.centerImage}>
            <Image
              src={taxImage}
              alt="Tax Benefits under Section 80C"
              width={542}
              height={376}
              className={styles.taxBenefitsImage}
            />
          </div>

          <h2 className={styles.sectionTitle}>
            <strong>Tax Benefits</strong>
          </h2>
          
          <p>
            Employee Provident Fund enjoys an Exempt-Exempt-Exempt Tax status. The employee contribution is eligible for tax benefits under Section 80C to the extent of Rs 1.5 Lakhs. The interest earned and money received on superannuation is also tax-free.
          </p>

          <p>
            The government had introduced Tax Deducted at Source (TDS) on PF withdrawals in order to discourage premature withdrawals and promote long-term savings TDS @ 10% will be deducted from the withdrawal amount subject to a monetary limit of Rs 50,000 if the withdrawal happens before completing 5 years of subscription if PAN Card is submitted. The subscriber will also be required to forego all the tax concessions availed by him in the past regarding contributions to such recognized PF if the withdrawal happens before 5 years. For calculating the period of 5 years, it is not necessary that the service should be continued with the same employer. Previous Period employment is also considered for the same.
          </p>

          <p>
            Budget 2020 has introduced a new tax regime of simplified tax computations and tax rates by eliminating 70 of the 100 tax exemptions and deductions or to continue with the old regime with the older tax slabs and retaining all the tax exemptions and deductions. The tax benefit under Section 80C would only be available only under the Old Tax regime. Also, the employer's contribution exceeding Rs 7.5 lakh in a financial year to retirement funds such as Employees Provident Fund (EPF), National Pension System (NPS), or any other superannuation fund is proposed to be made taxable in the hands of the employee. This will impact the higher basic salary earners negatively.
          </p>

          <h2 className={styles.sectionTitle}>
            <strong>Other Benefits of EPF</strong>
          </h2>
          
          <p>
            Post-retirement, the employee would be eligible for a pension. With Employee Deposit Linked Insurance the subscriber is also covered under the organization's group insurance scheme.
          </p>

          <p>
            It can be observed that the Employee Provident Fund as a fixed savings instrument has evolved to meet the requirements of building a retirement corpus for retirees, higher Liquidity in times of emergency for those still working and higher returns compared to other Fixed Savings instruments.
          </p>

          <div className={styles.articleFooter}>
            <p>
              <strong>Need help understanding your PF benefits?</strong> Contact our expert team to optimize your 
              provident fund contributions and maximize your retirement savings.
            </p>
          </div>
        </article>

        {/* Navigation Arrows */}
        <ArticleNavigation currentArticleId={currentArticleId} />
      </div>
    </div>
  );
} 