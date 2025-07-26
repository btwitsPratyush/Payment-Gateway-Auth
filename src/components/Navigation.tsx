import React from 'react';
import { Home, User, CreditCard, Wallet, FileText, MessageSquare, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const Navigation = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const navItems = [
    { icon: Home, label: 'Dashboard', path: '/', active: location.pathname === '/' },
    { icon: User, label: 'Account Details', path: '/account-details', active: location.pathname === '/account-details' },
    { icon: CreditCard, label: 'Load Account Details', path: '/load-account-details', active: location.pathname === '/load-account-details' },
    { icon: CreditCard, label: 'Pay-Out', path: '/pay-out', active: location.pathname === '/pay-out' },
    { icon: Wallet, label: 'Load Wallet', path: '/load-wallet', active: location.pathname === '/load-wallet' },
    { icon: FileText, label: 'Transaction Summary', path: '/transaction-summary', active: location.pathname === '/transaction-summary' },
    { icon: MessageSquare, label: 'Complain Report', path: '/complain-report', active: location.pathname === '/complain-report' },
  ];

  const handleSignOut = () => {
    if (confirm('Are you sure you want to sign out?')) {
      logout();
    }
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white px-6 py-3 overflow-x-auto">
      <div className="flex justify-between items-center min-w-max">
        <ul className="flex items-center space-x-4 flex-nowrap">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} className="flex-shrink-0">
                <Link
                  to={item.path}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/10 whitespace-nowrap ${
                    item.active ? 'bg-white/10' : ''
                  }`}
                >
                  <Icon className="w-4 h-4 flex-shrink-0" />
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
        
        {/* Sign Out Button */}
        <button
          onClick={handleSignOut}
          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-red-500/20 text-white hover:text-red-100 flex-shrink-0 ml-4 whitespace-nowrap"
        >
          <LogOut className="w-4 h-4 flex-shrink-0" />
          <span>Sign Out</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;