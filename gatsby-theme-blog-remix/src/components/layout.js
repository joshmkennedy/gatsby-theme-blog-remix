import React from "react";
import { Layout as StyledLayout } from "theme-ui";

import LayoutHeader from "./LayoutHeader";
import LayoutMain from "./LayoutMain";
import GlobalStyles from "./GlobalStyles";

/* Each theme-ui component has awrapper component making it easy to shadow. 
If you need to change the header shadow LayoutHeader. If you need to shadow the Main component shadow LayoutMain.  */

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <GlobalStyles />
      <LayoutHeader />
      <LayoutMain children={children} />
    </StyledLayout>
  );
};

export default Layout;
