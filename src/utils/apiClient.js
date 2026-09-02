// CASEVAULT API Client Helper

const API_BASE_URL = 'http://localhost:5001/api';

export const postVerifyIdCard = async (identityId) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/verify-id-card`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identityId }),
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: 'SQLite database connection offline.' };
  }
};

export const postVerifyPin = async (pinData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/verify-pin`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(pinData),
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: 'SQLite database connection offline.' };
  }
};

export const postVerifyBiometric = async (bioData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/auth/verify-biometric`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(bioData),
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: 'SQLite database connection offline.' };
  }
};

export const postConfirmIdentity = async (identityData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/admin/confirm-identity`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(identityData),
    });
    return await res.json();
  } catch (err) {
    return { success: false, message: 'SQLite database connection offline.' };
  }
};
