import { SettingOutlined, UserOutlined, BgColorsOutlined } from '@ant-design/icons';
import { Drawer, Dropdown, Grid, Input, Layout } from "antd";
import React, { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import profileImage from "../assets/avatar/1.png";
import Loader from "../components/loader/Loader";
import Sidebar from "../components/sidebar/Sidebar";
import ThemeToggle from '../components/sidebar/ThemeToggle'; // your toggle switch

const { Header, Content } = Layout;
const { useBreakpoint } = Grid;

const ProtectedLayout = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const screens = useBreakpoint();
  const location = useLocation();

  const isMobile = !screens.md;

  const isAuth = true;
  if (!isAuth) return <Navigate to="/auth" replace />;

  const routeTitles = {
    "/": "Dashboard",
    "/messages": "Messages",
    "/progress": "Progress",
    "/settings": "Settings",
    "/completed": "Completed",
    "/projects": "Projects",
    "/security": "Security",
    "/logout": "Logout",
    "/earning": "Earning",
    "/important-work": "Important Work",
  };

  const pageTitle = routeTitles[location.pathname] || "Dashboard";

  const items = [
    {
      key: '1',
      label: 'Profile',
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: 'Settings',
      icon: <SettingOutlined />,
    },
    {
      type: 'divider',
    },
    {
      key: 'theme-toggle',
      label: (
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <BgColorsOutlined /> Theme
          </span>
          <ThemeToggle />
        </div>
      ),
    },
  ];

  return (
    <Layout className="min-h-screen">
      {/* Sidebar */}
      {isMobile ? (
        <Drawer
          placement="left"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
          styles={{ body: { padding: 0 } }}
          width={220}
        >
          <Sidebar
            collapsed={false}
            setCollapsed={setCollapsed}
            isMobile
            onCloseDrawer={() => setMobileOpen(false)}
          />
        </Drawer>
      ) : (
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      )}

      {/* Content */}
      <Layout>
        <Header className="bg-white px-4 py-2 shadow-md dark:bg-gray-900 dark:text-white">
          <div className="flex flex-wrap items-center justify-between gap-4 w-full">
            {/* Left - Page Title */}
            <div className="min-w-[150px]">
              <h1 className="text-lg font-semibold">{pageTitle}</h1>
            </div>

            {/* Center - Search (only visible on desktop) */}
            {!isMobile && (
              <div className="flex-1 flex justify-center">
                <Input.Search
                  size="large"
                  placeholder="Search"
                  variant="filled"
                  className="w-full max-w-[500px]"
                />
              </div>
            )}

            {/* Right - Profile & Menu */}
            <div className="flex items-center justify-end gap-4">
              <Dropdown menu={{ items }} trigger={['click']}>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="bg-transparent border-none cursor-pointer p-0"
                >
                  <img
                    src={profileImage}
                    alt="profile"
                    className="w-11 h-11 rounded-full object-cover"
                  />
                </button>
              </Dropdown>

              {/* Mobile menu toggle button */}
              {isMobile && (
                <button
                  onClick={() => setMobileOpen(true)}
                  className="text-xl px-2 py-1 border rounded-md shadow"
                >
                  ☰
                </button>
              )}
            </div>
          </div>
        </Header>

        <Content className="p-4 bg-white/10 dark:bg-gray-800">
          <React.Suspense fallback={<Loader />}>
            <Outlet />
          </React.Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ProtectedLayout;
