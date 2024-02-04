import React from 'react';
import "./PluginComponent.css"

const PluginComponent = ({ className, onDragStart }) => {
    const handleDragStart = () => {
        const block = {
            className: "frame-component_wrapper",
        };
        onDragStart(block);
    };

    return (
        <div
            className={className}
            draggable={true}
            unselectable="on"
            onDragStart={handleDragStart}
        >
            Droppable Element (Drag me!)
        </div>
    );
}

export default PluginComponent;
