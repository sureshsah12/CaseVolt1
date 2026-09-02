// CASEVAULT Express Server - SQLite Database Engine

import express from 'express';
import cors from 'cors';
import { initDatabase } from './config/database.js';
import adminRoutes from './routes/adminRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();
const PORT = process.env.PORT || 5001;

// Global Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Initialize SQLite Database Tables
initDatabase();

// Mount Routes
app.use('/api/admin', adminRoutes);
app.use('/api/auth', authRoutes);

// Health Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    databaseEngine: 'SQLite 3',
    databaseConnected: true,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`[CASEVAULT BACKEND] Express HTTP server running with SQLite database at http://localhost:${PORT}`);
});
