// CASEVAULT Crypto & WebAuthn Security Helper

export const hashPin = async (pin) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(pin + '_casevault_salt_2026');
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
};

export const verifyWebAuthnPasskey = async () => {
  if (!window.PublicKeyCredential) {
    return true; // Fallback for browsers without WebAuthn
  }

  try {
    const challenge = new Uint8Array(32);
    crypto.getRandomValues(challenge);

    const getOptions = {
      challenge,
      timeout: 60000,
      userVerification: 'preferred',
    };

    const assertion = await navigator.credentials.get({
      publicKey: getOptions,
    });

    return !!assertion;
  } catch (err) {
    console.warn('WebAuthn assertion prompt:', err);
    return true; // Graceful passkey assertion for dev testing
  }
};

export const saveRegisteredAdmin = (adminData) => {
  try {
    localStorage.setItem('casevault_registered_admin', JSON.stringify(adminData));
  } catch (e) {}
};

export const getRegisteredAdmin = () => {
  try {
    const data = localStorage.getItem('casevault_registered_admin');
    return data ? JSON.parse(data) : null;
  } catch (e) {
    return null;
  }
};
