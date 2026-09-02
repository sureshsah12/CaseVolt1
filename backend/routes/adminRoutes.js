// CASEVAULT Express Administrator Management API Routes - SQLite Engine

import express from 'express';
import { dbQuery } from '../config/database.js';

const router = express.Router();

const formatAdminRow = (row) => {
  if (!row) return null;
  return {
    id: row.id,
    fullName: row.full_name,
    identityId: row.identity_id,
    department: row.department,
    institution: row.institution,
    role: row.role,
    email: row.email,
    phone: row.phone,
    identityCardRegistered: Boolean(row.identity_card_registered),
    pinConfigured: Boolean(row.pin_configured),
    biometricEnrolled: Boolean(row.biometric_enrolled),
    accountStatus: row.account_status,
  };
};

// GET /api/admin/current - Fetch Registered Administrator
router.get('/current', async (req, res) => {
  try {
    const row = await dbQuery.get("SELECT * FROM administrators WHERE account_status = 'active' ORDER BY created_at DESC LIMIT 1");
    if (!row) {
      return res.status(200).json({ success: true, admin: null, message: 'No registered administrator found in SQLite.' });
    }
    return res.status(200).json({ success: true, admin: formatAdminRow(row) });
  } catch (err) {
    return res.status(500).json({ success: false, message: 'SQLite database query failed.' });
  }
});

// POST /api/admin/confirm-identity - Save Confirmed Officer Profile & Hash to SQLite
router.post('/confirm-identity', async (req, res) => {
  try {
    const { name, id, department, institution, role, email, phone, pinHash } = req.body;

    if (!name || !id) {
      return res.status(400).json({ success: false, message: 'Name and Identity ID are required.' });
    }

    const cleanId = id.trim();
    const existing = await dbQuery.get('SELECT * FROM administrators WHERE identity_id = ?', [cleanId]);

    if (!existing) {
      await dbQuery.run(
        `INSERT INTO administrators (id, full_name, identity_id, department, institution, role, email, phone, identity_card_registered, identity_card_status, pin_configured, password_hash, biometric_enrolled)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, 1, 'registered', 1, ?, 1)`,
        [`ADM-${Date.now()}`, name, cleanId, department || '', institution || '', role || 'Administrator', email || '', phone || '', pinHash || '']
      );
    } else {
      await dbQuery.run(
        `UPDATE administrators SET full_name = ?, department = ?, institution = ?, role = ?, email = ?, phone = ?, identity_card_registered = 1, identity_card_status = 'registered', pin_configured = 1, password_hash = COALESCE(?, password_hash), biometric_enrolled = 1 WHERE identity_id = ?`,
        [name, department || existing.department, institution || existing.institution, role || existing.role, email || existing.email, phone || existing.phone, pinHash || null, cleanId]
      );
    }

    const updatedRow = await dbQuery.get('SELECT * FROM administrators WHERE identity_id = ?', [cleanId]);

    // Save SQLite Audit Log
    await dbQuery.run(
      `INSERT INTO audit_logs (user_id, user_name, role, action, result, details)
       VALUES (?, ?, ?, 'IDENTITY_CARD_REGISTERED', 'SUCCESS', ?)`,
      [cleanId, name, role || 'Administrator', `Identity Card registered in SQLite for ${name} (${cleanId})`]
    );

    return res.status(200).json({ success: true, admin: formatAdminRow(updatedRow), message: 'Identity confirmed and saved to SQLite database.' });
  } catch (err) {
    console.error('SQLite confirm identity error:', err);
    return res.status(500).json({ success: false, message: 'Failed to save administrator to SQLite database.' });
  }
});

export default router;
