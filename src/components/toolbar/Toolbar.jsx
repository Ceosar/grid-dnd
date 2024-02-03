import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "./Toolbar.css"

const Toolbar = () => {
    const layout = [
        { i: 'a', x: 0, y: 0, w: 1, h: 2, static:false },
        { i: 'b', x: 1, y: 0, w: 3, h: 2, static:false },
        { i: 'c', x: 4, y: 0, w: 1, h: 2, static:false }
    ];

    return (
        <ReactGridLayout
            className="toolbar-layout"
            layout={layout}
            cols={12}
            rowHeight={30}
            isDraggable={true}
            width={600}
            compactType="none"
            preventCollision="true"
        >
            <div key="a" style={{ backgroundColor: 'lightblue' }}>A</div>
            <div key="b" style={{ backgroundColor: 'lightgreen' }}>B</div>
            <div key="c" style={{ backgroundColor: 'lightcoral' }}>C</div>
        </ReactGridLayout>
    );
}

export default Toolbar;
