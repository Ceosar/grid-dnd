import React from 'react';
import PluginComponent from '../pluginComponent/PluginComponent';
import "./Toolbar.css"

const Toolbar = ({onBlockDrop}) => {
    return (
        <div className='toolbar_wrapper'>
            <PluginComponent className='plugin-toolbar_wrapper' onDragStart={onBlockDrop} />
            <PluginComponent className='plugin-toolbar_wrapper' onDragStart={onBlockDrop} />
        </div>
    );
}

export default Toolbar;
