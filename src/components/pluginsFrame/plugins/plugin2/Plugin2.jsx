import React from 'react';
import "./Plugin2.css"

const Plugin2 = {

    pluginData: {
        id: 21,
        pluginName: "Plugin2",
        pluginTitle: "Маркетплейсы",
        data: 4.8,
        resize: true
    },
    renderForMenu: () => (
        <div
            style={{
                width: "100%",
                height: "100%",
            }}
            draggable
            onDragStart={(e) => {
                e.dataTransfer.setData("type", "container");
                e.dataTransfer.setData("pluginData", JSON.stringify(Plugin2.pluginData));
            }}
        >
            <h3>Маркетплейсы</h3>
        </div>
    ),
    renderForGrid: () => (
        <div>
            <h3>Маркетплейсы frame</h3>
        </div>
    )
};

export default Plugin2;
