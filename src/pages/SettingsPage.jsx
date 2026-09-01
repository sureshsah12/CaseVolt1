import React, { useState } from 'react';
import { 
  User, 
  Lock, 
  Bell, 
  Palette, 
  Globe, 
  Accessibility, 
  Smartphone, 
  Shield, 
  FileText, 
  HelpCircle, 
  Info, 
  Settings as AdminIcon,
  Check, 
  ChevronRight, 
  Save, 
  LogOut, 
  KeyRound, 
  AlertTriangle, 
  RefreshCw, 
  ShieldCheck, 
  Building2, 
  Mail, 
  Phone, 
  Clock, 
  ExternalLink,
  Laptop,
  CheckCircle2,
  X,
  FileBadge,
  Eye,
  Sliders,
  Send,
  Upload
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SettingsPage = () => {
  const { currentUser, resetDemoData, showToast, navigate } = useApp();

  // Active Category State for Desktop Split-View / Mobile Stack
  const [activeTab, setActiveTab] = useState('profile');

  // Profile Form State
  const [profileName, setProfileName] = useState(currentUser?.name || 'Inspector Rajesh Sharma');
  const [profilePhone, setProfilePhone] = useState('+91 98301 24567');
  const [profileEmail, setProfileEmail] = useState('rajesh.sharma@wbpolice.gov.in');
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  // Security State
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [autoLogoutTime, setAutoLogoutTime] = useState('30');
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);

  // Notification Preferences
  const [notifUploadConfirm, setNotifUploadConfirm] = useState(true);
  const [notifApprovalAlerts, setNotifApprovalAlerts] = useState(true);
  const [notifCaseAssignment, setNotifCaseAssignment] = useState(true);
  const [notifIntegrityWarnings, setNotifIntegrityWarnings] = useState(true);
  const [notifSecurityAlerts, setNotifSecurityAlerts] = useState(true); // Mandatory

  // Appearance & Accessibility
  const [theme, setTheme] = useState('light');
  const [textSize, setTextSize] = useState('medium');
  const [highContrast, setHighContrast] = useState(false);
  const [reduceAnimations, setReduceAnimations] = useState(false);
  const [keyboardNav, setKeyboardNav] = useState(true);

  // Language
  const [language, setLanguage] = useState('english');

  // Document Preferences
  const [defaultDocView, setDefaultDocView] = useState('preview');
  const [defaultClassification, setDefaultClassification] = useState('Confidential');

  // Help & Support Modals
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportType, setReportType] = useState('Document Verification Issue');
  const [reportDesc, setReportDesc] = useState('');
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isUserGuideOpen, setIsUserGuideOpen] = useState(false);

  // Check if current officer is Administrator
  const isAdmin = currentUser?.role === 'administrator';

  // Navigation Items
  const settingsCategories = [
    { id: 'profile', label: 'My Profile', icon: User, desc: 'Official identity & police station' },
    { id: 'security', label: 'Security & Login', icon: Lock, desc: 'Password, sessions & auto-logout' },
    { id: 'notifications', label: 'Notifications', icon: Bell, desc: 'Upload, review & integrity alerts' },
    { id: 'appearance', label: 'Appearance', icon: Palette, desc: 'Theme & readability text size' },
    { id: 'language', label: 'Language', icon: Globe, desc: 'Official portal language' },
    { id: 'accessibility', label: 'Accessibility', icon: Accessibility, desc: 'High contrast & easy navigation' },
    { id: 'devices', label: 'Devices & Sessions', icon: Smartphone, desc: 'Active logins & device signout' },
    { id: 'privacy', label: 'Privacy & Data', icon: Shield, desc: 'Role permissions & audit policy' },
    { id: 'documents', label: 'Document Preferences', icon: FileText, desc: 'Default view & classification' },
    { id: 'help', label: 'Help & Support', icon: HelpCircle, desc: 'Officer user guide & report issue' },
    { id: 'about', label: 'About CASEVAULT', icon: Info, desc: 'System version & prototype info' },
    ...(isAdmin ? [{ id: 'admin', label: 'System Administration', icon: AdminIcon, desc: 'User policies & system controls' }] : [])
  ];

  // Actions
  const handleSaveProfile = (e) => {
    e.preventDefault();
    setIsEditingProfile(false);
    showToast('Profile contact information updated successfully.', 'success');
  };

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (!currentPassword || !newPassword) {
      showToast('Please enter both current and new password.', 'error');
      return;
    }
    if (newPassword !== confirmPassword) {
      showToast('New passwords do not match.', 'error');
      return;
    }
    setIsPasswordModalOpen(false);
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    showToast('Password updated successfully. Session credentials secured.', 'success');
  };

  const handleSignOutOtherDevices = () => {
    showToast('Successfully signed out 2 other active sessions.', 'success');
  };

  const handleReportSubmit = (e) => {
    e.preventDefault();
    setIsReportModalOpen(false);
    setReportDesc('');
    showToast('Support ticket filed successfully with Police IT Helpdesk.', 'success');
  };

  return (
    <div className="space-y-4 sm:space-y-6 animate-in fade-in duration-200">
      
      {/* Page Header Banner */}
      <div className="bg-white p-4 sm:p-6 lg:p-7 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900">
              OFFICER PREFERENCES & SECURITY
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
            ⚙️ System & Officer Settings
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Manage your credentials, accessibility, alerts, and digital case preferences.
          </p>
        </div>

        <button
          onClick={() => showToast('Settings and preferences saved.', 'success')}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs sm:text-sm shadow-md transition cursor-pointer self-start sm:self-auto active:scale-95"
        >
          <Save className="w-4 h-4 text-amber-400" />
          <span>Save All Settings</span>
        </button>
      </div>

      {/* Main Container: Category Navigation (Left) + Detail Settings Card (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-start">
        
        {/* ================= 1. SETTINGS NAVIGATION TABS (4 Cols Desktop, Full Width Mobile) ================= */}
        <div className="lg:col-span-4 space-y-2 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
          <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 px-3 py-1.5">
            Settings Categories
          </div>

          <div className="space-y-1">
            {settingsCategories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full text-left p-3 rounded-xl transition flex items-center justify-between gap-3 cursor-pointer group active:scale-[0.99] ${
                    isActive
                      ? 'bg-blue-900 text-white shadow-sm font-bold'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-white/15 text-amber-400' : 'bg-slate-100 text-blue-900 group-hover:bg-white'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold truncate leading-tight">{cat.label}</div>
                      <div className={`text-[10px] truncate leading-tight mt-0.5 ${isActive ? 'text-blue-200' : 'text-slate-400'}`}>
                        {cat.desc}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isActive ? 'text-amber-400 translate-x-0.5' : 'text-slate-400'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* ================= 2. ACTIVE SETTINGS DETAILS (8 Cols Desktop) ================= */}
        <div className="lg:col-span-8 space-y-4 sm:space-y-6">
          
          {/* ---------------- 1. MY PROFILE ---------------- */}
          {activeTab === 'profile' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <User className="w-5 h-5 text-blue-900" />
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">1. Officer Profile Details</h2>
                </div>
                <button
                  onClick={() => setIsEditingProfile(!isEditingProfile)}
                  className="px-3.5 py-1.5 rounded-xl border border-blue-900 text-blue-900 hover:bg-blue-50 text-xs font-bold transition cursor-pointer"
                >
                  {isEditingProfile ? 'Cancel' : 'Edit Contact Info'}
                </button>
              </div>

              {/* Profile Avatar and Officer Badge */}
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white flex items-center justify-center text-3xl shadow-md border-2 border-amber-400/40 shrink-0">
                  {currentUser?.avatar || '👮'}
                </div>
                <div className="text-center sm:text-left min-w-0 flex-1">
                  <div className="text-base sm:text-lg font-black text-slate-900 truncate">{profileName}</div>
                  <div className="text-xs text-amber-700 font-bold">{currentUser?.badge || 'Inspector of Police (I.O.)'}</div>
                  <div className="text-xs text-slate-500 flex items-center justify-center sm:justify-start gap-1.5 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{currentUser?.policeStation} • West Bengal Police</span>
                  </div>
                </div>
              </div>

              {/* Profile Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Officer Name
                  </label>
                  <input
                    type="text"
                    disabled={!isEditingProfile}
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-semibold text-slate-900 bg-white disabled:bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Officer ID / Badgenumber
                  </label>
                  <input
                    type="text"
                    disabled
                    value={currentUser?.id === 'usr-1' ? 'WB-POL-1082' : currentUser?.id === 'usr-2' ? 'WB-POL-2491' : currentUser?.id === 'usr-3' ? 'WB-JUD-0418' : 'WB-ADM-0001'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-mono font-bold text-slate-900 bg-slate-50 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Department & Rank
                  </label>
                  <input
                    type="text"
                    disabled
                    value={`${currentUser?.roleLabel} (Crime Investigation Branch)`}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-700 bg-slate-50 cursor-not-allowed font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Assigned Police Station
                  </label>
                  <input
                    type="text"
                    disabled
                    value={currentUser?.policeStation}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-700 bg-slate-50 cursor-not-allowed font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Official Govt. Email
                  </label>
                  <input
                    type="email"
                    disabled={!isEditingProfile}
                    value={profileEmail}
                    onChange={(e) => setProfileEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-medium text-slate-900 bg-white disabled:bg-slate-50"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                    Official Contact Number
                  </label>
                  <input
                    type="text"
                    disabled={!isEditingProfile}
                    value={profilePhone}
                    onChange={(e) => setProfilePhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 font-medium text-slate-900 bg-white disabled:bg-slate-50"
                  />
                </div>
              </div>

              {isEditingProfile && (
                <div className="flex justify-end pt-2">
                  <button
                    onClick={handleSaveProfile}
                    className="px-5 py-2 rounded-xl bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold shadow-xs cursor-pointer active:scale-95"
                  >
                    Save Profile Changes
                  </button>
                </div>
              )}

              {/* Security note regarding role elevation */}
              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong>Access Policy Notice:</strong> Sensitive officer ranks, security permissions, and station jurisdictional assignments are strictly managed by the District Superintendent of Police (DSP) and cannot be altered locally.
                </span>
              </div>
            </div>
          )}

          {/* ---------------- 2. SECURITY ---------------- */}
          {activeTab === 'security' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Lock className="w-5 h-5 text-blue-900" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">2. Security & Session Controls</h2>
              </div>

              {/* Password Management */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-bold text-slate-900">Officer Password</div>
                  <div className="text-xs text-slate-500 mt-0.5">
                    Last changed 14 days ago. Must meet NCRB complexity standards.
                  </div>
                </div>
                <button
                  onClick={() => setIsPasswordModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold shadow-xs transition cursor-pointer self-start sm:self-auto active:scale-95 flex items-center gap-1.5"
                >
                  <KeyRound className="w-3.5 h-3.5 text-amber-400" />
                  <span>Change Password</span>
                </button>
              </div>

              {/* Session Security */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Active Authentication Sessions</div>
                    <div className="text-xs text-slate-500">
                      Last authenticated login: <strong className="text-slate-700">Today, 10:42 AM</strong> • Active devices: <span className="text-emerald-700 font-bold">2 sessions</span>
                    </div>
                  </div>
                  <button
                    onClick={handleSignOutOtherDevices}
                    className="px-3.5 py-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold transition cursor-pointer self-start sm:self-auto active:scale-95"
                  >
                    Sign Out All Other Devices
                  </button>
                </div>
              </div>

              {/* Auto Logout */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="text-sm font-bold text-slate-900">Automatic Inactivity Logout</div>
                <p className="text-xs text-slate-500">
                  Automatically sign out after inactivity to safeguard case records if your terminal is left unattended.
                </p>
                <div className="grid grid-cols-3 gap-2.5 max-w-md pt-1">
                  {[
                    { value: '15', label: '15 Minutes' },
                    { value: '30', label: '30 Minutes (Default)' },
                    { value: '60', label: '1 Hour' }
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => {
                        setAutoLogoutTime(opt.value);
                        showToast(`Auto-logout configured to ${opt.label}`, 'info');
                      }}
                      className={`p-2.5 rounded-xl border text-xs font-bold transition cursor-pointer ${
                        autoLogoutTime === opt.value
                          ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                          : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ---------------- 3. NOTIFICATIONS ---------------- */}
          {activeTab === 'notifications' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Bell className="w-5 h-5 text-blue-900" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">3. Officer Notifications & Dispatch Alerts</h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    id: 'upload',
                    title: 'Document upload confirmation',
                    desc: 'Receive immediate receipt when new FIRs or evidence records are archived.',
                    checked: notifUploadConfirm,
                    toggle: () => setNotifUploadConfirm(!notifUploadConfirm),
                    required: false
                  },
                  {
                    id: 'approval',
                    title: 'Document approval & supervisor review alerts',
                    desc: 'Notify when SHO or Legal Officer approves a submitted chargesheet.',
                    checked: notifApprovalAlerts,
                    toggle: () => setNotifApprovalAlerts(!notifApprovalAlerts),
                    required: false
                  },
                  {
                    id: 'assignment',
                    title: 'Case assignment alerts',
                    desc: 'Alert when a new GD or FIR is marked to your investigating officer badge.',
                    checked: notifCaseAssignment,
                    toggle: () => setNotifCaseAssignment(!notifCaseAssignment),
                    required: false
                  },
                  {
                    id: 'integrity',
                    title: 'Document integrity verification warnings',
                    desc: 'Instant broadcast if an archive document checksum fails validation.',
                    checked: notifIntegrityWarnings,
                    toggle: () => setNotifIntegrityWarnings(!notifIntegrityWarnings),
                    required: false
                  },
                  {
                    id: 'security',
                    title: 'Important security & unauthorized access alerts',
                    desc: 'Mandatory broadcast for node outages, key rotations, and failed access attempts.',
                    checked: notifSecurityAlerts,
                    toggle: () => showToast('Security alerts are mandatory and cannot be disabled under NCRB protocol.', 'warning'),
                    required: true
                  }
                ].map((item) => (
                  <label 
                    key={item.id}
                    className={`p-3.5 rounded-xl border flex items-start gap-3 transition cursor-pointer ${
                      item.checked ? 'bg-slate-50 border-slate-300' : 'bg-white border-slate-200 opacity-70'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={item.toggle}
                      disabled={item.required}
                      className="w-4 h-4 mt-0.5 rounded text-blue-900 accent-blue-900"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-2">
                        <span>{item.title}</span>
                        {item.required && (
                          <span className="text-[10px] px-2 py-0.2 rounded-full font-bold bg-amber-100 text-amber-800 border border-amber-300">
                            Required
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* ---------------- 4. APPEARANCE ---------------- */}
          {activeTab === 'appearance' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Palette className="w-5 h-5 text-blue-900" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">4. Display Theme & Typography Size</h2>
              </div>

              {/* Theme Selector */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Color Theme (Default: Government Light)
                </label>
                <div className="grid grid-cols-3 gap-3 max-w-md">
                  {[
                    { id: 'light', label: '○ Light (Default)', desc: 'Optimized for office' },
                    { id: 'dark', label: '○ Dark', desc: 'Night shift / Low light' },
                    { id: 'system', label: '○ System Default', desc: 'Auto OS mode' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        showToast(`Theme set to ${t.label}`, 'info');
                      }}
                      className={`p-3 rounded-xl border text-xs font-bold transition cursor-pointer text-left ${
                        theme === t.id
                          ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      <div>{t.label}</div>
                      <div className={`text-[10px] font-normal mt-0.5 ${theme === t.id ? 'text-blue-200' : 'text-slate-400'}`}>{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Size */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Readability Text Size (Crucial for Field Officers & Constables)
                </label>
                <div className="grid grid-cols-3 gap-3 max-w-md">
                  {['Small', 'Medium (Recommended)', 'Large (High Visibility)'].map((sz) => {
                    const key = sz.split(' ')[0].toLowerCase();
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          setTextSize(key);
                          showToast(`Font scaling adjusted to ${sz}`, 'info');
                        }}
                        className={`p-3 rounded-xl border text-xs font-bold transition cursor-pointer text-center ${
                          textSize === key
                            ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                            : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {sz}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* ---------------- 5. LANGUAGE ---------------- */}
          {activeTab === 'language' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Globe className="w-5 h-5 text-blue-900" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">5. Official Portal Language</h2>
              </div>

              <div className="space-y-3 max-w-md">
                {[
                  { id: 'english', label: 'English (Primary Official)', note: 'Active' },
                  { id: 'hindi', label: 'हिन्दी (Hindi)', note: 'Available' },
                  { id: 'bengali', label: 'বাংলা (Bengali)', note: 'Available' }
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => {
                      setLanguage(l.id);
                      showToast(`Language set to ${l.label}`, 'success');
                    }}
                    className={`w-full p-3.5 rounded-xl border flex items-center justify-between transition cursor-pointer ${
                      language === l.id
                        ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                        : 'bg-slate-50 text-slate-800 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-bold">{l.label}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      language === l.id ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                    }`}>
                      {l.note}
                    </span>
                  </button>
                ))}
              </div>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-xs text-blue-950">
                🌐 <em>Additional scheduled regional languages (Marathi, Tamil, Telugu, Gujarati, Odia) coming soon in Phase 2 deployment.</em>
              </div>
            </div>
          )}

          {/* ---------------- 6. ACCESSIBILITY ---------------- */}
          {activeTab === 'accessibility' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Accessibility className="w-5 h-5 text-blue-900" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">6. Usability & Accessibility Aids</h2>
              </div>

              <p className="text-xs text-slate-500">
                These options help make CASEVAULT simpler and easier to operate for all officers across devices.
              </p>

              <div className="space-y-3">
                {[
                  {
                    id: 'contrast',
                    title: 'High Contrast Mode',
                    desc: 'Enhance visual borders and contrast for outdoor visibility in bright sunlight.',
                    checked: highContrast,
                    toggle: () => setHighContrast(!highContrast)
                  },
                  {
                    id: 'animations',
                    title: 'Reduce UI Animations',
                    desc: 'Disables smooth transitions to optimize battery life on older mobile devices.',
                    checked: reduceAnimations,
                    toggle: () => setReduceAnimations(!reduceAnimations)
                  },
                  {
                    id: 'keyboard',
                    title: 'Full Keyboard Navigation (Esc to close, Tab to cycle)',
                    desc: 'Enables quick hotkeys for rapid FIR registration and modal dismissals.',
                    checked: keyboardNav,
                    toggle: () => setKeyboardNav(!keyboardNav)
                  }
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100/80 flex items-start gap-3 cursor-pointer transition"
                  >
                    <input
                      type="checkbox"
                      checked={opt.checked}
                      onChange={opt.toggle}
                      className="w-4 h-4 mt-0.5 rounded text-blue-900 accent-blue-900"
                    />
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-slate-900">{opt.title}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{opt.desc}</div>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* ---------------- 7. DEVICES & SESSIONS ---------------- */}
          {activeTab === 'devices' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Smartphone className="w-5 h-5 text-blue-900" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">7. Authorized Devices & Active Logins</h2>
              </div>

              {/* Current Device */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                    Current Device (This Session)
                  </span>
                  <span className="text-xs text-emerald-700 font-bold">🟢 Active Now</span>
                </div>
                <div className="text-sm font-black text-slate-900">Windows 11 Terminal — Google Chrome (v124)</div>
                <div className="text-xs text-slate-600">
                  Location: Siliguri Police Net • IP: 10.42.18.91 (CCTNS Intranet)
                </div>
              </div>

              {/* Other Sessions */}
              <div className="space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Other Active Sessions</div>
                
                <div className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div className="font-bold text-slate-900">Android Field Tablet (Samsung Knox)</div>
                    <div className="text-slate-500 text-[11px]">Last Active: Yesterday, 06:15 PM • Siliguri Mobile Patrol Unit</div>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Session #908</span>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={handleSignOutOtherDevices}
                    className="px-4 py-2.5 rounded-xl bg-red-900 hover:bg-red-950 text-white text-xs font-bold shadow-xs cursor-pointer active:scale-95"
                  >
                    Sign Out All Other Devices
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ---------------- 8. PRIVACY & DATA ---------------- */}
          {activeTab === 'privacy' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Shield className="w-5 h-5 text-blue-900" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">8. Privacy & Data Governance</h2>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Your access is role-based</span>
                  </div>
                  <p className="text-slate-600 pl-5.5">
                    You can only view and process case files assigned to your police jurisdiction or court division.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Document activity is recorded in the audit trail</span>
                  </div>
                  <p className="text-slate-600 pl-5.5">
                    Every view, upload, download, and verification timestamp is immutably logged for legal transparency.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Sensitive documents are accessible only to authorized users</span>
                  </div>
                  <p className="text-slate-600 pl-5.5">
                    Records classified as "Confidential" or "Restricted" require supervisory officer credentials to unlock.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Uploaded documents receive an integrity verification record</span>
                  </div>
                  <p className="text-slate-600 pl-5.5">
                    The SHA-256 digital fingerprint permanently proves document authenticity in court proceedings.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold cursor-pointer hover:bg-slate-800"
                >
                  View Privacy & Security Information
                </button>
              </div>
            </div>
          )}

          {/* ---------------- 9. DOCUMENT PREFERENCES ---------------- */}
          {activeTab === 'documents' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <FileText className="w-5 h-5 text-blue-900" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">9. Document Handling Preferences</h2>
              </div>

              {/* Default View Mode */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Default Document Open Action
                </label>
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  {[
                    { id: 'preview', label: '○ Preview in Browser (Recommended)' },
                    { id: 'download', label: '○ Download Directly' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setDefaultDocView(opt.id);
                        showToast(`Default view mode: ${opt.label}`, 'info');
                      }}
                      className={`p-3 rounded-xl border text-xs font-bold transition cursor-pointer text-left ${
                        defaultDocView === opt.id
                          ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Default Classification */}
              <div className="space-y-2 pt-3 border-t border-slate-100">
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Default Upload Classification
                </label>
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  {[
                    { id: 'Internal', label: 'Internal (Standard Police Record)' },
                    { id: 'Confidential', label: 'Confidential (Protected Case File)' }
                  ].map((cls) => (
                    <button
                      key={cls.id}
                      onClick={() => {
                        setDefaultClassification(cls.id);
                        showToast(`Default classification set to ${cls.id}`, 'info');
                      }}
                      className={`p-3 rounded-xl border text-xs font-bold transition cursor-pointer text-left ${
                        defaultClassification === cls.id
                          ? 'bg-blue-900 text-white border-blue-900 shadow-xs'
                          : 'bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100'
                      }`}
                    >
                      {cls.label}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  <em>Note: "Highly Restricted / Secret" requires manual officer confirmation during upload.</em>
                </p>
              </div>
            </div>
          )}

          {/* ---------------- 10. HELP & SUPPORT ---------------- */}
          {activeTab === 'help' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <HelpCircle className="w-5 h-5 text-blue-900" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">10. Help Center & Support Contact</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* User Guide Card */}
                <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-bold text-blue-950 flex items-center gap-2">
                      <FileBadge className="w-4 h-4 text-blue-900" />
                      <span>Police Officer User Guide</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Step-by-step instructions for registering FIRs, uploading evidence, and verifying SHA-256 hashes.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsUserGuideOpen(true)}
                    className="mt-2 py-2 px-3 rounded-xl bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold cursor-pointer transition active:scale-95"
                  >
                    Open User Guide
                  </button>
                </div>

                {/* Report a Problem */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600" />
                      <span>Report an Issue / Bug</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Submit feedback or report verification errors directly to the police IT support cell.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsReportModalOpen(true)}
                    className="mt-2 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs font-bold cursor-pointer transition active:scale-95"
                  >
                    Report a Problem
                  </button>
                </div>
              </div>

              {/* Official Helplines */}
              <div className="p-4 rounded-xl bg-slate-900 text-white space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400">Official Support Helplines</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div>📞 Emergency Dispatch: <strong>112</strong></div>
                  <div>🛡️ Cyber Crime: <strong>1930</strong></div>
                  <div>✉️ Support: <strong>support@ncrb.gov.in</strong></div>
                </div>
              </div>
            </div>
          )}

          {/* ---------------- 11. ABOUT CASEVAULT ---------------- */}
          {activeTab === 'about' && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border border-slate-200 shadow-xs space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center gap-2.5 pb-3 border-b border-slate-100">
                <Info className="w-5 h-5 text-blue-900" />
                <h2 className="text-base sm:text-lg font-bold text-slate-900">11. About CASEVAULT</h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-blue-950">CASE</span>
                  <span className="text-2xl font-black text-amber-500">VAULT</span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-slate-100 text-slate-700">
                    v1.0.0 Hackathon Prototype
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  <strong>CASEVAULT — Secure Digital Case Document Management System</strong> is developed for law enforcement officers, investigating officials, and judiciary personnel to securely manage, search, verify, and track legal investigation records.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <div className="font-bold text-blue-900">🛡️ Secure Access Control</div>
                    <div className="text-slate-500 mt-0.5">Role-based permissions with biometric MFA readiness.</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <div className="font-bold text-emerald-800">⚡ Cryptographic Integrity</div>
                    <div className="text-slate-500 mt-0.5">Automated SHA-256 hashing for tamper-proof evidence.</div>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                    <div className="font-bold text-indigo-900">📋 Immutable Audit Trail</div>
                    <div className="text-slate-500 mt-0.5">Chronological logging of all document interactions.</div>
                  </div>
                </div>

                {/* Reset Demo Data Button */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <div className="text-xs text-slate-500">Restore factory sample cases & documents:</div>
                  <button
                    onClick={resetDemoData}
                    className="px-3.5 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold border border-amber-300 transition cursor-pointer flex items-center gap-1.5 active:scale-95"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Reset Prototype Sample Data</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ---------------- 12. SYSTEM ADMINISTRATION (Admin Only) ---------------- */}
          {activeTab === 'admin' && isAdmin && (
            <div className="bg-white p-5 sm:p-7 rounded-2xl border-2 border-blue-900 shadow-sm space-y-5 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <AdminIcon className="w-5 h-5 text-blue-900" />
                  <h2 className="text-base sm:text-lg font-bold text-slate-900">12. System Administration Console</h2>
                </div>
                <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded bg-blue-900 text-white">
                  Admin Exclusive
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">User Management & Badges</div>
                  <div className="text-slate-500">Configure officer roles, police station jurisdiction, and disabled statuses.</div>
                  <button 
                    onClick={() => navigate('users')}
                    className="mt-2 text-xs font-bold text-blue-900 hover:underline"
                  >
                    Go to Users Management →
                  </button>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Role & Permission Policies</div>
                  <div className="text-slate-500">Manage fine-grained access rules for FIRs, seizure memos, and SFSL forensic files.</div>
                  <div className="text-[11px] text-emerald-700 font-bold mt-2">Active: 4 System Personas Configured</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">Audit Log Configuration</div>
                  <div className="text-slate-500">Set retention period and cryptographic chain of custody ledger export.</div>
                  <div className="text-[11px] text-slate-700 font-mono mt-2">Retention: 7 Years (CrPC / BNS Standard)</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="font-bold text-slate-900">System Backup & Node Status</div>
                  <div className="text-slate-500">Automated daily snapshot sync with West Bengal State Police Datacenter.</div>
                  <div className="text-[11px] text-emerald-700 font-bold mt-2">🟢 Last Snapshot: Today, 04:00 AM (100% Synced)</div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* ================= MODALS ================= */}

      {/* 1. Change Password Modal */}
      {isPasswordModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsPasswordModalOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#072047] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm">Change Officer Password</h3>
              </div>
              <button 
                onClick={() => setIsPasswordModalOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleChangePassword} className="p-5 space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Current Password *</label>
                <input
                  type="password"
                  required
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  placeholder="Enter existing password"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">New Password *</label>
                <input
                  type="password"
                  required
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Min 8 chars, uppercase & numbers"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Confirm New Password *</label>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-type new password"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsPasswordModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold cursor-pointer"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. Report a Problem Modal */}
      {isReportModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsReportModalOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#072047] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm">Report a Problem / Support Ticket</h3>
              </div>
              <button 
                onClick={() => setIsReportModalOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleReportSubmit} className="p-5 space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Problem Category</label>
                <select
                  value={reportType}
                  onChange={(e) => setReportType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 font-semibold"
                >
                  <option value="Document Verification Issue">Document Verification / Checksum Error</option>
                  <option value="FIR Upload Failure">FIR / Evidence Upload Failure</option>
                  <option value="Access Permission Denied">Access / Permission Denied</option>
                  <option value="Device Login Issue">Device Login / Session Timeout Issue</option>
                  <option value="Other Technical Query">Other Technical Query</option>
                </select>
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Description *</label>
                <textarea
                  rows={3}
                  required
                  value={reportDesc}
                  onChange={(e) => setReportDesc(e.target.value)}
                  placeholder="Describe the incident or error encountered..."
                  className="w-full px-3 py-2 rounded-xl border border-slate-300"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">Attachment / Screenshot (Optional)</label>
                <div className="p-3 border border-dashed border-slate-300 rounded-xl text-center bg-slate-50 text-slate-500 cursor-pointer hover:bg-slate-100">
                  <Upload className="w-4 h-4 mx-auto mb-1 text-slate-400" />
                  <span>Attach error screenshot or log file</span>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsReportModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 font-bold text-slate-600 hover:bg-slate-50 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold cursor-pointer flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Ticket</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 3. User Guide Quick Modal */}
      {isUserGuideOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsUserGuideOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#072047] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileBadge className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm">Police Officer Quick Guide</h3>
              </div>
              <button 
                onClick={() => setIsUserGuideOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3 text-xs text-slate-700 leading-relaxed max-h-[75vh] overflow-y-auto">
              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 space-y-1">
                <div className="font-bold text-blue-950">1. How to Register a New Case</div>
                <p>Click <strong>+ New Case</strong> on the Dashboard or Cases page, fill the FIR number, complainant statement, and click Register.</p>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <div className="font-bold text-slate-900">2. How to Upload & Hash Documents</div>
                <p>Navigate to <strong>Upload Document</strong>, choose the case dossier, take a photo or attach the certified PDF, and click Upload Securely.</p>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
                <div className="font-bold text-emerald-950">3. How to Verify Integrity for Court</div>
                <p>Open any document in the <strong>Document Viewer</strong>, click <strong>Verify Integrity (SHA-256)</strong> to obtain immediate cryptographic confirmation.</p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setIsUserGuideOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#072047] hover:bg-[#0c2f66] text-white font-bold text-xs cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Privacy & Security Modal */}
      {isPrivacyModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsPrivacyModalOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#072047] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm">CASEVAULT Privacy & Security Policy</h3>
              </div>
              <button 
                onClick={() => setIsPrivacyModalOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3 text-xs text-slate-700 leading-relaxed max-h-[75vh] overflow-y-auto">
              <p>
                CASEVAULT operates under the statutory provisions of the <strong>Information Technology Act, 2000</strong> and the <strong>Bharatiya Nagarik Suraksha Sanhita (BNSS)</strong>.
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-600">
                <li>All case files are encrypted in-transit (TLS 1.3) and at-rest (AES-256).</li>
                <li>Digital hashes (SHA-256) are generated locally in memory before network storage.</li>
                <li>No officer can delete an audit trail record once created.</li>
              </ul>
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setIsPrivacyModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#072047] hover:bg-[#0c2f66] text-white font-bold text-xs cursor-pointer"
                >
                  Close Information
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
