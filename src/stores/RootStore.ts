import RequestFactory from "../core/request/RequestFactory";
import PopupStore from "./PopupStore";
import { makeObservable, action, observable } from 'mobx';
import UserStore from "./UserStore";

export interface IStoreParams {
    createRequest: RequestFactory['createRequest']
}

export class RootStore {
    createRequest: RequestFactory['createRequest'] = Promise.resolve;
    createLoginRequest: RequestFactory['createLoginRequest'] = Promise.resolve;
    createSimpleRequest: RequestFactory['createSimpleRequest'] = Promise.resolve;
    createLoginByVideoRequest: RequestFactory['createLoginByVideoRequest'] = Promise.resolve;

    isLoading = false;

    title = '';


    userStore: UserStore;
    popupStore: PopupStore;



    constructor() {
        this.popupStore = new PopupStore();
        this.userStore = new UserStore(this);
        makeObservable(this, { isLoading: observable, title: observable, setLoading: action, setTitle: action });
    }

    setCreateRequest(createRequest: RequestFactory['createRequest']) {
        this.createRequest = createRequest;
    }

    setCreateSimpleRequest(createSimpleRequest: RequestFactory['createSimpleRequest']) {
        this.createSimpleRequest = createSimpleRequest;
    }

    setCreateLoginRequest(createLoginRequest: RequestFactory['createLoginRequest']) {
        this.createLoginRequest = createLoginRequest;
    }

    setCreateLoginByVideoRequest(createLoginByVideoRequest: RequestFactory['createLoginByVideoRequest']) {
        this.createLoginByVideoRequest = createLoginByVideoRequest;
    }

    public setTitle = (title: string) => {
        this.title = title;
    }

    public setLoading = (isLoading: boolean) => {
        this.isLoading = isLoading;
    }
}