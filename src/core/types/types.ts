import RequestFactory from "../request/RequestFactory";
import { RootStore } from "../../stores/RootStore";
import { ThemeOptions } from "@mui/material";
import { FC } from "react";
import '@mui/material/styles/createPalette';

export interface IConfig {
    theme: ThemeOptions;
    logo: string;
}

export interface IRoute {
    path: string;
    component: FC;
    isPrivate: boolean;
    title?: string;
    roles: number[];
}

export type IRoutes = { [path: string]: IRoute };

export interface IMainAppOptions {
    store: RootStore;
    createRequest: RequestFactory['createRequest'];
    language: string;
    locale: Record<string, any>;
    config: Record<string, any>;
    routes?: IRoutes;
    isMobile?: boolean;
    paths: Record<string, any>;
}

export interface AutorizationData {
    username: string;
    password: string;
}

export enum ThemeTypes {
    MAIN = 'primary',
    RED = 'primaryRed',
    GREEN = 'primaryGreen',
}

export interface TableCell {
    key: string;
    inner?: React.ReactNode;
}

export type TableRow = Array<TableCell>;

export interface TableHeaderCell extends TableCell {
    size?: number;
}


export type AllPeopleStatisticType = 'present' | 'absent' | 'excused';

export interface IPoint {
    x: number;
    y: number;
}

export interface IDrawingFaces {
    rect: IRect;
    name: string;
    id: string;
    avatar?: string;
    isStranger: boolean;
}

export interface IRect {
    lt: IPoint;
    rb: IPoint;
}