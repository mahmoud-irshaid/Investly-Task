import React, { FC, useState, ReactNode } from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Page Wrapper: Contains the entire layout */}
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar Component */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Main Content Area */}
        <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
          {/* Header Component */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          {/* Main Content */}
          <main>
            <div className="max-w-screen-3xl py-4 lg:pt-1">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
