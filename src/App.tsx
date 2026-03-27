import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navbar } from './components/Navbar';
import { StatCard } from './components/StatCard';
import { DashboardCharts } from './components/DashboardCharts';
import { TeacherTable } from './components/TeacherTable';
import { AIInsights } from './components/AIInsights';
import { Auth } from './components/Auth';
import { NotificationModule } from './components/NotificationModule';
import { 
  AboutAdmin, 
  AcademicsAdmin, 
  AdmissionAdmin, 
  ResourcesAdmin,
  AchievementAdmin,
  KnowledgeAdmin,
  FeesAdmin, 
  GalleryAdmin, 
  ContactAdmin 
} from './components/PageContent';
import { Users, Calendar, UserPlus, DollarSign, Settings, UserCircle, Bell, Camera, Save, School, Info, Image, Mail, KeyRound, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';

const ProfileEdit = () => {
  const [formData, setFormData] = useState({
    name: 'LPS Admin',
    email: 'admin@lpsgroup.edu.in',
    phone: '+91 98765 43210',
    role: 'Super Admin',
    bio: 'Managing the digital infrastructure of LPS Group of Education.'
  });

  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Edit Profile</h1>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          <Save size={18} />
          Save Changes
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="glass-card p-8 text-center">
            <div className="relative inline-block group">
              <div className="w-32 h-32 rounded-2xl overflow-hidden border-4 border-white shadow-xl mb-4">
                <img src="https://picsum.photos/seed/admin/200/200" alt="Profile" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <button className="absolute bottom-2 right-2 p-2 bg-blue-600 text-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera size={16} />
              </button>
            </div>
            <h3 className="text-xl font-bold text-slate-800">{formData.name}</h3>
            <p className="text-slate-500 text-sm">{formData.role}</p>
            
            <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Account Status</span>
                <span className="text-emerald-600 font-bold">Verified</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Member Since</span>
                <span className="text-slate-800 font-medium">Jan 2024</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-8">
            <h4 className="text-lg font-bold text-slate-800 mb-6">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">Phone Number</label>
                <input 
                  type="text" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-600">Role</label>
                <input 
                  type="text" 
                  value={formData.role}
                  disabled
                  className="w-full px-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed"
                />
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <label className="text-sm font-medium text-slate-600">Bio</label>
              <textarea 
                rows={4}
                value={formData.bio}
                onChange={(e) => setFormData({...formData, bio: e.target.value})}
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
              ></textarea>
            </div>
          </div>

          {/* Change Password Section */}
          <div className="glass-card p-8">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-bold text-slate-800">Security & Password</h4>
              <button 
                onClick={() => setShowChangePassword(!showChangePassword)}
                className="text-sm font-bold text-blue-600 hover:underline"
              >
                {showChangePassword ? 'Cancel' : 'Change Password'}
              </button>
            </div>

            <AnimatePresence>
              {showChangePassword && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-6 pt-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-600">Current Password</label>
                      <input 
                        type="password" 
                        className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-600">New Password</label>
                        <input 
                          type="password" 
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-600">Confirm New Password</label>
                        <input 
                          type="password" 
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                    <button className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-all">
                      Update Password
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!showChangePassword && (
              <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <KeyRound size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-800">Password last changed 3 months ago</p>
                  <p className="text-xs text-slate-500">We recommend changing your password regularly for better security.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const SettingsAdmin = () => {
  const [showChangePassword, setShowChangePassword] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <h1 className="text-3xl font-bold text-slate-800 tracking-tight mb-8">Settings</h1>
      
      <div className="space-y-6">
        <div className="glass-card p-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg font-bold text-slate-800">Security & Password</h4>
              <p className="text-sm text-slate-500">Manage your account security and password</p>
            </div>
            <button 
              onClick={() => setShowChangePassword(!showChangePassword)}
              className="px-4 py-2 bg-blue-50 text-blue-600 rounded-xl text-sm font-bold hover:bg-blue-100 transition-all"
            >
              {showChangePassword ? 'Cancel' : 'Change Password'}
            </button>
          </div>

          <AnimatePresence>
            {showChangePassword && (
              <motion.div 
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 gap-6 pt-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-600">Current Password</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                      <input 
                        type="password" 
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-600">New Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="password" 
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-600">Confirm New Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="password" 
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-3 bg-slate-800 text-white rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg shadow-slate-200">
                    Update Password
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!showChangePassword && (
            <div className="flex items-center gap-4 p-4 bg-blue-50/50 rounded-xl border border-blue-100">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <KeyRound size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Password last changed 3 months ago</p>
                <p className="text-xs text-slate-500">We recommend changing your password regularly for better security.</p>
              </div>
            </div>
          )}
        </div>

        <div className="glass-card p-8">
          <h4 className="text-lg font-bold text-slate-800 mb-6">General Settings</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div>
                <p className="font-semibold text-slate-800">Email Notifications</p>
                <p className="text-sm text-slate-500">Receive daily reports via email</p>
              </div>
              <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div>
                <p className="font-semibold text-slate-800">Two-Factor Authentication</p>
                <p className="text-sm text-slate-500">Add an extra layer of security</p>
              </div>
              <div className="w-12 h-6 bg-slate-300 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  if (!isLoggedIn) {
    return <Auth onLogin={() => setIsLoggedIn(true)} />;
  }

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveTab('dashboard');
  };

  return (
    <div className="min-h-screen flex">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        isMobileOpen={isMobileMenuOpen}
        setIsMobileOpen={setIsMobileMenuOpen}
        onLogout={handleLogout}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />
      
      <main className={cn(
        "flex-1 transition-all duration-300 min-h-screen flex flex-col",
        isSidebarCollapsed ? "lg:ml-20" : "lg:ml-64"
      )}>
        <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        
        <div className="p-4 sm:p-8 flex-1">
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                  <div>
                    <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Welcome back, <span className="text-blue-600">LPS Admin!</span></h1>
                    <p className="text-slate-500 mt-1">Managing the LPS Group of Education ecosystem.</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-medium hover:bg-slate-50 transition-all shadow-sm">
                      Generate Report
                    </button>
                    <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
                      + New Entry
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard 
                    title="Total Students" 
                    value="12,480" 
                    change="8%" 
                    isPositive={true} 
                    icon={Users} 
                    color="bg-blue-600" 
                  />
                  <StatCard 
                    title="Active Classes" 
                    value="342" 
                    change="4%" 
                    isPositive={true} 
                    icon={Calendar} 
                    color="bg-purple-600" 
                  />
                  <StatCard 
                    title="New Admissions" 
                    value="156" 
                    change="12%" 
                    isPositive={true} 
                    icon={UserPlus} 
                    color="bg-amber-500" 
                  />
                  <StatCard 
                    title="Fees Collected" 
                    value="₹8.4M" 
                    change="15%" 
                    isPositive={true} 
                    icon={DollarSign} 
                    color="bg-emerald-500" 
                  />
                </div>

                <AIInsights />
                <DashboardCharts />
                <TeacherTable />
              </motion.div>
            )}

            {activeTab === 'about' && <AboutAdmin key="about" />}
            {activeTab === 'academics' && <AcademicsAdmin key="academics" />}
            {activeTab === 'admission' && <AdmissionAdmin key="admission" />}
            {activeTab === 'resources' && <ResourcesAdmin key="resources" />}
            {activeTab === 'achievement' && <AchievementAdmin key="achievement" />}
            {activeTab === 'knowledge' && <KnowledgeAdmin key="knowledge" />}
            {activeTab === 'fees' && <FeesAdmin key="fees" />}
            {activeTab === 'gallery' && <GalleryAdmin key="gallery" />}
            {activeTab === 'contact' && <ContactAdmin key="contact" />}
            {activeTab === 'profile' && <ProfileEdit key="profile" />}
            {activeTab === 'settings' && <SettingsAdmin key="settings" />}

            {activeTab === 'hiring' && (
              <motion.div key="hiring" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <h1 className="text-3xl font-bold text-slate-800 tracking-tight mb-8">Hiring Management</h1>
                <TeacherTable />
              </motion.div>
            )}

            {activeTab === 'notifications' && <NotificationModule key="notifications" />}

            {!['dashboard', 'about', 'academics', 'admission', 'resources', 'achievement', 'knowledge', 'fees', 'gallery', 'contact', 'profile', 'notifications', 'hiring', 'settings'].includes(activeTab) && (
              <motion.div 
                key="fallback"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-[60vh] text-slate-400"
              >
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                  <Settings size={40} />
                </div>
                <h2 className="text-xl font-semibold text-slate-600">Module: {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h2>
                <p>This module is being configured for the LPS Group portal.</p>
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className="mt-6 text-blue-600 font-medium hover:underline"
                >
                  Return to Home
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <footer className="p-8 text-center text-slate-400 text-sm border-t border-slate-100 bg-white/50">
          &copy; 2026 LPS Group of Education Admin Panel. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
