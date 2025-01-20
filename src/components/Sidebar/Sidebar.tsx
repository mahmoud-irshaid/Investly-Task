import React, { useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Sidebar.Style.scss';
import Logo from '../../assets/images/logo/logo.svg';
import UserOne from '../../assets/images/user/user1.png';
import {
  MdHelpOutline,
  MdOutlineBookmarks,
  MdOutlineDashboard,
  MdOutlineSettings,
  MdOutlineVerifiedUser,
  MdSpaceDashboard,
} from 'react-icons/md';
import { WiTime4 } from 'react-icons/wi';
import { IoArrowBack, IoShareSocialOutline } from 'react-icons/io5';
import { IoMdBusiness } from 'react-icons/io';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebarOpen, setSidebarOpen }) => {
  const { pathname } = useLocation();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const sidebarRef = useRef<HTMLElement | null>(null);

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        !sidebarRef.current ||
        !triggerRef.current ||
        sidebarRef.current.contains(event.target as Node) ||
        triggerRef.current.contains(event.target as Node)
      ) {
        return;
      }
      setSidebarOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [setSidebarOpen]);

  // Close sidebar on Esc key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setSidebarOpen]);

  const navItems = [
    {
      path: '/dashboard',
      label: 'Dashboard',
      icon: (
        <MdSpaceDashboard
          size={24}
          className={`${
            pathname.includes('dashboard') ? 'text-primary' : 'text-gray'
          }`}
        />
      ),
    },
    {
      path: '/projects',
      label: 'Projects',
      icon: (
        <WiTime4
          size={24}
          className={`${
            pathname.includes('projects') ? 'text-primary' : 'text-gray'
          }`}
        />
      ),
    },
    {
      path: '/',
      label: 'Available units',
      icon: (
        <IoMdBusiness
          size={24}
          className={`${
            pathname.includes('available-units') ? 'text-primary' : 'text-gray'
          }`}
        />
      ),
    },
    {
      path: '/',
      label: 'Invoices',
      icon: (
        <MdOutlineVerifiedUser
          size={24}
          className={`${
            pathname.includes('invoices') ? 'text-primary' : 'text-gray'
          }`}
        />
      ),
    },
    {
      path: '/',
      label: 'Social media',
      icon: (
        <IoShareSocialOutline
          size={24}
          className={`${
            pathname.includes('social-media') ? 'text-primary' : 'text-gray'
          }`}
        />
      ),
    },
    {
      path: '/',
      label: 'Integration',
      icon: (
        <MdOutlineDashboard
          size={24}
          className={`${
            pathname.includes('integration') ? 'text-primary' : 'text-gray'
          }`}
        />
      ),
    },
    {
      path: '/',
      label: 'Documentaion',
      icon: (
        <MdOutlineBookmarks
          size={24}
          className={`${
            pathname.includes('documentaion') ? 'text-primary' : 'text-gray'
          }`}
        />
      ),
    },
  ];

  const bottomNavItems = [
    {
      path: '/',
      label: 'Settings',
      icon: (
        <MdOutlineSettings
          size={24}
          className={`${
            pathname.includes('settings') ? 'text-primary' : 'text-gray'
          }`}
        />
      ),
    },
    {
      path: '/',
      label: 'Help Center',
      icon: (
        <MdHelpOutline
          size={24}
          className={`${
            pathname.includes('help-center') ? 'text-primary' : 'text-gray'
          }`}
        />
      ),
    },
  ];

  const renderNavLink = (
    path: string,
    label: string,
    icon: React.ReactNode,
  ) => (
    <li key={path + label + '-nav'}>
      <NavLink
        to={path}
        className={({ isActive }) =>
          `group relative flex items-center gap-6 rounded-sm px-6 py-2 font-medium duration-300 ease-in-out hover:bg-secndary ${
            isActive ? 'bg-secndary text-highlight active-tab' : 'text-subtle'
          }`
        }
      >
        <span
          className={`icon ${pathname.includes(path) ? 'color-primary' : 'color-gray'}`}
        >
          {icon}
        </span>
        {label}
      </NavLink>
    </li>
  );

  return (
    <aside
      ref={sidebarRef}
      className={`absolute left-0 top-0 z-50 h-screen w-60 flex flex-col bg-white border-r border-gray-200 transition-transform duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-center gap-2 px-6 py-4 lg:py-5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>

        <button
          ref={triggerRef}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <IoArrowBack size={24} className="mt-2 color-gray" />
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className="flex flex-col h-full overflow-y-auto">
        {/* Top Navigation */}
        <nav className="mt-2 py-4">
          <ul className="space-y-1.5">
            {navItems.map((item) =>
              renderNavLink(item.path, item.label, item.icon),
            )}
          </ul>
        </nav>

        {/* Bottom Navigation */}
        <nav className="mt-auto pt-4">
          <ul className="space-y-1.5">
            {bottomNavItems.map((item) =>
              renderNavLink(item.path, item.label, item.icon),
            )}
          </ul>
          <Link
            to="#"
            className="flex items-center gap-4 px-5 py-6 border-t border-gray-200"
          >
            <span className="h-9 w-9 rounded-full overflow-hidden">
              <img src={UserOne} alt="User" />
            </span>
            <span className="hidden lg:block text-start">
              <span className="block text-sm font-medium text-subtle">
                Louise Thompson
              </span>
              <span className="block text-xs text-subtle">Enterprise plan</span>
            </span>
          </Link>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
