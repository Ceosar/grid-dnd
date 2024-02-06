import React from 'react';
import { Row, Col } from "antd";
import FrameGrid from './frameGrid/FrameGrid';
import PluginElement from './pluginElement/pluginElement';


const PluginsFrame = () => {
    const plugins = [
        { id: 1, pluginName: "rating", pluginTitle: "Общий рейтинг", data: 4.8 },
        { id: 21412, pluginName: "response", pluginTitle: "Отзывы", data: 25246 },
        { id: 4124, pluginName: "markets", pluginTitle: "Маркетплейсы", data: 4.8 },
    ]
    return (
        <Row gutter={16} style={{ width: "100vw", height: "100vh" }}>
            <Col span={3}>
                {plugins.map((pl, index) => (
                    <PluginElement key={index} pluginData={pl} />
                ))}
            </Col>
            <Col span={21} style={{ padding: "16px" }}>
                <FrameGrid plugins={plugins} />
            </Col>
        </Row>
    );
}

export default PluginsFrame;
