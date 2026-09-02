// CASEVAULT SQLite Database Config & Table Initializer

import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbPath = path.resolve(__dirname, '../casevault.db');

export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('[CASEVAULT SQLITE ERROR] Failed to connect to SQLite database:', err.message);
  } else {
    console.log(`[CASEVAULT DB] Connected to SQLite database at: ${dbPath}`);
  }
});

// Helper for Promisified Queries
export const dbQuery = {
  get: (sql, params = []) =>
    new Promise((resolve, reject) => {
      db.get(sql, params, (err, row) => (err ? reject(err) : resolve(row)));
    }),

  all: (sql, params = []) =>
    new Promise((resolve, reject) => {
      db.all(sql, params, (err, rows) => (err ? reject(err) : resolve(rows)));
    }),

  run: (sql, params = []) =>
    new Promise((resolve, reject) => {
      db.run(sql, params, function (err) {
        err ? reject(err) : resolve({ id: this.lastID, changes: this.changes });
      });
    }),
};

// Clear All Existing Data from SQLite Database
export const clearDatabaseData = async () => {
  try {
    await dbQuery.run('DELETE FROM administrators');
    await dbQuery.run('DELETE FROM audit_logs');
    console.log('[CASEVAULT DB] Purged all existing test data from SQLite database.');
  } catch (err) {
    console.error('Failed to clear database data:', err.message);
  }
};

// Initialize SQLite Database Tables
export const initDatabase = async () => {
  try {
    // 1. Administrators Table
    await dbQuery.run(`
      CREATE TABLE IF NOT EXISTS administrators (
        id TEXT PRIMARY KEY,
        full_name TEXT NOT NULL,
        identity_id TEXT UNIQUE NOT NULL,
        department TEXT,
        institution TEXT,
        role TEXT DEFAULT 'Administrator',
        email TEXT,
        phone TEXT,
        identity_card_registered INTEGER DEFAULT 1,
        identity_card_status TEXT DEFAULT 'registered',
        pin_configured INTEGER DEFAULT 1,
        password_hash TEXT,
        biometric_enrolled INTEGER DEFAULT 1,
        account_status TEXT DEFAULT 'active',
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        updated_at TEXT DEFAULT CURRENT_TIMESTAMP
      )
    `);

    // 2. Audit Logs Table
    await dbQuery.run(`
      CREATE TABLE IF NOT EXISTS audit_logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id TEXT DEFAULT 'SYSTEM',
        user_name TEXT DEFAULT 'System',
        role TEXT DEFAULT 'Administrator',
        action TEXT NOT NULL,
        result TEXT DEFAULT 'SUCCESS',
        timestamp TEXT DEFAULT CURRENT_TIMESTAMP,
        ip_address TEXT DEFAULT '127.0.0.1',
        details TEXT
      )
    `);

    console.log('[CASEVAULT DB] SQLite tables (administrators, audit_logs) initialized successfully.');
  } catch (err) {
    console.error('[CASEVAULT DB ERROR] Error initializing SQLite tables:', err.message);
  }
};

export const getDbStatus = () => true;
