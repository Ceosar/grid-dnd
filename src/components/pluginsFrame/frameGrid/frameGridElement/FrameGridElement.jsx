import { Button } from 'antd';
import React from 'react';

const FrameGridElement = ({ id, pluginDataMap }) => {
    let content;

    console.log(id)
    console.log(pluginDataMap)

    switch (pluginDataMap[id].type) {
        case "statistic":
            content = (
                <div>
                    {pluginDataMap[id].pluginTitle}
                    {pluginDataMap[id].data}
                    <Button>Нажать</Button>
                </div>
            );
            break;
        case "text":
            content = (
                <div>{pluginDataMap[id] && pluginDataMap[id].pluginName}
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
        <section>
            {content}
        </section>
    );
}

export default FrameGridElement;
