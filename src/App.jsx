import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from "./router/router";
import ThemeProvider from "./context/ThemeProvider";
function App(props) {
  return (
    <>
      <ThemeProvider>
        <RouterProvider router={router}/>
      </ThemeProvider>
    </>
  );
}

export default App;