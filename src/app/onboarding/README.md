# Onboarding Implementation

This directory contains a complete onboarding flow implementation for the Ezii web application, migrated from a separate project and integrated with Redux state management.

## Features

### 1. **Conditional Rendering**
- Single page application with conditional rendering based on current step
- Smooth transitions between different onboarding phases
- Stepper navigation with progress indicators

### 2. **State Management**
- **Redux Toolkit** for centralized state management
- **Redux Persist** for data persistence across sessions
- Organized state structure for all onboarding data

### 3. **Multi-Step Flow**
- **Step 1: General Details** - Company information collection
- **Step 2: Features** - Feature selection and pricing
- **Step 3: Payment** - Payment processing and confirmation
- **Step 4: Success/Failure** - Payment result pages

### 4. **Form Validation**
- Real-time validation for all form fields
- PAN card format validation
- Email and phone number validation
- Required field validation

### 5. **Feature Selection**
- Interactive feature toggles
- Dynamic pricing calculations
- Multiple subscription plans (Monthly, Quarterly, Half-Yearly, Annual)
- GST calculations and discounts

### 6. **Payment Integration**
- Payment gateway integration
- Payment status monitoring
- Success/failure handling
- Menu disabling based on selected features

## File Structure

```
src/app/onboarding/
├── page.js                          # Main onboarding page
├── README.md                        # This documentation
├── onboarding.module.scss           # Styling for the onboarding flow
├── api_helpers.js                   # API functions for backend communication
├── constants/
│   └── endpoints.js                 # API endpoint constants
├── store/
│   ├── index.js                     # Redux store configuration
│   └── onboardingSlice.js           # Redux slice for onboarding state
└── components/
    ├── Registration.js              # Main container component
    ├── GeneralDetails.js            # Company information form
    ├── Features.js                  # Feature selection and pricing
    ├── PaymentConfirmationSuccess.js # Success page
    ├── PaymentConfirmationFailure.js # Failure page
    └── SpinnerComponent.js          # Loading spinner
```

## State Structure

### Redux State
```javascript
{
  onboarding: {
    // Stepper status
    stepperStatus: {
      generalDetailsStepperStatus: 'active' | 'completed' | 'inactive',
      featuresStepperStatus: 'active' | 'completed' | 'inactive'
    },
    
    // Form data
    generalDetails: {
      organisationName: string,
      businessType: string,
      industry: string,
      // ... other form fields
    },
    
    // Features selection
    features: {
      isFbp: boolean,
      isWorkFlow: boolean,
      isLoans: boolean,
      // ... other features
    },
    
    // Pricing data
    pricing: {
      headcountPricing: string,
      activeTab: 'Monthly' | 'Quarterly' | 'Half-Yearly' | 'Annual',
      amounts: {
        monthlyAmount: number,
        quarterlyAmount: number,
        // ... other amounts
      }
    },
    
    // Current step
    currentStep: 'generalDetails' | 'features' | 'paymentSuccess' | 'paymentFailure',
    
    // Loading state
    loading: boolean
  }
}
```

## API Endpoints

All API endpoints are centralized in `constants/endpoints.js`:

- **Payment**: `CONFIRM_PAYMENT`, `PAYMENT_STATUS`
- **Organization**: `CREATE_ORGANIZATION_MASTER`, `ADD_ADMIN_USER`
- **Company Info**: `SAVE_COMPANY_INFO`, `SAVE_HEAD_COUNT_INFO`
- **Business Data**: `GET_BUSINESS_TYPE`, `GET_INDUSTRY_TYPE`
- **Validation**: `SAVE_VALIDATE_INFO`, `DISABLE_MENU_INFO`

## Usage

### 1. **Installation**
```bash
npm install
```

### 2. **Environment Variables**
Set the API URL in your environment:
```env
NEXT_PUBLIC_API_URL=https://your-api-domain.com
```

### 3. **Access the Onboarding**
Navigate to `/onboarding` in your application.

### 4. **Flow**
1. User fills in company details
2. User selects desired features
3. User chooses subscription plan
4. User completes payment
5. User sees success/failure confirmation

## Styling

The onboarding uses:
- **SCSS Modules** for component-specific styling
- **Bootstrap** for responsive grid and components
- **Custom CSS classes** for specific design requirements
- **Poppins font** for typography

## Dependencies

- `@reduxjs/toolkit` - Redux state management
- `react-redux` - React Redux bindings
- `redux-persist` - State persistence
- `react-bootstrap` - UI components
- `bootstrap` - CSS framework
- `sass` - SCSS compilation

## Customization

### Adding New Features
1. Add feature state to `onboardingSlice.js`
2. Add feature UI to `Features.js`
3. Update pricing calculations if needed
4. Add feature to payment payload

### Modifying API Endpoints
1. Update `constants/endpoints.js`
2. Modify corresponding API functions in `api_helpers.js`

### Styling Changes
1. Modify `onboarding.module.scss`
2. Update component-specific styles

## Notes

- The implementation maintains backward compatibility with localStorage
- All form data is persisted using Redux Persist
- Payment status is monitored with polling
- Feature selection affects menu availability in the main application
- Responsive design works on all device sizes 