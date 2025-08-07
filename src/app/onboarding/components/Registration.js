"use client";
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStepperStatus, setCurrentStep } from '../store/onboardingSlice';
import { message } from 'antd';
import GeneralDetails from './GeneralDetails';
import Features from './Features';
import PaymentConfirmationSuccess from './PaymentConfirmationSuccess';
import PaymentConfirmationFailure from './PaymentConfirmationFailure';
import SpinnerComponent from './SpinnerComponent';
import styles from '../onboarding.module.scss';

const Registration = () => {
  const dispatch = useDispatch();
  const { stepperStatus, currentStep, loading } = useSelector((state) => state.onboarding);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      // Initialize stepper status from localStorage or default values
      const storedStepper = {
        generalDetailsStepperStatus: 'active',
        featuresStepperStatus: 'inactive',
      };
      dispatch(setStepperStatus(storedStepper));
    }
  }, [isMounted, dispatch]);

  const handleNextStep = () => {
    if (stepperStatus.generalDetailsStepperStatus === 'active') {
      dispatch(setStepperStatus({
        generalDetailsStepperStatus: 'completed',
        featuresStepperStatus: 'active',
      }));
      dispatch(setCurrentStep('features'));
    }
  };

  const handleStepClick = (step) => {
    if (step === 'generalDetails') {
      dispatch(setStepperStatus({
        generalDetailsStepperStatus: 'active',
        featuresStepperStatus: 'inactive',
      }));
      dispatch(setCurrentStep('generalDetails'));
    } else if (step === 'features') {
      // Only allow clicking on Features if Company Details is completed
      if (stepperStatus.generalDetailsStepperStatus === 'completed') {
        dispatch(setStepperStatus({
          generalDetailsStepperStatus: 'completed',
          featuresStepperStatus: 'active',
        }));
        dispatch(setCurrentStep('features'));
      } else {
        // Show message that Company Details must be completed first
        message.warning('Please complete Company Details first');
      }
    }
  };

  if (!isMounted) return null;

  return (
    <div className={styles.modernBg}>
      {loading && <SpinnerComponent text="Processing your payment. Do not close or refresh your page..." />}

      <div className={styles.modernContentWrapper}>
        {/* Page Title */}
        <div className={styles.modernPageTitle}>
        </div>

        {/* Modern Stepper */}
        <div className={styles.modernStepperWrapper}>
          <div className={styles.stepperContainer}>
            <div
              className={`${styles.modernStepperItem} ${stepperStatus.generalDetailsStepperStatus === 'active' ||
                stepperStatus.generalDetailsStepperStatus === 'completed'
                ? styles.modernActive
                : styles.modernInactive
                } ${styles.modernCursor}`}
              onClick={() => handleStepClick('generalDetails')}
            >
              <div className={styles.modernStepCounter}>
                {stepperStatus.generalDetailsStepperStatus === 'completed' ? (
                  <div className={styles.modernStepperCompleted}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : (
                  <div
                    className={
                      stepperStatus.generalDetailsStepperStatus === 'active'
                        ? styles.modernStepNumberSelected
                        : styles.modernStepNumber
                    }
                  >
                    1
                  </div>
                )}
              </div>
              <div className={styles.modernStepName}>Company Details</div>
              <div className={styles.modernStepDescription}>Basic information</div>
            </div>

            <div className={styles.modernStepperConnector}>
              <div className={styles.connectorLine}></div>
            </div>

            <div
              className={`${styles.modernStepperItem} ${stepperStatus.featuresStepperStatus === 'active' ||
                stepperStatus.featuresStepperStatus === 'completed'
                ? styles.modernActive
                : styles.modernInactive
                } ${stepperStatus.generalDetailsStepperStatus === 'completed' ? styles.modernCursor : styles.modernDisabled}`}
              onClick={() => handleStepClick('features')}
            >
              <div className={styles.modernStepCounter}>
                {stepperStatus.featuresStepperStatus === 'completed' ? (
                  <div className={styles.modernStepperCompleted}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ) : (
                  <div
                    className={
                      stepperStatus.featuresStepperStatus === 'active'
                        ? styles.modernStepNumberSelected
                        : styles.modernStepNumber
                    }
                  >
                    2
                  </div>
                )}
              </div>
              <div className={styles.modernStepName}>Features</div>
              <div className={styles.modernStepDescription}>Select services</div>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className={styles.modernContentArea}>
          {currentStep === 'generalDetails' && (
            <GeneralDetails onNext={handleNextStep} />
          )}

          {currentStep === 'features' && (
            <Features />
          )}

          {currentStep === 'paymentSuccess' && (
            <PaymentConfirmationSuccess />
          )}

          {currentStep === 'paymentFailure' && (
            <PaymentConfirmationFailure />
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration; 