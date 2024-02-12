import React, { useState } from 'react';
import { Row, Col, Button, Menu } from "antd";
import FrameGrid from './frameGrid/FrameGrid';
import PluginElement from './pluginElement/pluginElement';
import "./PluginsFrame.css"
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import Plugin1 from './plugins/plugin1/Plugin1';
import Plugin2 from './plugins/plugin2/Plugin2';


const PluginsFrame = () => {
    // const plugins = [
    //     { id: 1, pluginName: "rating", pluginTitle: "Общий рейтинг", data: 4.8, type: "statistic" , resize: false },
    //     { id: 21412, pluginName: "response", pluginTitle: "Отзывы", data: 25246, type: "statistic" },
    //     { id: 4124, pluginName: "markets", pluginTitle: "Маркетплейсы", data: 4.8, type: "statistic" },
    //     { id: 4412, pluginName: "test", pluginTitle: "тест", data: 4.8, type: "text" },
    // ]
    const plugins = [Plugin1, Plugin2]
    const [menuVisible, setMenuVisible] = useState(false);

    const handleMenuToggle = () => { setMenuVisible(!menuVisible) }

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
                                {/* <PluginElement pluginData={pl} /> */}
                                {pl.renderForMenu()}
                            </Menu.Item>
                        ))}
                    </Menu>
                )}
            </Col>
        </Row>
    );
}

export default PluginsFrame;
