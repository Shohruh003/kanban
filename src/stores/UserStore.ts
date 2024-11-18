import { IStore } from "./IStore";
import { RootStore } from "./RootStore";
import { AUTH_TOKEN_NAME } from "/core/constants";
import { AutorizationData, ThemeTypes } from "../core/types/types";

interface User {
    id: number;
    active: boolean;
    created_date: string;
    groups: Array<number>;
    modified_date: string;
    permissions: Array<string>;
    real_name: string;
    name: string;
    comment: string;
    camera_group_permissions: any;
    watch_list_permissions: any;
    group_permissions: any;
    primary_group: number;
    language: string;
    has_face: boolean;
    face_cover: any;
    ad_user: boolean;
    has_admin_permissions: boolean;
}

interface AuthResponse {
    token: string;
    token_expiration_datetime: string;
    user: User;
}

export default class UserStore extends IStore {
    private auth: boolean = false;
    private userRole: number | null = null;

    currentTheme = localStorage.getItem('theme') as ThemeTypes || ThemeTypes.MAIN;

    //должно с бэка приходить
    public icon = '';

    constructor(rootStore: RootStore) {
        super(rootStore);
        if (sessionStorage.getItem(AUTH_TOKEN_NAME)) {
            this.setAuth(true);
        }
    }

    private setAuth(auth: boolean) {
        this.auth = auth;
    }

    public isAuth() {
        return this.auth;
    }

    public setCurrentTheme(type: ThemeTypes) {
        this.currentTheme = type;
        localStorage.setItem('theme', type);
    }

    public login(data: AutorizationData) {
        return this.rootStore.createLoginRequest<AuthResponse>(data).then((response) => {
            if (response) {
                sessionStorage.setItem('expirationDatetime', response.token_expiration_datetime);
                sessionStorage.setItem(AUTH_TOKEN_NAME, response.token);
                this.userRole = response?.user?.primary_group;
                this.setAuth(true);
            }
            return Promise.resolve();
        })
    }

    public logout() {
        sessionStorage.removeItem('expirationDatetime');
        sessionStorage.removeItem(AUTH_TOKEN_NAME);
        localStorage.removeItem('userRole');
        this.userRole = null;
        this.setAuth(false);
    }

    public getUserRole() {
        return this.userRole;
    }
}