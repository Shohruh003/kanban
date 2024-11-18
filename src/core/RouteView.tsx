import { observer } from "mobx-react-lite";
import { FC } from "react";
import PopupProvider from "./PopupProvider";
import { Navigate, Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import useStores from "/hooks/useStores";

interface IRouteViewProps {
    isPrivate: boolean;
    roles: number[];
}

const RouteView: FC<IRouteViewProps> = ({ isPrivate, roles }) => {
    const { userStore } = useStores();
    const userRole = userStore.getUserRole();

    if (isPrivate && !userStore.isAuth()) {
        return <Navigate to="/auth" replace />;
    }

    if (roles.length > 0 && userRole !== null && !roles.includes(userRole)) {
        return <Navigate to="/not-found" replace />;
    }

    return (
        <>
            <ScrollToTop />
            <PopupProvider />
            <Outlet />
        </>
    );
};

export default observer(RouteView);
