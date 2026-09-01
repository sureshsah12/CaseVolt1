import React, { useState, useEffect } from 'react';
import { 
  Users, 
  UserPlus, 
  ShieldCheck, 
  CheckCircle2, 
  Ban, 
  Edit, 
  X, 
  KeyRound, 
  Building2,
  Lock
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { POLICE_STATIONS } from '../data/mockData';

export const UsersPage = () => {
  const { users, currentUser, toggleUserStatus, addUser } = useApp();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Close Add User modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isAddModalOpen) {
        setIsAddModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAddModalOpen]);

  const [newUserData, setNewUserData] = useState({
    name: '',
    role: 'police_officer',
    badge: 'Sub-Inspector',
    policeStation: 'Siliguri Police Station',
    district: 'Darjeeling District',
    email: ''
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newUserData.name) return;
    addUser(newUserData);
    setIsAddModalOpen(false);
    setNewUserData({
      name: '',
      role: 'police_officer',
      badge: 'Sub-Inspector',
      policeStation: 'Siliguri Police Station',
      district: 'Darjeeling District',
      email: ''
    });
  };

  const isAdmin = currentUser?.role === 'administrator';

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-900">
              ROLE-BASED ACCESS CONTROL (RBAC)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            👥 Authorized System Users
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage police officers, legal counsel, and administrative privileges for CASEVAULT.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-900 hover:bg-blue-950 text-white font-bold text-sm shadow-md transition cursor-pointer self-start sm:self-auto"
        >
          <UserPlus className="w-4 h-4 text-amber-400" />
          <span>+ Add Officer</span>
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 text-xs uppercase tracking-wider font-bold">
                <th className="py-4 px-6">Officer Name</th>
                <th className="py-4 px-6">Assigned Role</th>
                <th className="py-4 px-6">Police Station / Unit</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Last Active</th>
                <th className="py-4 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm font-medium">
              {users.map((usr) => (
                <tr key={usr.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{usr.avatar || '👮'}</span>
                      <div>
                        <div className="font-extrabold text-slate-900">{usr.name}</div>
                        <div className="text-xs text-slate-500 font-mono">{usr.officerId}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className="font-bold text-slate-800">{usr.roleLabel}</span>
                    <div className="text-xs text-slate-500">{usr.badge}</div>
                  </td>
                  <td className="py-4 px-6 text-slate-700">
                    <div>{usr.policeStation}</div>
                    <div className="text-xs text-slate-400">{usr.district}</div>
                  </td>
                  <td className="py-4 px-6">
                    {usr.status === 'Active' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        🟢 Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-300">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span>
                        🔴 Disabled
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-500 font-mono">
                    {usr.lastLogin}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button
                      onClick={() => toggleUserStatus(usr.id)}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer ${
                        usr.status === 'Active'
                          ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                          : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border border-emerald-200'
                      }`}
                    >
                      {usr.status === 'Active' ? (
                        <>
                          <Ban className="w-3.5 h-3.5" />
                          <span>Disable</span>
                        </>
                      ) : (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Activate</span>
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add User Modal */}
      {isAddModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsAddModalOpen(false)}
        >
          <div 
            className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b-2 border-amber-500">
              <div className="flex items-center gap-3">
                <UserPlus className="w-6 h-6 text-amber-400" />
                <h2 className="text-lg font-bold">Add Authorized Officer</h2>
              </div>
              <button 
                onClick={() => setIsAddModalOpen(false)}
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Officer Name *
                </label>
                <input
                  type="text"
                  required
                  value={newUserData.name}
                  onChange={(e) => setNewUserData({ ...newUserData, name: e.target.value })}
                  placeholder="e.g. Inspector Amit Sengupta"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-blue-800"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Role Privilege *
                  </label>
                  <select
                    value={newUserData.role}
                    onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
                  >
                    <option value="police_officer">👮 Police Officer</option>
                    <option value="senior_officer">👨‍✈️ Senior Officer (SHO)</option>
                    <option value="legal_officer">⚖️ Legal Officer</option>
                    <option value="administrator">🛡️ Administrator</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Rank / Designation
                  </label>
                  <input
                    type="text"
                    value={newUserData.badge}
                    onChange={(e) => setNewUserData({ ...newUserData, badge: e.target.value })}
                    placeholder="e.g. Sub-Inspector"
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Assigned Police Station / Unit
                </label>
                <select
                  value={newUserData.policeStation}
                  onChange={(e) => setNewUserData({ ...newUserData, policeStation: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
                >
                  {POLICE_STATIONS.map(st => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-blue-900 text-white text-xs font-bold hover:bg-blue-950 shadow-md"
                >
                  Authorize Officer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
