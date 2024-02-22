import React from 'react';
import "./FrameGridElement.css";
import Plugin1 from '../../plugins/plugin1/Plugin1';
import Plugin2 from '../../plugins/plugin2/Plugin2';
import { CloseOutlined } from '@ant-design/icons';

const FrameGridElement = ({ id, pluginDataMap, removePlugin }) => {
    const pluginData = pluginDataMap[id];

    let content;
    if (pluginData && pluginData.pluginName) {
        switch (pluginData.pluginName) {
            case "Plugin1":
                content = Plugin1.renderForGrid(pluginData.size);
                break;
            case "Plugin2":
                content = Plugin2.renderForGrid(pluginData.size);
                break;
            default:
                content = (
                    <div className='frame-grid-element__content'>
                        Элемент не найден
                        <button
                            style={{
                                width: "40px",
                                height: "30px",
                                position: "absolute",
                                top: "0",
                                right: "0",
                                zIndex:"999"
                            }}
                            onClick={(e) => {
                                e.stopPropagation();
                                removePlugin(id);
                            }}
                        >
                            <CloseOutlined />
                        </button>
                    </div>
                );
                break;
        }
    }
    return (
        <section className='frame-grid-element__container'>
            <button
                style={{
                    width: "40px",
                    height: "30px",
                    position: "absolute",
                    top: "0",
                    right: "0",
                    zIndex:"999"
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    removePlugin(id);
                    console.log(1)
                }}
            >
                <CloseOutlined />
            </button>
            {content}
        </section>
    );
}

export default FrameGridElement;
