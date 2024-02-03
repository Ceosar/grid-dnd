import React from 'react';
import Toolbar from '../toolbar/Toolbar';
import Frame from '../frame/Frame';
import "./PluginsFrame.css";

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const PluginsFrame = () => {
    return (
        <div className='plugins-frame_wrapper'>
            <Frame/>
            <Toolbar/>
        </div>
    );
}

export default PluginsFrame;
