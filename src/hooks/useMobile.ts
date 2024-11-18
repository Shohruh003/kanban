import { useContext, useMemo } from 'react';
import { CoreContext } from "../core/CoreContext";
import { Breakpoint, useMediaQuery } from '@mui/material';
import { getTheme } from '/core/theme';
import useStores from './useStores';

export default function useMobile(key?: Breakpoint) {
    const { userStore } = useStores();
    const { locale: globalLocale, language } = useContext(CoreContext);

    return useMediaQuery(getTheme(userStore.currentTheme)?.breakpoints.down(key ? key : 'sm'));
}