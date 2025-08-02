'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './itrDisclosures.module.scss';
import ArticleNavigation from '../ArticleNavigation';
import itrMainImage from './assets/itr-main-image.png';
import itrMain from './assets/itr-main.png';
import salaryIncomeImage from './assets/salary-income.png';
import housePropertyImage from './assets/house-property.png';
import otherSourcesImage from './assets/other-sources.png';
import deductionsImage from './assets/deductions.png';
import directorsImage from './assets/directors.png';
import investmentImage from './assets/investment.png';
import nonResidentsImage from './assets/non-residents.png';

export default function ITRDisclosures() {
  const currentArticleId = 8;

  return (
    <div className={styles.articleContainer}>
      <div className={styles.articleContent}>
        <header className={styles.articleHeader}>
          <Link href="/articles" className={styles.backButton}>
            ← Back to Articles
          </Link>
          <h1 className={styles.articleTitle}>
            Salaried Tax Payers – More disclosures Expected – ITR 1
          </h1>
          <div className={styles.articleMeta}>
            <span className={styles.publishDate}>Published: May 29, 2019</span>
            <span className={styles.readTime}>10 min read</span>
          </div>
        </header>

        <article className={styles.articleBody}>
          {/* Featured Image */}
          <div className={styles.featuredImage}>
            <Image
              src={itrMain}
              alt="Income Tax ITR Disclosures"
              width={512}
              height={341}
              priority
              className={styles.articleImage}
            />
          </div>

          <p className={styles.articleIntro}>
            The last 5 years have seen an almost doubling of the Income Taxpayers in the country. From about 34 million to 67 million taxpayers in Financial Year 2017-18 or Assessment year 2018-19. Of these 67 million, about 32 million are the Salaried class constituting about 32 million, at 48%. This is about 2% of our population or about 10% of households on the assumption that there is only one taxpayer in each household. Nevertheless, it is the salaried class which is the single largest group of taxpayers in the country and ITR 1 form is what they file their returns in. This ITR 1 form has recently been modified seeking additional disclosures.
          </p>

          <div className={styles.centerImage}>
            <Image
              src={itrMainImage}
              alt="Income Tax Screenshot"
              width={646}
              height={319}
              className={styles.articleImage}
            />
          </div>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Some Key Reliefs!</strong>
          </h2>

          <p>
            The Finance budget has brought some relief such as enhanced deductions, increased tax rebate or no tax up to an income of Rs. 500,000 or where two houses can be claimed as self-occupied property etc are being given to providing some tax relief to the taxpayers.
          </p>

          <p>
            From the ease of tax administration, e-filing has become mandatory for all taxpayers with some exceptions. Until last year, individuals having income up to 5 lakhs were exempt from online filing. No more paper filing is allowed except for super senior citizens.
          </p>

          <p>
            The Finance Minister in his budget speech promised a refund in 24 hours. Time would tell if this 24-hour refund happens in reality.
          </p>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>New ITR 1 Form</strong>
          </h2>

          <p>
            The new ITR 1 Form, also called Sahaj is applicable for salaried individuals having an income up to Rs 50 lacs per annum which comprises of Salaries, One House Property, and income under the head Other Income.
          </p>

          <p>
            The intent in revising the ITR 1 and seeking additional disclosures is mainly to have details of exempt allowances and standard deductions as it has been observed that many salaried taxpayers are fudging their House Rent Allowance exemptions, likewise on Leave Travel Allowances, etc.
          </p>

          <p>
            <span style={{ color: '#333333' }}>The last date for filing the ITR 1 is 31<sup>st</sup> July 2019.</span>
          </p>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Itemized changes in Disclosures</strong>
          </h2>

          <h3 className={styles.subsectionTitle}>
            <strong>Under the head Salary Income</strong>
          </h3>

          <div className={styles.centerImage}>
            <Image
              src={salaryIncomeImage}
              alt="Salary Income Details"
              width={694}
              height={608}
              className={styles.articleImage}
            />
          </div>

          <p>
            <span style={{ textAlign: 'justify' }}>The new form provides for a standard deduction of Rs. 40,000. In lieu of medical and transport allowance, flat deduction of 40,000 can be availed by all employees without submission of bills.</span>
          </p>

          <h3 className={styles.subsectionTitle}>
            <strong>Under the head – Income from House Property:</strong>
          </h3>

          <div className={styles.centerImage}>
            <Image
              src={housePropertyImage}
              alt="House Property Income"
              width={688}
              height={289}
              className={styles.articleImage}
            />
          </div>

          <p>
            <strong> </strong>The option of deemed let out property is included in the new form. From the financial year 2019-2020, an assessee can claim two houses as self-occupied. This is not applicable for the financial year 2018-19. Up to, last year, only one could be claimed as self-occupied, the benefit is now extended to two houses. If any arrears of rent is received during the year, the same has to be disclosed separately in the return net off standard deduction. Earlier, no separate disclosure was required.
          </p>

          <h3 className={styles.subsectionTitle}>
            <strong>Under the head – Income from other sources:</strong>
          </h3>

          <div className={styles.centerImage}>
            <Image
              src={otherSourcesImage}
              alt="Other Sources Income"
              width={692}
              height={249}
              className={styles.articleImage}
            />
          </div>

          <p>
            The taxpayer will now have to give the bifurcation of income from other sources into interest on a savings account, interest on bank deposits, post office deposits, interest on income tax refund, family pension, etc. The intention of such classification of interest income is perhaps to monitor the 80TTA deduction which is available up to Rs. 10,000 only on interest income on savings account and not on time deposits and prevent its misuse.
          </p>

          <h3 className={styles.subsectionTitle}>
            <strong>Deductions under Chapter VI-A:</strong>
          </h3>

          <div className={styles.centerImage}>
            <Image
              src={deductionsImage}
              alt="Chapter VI-A Deductions"
              width={691}
              height={378}
              className={styles.articleImage}
            />
          </div>

          <p>
            <strong> </strong><strong>80G & 80GGA:</strong> With respect to donations made to charitable institutions, relief fund, rural development, scientific research, the taxpayer has to state the mode of donation – whether it was made in cash or otherwise.
          </p>

          <p>
            Donations made in cash exceeding certain limits .i.e., Rs. 2,000 under section 80G and Rs. 10,000 under section 80GGA cannot be claimed as a deduction. Inclusion of mode of donation is to keep a tab on cash expense.
          </p>

          <p>
            <strong>80TTB: </strong>Deduction up to Rs. 50,000 is available from the financial year 2018-19 to senior citizens on deposit interest.
          </p>

          <h3 className={styles.subsectionTitle}>
            <strong>Directors and Shareholders of unlisted companies –</strong>
          </h3>

          <div className={styles.contentWithImage}>
            <p>
              There are some categories of taxpayers who are now
            </p>
            <div className={styles.imageContainer}>
              <Image
                src={directorsImage}
                alt="Directors"
                width={212}
                height={142}
                className={styles.alignLeft}
              />
            </div>
            <p>
              precluded from filing an ITR 1 Form. For example Directors and taxpayers having investments in unlisted equity shares, they are now required to file either ITR – 2 or ITR – 3 depending on whether they have business income or not. Directors have to provide details of the company in which they hold directorship such as name and PAN of the company, whether the company is listed or not, Director Identification Number.
            </p>
          </div>

          <div className={styles.contentWithImage}>
            <p>
              As regards, holders of unlisted shares,
            </p>
            <div className={styles.imageContainer}>
              <Image
                src={investmentImage}
                alt="Investment"
                width={229}
                height={132}
                className={styles.alignLeft}
              />
            </div>
            <p>
              particulars of investment – the name of the company, number and original cost of shares, purchase or transfer of shares during the year, etc.. has to be furnished in the return. This is a very significant change which will help the government in cracking down the ghost directors and shell companies. The taxmen can now corroborate the information in the return with corporate data and spot discrepancies.
            </p>
          </div>

          <h3 className={styles.subsectionTitle}>
            <strong>Not Ordinarily Resident – Tax Payers</strong>
          </h3>

          <div className={styles.contentWithImage}>
            <div className={styles.imageContainer}>
              <Image
                src={nonResidentsImage}
                alt="Non Residents"
                width={202}
                height={172}
                className={styles.alignLeft}
              />
            </div>
            <p>
              Earlier, residents but not ordinarily residents in India were allowed to file ITR – 1. Now, they will have to file either ITR – 2 or ITR – 3. Additionally, taxpayers have to specify the duration of their stay in India. As taxability of income depends on the residential status of the individual, it is important for the government and individuals to determine the residential status and its correctness.
            </p>
          </div>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Revised Form 16 in line with the new ITR 1 Form:</strong>
          </h2>

          <p>
            In line with the revised forms, the tax department has also modified the format of TDS certificate .i.e., Form 16 which will have all the necessary details to fill ITR 1. The new format is applicable from May 12, 2019, onwards. The revised format will provide a detailed break up of salary, exempt allowances, and deductions. Basis the revised Form 16, ITR – 1 has to be filled in.
          </p>

          <p>
            For break up of interest income from Savings account and deposits, taxpayers can approach a bank and obtain interest certificate.
          </p>

          <p>
            The taxpayers should collate data well in advance to meet the reporting requirements of the new ITR forms
          </p>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Potential Issues</strong>
          </h2>

          <p>
            Form 16 is the basic document which is used by salaried to fill income tax form. Though the government was thoughtful enough to bring Form 16 in alignment with reporting requirements of revised income tax form, it was definitely not mindful of the timing. To generate Form 16, companies have to file TDS returns, the due date for which is 31<sup>st</sup> May. With hardly any time left for filing the TDS returns, how are the companies, HRs, individuals going to speed up? Companies across the country have to collect data which it had not earlier. Consider the examples below:
          </p>

          <p>
            <strong>Example 1</strong>: New form 16 requires a salary from the previous employer to be reported. A current employer has to now obtain details from employee and includes it in Form 16. Exhaustive information on various allowances and deductions clause wise is required. The employee may not know and not be able to give clause wise data to the current employer.
          </p>

          <p>
            In the event of an employee not having the information readily available and employer filing the returns with incomplete details, yet again the problem of data mismatch will crop up because Form 16 will not reflect necessary details to fill ITR -1. Though the employee has the option of obtaining Form 16 from the previous employer, it is easier said than done. It is again, the employee who has to shuttle between previous and current employer to get Form 16 fixed. It may not always be easy for the employee to contact HRs of previous employment and get them on board to issue Form 16.
          </p>

          <p>
            <strong>Example 2: </strong>On the other end, HRs may also face challenges to provide proper input in case of employees who have left. Now, it is mandatory to provide PAN of the landlord and PAN of the housing loan lender in the TDS return. What if the HRs had not obtained it earlier? Would it easy for HRs to get PAN from their ex-employees? Not necessarily.
          </p>

          <p>
            Result: delayed processing, consequently delayed refund. It is never a plain sail for those who have to work on these changes at the ground level.
          </p>

          <p>
            <strong>Example 3</strong>: The TDS return requires a PAN of the landlord to be mandatorily quoted. While claiming HRA, an employee has to submit PAN of the landlord if rent exceeds Rs. 1,00,000 per annum. A landlord has to also furnish PAN of a tenant in his return while reporting income from house property. The idea of the taxman is to run the algorithm in the background of the intensive technology-based processing systems and to co-relate HRA claim of an employee with rental income of landlord and check for any false HRA claim or under-reporting of rental income.
          </p>

          <p>
            Will the amount in landlords return and employees return always match? May not be. In the case of data mismatch, who will be an advantage? employee/tenant or landlord?What if the landlord does not report the correct rental income? In that case, should the employee be penalized for the discrepancy, in terms of having to respond to tax notices, pay higher tax, get reduced refund? It is normally presumed that landlords are always at fault. In the event of an employee making an incorrect claim, should the landlord be denied benefit? How will the government authenticate these amounts?
          </p>

          <hr className={styles.separator} />

          <h2 className={styles.sectionTitle}>
            <strong>Conclusion:</strong>
          </h2>

          <p>
            The objective of enhancing disclosure requirements are many. It is to assist the tax authorities to get a detailed view of income, allowances, deductions and verify and validate the information from their other sources of digitized information and data and have their computer systems to validate the same and enquire into the mismatches for tax avoidance or tax frauds.
          </p>

          <p>
            This is clearly a measure to improve the e-assessment systems. Further, as per taxmen, this is going to benefit the taxpayers as the returns will be processed much quicker in an automated environment without having to submit physical documents. Earlier, refunds were delayed largely due to data mismatch between returns, Form 16 and other data in possession with tax authorities. Will the new forms solve the problem? The issues might just get <em>amplified</em>. Time would tell.
          </p>

          <p>
            Yes, we are heading towards the digital economy and the government is investing heavily in technology to ease out tax processing and improve the levels of compliance. The measures are commendable. All that it would take is not make these last-minute changes in Forms that pertain to prior periods with short deadlines and expect Employers and Employees to comply and the system to work smoothly. This would surely not happen and willy nilly different folks will find difficulty in complying and may also face mismatches in data being filed by some other counterparty. For example, their landlord's data can easily throw a spanner in the works and invite tax notices. The tax authorities introduced electronic filing in the year 2004 and have taken almost 14 years to bring everyone on the online platform.
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