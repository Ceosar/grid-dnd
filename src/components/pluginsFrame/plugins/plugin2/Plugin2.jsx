import React from 'react';
import "./Plugin2.css"
import image from "./../../../../assets/react.svg"
import Test from '../test';

import { Carousel } from 'antd';

const Plugin2 = {
    pluginData1: {
        id: 21,
        pluginName: "Plugin2",
        pluginTitle: "Маркетплейсы",
        data: 4.8,
        resize: true,
        height: 2,
        width: 2,
    },
    pluginData2: {
        id: 21,
        pluginName: "Plugin2",
        pluginTitle: "Маркетплейсы",
        data: 4.8,
        resize: true,
        height: 1,
        width: 1,
        size: "small"
    },
    renderForMenu: () => {
        return (
            <Carousel dotPosition="bottom" draggable={false} >
                <Test pluginData={Plugin2.pluginData1}>
                    <h2>Test 1</h2>
                </Test>
                <Test pluginData={Plugin2.pluginData2}>
                    <h2>Test 2</h2>
                </Test>
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
