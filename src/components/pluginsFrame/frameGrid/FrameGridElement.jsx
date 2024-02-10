import { Card } from 'antd';
import React from 'react';

const FrameGridElement = ({key, id, item, onResize, pluginDataMap}) => {
    return (
        <Card
            hoverable
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
                borderRadius: "10px",
            }}
        >
            {pluginDataMap[item.i] && pluginDataMap[item.i].pluginName}
        </Card>
    );
}

export default FrameGridElement;
