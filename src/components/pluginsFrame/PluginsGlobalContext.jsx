import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const PluginContext = createContext();

export const PluginsGlobalContext = ({ children }) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [w, setW] = useState(false);
    const [h, setH] = useState(false);

    return (
        <PluginContext.Provider value={{menuVisible, setMenuVisible, setH, setW, h, w}}>
            {children}
        </PluginContext.Provider>
    );
}

export const usePluginContext = () => {
    const context = useContext(PluginContext);
    return context
}