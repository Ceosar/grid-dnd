import React, { useState } from 'react';
import Toolbar from '../toolbar/Toolbar';
import Frame from '../frame/Frame';
import "./PluginsFrame.css";

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const PluginsFrame = () => {
    const [blocks, setBlocks] = useState([]);

    console.log(blocks)

    const handleBlockDrop = (className) => {
        const block = {
            className: className,
        };
        setBlocks([...blocks, block]);
    };

    return (
        <div className='plugins-frame_wrapper'>
            <Frame blocks={blocks} />
            <Toolbar onBlockDrop={handleBlockDrop} />
        </div>
    );
}

export default PluginsFrame;
