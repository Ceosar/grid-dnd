import React from 'react';
import { usePluginContext } from '../PluginsGlobalContext';

const PluginPrototype = ({ children, pluginData }) => {
    const pluginDataDef = {
        id: 21,
        pluginName: "Plugin2",
        pluginTitle: "Маркетплейсы",
        data: 4.8,
        resize: true,
        height: 2,
        width: 2,
    }

    const { setMenuVisible, setW, setH } = usePluginContext();

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                touchAction: "none",
            }}
            draggable={true}
            onDragStart={(e) => {
                e.dataTransfer.setData("type", "container");
                e.dataTransfer.setData("pluginData", JSON.stringify(pluginData ? pluginData : pluginDataDef));
                setMenuVisible(false);
                setW(pluginData.width)
                setH(pluginData.height)
            }}
        >
            {children}
        </div>
    );
}

export default PluginPrototype;
