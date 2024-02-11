import { Card } from 'antd';
import React from 'react';


const PluginElement = ({ pluginData }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("type", "container");
        e.dataTransfer.setData("pluginData", JSON.stringify(pluginData));
    };
    return (
        <section
            draggable
            onDragStart={handleDragStart}
        >
            <div >{pluginData.pluginName}</div>
        </section>
    );
}

export default PluginElement;
