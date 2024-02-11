import { Button, Card } from 'antd';
import React from 'react';
import "./PluginElement.css"


const PluginElement = ({ pluginData }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("type", "container");
        e.dataTransfer.setData("pluginData", JSON.stringify(pluginData));
    };

    return (
<<<<<<< HEAD
        <section
            draggable
            onDragStart={handleDragStart}
        >
            <div >{pluginData.pluginName}</div>
        </section>
=======
        <div
            draggable
            onDragStart={handleDragStart}
            className=''
        >
            {pluginData.pluginName}
        </div>
>>>>>>> origin/main
    );
}

export default PluginElement;
