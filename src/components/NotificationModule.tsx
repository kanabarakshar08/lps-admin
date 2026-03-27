import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, CheckCircle2, AlertCircle, Info, X, Search, Filter, Trash2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'info' | 'error';
  time: string;
  read: boolean;
}

const initialNotifications: Notification[] = [
  {
    id: '1',
    title: 'New Teacher Application',
    message: 'Dr. Sarah Wilson has applied for the Mathematics position.',
    type: 'info',
    time: '2 mins ago',
    read: false,
  },
  {
    id: '2',
    title: 'Payment Received',
    message: 'School fees for Student ID #ST-1024 has been processed successfully.',
    type: 'success',
    time: '1 hour ago',
    read: false,
  },
  {
    id: '3',
    title: 'System Update',
    message: 'The admin panel will undergo maintenance tonight at 12:00 AM.',
    type: 'warning',
    time: '3 hours ago',
    read: true,
  },
  {
    id: '4',
    title: 'Urgent: Student Request',
    message: 'A new urgent booking request requires your immediate attention.',
    type: 'error',
    time: '5 hours ago',
    read: false,
  },
  {
    id: '5',
    title: 'Profile Updated',
    message: 'Your admin profile information has been updated successfully.',
    type: 'success',
    time: '1 day ago',
    read: true,
  },
];

export const NotificationModule: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotifications = notifications
    .filter(n => (filter === 'unread' ? !n.read : true))
    .filter(n => 
      n.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      n.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const markAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const deleteNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const getTypeIcon = (type: Notification['type']) => {
    switch (type) {
      case 'success': return <CheckCircle2 className="text-emerald-500" size={20} />;
      case 'warning': return <AlertCircle className="text-amber-500" size={20} />;
      case 'error': return <AlertCircle className="text-red-500" size={20} />;
      case 'info': return <Info className="text-blue-500" size={20} />;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">Notifications</h1>
          <p className="text-slate-500 mt-1">Stay updated with the latest activities and alerts</p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={markAllAsRead}
            className="px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
          >
            Mark all as read
          </button>
          <button 
            onClick={clearAll}
            className="px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all flex items-center gap-2"
          >
            <Trash2 size={16} />
            Clear all
          </button>
        </div>
      </div>

      <div className="glass-card overflow-hidden flex flex-col lg:flex-row min-h-[600px]">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-slate-100 p-6 bg-slate-50/30">
          <div className="space-y-1">
            <button 
              onClick={() => setFilter('all')}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all",
                filter === 'all' ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-slate-600 hover:bg-white"
              )}
            >
              <span>All Notifications</span>
              <span className={cn("px-2 py-0.5 rounded-full text-[10px]", filter === 'all' ? "bg-white/20" : "bg-slate-200")}>
                {notifications.length}
              </span>
            </button>
            <button 
              onClick={() => setFilter('unread')}
              className={cn(
                "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all",
                filter === 'unread' ? "bg-blue-600 text-white shadow-lg shadow-blue-200" : "text-slate-600 hover:bg-white"
              )}
            >
              <span>Unread</span>
              <span className={cn("px-2 py-0.5 rounded-full text-[10px]", filter === 'unread' ? "bg-white/20" : "bg-slate-200")}>
                {notifications.filter(n => !n.read).length}
              </span>
            </button>
          </div>

          <div className="mt-8">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-4">Categories</p>
            <div className="space-y-1">
              {['System', 'Payments', 'Applications', 'Security'].map(cat => (
                <button key={cat} className="w-full text-left px-4 py-2 text-sm text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-white">
          <div className="p-4 border-b border-slate-100 flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search notifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-100 rounded-xl focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm"
              />
            </div>
            <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all">
              <Filter size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            <AnimatePresence mode="popLayout">
              {filteredNotifications.length > 0 ? (
                filteredNotifications.map((n) => (
                  <motion.div
                    key={n.id}
                    layout
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className={cn(
                      "p-6 border-b border-slate-50 flex gap-4 hover:bg-slate-50/50 transition-all group relative",
                      !n.read && "bg-blue-50/30"
                    )}
                  >
                    <div className="mt-1">{getTypeIcon(n.type)}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className={cn("text-sm font-bold truncate", n.read ? "text-slate-700" : "text-blue-900")}>
                          {n.title}
                        </h4>
                        <span className="text-[10px] text-slate-400 font-medium whitespace-nowrap ml-2">{n.time}</span>
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{n.message}</p>
                      
                      <div className="mt-3 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        {!n.read && (
                          <button 
                            onClick={() => markAsRead(n.id)}
                            className="text-xs font-bold text-blue-600 hover:underline"
                          >
                            Mark as read
                          </button>
                        )}
                        <button 
                          onClick={() => deleteNotification(n.id)}
                          className="text-xs font-bold text-red-500 hover:underline"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    {!n.read && (
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full group-hover:hidden" />
                    )}
                  </motion.div>
                ))
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-12 text-center">
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4">
                    <Bell className="text-slate-300" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">No notifications found</h3>
                  <p className="text-slate-500 max-w-xs mx-auto mt-2">
                    {searchQuery ? "Try adjusting your search or filters to find what you're looking for." : "You're all caught up! Check back later for new updates."}
                  </p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
