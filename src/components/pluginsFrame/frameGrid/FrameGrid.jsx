import React, { useState } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import { Row, Col, Card } from "antd";
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"

const ResponsiveGridLayout = WidthProvider(Responsive);

const FrameGrid = () => {
    const [layout, setLayout] = useState([]);
    const onLayoutChange = (layoutChange, layoutsChange) => {
        console.log(layoutChange, layoutsChange)
    }

    const onDrop = (lay, item, event) => {
        if (event.dataTransfer?.getData("type") !== "container") {
            event.preventDefault();
            return;
        }

        console.log(lay)

        const pluginData = JSON.parse(event.dataTransfer.getData("pluginData"));

        const new_lay = [...lay].slice(0, -1);

        const index = Math.random().toFixed(3);

        setLayout([
            ...new_lay,
            {
                ...item,
                i: String(index),
                w: 1,
                pluginData: pluginData,
            },
        ]);
    };


    return (
        <ResponsiveGridLayout
            className="layout"
            cols={{ lg: 6, md: 6, sm: 6, xs: 6, xxs: 6 }}
            layouts={{ lg: layout }}
            isDroppable
            isDraggable
            onDrop={onDrop}
            compactType={null}
            preventCollision
            rowHeight={150}
            onLayoutChange={onLayoutChange}
            style={{
                minHeight: "800px",
                boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
            }}
        >
            {layout.map((item) => (
                <Card
                    key={item.i}
                    id={item.i}
                    hoverable
                    onResize={(layout, oldItem, newItem) => {
                        setLayout(layout);
                    }}
                    style={{
                        boxShadow:
                            "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
                        borderRadius: "10px",
                    }}
                >
                    {item.pluginData && item.pluginData.pluginName}
                </Card>
            ))}
        </ResponsiveGridLayout>
    );
};

export default FrameGrid;