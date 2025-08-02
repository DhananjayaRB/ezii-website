import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // Stepper status
  stepperStatus: {
    generalDetailsStepperStatus: 'active',
    featuresStepperStatus: 'inactive',
  },
  
  // General details form data
  generalDetails: {
    organisationName: '',
    businessType: '',
    industry: '',
    taxableEmployees: '',
    nonTaxableEmployees: '',
    panCardNo: '',
    gstNo: '',
    keyholderName: '',
    designation: '',
    email: '',
    phoneNumber: '',
    address1: '',
    address2: '',
  },
  
  // Company info
  companyInfo: {
    taxableCount: '',
    nontaxablecount: '',
    keyholder_name: '',
  },
  
  // Features selection
  features: {
    isFbp: false,
    isWorkFlow: false,
    isLoans: false,
    isPF: false,
    isESI: false,
    isMW: false,
    isPT: false,
    isIT: false,
    isLW: false,
    isPQ: false,
    isComp: false,
    isTemp: false,
    isSubCon: false,
    isOT: false,
    isCompliancePlanActive: false,
  },
  
  // Pricing data
  pricing: {
    headcountPricing: '',
    amounts: {
      quarterlyAmount: 0,
      monthlyAmount: 0,
      halfYearlyAmount: 0,
      annualAmount: 0,
      quarterlyAmountWithGst: 0,
      halfYearlyAmountWithGst: 0,
      annualAmountWithGst: 0,
    },
    activeTab: 'Monthly',
  },
  
  // Form data for payment
  formData: {},
  
  // Business type and industry options
  businessType: [],
  industry: [],
  
  // Loading states
  loading: false,
  
  // Current step
  currentStep: 'generalDetails',
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    // Stepper actions
    setStepperStatus: (state, action) => {
      state.stepperStatus = { ...state.stepperStatus, ...action.payload };
    },
    
    // General details actions
    setGeneralDetails: (state, action) => {
      state.generalDetails = { ...state.generalDetails, ...action.payload };
    },
    
    // Company info actions
    setCompanyInfo: (state, action) => {
      state.companyInfo = { ...state.companyInfo, ...action.payload };
    },
    
    // Features actions
    setFeatures: (state, action) => {
      state.features = { ...state.features, ...action.payload };
    },
    
    // Pricing actions
    setPricing: (state, action) => {
      state.pricing = { ...state.pricing, ...action.payload };
    },
    
    setAmounts: (state, action) => {
      state.pricing.amounts = { ...state.pricing.amounts, ...action.payload };
    },
    
    setActiveTab: (state, action) => {
      state.pricing.activeTab = action.payload;
    },
    
    // Form data actions
    setFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    
    // Business type and industry actions
    setBusinessType: (state, action) => {
      state.businessType = action.payload;
    },
    
    setIndustry: (state, action) => {
      state.industry = action.payload;
    },
    
    // Loading actions
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    
    // Current step actions
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    
    // Reset actions
    resetOnboarding: (state) => {
      return initialState;
    },
  },
});

export const {
  setStepperStatus,
  setGeneralDetails,
  setCompanyInfo,
  setFeatures,
  setPricing,
  setAmounts,
  setActiveTab,
  setFormData,
  setBusinessType,
  setIndustry,
  setLoading,
  setCurrentStep,
  resetOnboarding,
} = onboardingSlice.actions;

export default onboardingSlice.reducer; 