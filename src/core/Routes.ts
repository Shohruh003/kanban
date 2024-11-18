import NotFoundPage from "/pages/NotFoundPage";
import { IRoutes } from "./types/types";

const commonRoutes: IRoutes = {
    notFound: { path: '*', component: NotFoundPage, isPrivate: false, roles: []},
}

export default commonRoutes;
