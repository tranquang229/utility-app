import AuthGuard from "app/auth/AuthGuard";
import NotFound from "app/views/sessions/NotFound";
import chartsRoute from "app/views/charts/ChartsRoute";
import materialRoutes from "app/views/material-kit/MaterialRoutes";
import dashboardRoutes from "app/views/dashboard/DashboardRoutes";
import sessionRoutes from "app/views/sessions/SessionRoutes";
import MatxLayout from '../components/MatxLayout/MatxLayout'
import learnRoutes from "app/views/learns/LearnRoutes";
import learnOutsideRoutes from "app/views/learns/LearnOutsideRoutes";

export const AllPages = () => {
  const all_routes = [
    {
      path: "/",
      element: (
        <AuthGuard>
          <MatxLayout />
        </AuthGuard>
      ),
      children: [
        ...dashboardRoutes,
        ...chartsRoute,
        ...materialRoutes,
        ...learnRoutes,
      ],
    },
    ...sessionRoutes,
    ...learnOutsideRoutes,
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  return all_routes;
}