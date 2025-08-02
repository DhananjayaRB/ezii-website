import API_ENDPOINTS from './constants/endpoints';

export async function confirmPayment(payload) {
  const response = await fetch(API_ENDPOINTS.CONFIRM_PAYMENT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function paymentStatus(link_id) {
  const response = await fetch(
    `${API_ENDPOINTS.PAYMENT_STATUS}/${link_id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function createOrganizationMaster(payload) {
  const formData = new FormData();

  for (const key in payload) {
    if (key === "services") {
      formData.append(key, `{${payload[key].toString()}}`);
    } else if (Array.isArray(payload[key])) {
      payload[key].forEach((item) => formData.append(`${key}[]`, item));
    } else if (typeof payload[key] === "object") {
      formData.append(key, JSON.stringify(payload[key]));
    } else {
      formData.append(key, payload[key]);
    }
  }

  const response = await fetch(API_ENDPOINTS.CREATE_ORGANIZATION_MASTER, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function addAdminUser(payload) {
  const response = await fetch(API_ENDPOINTS.ADD_ADMIN_USER, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.text();
  return data;
}

export async function coreMasterSaas(payload) {
  const response = await fetch(API_ENDPOINTS.CORE_MASTER_SAAS, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.text();
  return data;
}

export async function getMailCredential() {
  const response = await fetch(API_ENDPOINTS.GET_MAIL_CREDENTIAL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function sendLoginInfoMail(payload) {
  const response = await fetch(API_ENDPOINTS.SEND_LOGIN_INFO_MAIL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function savePAN(payload) {
  const response = await fetch(API_ENDPOINTS.SAVE_PAN, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function saveGST(payload) {
  const response = await fetch(API_ENDPOINTS.SAVE_GST, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function savePaymentInfo(payload) {
  const response = await fetch(API_ENDPOINTS.SAVE_PAYMENT_INFO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function getBusinessType() {
  const response = await fetch(API_ENDPOINTS.GET_BUSINESS_TYPE, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function getIndustryType() {
  const response = await fetch(API_ENDPOINTS.GET_INDUSTRY_TYPE, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function saveCompanyInfo(payload) {
  const response = await fetch(API_ENDPOINTS.SAVE_COMPANY_INFO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function saveHeadCountInfo(payload) {
  const response = await fetch(API_ENDPOINTS.SAVE_HEAD_COUNT_INFO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function saveValidateInfo(payload) {
  const response = await fetch(API_ENDPOINTS.SAVE_VALIDATE_INFO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function disableMenuInfo(payload) {
  const response = await fetch(API_ENDPOINTS.DISABLE_MENU_INFO, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error posting data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
} 