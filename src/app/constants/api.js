// API Configuration
export const API_BASE_URL = 'https://uat-api.resolveindia.com';

// API Endpoints
export const API_ENDPOINTS = {
  PRODUCT_TYPES: '/organization/product-types',
  SUBMIT_CLIENT: '/organization/submit-client',
};

// API Helper Functions
export const apiHelper = {
  // Fetch product types from API
  async getProductTypes() {
    try {
      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.PRODUCT_TYPES}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      // Error fetching product types
      // Return fallback data in case of API failure
      return [
        'Payroll Management',
        'Leave Management',
        'Attendance Management',
        'Custom Payroll Solutions',
        'Technical Support',
        'Partnership or Collaboration',
        'General Inquiry',
        'Feedback or Complaints'
      ];
    }
  },

  // Submit contact form data
  async submitContactForm(formData) {
    try {
      const payload = {
        email: formData.email,
        phone: formData.phone,
        name: formData.name,
        company_name: formData.companyName,
        service_type: formData.service ? formData.service.toLowerCase().replace(/\s+/g, '_') : 'general_inquiry'
      };

      const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.SUBMIT_CLIENT}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        // API Error Response
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Check if response is JSON or text
      const contentType = response.headers.get('content-type');
      let data;

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
      } else {
        const textData = await response.text();
        data = { message: textData };
      }

      return { success: true, data };
    } catch (error) {
      // Error submitting contact form
      throw error;
    }
  },

  // Generic API call function
  async makeApiCall(endpoint, options = {}) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      // API call failed
      throw error;
    }
  }
};

// Export default API helper
export default apiHelper; 