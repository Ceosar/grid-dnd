import React from 'react';
import { Button, Drawer } from "antd";
import FrameGrid from './frameGrid/FrameGrid';
import Plugin1 from './plugins/plugin1/Plugin1';
import Plugin2 from './plugins/plugin2/Plugin2';
import { usePluginContext } from './PluginsGlobalContext';

import "./PluginsFrame.css"

const PluginsFrame = () => {
    const plugins = [Plugin1, Plugin2]
    const { menuVisible, setMenuVisible } = usePluginContext(false);

    const handleMenuToggle = () => { setMenuVisible(!menuVisible) }

    return (
        <section className="plugins-frame__wrapper">
            <FrameGrid plugins={plugins} />
            <Button
                className="plugins-frame__btn"
                onClick={handleMenuToggle}
            >Открыть</Button>
            <Drawer
                onClose={() => setMenuVisible(false)}
                open={menuVisible}
                className="plugins-frame__menu"
            >
                {plugins.map((pl, index) => (
                    <div
                        key={index}
                        style={{ height: "fit-content" }}
                        className="plugins-frame__components"
                    >
                        {pl.renderForMenu()}
                    </div>
                ))}
            </Drawer>
        </section>
    );
}

export default PluginsFrame;
