import React from 'react';
import { Row, Col } from "antd";
import FrameGrid from './frameGrid/FrameGrid';
import PluginElement from './pluginElement/pluginElement';


const PluginsFrame = () => {
    return (
        <Row gutter={16} style={{ width: "100vw", height: "100vh" }}>
            <Col span={3}>
                <div
                    key="1"
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData("type", "container")}
                    style={{
                        padding: "10px",
                        background: "#e0e0e0",
                        borderRadius: "5px",
                        marginBottom: "16px",
                        cursor: "move",
                    }}
                >
                    <span>Container</span>
                </div>

                {/* <PluginElement
                    onDragStart={(e) => {
                        e.dataTransfer.setData("type", "container");
                        const newContainer = {
                            type: "container",
                            i: String(Math.random().toFixed(3)),
                            w: 1,
                        };
                        setLayout((prevLayout) => [...prevLayout, newContainer]);
                    }}
                    setLayout={setLayout}
                /> */}
            </Col>
            <Col span={21} style={{ padding: "16px" }}>
                <FrameGrid />
            </Col>
        </Row>
    );
}

export default PluginsFrame;
