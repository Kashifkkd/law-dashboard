import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Suspense } from "react";
import Dashboard from "../pages/dashboard";
import PageLoader from "../components/loaders/PageLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
