import React from 'react';
import { Carousel } from 'antd';
import PluginPrototype from '../PluginPrototype';
import "./Plugin1.css"

const Plugin1 = {
    pluginData1: {
        id: 4122,
        pluginName: "Plugin1",
        pluginTitle: "Отзывы",
        data: 25246,
        resize: false,
        height: 1,
        width: 1,
        size: "small"
    },
    pluginData2: {
        id: 4122,
        pluginName: "Plugin1",
        pluginTitle: "Отзывы",
        data: 25246,
        resize: false,
        height: 2,
        width: 2,
    },
    renderForMenu: () => {
        return (
            <Carousel dotPosition="bottom" draggable={false} >
                <PluginPrototype pluginData={Plugin1.pluginData1}>
                    <h3
                        style={{
                            width: "100%",
                            height: "200px",
                            backgroundColor: "grey",
                            borderRadius:"12px"
                        }}
                    >Отзывы frame small</h3>
                </PluginPrototype>
                <PluginPrototype pluginData={Plugin1.pluginData2}>
                    <h3
                        style={{
                            width: "100%",
                            height: "200px",
                            backgroundColor: "grey",
                            borderRadius:"12px"
                        }}
                    >Отзывы frame</h3>
                </PluginPrototype>
            </Carousel>
        )
    },
    renderForGrid: (size = null) => {
        switch (size) {
            case "small":
                return (
                    <div>
                        <h3>Отзывы frame small</h3>
                    </div>
                )
                break;
            default:
                return (

                    <div>
                        <h3>Отзывы frame</h3>
                    </div>
                )
                break;
        }
    }
};

export default Plugin1;
