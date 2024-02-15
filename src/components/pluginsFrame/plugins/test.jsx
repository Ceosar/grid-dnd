import React from 'react';

const Test = ({ children, pluginData }) => {
    const pluginDataDef = {
        id: 21,
        pluginName: "Plugin2",
        pluginTitle: "Маркетплейсы",
        data: 4.8,
        resize: true,
        height: 2,
        width: 2,
    }

    return (
        <div
            style={{
                width: "200px",
                height: "200px",
                zIndex: 9999
            }}
            draggable = {true}
            onDragStart={(e) => {
                e.dataTransfer.setData("type", "container");
                e.dataTransfer.setData("pluginData", JSON.stringify(pluginData ? pluginData : pluginDataDef));
            }}
        >
            {children}
        </div>
    );
}

export default Test;
