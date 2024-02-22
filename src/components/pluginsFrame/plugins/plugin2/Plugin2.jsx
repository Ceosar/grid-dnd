import React from 'react';
import { Carousel } from 'antd';
import PluginPrototype from '../PluginPrototype';
import "./Plugin2.css"
import image from "./../../../../assets/react.svg"

const Plugin2 = {
    pluginData1: {
        id: 21,
        pluginName: "Plugin2",
        pluginTitle: "Маркетплейсы",
        data: 4.8,
        resize: true,
        height: 1,
        width: 1,
        size: "small"
    },
    pluginData2: {
        id: 21,
        pluginName: "Plugin2",
        pluginTitle: "Маркетплейсы",
        data: 4.8,
        resize: true,
        height: 2,
        width: 2,
    },
    renderForMenu: () => {
        return (
            <Carousel dotPosition="bottom" draggable={false} >
                <PluginPrototype pluginData={Plugin2.pluginData1}>
                    <div
                        style={{
                            width: "100%",
                            height: "200px",
                            backgroundColor: "grey",
                            borderRadius: "12px"
                        }}
                    >
                        <h3>Маркетплейсы frame small</h3>
                        <img src={image} alt="" />
                    </div>
                </PluginPrototype>
                <PluginPrototype pluginData={Plugin2.pluginData2}>
                    <div
                        style={{
                            width: "100%",
                            height: "200px",
                            backgroundColor: "grey",
                            borderRadius: "12px"
                        }}
                    >
                        <h3>Маркетплейсы frame</h3>
                        <img src={image} alt="" />
                    </div>
                </PluginPrototype>
            </Carousel>
        )
    },
    renderForGrid: (size = null) => {
        switch (size) {
            case "small":
                return (
                    <div>
                        <h3>Маркетплейсы frame small</h3>
                        <img src={image} alt="" />
                    </div>
                )
                break;
            default:
                return (

                    <div>
                        <h3>Маркетплейсы frame</h3>
                        <img src={image} alt="" />
                    </div>
                )
                break;
        }
    }
};

export default Plugin2;
