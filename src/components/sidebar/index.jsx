import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {
  FiLogOut,
} from "react-icons/fi";

//import sidebar css from react-pro-sidebar module and our custom css
import "react-pro-sidebar/dist/css/styles.css";
import "../../assets/styles/components/sidebar.scss";

const Sidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
        {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Logo" : "Big Logo"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <i class="bi bi-x"></i>: <i class="bi bi-x"></i>}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={true} icon={""}>
                Home
              </MenuItem>
              <MenuItem icon={""}>Create Community</MenuItem>
              <MenuItem icon={""}>Mentorship</MenuItem>
              <MenuItem icon={""}>Bookmarked items</MenuItem>
              <MenuItem icon={""}>Start blogging</MenuItem>
              <MenuItem icon={""}>Upload Content</MenuItem>
              <MenuItem icon={""}>Resources/Library</MenuItem>
              <MenuItem icon={""}>Content videos</MenuItem>
              <MenuItem icon={""}>Goal progress</MenuItem>
              <MenuItem icon={""}>Settings</MenuItem>


            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;
