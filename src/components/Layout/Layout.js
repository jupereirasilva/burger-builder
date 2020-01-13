import React from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = props => {
  return (
    <div>
      <Toolbar />
      <main style={{ marginTop: 72 }}>{props.children}</main>
    </div>
  );
};

export default layout;
