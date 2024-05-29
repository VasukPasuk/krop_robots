import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MainPage from "../pages/Main.page";
import Layout from "../Components/Layout";
import RobotSumoFull from "../pages/RobotSumoFull.page";
import {MAIN_ROUTE, HOME_ROUTE, NEWS_ROUTE, SUMO_DESCRIPTION_ROUTE} from "../constants/.routes";

const router = createBrowserRouter([
  {
    path: MAIN_ROUTE,
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: MAIN_ROUTE,
        element: <MainPage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: HOME_ROUTE,
        element: <MainPage/>,
        errorElement: <ErrorPage />,
      },
      {
        path: SUMO_DESCRIPTION_ROUTE,
        element: <RobotSumoFull/>,
        errorElement: <ErrorPage />,
      },
    ]
  },
]);

export default router
