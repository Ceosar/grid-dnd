import React from 'react';
import ReactGridLayout from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import "./Frame.css"

const Frame = ({blocks}) => {
    // const layout = [
    //     { i: 'a', x: 0, y: 0, w: 1, h: 2 },
    //     { i: 'b', x: 1, y: 0, w: 3, h: 2 },
    //     { i: 'c', x: 4, y: 0, w: 1, h: 2 }
    // ];

    const layout = blocks.map((block, index) => ({
        i: `block-${index}`,
        x: 0,
        y: 0,
        w: 1,
        h: 2,
        maxW: 4,
        maxH: 8,
        ...block,
    }));


    return (
        <>
            <ReactGridLayout
                className="frame-layout"
                layout={layout}
                cols={12}
                rowHeight={30}
                isDraggable={true}
                width={1200}
                preventCollision={true}
                verticalCompact= {null}
                compactType={null}
            >
                {blocks.map((block, index) => (
                    <div key={`block-${index}`} className={block.className.className}>
                    </div>
                ))}
            </ReactGridLayout>
        </>
    );
}

export default Frame;
