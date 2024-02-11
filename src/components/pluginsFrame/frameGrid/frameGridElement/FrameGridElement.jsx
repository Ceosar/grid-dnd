import React from 'react';
import "./FrameGridElement.css"
import { CloseOutlined } from '@ant-design/icons';


const FrameGridElement = ({ id, pluginDataMap, removePlugin }) => {
    let content;

    switch (pluginDataMap[id].type) {
        case "statistic":
            content = (
                <div className='frame-grid-element__content'>
                    {pluginDataMap[id].pluginTitle}
                    {pluginDataMap[id].data}
                    <button
                        style={{
                            width: "40px",
                            height: "30px",
                            position: "absolute",
                            top: "0",
                            right: "0",
                        }}
                        onClick={(e) => {
                            e.stopPropagation()
                            removePlugin(id);
                        }}
                    >
                        <CloseOutlined />
                    </button>
                </div>
            );
            break;
        case "text":
            content = (
                <div>
                    {pluginDataMap[id] && pluginDataMap[id].pluginName}
                    <button
                        style={{
                            width: "40px",
                            height: "30px",
                            position: "absolute",
                            top: "0",
                            right: "0",
                        }}
                        onClick={(e) => {
                            e.stopPropagation()
                            removePlugin(id);
                        }}
                    >
                        <CloseOutlined />
                    </button>
                </div>
            );
            break;
        default:
            content = (
                <div>
                    дефолт
                </div>
            );
            break;
    }

    return (
        <section className='frame-grid-element__container'>
            {content}
        </section>
    );
}

export default FrameGridElement;
