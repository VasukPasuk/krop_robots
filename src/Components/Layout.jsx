import React from 'react';
import './Layout.style.scss'
import DescriptionPage from "./DescriptionPage/DescriptionPage";
import EndPage from "./EndPage/EndPage";
import IntroductionPage from "./IntroductionPage/IntroductionPage";
import PaginationPage from "./PaginationPage/PaginationPage";

function Layout(props) {
  return (
    <main id={`main-content-wrapper`}>
      <IntroductionPage/>
      <PaginationPage/>
      <DescriptionPage/>
      <EndPage/>
    </main>
  );
}

export default Layout;