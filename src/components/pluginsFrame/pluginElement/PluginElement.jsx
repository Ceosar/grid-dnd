import { Card } from 'antd';
import React from 'react';


const PluginElement = ({ pluginData }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("type", "container");
        e.dataTransfer.setData("pluginData", JSON.stringify(pluginData));
    };
    return (
        <Card
            hoverable
            draggable
            onDragStart={handleDragStart}
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
                borderRadius: "10px",
            }}
        >
            <div >{pluginData.pluginName}</div>
        </Card>
    );
}

export default PluginElement;
