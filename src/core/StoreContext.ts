import { createContext } from "react";
import { IMainAppOptions } from "./types/types";

export type IStoreContext = IMainAppOptions['store'];

export const StoreContext = createContext<IStoreContext>({} as IStoreContext);
export const StoreContextProvider = StoreContext.Provider;