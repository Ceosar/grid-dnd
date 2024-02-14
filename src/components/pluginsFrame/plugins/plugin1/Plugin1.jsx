import React from 'react';
import "./Plugin1.css"

const Plugin1 = {
    pluginData: {
        id: 4122,
        pluginName: "Plugin1",
        pluginTitle: "Отзывы",
        data: 25246,
        resize: false,
        height: 1,
        width: 1,
    },
    renderForMenu: (pluginData) => (
        <div
            style={{
                width: "100%",
                height: "100%",
            }}
            draggable
            onDragStart={(e) => {
                e.dataTransfer.setData("type", "container");
                e.dataTransfer.setData("pluginData", JSON.stringify(Plugin1.pluginData));
            }}
        >
            <h3>Отзывы</h3>
        </div>
    ),
    renderForGrid: (pluginData) => (
        <div>
            <h3>Отзывы frame</h3>
            <h3>{pluginData.data}</h3>
        </div>
    )
};

export default Plugin1;
