import {
  CrownOutlined,
  DollarOutlined,
  FileDoneOutlined,
  FileProtectOutlined,
  GlobalOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MessageOutlined,
  PieChartOutlined,
  ProductOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/logos/it_corner.png";

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed, isMobile = false, onCloseDrawer }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (key) => {
    navigate(key);
    if (isMobile && onCloseDrawer) onCloseDrawer();
  };

  const menuItems = [
    {
      key: "/",
      icon: <ProductOutlined style={{ fontSize: "22px", color: "#4564AA" }} />,
      label: "Dashboard",
    },
    {
      key: "/messages",
      icon: <MessageOutlined style={{ fontSize: "22px", color: "#4564AA" }} />,
      label: "Messages",
    },
    {
      key: "/progress",
      icon: <PieChartOutlined style={{ fontSize: "22px", color: "#4564AA" }} />,
      label: "Progress",
    },
    {
      key: "/settings",
      icon: <SettingOutlined style={{ fontSize: "22px", color: "#4564AA" }} />,
      label: "Settings",
    },
    {
      key: "/completed",
      icon: <FileDoneOutlined style={{ fontSize: "22px", color: "#4564AA" }} />,
      label: "Completed",
    },
    {
      key: "/projects",
      icon: <GlobalOutlined style={{ fontSize: "22px", color: "#4564AA" }} />,
      label: "Projects",
    },
    {
      key: "/security",
      icon: <FileProtectOutlined style={{ fontSize: "22px", color: "#4564AA" }} />,
      label: "Projects",
    },
    
    {
      key: "/earning",
      icon: <DollarOutlined style={{ fontSize: "22px", color: "#4564AA" }} />,
      label: "Earning",
    },
    {
      key: "/important-work",
      icon: <CrownOutlined style={{ fontSize: "22px", color: "#4564AA" }} />,
      label: "Important Work",
    },
    {
      key: "/logout",
      icon: <LogoutOutlined style={{ fontSize: "22px", color: "#4564AA" }} />,
      label: "Logout",
    },
  ];

  const menuProps = {
    mode: "inline",
    selectedKeys: [location.pathname],
    onClick: ({ key }) => handleNavigate(key),
    items: menuItems,
    className: "gap-y-5 flex flex-col !rounded-lg",
  };

  if (isMobile) {
    return (
      <div className="bg-transparent h-full shadow-md w-full">
        <div className="flex items-center justify-between px-4 py-3">
          <img src={logo} alt="logo" className="w-32 h-auto object-contain" />
        </div>
        <Menu {...menuProps} />
      </div>
    );
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      trigger={null}
      className="bg-transparent mx-4 my-3 rounded-md sticky top-4 h-[calc(100vh-32px)] overflow-auto z-40"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white rounded-t-md">
        {/* ✅ Show logo only when collapsed */}
        {!collapsed && (
          <img src={logo} alt="logo" className=" sm:w-36 md:w-32 lg:w-32 h-auto object-contain" />
        )}
        <Button
          type="text"
          onClick={() => setCollapsed(!collapsed)}
          icon={
            collapsed ? (
              <MenuUnfoldOutlined style={{ fontSize: "22px" }} />
            ) : (
              <MenuFoldOutlined style={{ fontSize: "22px" }} />
            )
          }
        />
      </div>
      <Menu {...menuProps} />
    </Sider>
  );
};

export default Sidebar;
