import { IRoutes } from "../../core/types/types";
import AdminPage from "./pages/AdminPage";

const routes: IRoutes = {
  main: { path: "/kanban", component: AdminPage, isPrivate: false, roles: [] },
};

export default routes;
