"use client";
import React, { useEffect, useState } from 'react';
import { Card, Typography, Button, Space, Result, message } from 'antd';
import { CheckCircleOutlined, HomeOutlined, RocketOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import {
  addAdminUser,
  coreMasterSaas,
  createOrganizationMaster,
  disableMenuInfo,
  getMailCredential,
  saveGST,
  savePAN,
  savePaymentInfo,
  sendLoginInfoMail,
} from '../api_helpers';
import styles from '../onboarding.module.scss';

const { Title, Text, Paragraph } = Typography;

const PaymentConfirmationSuccess = () => {
  const router = useRouter();
  const [profileDetails, setProfileDetails] = useState(null);
  const [planDetails, setPlanDetails] = useState(null);
  const [saveClientPaymentInfo, setPaymentInfo] = useState(null);
  const [linkIdInfo, setLinkIdInfo] = useState(null);
  const [userIds, setUserIds] = useState([]);
  const [orgId, setOrgId] = useState(null);
  const [companyEmail, setCompanyEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split("T")[0];

  useEffect(() => {
    // Retrieve CompanyInfo from local storage
    const storedCompanyInfo = localStorage.getItem("CompanyInfo");
    const CompanyInfo = storedCompanyInfo ? JSON.parse(storedCompanyInfo) : null;

    // Safely set the email state if available
    if (CompanyInfo?.email) {
      setCompanyEmail(CompanyInfo.email);
    }
  }, []);

  useEffect(() => {
    const generalDetails = localStorage.getItem("GeneralDetails");
    if (generalDetails) {
      setProfileDetails(JSON.parse(generalDetails));
    }

    const featureDetails = localStorage.getItem("formData");
    if (featureDetails) {
      setPlanDetails(JSON.parse(featureDetails));
    }

    const paymentDetails = localStorage.getItem("Payment Status");
    if (paymentDetails) {
      setPaymentInfo(JSON.parse(paymentDetails));
    }

    const linkId = localStorage.getItem("Link Id");
    if (linkId) {
      setLinkIdInfo(JSON.parse(linkId));
    }
  }, []);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);

        // Retrieve generalDetails and formData from local storage
        const storedDetails = localStorage.getItem("GeneralDetails");
        const generalDetails = storedDetails ? JSON.parse(storedDetails) : null;
        const formData = localStorage.getItem("formData");
        const data = formData ? JSON.parse(formData) : {};

        const getLinkIdInfo = () => {
          const linkIdJson = localStorage.getItem("Link Id");
          return linkIdJson ? JSON.parse(linkIdJson) : "";
        };

        const linkIdInfo = getLinkIdInfo();
        const sanitizedLinkId = linkIdInfo.replace(/^"|"$/g, "");

        const paymentDetails = localStorage.getItem("Payment Status");
        let paymentStatus = null;

        if (paymentDetails) {
          paymentStatus = JSON.parse(paymentDetails);
        }

        const userInfo = {
          name: generalDetails?.organisationName || "",
          panCardNo: generalDetails?.panCardNo || "",
          gstNo: generalDetails?.gstNo || "",
          code: undefined,
          industry_id: "1",
          file: undefined,
          services: [1],
          type_id: 1,
          backgroundColor: null,
          effective_date: formattedDate,
        };

        const response = await createOrganizationMaster(userInfo);

        if (response) {
          const orgId = response.org_id;
          setOrgId(orgId);

          const adminInfo = {
            org_id: JSON.stringify(orgId),
            first_name: generalDetails?.keyholderName || "",
            email: generalDetails?.email || "",
            contact: [
              {
                mobile_no: generalDetails?.phoneNumber || "",
                is_otp: "0",
                is_whatsapp: "0",
              },
              {},
            ],
          };

          const user = await addAdminUser(adminInfo);
          await coreMasterSaas(adminInfo);

          if (user || !user) {
            const getMailInfo = await getMailCredential();

            const mail_users = getMailInfo.mail_users;
            const userIds = mail_users
              .filter((user) => user.org_id === orgId)
              .map((user) => user.user_id);

            setUserIds(userIds);

            const mailInfo = {
              process_id: "62",
              menu_id: "192",
              user_ids: userIds,
            };

            // Save PAN information
            const panInfo = {
              org_id: JSON.stringify(orgId),
              pan_no: generalDetails?.panCardNo || 0,
            };

            localStorage.setItem("PanInfo", JSON.stringify(panInfo));
            console.log("Saving payment info with:", panInfo);
            await savePAN(panInfo);

            // Save GST information
            const gstInfo = {
              organization_id: JSON.stringify(orgId),
              gst_no: generalDetails?.gstNo || "0",
            };

            localStorage.setItem("GSTInfo", JSON.stringify(gstInfo));
            console.log("Saving payment info with:", gstInfo);
            await saveGST(gstInfo);

            // Save payment information
            const paymentInfo = {
              OrgId: JSON.stringify(orgId),
              BillingCycle: data?.plan || "",
              Amount: data?.totalAmount ? data.totalAmount.toString() : "0",
              Response: paymentStatus,
              linkId: sanitizedLinkId,
              taxableCount: generalDetails?.taxableEmployees || 0,
              nontaxablecount: generalDetails?.nonTaxableEmployees || 0,
            };

            localStorage.setItem("PaymentInfo", JSON.stringify(paymentInfo));
            console.log("Saving payment info with:", paymentInfo);
            await savePaymentInfo(paymentInfo);

            await sendLoginInfoMail(mailInfo);

            // Disable menu items based on formData
            console.log("Calling disableMenuInfo with org_id:", orgId);
            const DisabledMenuIds = [];

            if (!data.is_fbp) {
              DisabledMenuIds.push(
                58, 59, 60, 116, 117, 119, 120, 555, 556, 557, 559, 560, 558
              );
            }
            if (!data.isLoans) {
              DisabledMenuIds.push(78, 167, 168, 169, 170, 565, 566);
            }
            if (!data.isPQ) {
              DisabledMenuIds.push(25, 65, 108, 525, 526);
            }
            if (!data.isWorkFlow) {
              DisabledMenuIds.push(17, 50);
            }
            if (!data.isOT) {
              DisabledMenuIds.push(77);
            }
            if (!data.isTemp) {
              DisabledMenuIds.push(524);
            }

            const disableMenuPayload = {
              DisabledMenuIds,
              OrgId: orgId,
            };

            await disableMenuInfo(disableMenuPayload);
            console.log("disableMenuInfo API call successful");
          }
        }

        setLoading(false);
        message.success('Account setup completed successfully!');

        // Clear localStorage after successful setup
        setTimeout(() => {
          localStorage.clear();
        }, 2000);

      } catch (error) {
        setLoading(false);
        console.error("Error during organization creation or subsequent calls", error);
        message.error('Error setting up account. Please contact support.');
      }
    };

    fetchDetails();
  }, []);

  const handleGoHome = () => {
    router.push('/');
  };

  const handleGetStarted = () => {
    const externalUrl = "https://ezii.co.in/log-in/";
    window.open(externalUrl, "_blank");
  };

  if (loading) {
    return (
      <div className={styles.successContainer}>
        <Card className={styles.successCardSmall}>
          <Result
            status="info"
            title={<Title level={3}>Setting up your account...</Title>}
            subTitle="Please wait while we configure your organization and user settings."
          />
        </Card>
      </div>
    );
  }

  return (
    <div className={styles.successContainer}>
      <Card className={styles.successCardSmall}>
        <Result
          status="success"
          icon={<CheckCircleOutlined className={styles.successIconSmall} />}
          title={
            <Title level={3} className={styles.successTitleSmall}>
              Payment Successful!
            </Title>
          }
          subTitle={
            <div className={styles.successSubtitleSmall}>
              <Text type="secondary" className={styles.successMessageSmall}>
                Welcome to Ezii! Your account has been successfully activated.
              </Text>
              <Paragraph className={styles.successDetailsSmall}>
                Login credentials have been sent to {companyEmail}.
              </Paragraph>

              {/* Subscription Details */}
              <div className={styles.subscriptionDetailsSmall}>
                <Title level={5}>Subscription Details</Title>
                <div className={styles.subscriptionRowSmall}>
                  <Text>Plan:</Text>
                  <Text strong>{planDetails?.plan}</Text>
                </div>
                <div className={styles.subscriptionRowSmall}>
                  <Text>Amount:</Text>
                  <Text strong>₹{planDetails?.totalAmount}</Text>
                </div>
              </div>
            </div>
          }
          extra={[
            <Space key="actions" size="middle">
              <Button
                type="primary"
                size="middle"
                icon={<RocketOutlined />}
                onClick={handleGetStarted}
                className={styles.getStartedButtonSmall}
              >
                Continue to Login
              </Button>
              <Button
                size="middle"
                icon={<HomeOutlined />}
                onClick={handleGoHome}
                className={styles.homeButtonSmall}
              >
                Go to Home
              </Button>
            </Space>
          ]}
        />
      </Card>
    </div>
  );
};

export default PaymentConfirmationSuccess; 