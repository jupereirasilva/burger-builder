import React from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = props => {
  return (
    <div>
      <Toolbar />
      <SideDrawer />
      <main style={{ marginTop: 72 }}>{props.children}</main>
    </div>
  );
};

export default layout;
