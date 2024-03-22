
'use client'; // This is a client component 

import React, { createContext, useContext } from 'react';

export interface ContextProps {
    mode: string;
    swap: () => void;
}


export const SystemContext = React.createContext<ContextProps>({
    mode: 'light',
    swap: () => { }
});
