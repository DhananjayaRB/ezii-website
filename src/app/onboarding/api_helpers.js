const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://dev-api.resolveindia.com';

export async function confirmPayment(payload) {
  const response = await fetch(`${apiUrl}/organization/confirm-payment`, {
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
    `${apiUrl}/organization/payment-status/${link_id}`,
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

  const response = await fetch(`${apiUrl}/organization/master-sass`, {
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
  const response = await fetch(`${apiUrl}/organization/admin-master-sass`, {
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
  const response = await fetch(`${apiUrl}/organization/core-master-sass`, {
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
  const response = await fetch(
    `${apiUrl}/organization/mail-credential-sass/4/0`,
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

export async function sendLoginInfoMail(payload) {
  const response = await fetch(`${apiUrl}/organization/mail-credential-sass`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function savePAN(payload) {
  const response = await fetch(`${apiUrl}/organization/save-pan`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function saveGST(payload) {
  const response = await fetch(`${apiUrl}/organization/save-gst`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function savePaymentInfo(payload) {
  const response = await fetch(`${apiUrl}/organization/save-saas`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

export async function getBusinessType() {
  const response = await fetch(`${apiUrl}/organization/masters-saas/type`, {
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
  const response = await fetch(`${apiUrl}/organization/masters-saas/industry`, {
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
  const response = await fetch(`${apiUrl}/organization/enquiry-info`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.text();
  return data;
}

export async function saveHeadCountInfo(payload) {
  const response = await fetch(`${apiUrl}/organization/calculate-pricing`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  
  const data = await response.text();
  return data;
}

export async function saveValidateInfo(payload) {
  const response = await fetch(`${apiUrl}/organization/validate-organization`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return data;
}

export async function disableMenuInfo(payload) {
  const response = await fetch(`${apiUrl}/organization/disable-menu-access`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.text();
  return data;
}

export async function validateOrganization(payload) {
  const response = await fetch(`${apiUrl}/organization/validate-organization`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  return data;
} 