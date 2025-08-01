
export const contactFormFieldsForHomePage = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      isRequired: true,
      minLength: 2
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email Address',
      isRequired: true
    },
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Mobile Number',
      isRequired: true
    },
    {
      name: 'companyName',
      type: 'text',
      placeholder: 'Company Name',
      isRequired: true,
      minLength: 2
    },
    {
      name: 'service',
      type: 'select',
      placeholder: 'Select Service',
      isRequired: true,
      options: [
        'Payroll Management',
        'Leave Management',
        'Attendance Management',
        'Custom Payroll Solutions',
        'Technical Support',
        'Partnership or Collaboration',
        'General Inquiry',
        'Feedback or Complaints'
      ]
    },
    {
      name: 'designation',
      type: 'text',
      placeholder: 'Designation (Optional)',
      isRequired: false,
      minLength: 2
    },
    {
      name: 'description',
      type: 'textarea',
      placeholder: 'Brief Description (Optional)',
      isRequired: false,
      minLength: 10
    },

];

export const contactFormFieldsForBecomePartnerPage = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      isRequired: true,
      minLength: 2
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email Address',
      isRequired: true
    },
    {
      name: 'phone',
      type: 'tel',
      placeholder: 'Mobile Number',
      isRequired: true
    },
    {
      name: 'companyName',
      type: 'text',
      placeholder: 'Company Name',
      isRequired: true,
      minLength: 2
    },
    {
      name: 'description',
      type: 'textarea',
      placeholder: 'Brief Description (Optional)',
      isRequired: false,
      minLength: 10
    },

];




