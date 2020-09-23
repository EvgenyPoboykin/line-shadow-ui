import React from 'react';
import { IProvider } from './interfaces';

export const ContextApp = React.createContext<any>(null);

export const ProviderApp: React.FC<IProvider> = ({ value, children }) => {
    return <ContextApp.Provider value={value}>{children}</ContextApp.Provider>;
};
