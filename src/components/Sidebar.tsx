import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  UserPlus, 
  Calendar, 
  CreditCard, 
  Star, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  LogOut,
  GraduationCap,
  Info,
  School,
  Image,
  Mail,
  UserCircle,
  Bell,
  ChevronDown
} from 'lucide-react';
import { cn } from '../lib/utils';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
  onLogout: () => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
  { id: 'about', label: 'About', icon: Info },
  { 
    id: 'school', 
    label: 'The School', 
    icon: School,
    subItems: [
      { id: 'academics', label: 'Academics' },
      { id: 'admission', label: 'Admission' },
      { id: 'resources', label: 'Resources' },
      { id: 'achievement', label: 'Achievement' },
      { id: 'knowledge', label: 'Knowledge' },
    ]
  },
  { id: 'fees', label: 'Pay School fees', icon: CreditCard },
  { id: 'gallery', label: 'Gallery', icon: Image },
  { id: 'hiring', label: 'Hiring', icon: Users },
  { id: 'contact', label: 'Contact Us', icon: Mail },
  { id: 'profile', label: 'Profile', icon: UserCircle },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeTab, 
  setActiveTab, 
  isMobileOpen, 
  setIsMobileOpen, 
  onLogout,
  isCollapsed,
  setIsCollapsed
}) => {
  const [expandedMenus, setExpandedMenus] = useState<string[]>(['school']);

  const toggleExpand = (id: string) => {
    setExpandedMenus(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (window.innerWidth < 1024) {
      setIsMobileOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside 
        className={cn(
          "fixed left-0 top-0 h-screen bg-white border-r border-slate-200 transition-all duration-300 z-50 flex flex-col shadow-sm",
          isCollapsed ? "w-20" : "w-64",
          isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <GraduationCap size={20} />
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-800">LPS<span className="text-blue-600">Group</span></span>
            </div>
          )}
          {isCollapsed && (
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white mx-auto shadow-lg shadow-blue-200">
              <GraduationCap size={20} />
            </div>
          )}
        </div>

        <nav className="flex-1 px-4 space-y-1 mt-4 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id || item.subItems?.some(s => s.id === activeTab);
            const isExpanded = expandedMenus.includes(item.id);
            
            return (
              <div key={item.id} className="space-y-1">
                <button
                  onClick={() => {
                    if (item.subItems) {
                      toggleExpand(item.id);
                    } else {
                      handleTabClick(item.id);
                    }
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group relative",
                    isActive && !item.subItems
                      ? "bg-blue-50 text-blue-600 font-medium" 
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                  )}
                >
                  <Icon size={20} className={cn(
                    "transition-transform duration-200 group-hover:scale-110",
                    isActive ? "text-blue-600" : "text-slate-400"
                  )} />
                  {!isCollapsed && <span className="flex-1 text-left">{item.label}</span>}
                  
                  {!isCollapsed && item.subItems && (
                    <ChevronDown size={16} className={cn("transition-transform", isExpanded && "rotate-180")} />
                  )}

                  {isActive && !item.subItems && (
                    <div className="absolute left-0 w-1 h-6 bg-blue-600 rounded-r-full" />
                  )}
                  
                  {isCollapsed && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                      {item.label}
                    </div>
                  )}
                </button>

                {!isCollapsed && item.subItems && isExpanded && (
                  <div className="ml-9 space-y-1">
                    {item.subItems.map(sub => (
                      <button
                        key={sub.id}
                        onClick={() => handleTabClick(sub.id)}
                        className={cn(
                          "w-full text-left p-2 rounded-lg text-sm transition-all",
                          activeTab === sub.id 
                            ? "text-blue-600 font-medium bg-blue-50/50" 
                            : "text-slate-400 hover:text-slate-700 hover:bg-slate-50"
                        )}
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

      <div className="p-4 border-t border-slate-100">
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center gap-3 p-3 text-slate-500 hover:bg-slate-50 rounded-xl transition-all"
        >
          {isCollapsed ? <ChevronRight size={20} className="mx-auto" /> : (
            <>
              <ChevronLeft size={20} />
              <span>Collapse Sidebar</span>
            </>
          )}
        </button>
        
        {!isCollapsed && (
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-3 p-3 text-red-500 hover:bg-red-50 rounded-xl mt-2 transition-all"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        )}
      </div>
    </aside>
    </>
  );
};
