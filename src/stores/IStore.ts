import { RootStore } from "./RootStore";

export class IStore {
    public isLoading = false;
    protected rootStore: RootStore;

    public setLoading(_loading: boolean) {
        this.isLoading = _loading;
    }

    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
}