import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainPage from "../pages/Main.page";
import Layout from "../Components/Layout";
import RobotSumoFull from "../pages/RobotSumoFull.page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainPage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/home',
        element: <MainPage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: '/robot-sumo-full',
        element: <RobotSumoFull/>,
        errorElement: <ErrorPage />,
      },
    ]
  },
]);

export default router
