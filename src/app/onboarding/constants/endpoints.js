const apiUrl = 'https://dev-api.resolveindia.com';

export const API_ENDPOINTS = {
  // Payment endpoints
  CONFIRM_PAYMENT: `${apiUrl}/organization/confirm-payment`,
  PAYMENT_STATUS: `${apiUrl}/organization/payment-status`,
  
  // Organization endpoints
  CREATE_ORGANIZATION_MASTER: `${apiUrl}/organization/master-sass`,
  ADD_ADMIN_USER: `${apiUrl}/organization/admin-master-sass`,
  CORE_MASTER_SAAS: `${apiUrl}/organization/core-master-sass`,
  
  // Company info endpoints
  SAVE_COMPANY_INFO: `${apiUrl}/organization/company-info`,
  SAVE_HEAD_COUNT_INFO: `${apiUrl}/organization/headcount-info`,
  SAVE_VALIDATE_INFO: `${apiUrl}/organization/validate-info`,
  DISABLE_MENU_INFO: `${apiUrl}/organization/disable-menu`,
  VALIDATE_ORGANIZATION: `${apiUrl}/organization/validate-organization`,
  
  // Business type and industry endpoints
  GET_BUSINESS_TYPE: `${apiUrl}/organization/masters-saas/type`,
  GET_INDUSTRY_TYPE: `${apiUrl}/organization/masters-saas/industry`,
  
  // Document endpoints
  SAVE_PAN: `${apiUrl}/organization/save-pan`,
  SAVE_GST: `${apiUrl}/organization/save-gst`,
  SAVE_PAYMENT_INFO: `${apiUrl}/organization/save-payment-info`,
  
  // Email endpoints
  GET_MAIL_CREDENTIAL: `${apiUrl}/organization/mail-credential`,
  SEND_LOGIN_INFO_MAIL: `${apiUrl}/organization/send-login-mail`,
};

export default API_ENDPOINTS; 