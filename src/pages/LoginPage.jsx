import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  User, 
  KeyRound, 
  Eye, 
  EyeOff, 
  HelpCircle, 
  Globe, 
  ChevronDown, 
  X, 
  Phone, 
  Mail, 
  AlertTriangle, 
  CheckCircle2, 
  FolderLock, 
  Search, 
  ClipboardList, 
  Shield, 
  Scale, 
  Award,
  FolderOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';

import { IndiaEmblem } from '../components/common/IndiaEmblem';

export const LoginPage = () => {
  const { loginAs, loginWithCredentials } = useApp();

  // Form State
  const [officerId, setOfficerId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Modals & Language
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [language, setLanguage] = useState('English');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const languageDropdownRef = useRef(null);

  // Global Escape key & click-outside listeners for login page popups
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setShowLanguageDropdown(false);
        setIsForgotPasswordOpen(false);
        setIsHelpOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(e.target)) {
        setShowLanguageDropdown(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!officerId.trim() || !password.trim()) {
      setErrorMessage('Please enter both Officer ID and Password.');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setSuccessMessage('Login successful. Redirecting to dashboard...');
      setTimeout(() => {
        loginWithCredentials(officerId, password);
      }, 400);
    }, 300);
  };

  const handleDemoLogin = (roleKey) => {
    setIsLoading(true);
    setSuccessMessage('Demo login successful. Redirecting...');
    setTimeout(() => {
      loginAs(roleKey);
    }, 250);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between font-sans select-none">
      {/* ================= 1. TOP HEADER ================= */}
      <header className="w-full bg-white border-b border-slate-200 px-4 sm:px-8 py-3 z-20 shadow-xs">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
          {/* Left: Indian Emblem & Government of India */}
          <div className="flex items-center gap-3">
            {/* Official Indian Emblem (Metallic Gold & Warm Orange) */}
            <IndiaEmblem className="w-9 h-11 shrink-0" />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase text-slate-900">
                  GOVERNMENT OF INDIA
                </span>
                <span className="text-xs">🇮🇳</span>
              </div>
              <div className="text-[10px] text-slate-500 font-semibold tracking-wide">
                सत्यमेव जयते
              </div>
            </div>
          </div>

          {/* Center: System Slogan Banner */}
          <div className="hidden md:flex items-center gap-2 bg-[#0b2144] text-white px-4 py-1.5 rounded-lg shadow-xs text-xs font-bold tracking-wider">
            <div className="w-4 h-4 rounded-sm bg-blue-900 border border-blue-400/40 flex items-center justify-center">
              <Lock className="w-2.5 h-2.5 text-white" />
            </div>
            <span>SECURE • SIMPLE • TRACEABLE</span>
          </div>

          {/* Right: Need Help & Language */}
          <div className="flex items-center gap-4 text-xs font-medium text-slate-700">
            <button
              onClick={() => setIsHelpOpen(true)}
              className="flex items-center gap-1.5 hover:text-blue-900 transition cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-slate-600" />
              <span>Need Help?</span>
            </button>

            <span className="text-slate-300">|</span>

            {/* Language Selector Dropdown */}
            <div className="relative" ref={languageDropdownRef}>
              <button
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                className="flex items-center gap-1.5 hover:text-blue-900 transition cursor-pointer"
              >
                <Globe className="w-4 h-4 text-slate-600" />
                <span>{language}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {showLanguageDropdown && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  {['English', 'हिन्दी', 'বাংলা'].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setShowLanguageDropdown(false);
                      }}
                      className={`w-full text-left px-3.5 py-1.5 text-xs ${
                        language === lang ? 'bg-blue-50 text-blue-900 font-bold' : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ================= 2. MAIN SPLIT BODY ================= */}
      <main className="flex-1 flex flex-col lg:flex-row w-full min-h-[calc(100vh-120px)]">
        
        {/* ================= LEFT HALF: CASEVAULT BRANDING & GOVERNMENT BUILDING ================= */}
        <div className="lg:w-1/2 bg-gradient-to-b from-[#071c3d] via-[#0b2853] to-[#041226] text-white flex flex-col justify-between relative overflow-hidden p-6 sm:p-10 lg:p-14">
          
          {/* Subtle Ashok Stambh Emblem Watermark at Top Left */}
          <div className="absolute top-4 left-4 opacity-5 pointer-events-none">
            <svg viewBox="0 0 100 120" className="w-48 h-48 text-white" fill="currentColor">
              <path d="M50 5 C45 5 42 10 42 15 C42 18 44 20 46 22 C40 24 35 28 35 35 C35 42 40 48 45 50 C42 53 40 58 40 65 C40 75 48 82 50 85 C52 82 60 75 60 65 C60 58 58 53 55 50 C60 48 65 42 65 35 C65 28 60 24 54 22 C56 20 58 18 58 15 C58 10 55 5 50 5 Z" />
            </svg>
          </div>

          {/* Top Brand Section */}
          <div className="relative z-10 text-center pt-2 sm:pt-4">
            {/* Shield Logo with Padlock */}
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 border-2 border-white/80 shadow-lg mb-4">
              <ShieldCheck className="w-9 h-9 text-[#1683D8]" />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-none">
              <span className="text-white">CASE</span>
              <span className="text-[#1683D8]">VAULT</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 font-medium mt-3 max-w-md mx-auto leading-snug">
              Secure Digital Case Document<br />Management System
            </p>

            {/* Middle Feature Announcement Box */}
            <div className="mt-8 max-w-md mx-auto bg-[#092248]/85 backdrop-blur-xs border border-blue-400/20 rounded-2xl p-5 text-left shadow-xl">
              <div className="flex items-center gap-2.5 text-[#f59e0b] font-bold text-xs sm:text-sm mb-1.5">
                <ShieldCheck className="w-4 h-4 text-[#f59e0b] shrink-0" />
                <span>A Secure Platform for Law Enforcement</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Store, manage, and track legal and investigation documents with complete security, integrity and accountability.
              </p>
            </div>
          </div>

          {/* Bottom Illustration / Rashtrapati Bhavan & Features */}
          <div className="relative z-10 mt-8 pt-4">
            {/* Central Building Background Image */}
            <div className="relative h-44 sm:h-52 w-full overflow-hidden rounded-2xl shadow-2xl border border-blue-900/40 mb-6">
              <img 
                src="/rashtrapati_bhavan.jpg" 
                alt="Government of India Headquarters" 
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041226] via-transparent to-transparent opacity-80"></div>
            </div>

            {/* 4 Circular Features Row */}
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-amber-400/70 bg-white/5 flex items-center justify-center text-amber-400 shadow-xs">
                  <Shield className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-200">Secure<br />Access</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-amber-400/70 bg-white/5 flex items-center justify-center text-amber-400 shadow-xs">
                  <FolderOpen className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-200">Organized<br />Documents</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-amber-400/70 bg-white/5 flex items-center justify-center text-amber-400 shadow-xs">
                  <Search className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-200">Smart<br />Search</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-amber-400/70 bg-white/5 flex items-center justify-center text-amber-400 shadow-xs">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-semibold text-slate-200">Audit<br />Trail</span>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT HALF: LOGIN CARD & ONE-CLICK DEMOS ================= */}
        <div className="lg:w-1/2 bg-[#f8fafc] flex items-center justify-center p-4 sm:p-8 lg:p-12">
          <div className="bg-white w-full max-w-[500px] rounded-3xl shadow-xl border border-slate-200/80 p-6 sm:p-8 space-y-5">
            
            {/* Header: Lock + Welcome Back */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-800 mb-2">
                <Lock className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Welcome Back!
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Login to access your dashboard
              </p>
            </div>

            {/* Error / Success Feedback */}
            {errorMessage && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-900 text-xs font-semibold flex items-center gap-2 animate-in fade-in">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {successMessage && (
              <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-bold flex items-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* Standard Login Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Officer ID Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={officerId}
                  onChange={(e) => setOfficerId(e.target.value)}
                  placeholder="Enter Officer ID / Username"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#072047] focus:border-transparent bg-white transition"
                />
              </div>

              {/* Password Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-300 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-[#072047] focus:border-transparent bg-white transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => setIsForgotPasswordOpen(true)}
                  className="text-xs font-semibold text-blue-700 hover:text-blue-900 hover:underline cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Primary Secure Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 rounded-xl bg-[#072047] hover:bg-[#0c2f66] disabled:opacity-75 text-white font-bold text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <Lock className="w-4 h-4 text-white" />
                    <span>Secure Login</span>
                  </>
                )}
              </button>
            </form>

            {/* Divider: OR */}
            <div className="relative my-4 text-center">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <span className="relative px-3 bg-white text-xs font-bold text-slate-400 uppercase">
                OR
              </span>
            </div>

            {/* One-Click Demonstration Logins Section */}
            <div className="space-y-3">
              <div className="text-center">
                <h3 className="text-sm font-bold text-slate-900">
                  One-Click Demonstration Logins
                </h3>
                <p className="text-[11px] text-slate-500">
                  Explore the system with preloaded demo accounts
                </p>
              </div>

              {/* 2x2 Demo Cards Grid */}
              <div className="grid grid-cols-2 gap-3">
                {/* 1. Police Officer (Blue) */}
                <button
                  onClick={() => handleDemoLogin('police_officer')}
                  className="p-3 rounded-xl border border-blue-200 bg-blue-50/60 hover:bg-blue-100/90 text-left transition flex items-center gap-3 cursor-pointer group shadow-2xs"
                >
                  <div className="text-2xl shrink-0">👮</div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-blue-950 group-hover:text-blue-900 truncate">
                      Police Officer
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Demo</div>
                  </div>
                </button>

                {/* 2. Senior Officer (Green) */}
                <button
                  onClick={() => handleDemoLogin('senior_officer')}
                  className="p-3 rounded-xl border border-emerald-200 bg-emerald-50/60 hover:bg-emerald-100/90 text-left transition flex items-center gap-3 cursor-pointer group shadow-2xs"
                >
                  <div className="text-2xl shrink-0">👨‍✈️</div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-emerald-950 group-hover:text-emerald-900 truncate">
                      Senior Officer
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Demo</div>
                  </div>
                </button>

                {/* 3. Legal Officer (Purple) */}
                <button
                  onClick={() => handleDemoLogin('legal_officer')}
                  className="p-3 rounded-xl border border-purple-200 bg-purple-50/60 hover:bg-purple-100/90 text-left transition flex items-center gap-3 cursor-pointer group shadow-2xs"
                >
                  <div className="text-2xl shrink-0">⚖️</div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-purple-950 group-hover:text-purple-900 truncate">
                      Legal Officer
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Demo</div>
                  </div>
                </button>

                {/* 4. Administrator (Amber/Orange) */}
                <button
                  onClick={() => handleDemoLogin('administrator')}
                  className="p-3 rounded-xl border border-amber-200 bg-amber-50/60 hover:bg-amber-100/90 text-left transition flex items-center gap-3 cursor-pointer group shadow-2xs"
                >
                  <div className="text-2xl shrink-0">🛡️</div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-amber-950 group-hover:text-amber-900 truncate">
                      Administrator
                    </div>
                    <div className="text-[10px] text-slate-500 font-medium">Demo</div>
                  </div>
                </button>
              </div>
            </div>

            {/* Bottom Notice: Authorized Personnel Only */}
            <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left min-w-0">
                <div className="text-xs font-bold text-blue-950">Authorized Personnel Only</div>
                <div className="text-[11px] text-slate-600 truncate">
                  All activities are monitored and recorded for security purposes.
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ================= 3. BOTTOM FOOTER ================= */}
      <footer className="w-full bg-slate-100 border-t border-slate-200 px-4 sm:px-8 py-3 z-20">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          {/* Left: NCRB Branding & Insignia */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-950 text-amber-400 border border-amber-400/60 flex items-center justify-center font-bold text-xs shadow-xs shrink-0">
              👮
            </div>
            <div>
              <div className="font-extrabold text-slate-900 uppercase tracking-wider text-xs">
                NATIONAL CRIME RECORDS BUREAU (NCRB)
              </div>
              <div className="text-[11px] text-slate-500">
                Ministry of Home Affairs, Government of India
              </div>
            </div>
          </div>

          {/* Right: Security Guarantee */}
          <div className="flex items-center gap-2 text-xs text-slate-600 font-medium">
            <Lock className="w-4 h-4 text-slate-600" />
            <span>Your data is protected with the highest security standards</span>
          </div>
        </div>
      </footer>

      {/* ================= MODALS ================= */}

      {/* Forgot Password Modal */}
      {isForgotPasswordOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsForgotPasswordOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#072047] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <KeyRound className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm">Password Reset Assistance</h3>
              </div>
              <button 
                onClick={() => setIsForgotPasswordOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3.5 text-xs text-slate-700 leading-relaxed">
              <p>
                In accordance with <strong>NCRB Police Security Protocols</strong>, credentials for CASEVAULT must be authorized by your Station House Officer (SHO).
              </p>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 space-y-1.5">
                <div className="font-bold text-blue-950">Procedure:</div>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  <li>Contact your Police Station Nodal Officer.</li>
                  <li>Dial the CCTNS Police Helpdesk at <strong>112</strong>.</li>
                  <li>Or use a <strong>One-Click Demo Account</strong> to explore the system.</li>
                </ul>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setIsForgotPasswordOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#072047] hover:bg-[#0c2f66] text-white font-bold text-xs cursor-pointer"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Need Help? Modal */}
      {isHelpOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsHelpOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-[#072047] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-400" />
                <h3 className="font-bold text-sm">CASEVAULT Support & Helplines</h3>
              </div>
              <button 
                onClick={() => setIsHelpOpen(false)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="space-y-2">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-900 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">National Police Helpdesk: 112</div>
                    <div className="text-slate-500 text-[11px]">Toll-Free 24x7 Operations</div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-900 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">Cyber Crime Helpline: 1930</div>
                    <div className="text-slate-500 text-[11px]">Ministry of Home Affairs</div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-900 shrink-0" />
                  <div>
                    <div className="font-bold text-slate-900">support.casevault@ncrb.gov.in</div>
                    <div className="text-slate-500 text-[11px]">State Police Support Cell</div>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setIsHelpOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#072047] hover:bg-[#0c2f66] text-white font-bold text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
