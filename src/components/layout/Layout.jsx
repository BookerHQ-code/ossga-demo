import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Navigation */}
      <nav className='bg-white shadow-sm border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center'>
              <div className='flex-shrink-0'>
                <h1 className='text-xl font-bold text-gray-900'>App</h1>
              </div>
              <div className='hidden md:block ml-10'>
                <div className='flex space-x-8'>
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>

            <div className='md:hidden'>
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className='p-2 rounded-md text-gray-600 hover:bg-gray-100'
              >
                {sidebarOpen ? (
                  <XMarkIcon className='h-6 w-6' />
                ) : (
                  <Bars3Icon className='h-6 w-6' />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {sidebarOpen && (
            <div className='md:hidden py-4 border-t border-gray-200'>
              <div className='space-y-2'>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md ${isActive ? 'nav-link-active' : 'nav-link'}`
                    }
                    onClick={() => setSidebarOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content */}
      <main className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
        <div className='animate-fade-in'>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
