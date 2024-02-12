import React from 'react';
import "./FrameGridElement.css";
import Plugin1 from '../../plugins/plugin1/Plugin1'; // Импорт компонента Plugin1
import Plugin2 from '../../plugins/plugin2/Plugin2'; // Импорт компонента Plugin2
import { CloseOutlined } from '@ant-design/icons';

const FrameGridElement = ({ id, pluginDataMap, removePlugin }) => {
    const pluginData = pluginDataMap[id];

    let content;
    console.log(pluginData.pluginName)
    switch (pluginData.pluginName) {
        case "Plugin1":
            content = Plugin1.renderForGrid();
            break;
            case "Plugin2":
                console.log(2)
            content = Plugin2.renderForGrid();
            break;
        default:
            content = (
                <div className='frame-grid-element__content'>
                    <h3>{pluginData.pluginTitle}</h3>
                    <p>{pluginData.data}</p>
                    <button
                        style={{
                            width: "40px",
                            height: "30px",
                            position: "absolute",
                            top: "0",
                            right: "0",
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

    return (
        <section className='frame-grid-element__container'>
            {content}
        </section>
    );
}

export default FrameGridElement;
