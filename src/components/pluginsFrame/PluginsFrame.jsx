import React, { useState } from 'react';
import { Row, Col, Button, Menu } from "antd";
import FrameGrid from './frameGrid/FrameGrid';
import PluginElement from './pluginElement/pluginElement';
import "./PluginsFrame.css"
import { LeftOutlined, RightOutlined, DeleteOutlined  } from '@ant-design/icons';


const PluginsFrame = () => {
    const plugins = [
        { id: 1, pluginName: "rating", pluginTitle: "Общий рейтинг", data: 4.8 },
        { id: 21412, pluginName: "response", pluginTitle: "Отзывы", data: 25246 },
        { id: 4124, pluginName: "markets", pluginTitle: "Маркетплейсы", data: 4.8 },
        { id: 4412, pluginName: "test", pluginTitle: "тест", data: 4.8 },
    ]
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuToggle = () => {
        setMenuVisible(!menuVisible);
    }

    const handleButtonClick = () => {

    }

    return (
        <Row gutter={16} style={{ width: "100vw", height: "100vh" }}>
            <Col span={menuVisible ? 21 : 23} style={{ padding: "16px" }}>
                <FrameGrid plugins={plugins} />
            </Col>
            <Col className='menu-wrapper' style={{ overflow: 'hidden' }} span={menuVisible ? 3 : 0}>
                <Button
                    type="primary"
                    shape="circle"
                    icon={menuVisible ? <RightOutlined /> : <LeftOutlined />}
                    className='toggle-button'
                    onClick={handleMenuToggle}
                />
                {menuVisible && (
                    <Menu
                        className={`custom-menu ${menuVisible ? "menu-open" : "menu-closed"}`}
                        mode='inline'
                    >
                        {plugins.map((pl, index) => (
                            <Menu.Item key={index}>
                                <PluginElement pluginData={pl} />
                            </Menu.Item>
                        ))}
                        <Menu.Item key="bottom">
                            <Button
                                icon={<DeleteOutlined />}
                                onClick={handleButtonClick}
                            >Удалить</Button>
                        </Menu.Item>
                    </Menu>
                )}
            </Col>
        </Row>
    );
}

export default PluginsFrame;
