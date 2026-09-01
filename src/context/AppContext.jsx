import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_USERS, INITIAL_CASES, INITIAL_DOCUMENTS, INITIAL_AUDIT_LOGS } from '../data/mockData';
import { computeSHA256, generateDocId, generateCaseId, formatDateTime } from '../utils/cryptoUtils';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Authentication & Current User
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = localStorage.getItem('casevault_user');
    return saved ? JSON.parse(saved) : INITIAL_USERS[1]; // Default to Inspector Sharma (Senior Officer) or Police Officer
  });

  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Core Data Stores
  const [cases, setCases] = useState(() => {
    const saved = localStorage.getItem('casevault_cases');
    return saved ? JSON.parse(saved) : INITIAL_CASES;
  });

  const [documents, setDocuments] = useState(() => {
    const saved = localStorage.getItem('casevault_documents');
    return saved ? JSON.parse(saved) : INITIAL_DOCUMENTS;
  });

  const [auditLogs, setAuditLogs] = useState(() => {
    const saved = localStorage.getItem('casevault_audit_logs');
    return saved ? JSON.parse(saved) : INITIAL_AUDIT_LOGS;
  });

  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('casevault_users_list');
    return saved ? JSON.parse(saved) : INITIAL_USERS;
  });

  // Active Navigation & View
  const [currentPage, setCurrentPage] = useState('dashboard'); // 'dashboard', 'cases', 'case-detail', 'documents', 'doc-viewer', 'upload', 'search', 'audit', 'users', 'future-scope', 'settings'
  const [selectedCaseId, setSelectedCaseId] = useState('CASE-1024');
  const [selectedDocId, setSelectedDocId] = useState('DOC-1024-1');
  const [searchQuery, setSearchQuery] = useState('');
  const [isNewCaseModalOpen, setIsNewCaseModalOpen] = useState(false);

  // Mobile Navigation Drawer & Notifications
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [notifications, setNotifications] = useState([
    {
      id: 'notif-1',
      title: 'Supervisor Review Pending',
      message: '3 documents in CASE-1024 require final supervisory sign-off before submission to court.',
      time: '10m ago',
      type: 'warning',
      caseId: 'CASE-1024',
      read: false
    },
    {
      id: 'notif-2',
      title: 'SFSL Forensic Match Verified',
      message: 'Fingerprint match certificate uploaded and SHA-256 verified for CASE-1024.',
      time: '45m ago',
      type: 'success',
      caseId: 'CASE-1024',
      read: false
    },
    {
      id: 'notif-3',
      title: 'CERT-In Threat Advisory',
      message: 'Ransomware IOC signatures updated on State Cyber Crime Intranet node.',
      time: '2h ago',
      type: 'info',
      caseId: 'CASE-1020',
      read: true
    }
  ]);

  const openNewCaseModal = () => setIsNewCaseModalOpen(true);
  const closeNewCaseModal = () => setIsNewCaseModalOpen(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);

  const openNotifications = () => setIsNotificationsOpen(true);
  const closeNotifications = () => setIsNotificationsOpen(false);
  const toggleNotifications = () => setIsNotificationsOpen(prev => !prev);

  const markAllNotificationsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  // Tampered Documents tracking (for live demo integrity failure testing)
  const [tamperedDocs, setTamperedDocs] = useState({});

  // Toast notifications
  const [toast, setToast] = useState(null);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('casevault_cases', JSON.stringify(cases));
  }, [cases]);

  useEffect(() => {
    localStorage.setItem('casevault_documents', JSON.stringify(documents));
  }, [documents]);

  useEffect(() => {
    localStorage.setItem('casevault_audit_logs', JSON.stringify(auditLogs));
  }, [auditLogs]);

  useEffect(() => {
    localStorage.setItem('casevault_users_list', JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('casevault_user', JSON.stringify(currentUser));
    }
  }, [currentUser]);

  // Show Toast notification
  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Log an activity into the Audit Trail
  const logActivity = ({ action, actionBadge = 'view', documentId = '', documentName = '', caseId = '', details = '' }) => {
    const newLog = {
      id: `LOG-${Date.now().toString().slice(-4)}`,
      timestamp: formatDateTime(new Date()),
      user: currentUser ? currentUser.name : 'Authorized Officer',
      role: currentUser ? currentUser.roleLabel : 'Police Officer',
      action,
      actionBadge,
      documentId,
      documentName,
      caseId,
      details,
      ip: currentUser?.policeStation ? `${currentUser.policeStation} (Secure Gateway)` : 'Siliguri PS Intranet'
    };

    setAuditLogs(prev => [newLog, ...prev]);
  };

  // Login handler
  const loginAs = (roleKey) => {
    const user = INITIAL_USERS.find(u => u.role === roleKey) || INITIAL_USERS[0];
    setCurrentUser(user);
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
    showToast(`Logged in successfully as ${user.name} (${user.roleLabel})`, 'success');
  };

  const loginWithCredentials = (username, password) => {
    // Demo credential acceptance
    const matched = INITIAL_USERS.find(u => u.officerId.toLowerCase() === username.trim().toLowerCase()) || INITIAL_USERS[0];
    setCurrentUser(matched);
    setIsAuthenticated(true);
    setCurrentPage('dashboard');
    showToast(`Welcome back, ${matched.name}`, 'success');
  };

  const logout = () => {
    setIsAuthenticated(false);
    showToast('Logged out securely.', 'info');
  };

  // Navigation Helper
  const navigate = (page, params = {}) => {
    if (params.caseId) setSelectedCaseId(params.caseId);
    if (params.docId) setSelectedDocId(params.docId);
    if (params.query !== undefined) setSearchQuery(params.query);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Add a new case
  const addCase = (newCaseData) => {
    const caseId = generateCaseId(cases.length);
    const firNumber = newCaseData.firNumber || `FIR-2026-${1025 + cases.length}`;
    const today = new Date().toISOString().split('T')[0];

    const fullCase = {
      id: caseId,
      firNumber,
      title: newCaseData.title,
      caseType: newCaseData.caseType || 'Theft',
      policeStation: newCaseData.policeStation || currentUser?.policeStation || 'Siliguri Police Station',
      investigatingOfficer: newCaseData.investigatingOfficer || currentUser?.name || 'Inspector Sharma',
      assistingOfficer: newCaseData.assistingOfficer || 'SI Rahul Das',
      status: newCaseData.status || 'Investigation',
      priority: newCaseData.priority || 'Medium',
      dateOpened: today,
      lastUpdated: today,
      sections: newCaseData.sections || 'IPC / BNS Standard Act',
      complainant: newCaseData.complainant || 'General Informant',
      accused: newCaseData.accused || 'Under Investigation',
      summary: newCaseData.summary || 'Case registered and investigation initiated.',
      documentCount: 0
    };

    setCases(prev => [fullCase, ...prev]);

    logActivity({
      action: 'Created',
      actionBadge: 'create',
      documentId: caseId,
      documentName: `${caseId} (${fullCase.title})`,
      caseId: caseId,
      details: `New case registered at ${fullCase.policeStation} by ${currentUser?.name}.`
    });

    showToast(`Case ${caseId} created successfully!`, 'success');
    return fullCase;
  };

  // Update existing Case
  const updateCase = (caseId, updatedFields) => {
    setCases(prev => prev.map(c => {
      if (c.id === caseId) {
        const updated = { ...c, ...updatedFields, lastUpdated: new Date().toISOString().split('T')[0] };
        return updated;
      }
      return c;
    }));

    logActivity({
      action: 'Updated',
      actionBadge: 'update',
      documentId: caseId,
      documentName: `Case ${caseId}`,
      caseId: caseId,
      details: `Case details updated by ${currentUser?.name || 'Officer'}.`
    });

    showToast(`Case ${caseId} updated successfully.`, 'success');
  };

  // Add a new Document
  const addDocument = async (docData) => {
    const docId = generateDocId(documents.length);
    const today = new Date().toISOString().split('T')[0];
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

    // Calculate real SHA-256 for the content
    const content = docData.content || `CASEVAULT RECORD - ${docData.name}\nCase: ${docData.caseId}\nUploaded by: ${currentUser?.name}\nTimestamp: ${today} ${time}\nClassification: ${docData.classification || 'Internal'}\n\nDocument details verified and archived under digital chain of custody.`;
    const computedHash = await computeSHA256(content);

    const newDoc = {
      id: docId,
      caseId: docData.caseId,
      name: docData.name.endsWith('.pdf') ? docData.name : `${docData.name}.pdf`,
      docType: docData.docType || 'FIR',
      docTypeLabel: docData.docType || 'First Information Report (FIR)',
      version: 1,
      uploadedBy: currentUser?.name || 'SI Rahul Das',
      uploadedByRole: currentUser?.roleLabel || 'Police Officer',
      uploadDate: today,
      uploadTime: time,
      classification: docData.classification || 'Internal',
      status: 'Verified',
      sha256: computedHash,
      lastVerified: `${today} ${time}`,
      fileSize: docData.fileSize || '380 KB',
      pageCount: docData.pageCount || 2,
      description: docData.description || `Uploaded document for case ${docData.caseId}.`,
      content: content,
      previousVersions: []
    };

    setDocuments(prev => [newDoc, ...prev]);

    // Update document count in case
    setCases(prev => prev.map(c => {
      if (c.id === docData.caseId) {
        return { ...c, documentCount: (c.documentCount || 0) + 1, lastUpdated: today };
      }
      return c;
    }));

    logActivity({
      action: 'Uploaded',
      actionBadge: 'upload',
      documentId: docId,
      documentName: newDoc.name,
      caseId: docData.caseId,
      details: `Uploaded ${newDoc.docType} (Version 1). Generated SHA-256 Checksum: ${computedHash.substring(0, 12)}...`
    });

    showToast(`Document ${docId} uploaded & SHA-256 verified!`, 'success');
    return newDoc;
  };

  // Verify Document Integrity (Recalculates SHA-256 on active content vs registered hash)
  const verifyDocumentIntegrity = async (docId) => {
    const doc = documents.find(d => d.id === docId);
    if (!doc) return { verified: false, error: 'Document not found' };

    // Check if tampered
    const isTampered = !!tamperedDocs[docId];
    const currentContent = isTampered ? tamperedDocs[docId].tamperedContent : doc.content;
    const computedHash = await computeSHA256(currentContent);

    const matches = (computedHash.toLowerCase() === doc.sha256.toLowerCase());

    const timestamp = formatDateTime(new Date());

    if (matches) {
      logActivity({
        action: 'Verified',
        actionBadge: 'verify',
        documentId: doc.id,
        documentName: doc.name,
        caseId: doc.caseId,
        details: `Integrity check PASSED. SHA-256 hash matched stored blockchain record.`
      });
      showToast(`✓ Document integrity verified. No alterations detected.`, 'success');
    } else {
      logActivity({
        action: 'Tamper Detected',
        actionBadge: 'tamper',
        documentId: doc.id,
        documentName: doc.name,
        caseId: doc.caseId,
        details: `⚠ INTEGRITY MISMATCH DETECTED! Computed: ${computedHash.slice(0, 8)}... Expected: ${doc.sha256.slice(0, 8)}...`
      });
      showToast(`⚠ Integrity check FAILED! Document content has been tampered with.`, 'error');
    }

    return {
      verified: matches,
      computedHash,
      storedHash: doc.sha256,
      timestamp
    };
  };

  // Simulate Tampering for Hackathon Demonstration
  const toggleTamperDocument = (docId) => {
    const doc = documents.find(d => d.id === docId);
    if (!doc) return;

    if (tamperedDocs[docId]) {
      // Revert to original
      const updated = { ...tamperedDocs };
      delete updated[docId];
      setTamperedDocs(updated);
      showToast('Document restored to original verified state.', 'info');
    } else {
      // Tamper content
      const tamperedContent = doc.content + '\n\n[TAMPERED INJECTION]: Altered by unauthorized third party modifying paragraph 3.';
      setTamperedDocs(prev => ({
        ...prev,
        [docId]: {
          tamperedContent,
          tamperedAt: new Date().toISOString()
        }
      }));
      showToast('Demonstration: Document content altered to simulate tampering.', 'warning');
    }
  };

  // Toggle user status (Admin action)
  const toggleUserStatus = (userId) => {
    setUsers(prev => prev.map(u => {
      if (u.id === userId) {
        const nextStatus = u.status === 'Active' ? 'Disabled' : 'Active';
        showToast(`User ${u.name} status changed to ${nextStatus}`, 'info');
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  // Add new user
  const addUser = (userData) => {
    const newUser = {
      id: `usr_${Date.now().toString().slice(-4)}`,
      officerId: userData.officerId || `POL-WB-${Math.floor(1000 + Math.random() * 9000)}`,
      name: userData.name,
      role: userData.role || 'police_officer',
      roleLabel: userData.role === 'senior_officer' ? 'Senior Officer' : userData.role === 'legal_officer' ? 'Legal Officer' : userData.role === 'administrator' ? 'Administrator' : 'Police Officer',
      badge: userData.badge || 'Officer',
      policeStation: userData.policeStation || 'Siliguri Police Station',
      district: userData.district || 'Darjeeling District',
      email: userData.email || `${userData.name.toLowerCase().replace(/\s+/g, '.')}@police.wb.gov.in`,
      status: 'Active',
      lastLogin: 'Never',
      avatar: userData.role === 'senior_officer' ? '👨‍✈️' : userData.role === 'legal_officer' ? '⚖️' : userData.role === 'administrator' ? '🛡️' : '👮'
    };

    setUsers(prev => [...prev, newUser]);
    showToast(`Officer ${newUser.name} added successfully!`, 'success');
  };

  // Reset to original demo data
  const resetDemoData = () => {
    localStorage.removeItem('casevault_cases');
    localStorage.removeItem('casevault_documents');
    localStorage.removeItem('casevault_audit_logs');
    localStorage.removeItem('casevault_users_list');
    setCases(INITIAL_CASES);
    setDocuments(INITIAL_DOCUMENTS);
    setAuditLogs(INITIAL_AUDIT_LOGS);
    setUsers(INITIAL_USERS);
    setTamperedDocs({});
    showToast('Demo data restored to initial factory state.', 'success');
  };

  return (
    <AppContext.Provider
      value={{
        currentUser,
        isAuthenticated,
        cases,
        documents,
        auditLogs,
        users,
        currentPage,
        selectedCaseId,
        selectedDocId,
        searchQuery,
        tamperedDocs,
        toast,
        loginAs,
        loginWithCredentials,
        logout,
        navigate,
        addCase,
        updateCase,
        addDocument,
        verifyDocumentIntegrity,
        toggleTamperDocument,
        toggleUserStatus,
        addUser,
        resetDemoData,
        showToast,
        logActivity,
        setCurrentPage,
        setSelectedCaseId,
        setSelectedDocId,
        setSearchQuery,
        isNewCaseModalOpen,
        openNewCaseModal,
        closeNewCaseModal,
        isMobileMenuOpen,
        openMobileMenu,
        closeMobileMenu,
        toggleMobileMenu,
        isNotificationsOpen,
        openNotifications,
        closeNotifications,
        toggleNotifications,
        notifications,
        markAllNotificationsRead
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
