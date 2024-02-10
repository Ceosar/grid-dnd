// Внутри компонента FrameGrid
import React, { useEffect, useState } from "react";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import { Row, Col, Card } from "antd";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import FrameGridElement from "./FrameGridElement";

const ResponsiveGridLayout = WidthProvider(Responsive);

const FrameGrid = () => {
    const [layout, setLayout] = useState(() => {
        const savedLayout = localStorage.getItem("layout");
        return savedLayout ? JSON.parse(savedLayout) : [];
    });
    const [pluginDataMap, setPluginDataMap] = useState(() => {
        const savedPluginData = localStorage.getItem("pluginData");
        return savedPluginData ? JSON.parse(savedPluginData) : {};
    });
    const [windowHeight, setWindowHeight] = useState(window.innerHeight - 50);

    useEffect(() => {
        const handleResize = () => {
            setWindowHeight(window.innerHeight - 50);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const onLayoutChange = (layoutChange, layoutsChange) => {
        const simplifiedLayout = layoutChange.map(
            ({ x, y, w, h, i, pluginData }) => ({ x, y, w, h, i, pluginData })
        );
        localStorage.setItem("layout", JSON.stringify(simplifiedLayout));
    };

    const onDrop = (lay, item, event) => {
        if (event.dataTransfer?.getData("type") !== "container") {
            event.preventDefault();
            return;
        }

        const pluginData = JSON.parse(event.dataTransfer.getData("pluginData"));

        const new_lay = [...lay].slice(0, -1);

        const index = Math.random().toFixed(3);

        setLayout((prevLayout) => [
            ...prevLayout,
            {
                ...item,
                i: String(index),
                w: 1,
                pluginData: pluginData,
            },
        ]);


        const pluginDataMap = JSON.parse(localStorage.getItem("pluginData")) || {};
        pluginDataMap[index] = pluginData;
        localStorage.setItem("pluginData", JSON.stringify(pluginDataMap));
        setPluginDataMap((prevMap) => ({
            ...prevMap,
            [index]: pluginData,
        }));
    };

    return (
        <ResponsiveGridLayout
            className="layout"
            cols={{ lg: 6, md: 6, sm: 6, xs: 2, xxs: 2 }}
            layouts={{ lg: layout }}
            isDroppable
            isDraggable
            onDrop={onDrop}
            compactType={null}
            preventCollision
            rowHeight={150}
            maxRows={7}
            onLayoutChange={onLayoutChange}
            style={{
                minHeight: `${windowHeight}px`,
                boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
            }}
        >
            {layout.map((item) => (
                // <FrameGridElement
                //     key={item.id}
                //     id={item.id}
                //     item={item}
                //     onResize={(layout, oldItem, newItem) => {
                //         setLayout(layout);
                //     }}
                //     pluginDataMap={pluginDataMap}
                // />
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
                    {pluginDataMap[item.i] && pluginDataMap[item.i].pluginName}
                </Card>
            ))}
        </ResponsiveGridLayout>
    );
};

export default FrameGrid;