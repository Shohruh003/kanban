import { useContext, useMemo } from "react";
import { CoreContext } from "/core/CoreContext";

export default function usePaths(Paths: Record<string, any> = {}){
    const {paths: globalPaths} = useContext(CoreContext);

    return useMemo(() => {
        return ({ ...globalPaths, ...Paths });
    }, [globalPaths, Paths]);
}