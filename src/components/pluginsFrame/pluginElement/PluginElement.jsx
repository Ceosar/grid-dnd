import { Button, Card } from 'antd';
import React from 'react';
import "./PluginElement.css"


const PluginElement = ({ pluginData }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("type", "container");
        e.dataTransfer.setData("pluginData", JSON.stringify(pluginData));
    };

    return (
        <div
            draggable
            onDragStart={handleDragStart}
            className=''
        >
            {pluginData.pluginName}
        </div>
    );
}

export default PluginElement;
