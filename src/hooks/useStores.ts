import { useContext } from 'react';
import { StoreContext } from '../core/StoreContext';
import { RootStore } from '../stores/RootStore';

export default function useStores(): RootStore { return useContext(StoreContext); }