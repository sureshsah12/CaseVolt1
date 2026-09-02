import React from 'react';
import { 
  Home, 
  FolderLock, 
  FileText, 
  Search, 
  ClipboardList, 
  Users, 
  Sparkles, 
  Settings, 
  LogOut, 
  X
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { IndiaEmblem } from '../common/IndiaEmblem';

export const Navbar = () => {
  const { currentPage, navigate, currentUser, logout, isMobileMenuOpen, closeMobileMenu } = useApp();

  // Check if current user is Administrator
  const isAdmin = 
    !currentUser?.role || 
    currentUser?.role === 'admin' || 
    currentUser?.roleLabel?.toLowerCase().includes('admin');

  // Sidebar Options - Users is ONLY visible to Admin
  const allNavItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, badge: null, adminOnly: false },
    { id: 'cases', label: 'My Cases', icon: FolderLock, badge: '5', adminOnly: false },
    { id: 'documents', label: 'Documents', icon: FileText, badge: '20+', adminOnly: false },
    { id: 'search', label: 'Search', icon: Search, badge: null, adminOnly: false },
    { id: 'audit', label: 'Audit Trail', icon: ClipboardList, badge: 'Live', adminOnly: false },
    { id: 'users', label: 'Users', icon: Users, badge: 'Admin', adminOnly: true },
    { id: 'future-scope', label: 'Future Scope', icon: Sparkles, badge: 'AI/Chain', adminOnly: false },
    { id: 'settings', label: 'Settings', icon: Settings, badge: null, adminOnly: false },
  ];

  // Filter out adminOnly items for non-admin officers
  const navItems = allNavItems.filter((item) => !item.adminOnly || isAdmin);

  const handleNavClick = (pageId) => {
    navigate(pageId);
    if (isMobileMenuOpen) closeMobileMenu();
  };

  const navList = (
    <nav className="space-y-1.5 flex-1">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = 
          currentPage === item.id || 
          (item.id === 'cases' && currentPage === 'case-detail') ||
          (item.id === 'documents' && (currentPage === 'doc-viewer' || currentPage === 'upload'));

        return (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-extrabold tracking-wide transition-all group cursor-pointer active:scale-[0.98] ${
              isActive
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/40 ring-1 ring-blue-400/30'
                : 'text-slate-100 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <Icon className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${isActive ? 'text-white' : 'text-blue-400'}`} />
              <span className="truncate">{item.label}</span>
            </div>
            {item.badge && (
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-black uppercase tracking-wider shrink-0 ${
                isActive 
                  ? 'bg-white/20 text-white' 
                  : item.badge === 'Live'
                  ? 'bg-emerald-950 text-emerald-400 border border-emerald-700 font-bold'
                  : 'bg-slate-800 text-slate-200 border border-slate-700'
              }`}>
                {item.badge}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* ================= 1. DESKTOP SIDEBAR ================= */}
      <aside className="hidden lg:flex w-64 bg-slate-900 text-slate-100 border border-slate-800 flex-col justify-between shrink-0 shadow-2xl select-none rounded-2xl sticky top-20 h-[calc(100vh-6rem)] overflow-hidden my-2 ml-2">
        
        {/* Header Label */}
        <div className="px-4 py-3 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between shrink-0">
          <span className="text-xs font-black uppercase tracking-widest text-slate-300">
            System Navigation
          </span>
          <span className="px-2.5 py-0.5 text-[10px] font-mono font-black bg-blue-950 text-blue-200 border border-blue-700 rounded-md">
            {currentUser?.roleLabel || 'Officer'}
          </span>
        </div>

        {/* Fixed High-Contrast Non-Scrolling Navigation Container */}
        <div className="p-3 flex-1 overflow-hidden flex flex-col justify-between">
          {navList}
        </div>

        {/* Officer Profile & Logout Footer */}
        <div className="p-3.5 border-t border-slate-800 bg-slate-950 shrink-0 space-y-2.5">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-900 flex items-center justify-center text-lg shadow-inner border border-blue-400/50 shrink-0">
              {currentUser?.avatar || '👮'}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[10px] text-slate-300 font-bold uppercase tracking-wider leading-tight">Active Officer</div>
              <div className="text-xs font-black text-white truncate leading-tight mt-0.5">{currentUser?.name || 'Suresh Sharma'}</div>
              <div className="text-[11px] text-amber-400 font-extrabold truncate leading-tight">{currentUser?.roleLabel || 'Administrator'}</div>
            </div>
          </div>

          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-black text-red-200 bg-red-950/60 hover:bg-red-900 border border-red-800 transition cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-red-400" />
            <span>Logout Session</span>
          </button>
        </div>
      </aside>

      {/* ================= 2. MOBILE SLIDE-IN DRAWER ================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
            onClick={closeMobileMenu}
          />

          <div className="relative w-72 sm:w-80 max-w-[85vw] bg-[#071c3d] text-slate-100 flex flex-col justify-between shadow-2xl border-r border-slate-700 z-50 animate-in slide-in-from-left duration-200">
            <div className="p-4 bg-slate-900 border-b border-slate-700 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <IndiaEmblem className="w-6 h-8 shrink-0" />
                <div>
                  <div className="flex items-baseline">
                    <span className="text-base font-black text-white">CASE</span>
                    <span className="text-base font-black text-amber-400">VAULT</span>
                  </div>
                  <div className="text-[9px] text-slate-300 font-bold uppercase tracking-wider">
                    NCRB Intranet Node
                  </div>
                </div>
              </div>

              <button
                onClick={closeMobileMenu}
                className="w-8 h-8 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white flex items-center justify-center transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-3 overflow-y-auto flex-1 space-y-2">
              {navList}
            </div>

            <div className="p-4 border-t border-slate-800 bg-slate-950 shrink-0 space-y-2.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-900 border border-amber-400/50 flex items-center justify-center text-lg shrink-0 shadow-inner">
                  {currentUser?.avatar || '👮'}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-black text-white truncate">{currentUser?.name || 'Suresh Sharma'}</div>
                  <div className="text-[11px] text-amber-400 font-extrabold truncate">{currentUser?.roleLabel || 'Administrator'}</div>
                </div>
              </div>

              <button
                onClick={() => {
                  closeMobileMenu();
                  logout();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-black text-red-200 bg-red-950/60 hover:bg-red-900 border border-red-800 transition cursor-pointer"
              >
                <LogOut className="w-4 h-4 text-red-400" />
                <span>Logout Session</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
