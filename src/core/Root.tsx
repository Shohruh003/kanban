import { FunctionComponent, useContext } from "react";
import { CoreContext } from "./CoreContext";
import { Route, Routes, Navigate } from 'react-router-dom';
import { IRoutes } from "./types/types";
import RouteView from "./RouteView";
import { observer } from "mobx-react-lite";
import commonRoutes from "./Routes";
import useStores from "/hooks/useStores";

const Root: FunctionComponent = () => {
    const { routes } = useContext(CoreContext);
    const { userStore } = useStores();

    const getPublicRoutes = () => {
        const publicRoutes = { ...commonRoutes, ...routes };
        Object.keys(publicRoutes).forEach(key => {
            if (publicRoutes[key]?.isPrivate) {
                delete publicRoutes[key];
            }
        });
        return publicRoutes;
    };

    const routesResult: IRoutes = userStore.isAuth() ? { ...commonRoutes, ...routes } : getPublicRoutes();

    return (
        <Routes>
            {Object.entries(routesResult).map(([key, route]) => {
                const RouteComponent = route.component;
                return (
                    <Route
                        key={key}
                        path={route.path}
                        element={
                            <RouteView isPrivate={route.isPrivate} roles={route.roles} />
                        }
                    >
                        <Route path={route.path} element={<RouteComponent />} />
                    </Route>
                );
            })}
            <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
    );
};

export default observer(Root);
