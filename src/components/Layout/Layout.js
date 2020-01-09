import React from "react";

const layout = props => {
  return (
    <div>
      <div>Toolbar, SideDrawer, Backdrop</div>
      <main>{props.children}</main>
    </div>
  );
};

export default layout;
