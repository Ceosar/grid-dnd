import React from 'react';
import "./Plugin2.css"
import image from "./../../../../assets/react.svg"

const Plugin2 = {
    pluginData: {
        id: 21,
        pluginName: "Plugin2",
        pluginTitle: "Маркетплейсы",
        data: 4.8,
        resize: true,
        height: 2,
        width: 2,
    },
    renderForMenu: () => (
        <div slider>
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
                <h3 >Маркетплейсы</h3>
            </div>


        </div>
    ),
    renderForGrid: () => (
        <div>
            <h3>Маркетплейсы frame</h3>
            <img src={image} alt="" />
        </div>
    )
};

export default Plugin2;
