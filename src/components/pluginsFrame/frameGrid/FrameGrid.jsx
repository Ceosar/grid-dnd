import React, { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css"
import "/node_modules/react-resizable/css/styles.css"
import FrameGridElement from "./frameGridElement/FrameGridElement";
import "./FrameGrid.css"

const ResponsiveGridLayout = WidthProvider(Responsive);

const FrameGrid = () => {
    // const [layout, setLayout] = useState([]);
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
        localStorage.setItem("layout", JSON.stringify(layoutChange));
        // console.log(layoutChange, layoutsChange)
    }

    const savePluginData = (pluginId, data) => {
        const pluginData = { ...pluginDataMap };
        pluginData[pluginId] = data;
        localStorage.setItem("pluginData", JSON.stringify(pluginData));
        setPluginDataMap(pluginData);
    };

    const onDrop = (lay, item, event) => {
        if (event.dataTransfer?.getData("type") !== "container") {
            event.preventDefault();
            return;
        }


        const pluginData = JSON.parse(event.dataTransfer.getData("pluginData"));

        const new_lay = [...lay].slice(0, -1);

        const index = Math.random().toFixed(3);

        savePluginData(index, pluginData);

        const resizeHandles = JSON.parse(localStorage.getItem("pluginData"))[index].resize ? ["se"] : [];
        const widthHandles = JSON.parse(localStorage.getItem("pluginData"))[index].width;
        const heightHandles = JSON.parse(localStorage.getItem("pluginData"))[index].height;
        setLayout([
            ...new_lay,
            {
                ...item,
                i: String(index),
                w: widthHandles,
                h: heightHandles,
                resizeHandles: resizeHandles,
            },
        ]);
    };

    const removePlugin = (id) => {
        const newLayout = layout.filter((item) => item.i !== id);
        setLayout(newLayout);
        const newPluginDataMap = { ...pluginDataMap };
        delete newPluginDataMap[id];
        setPluginDataMap(newPluginDataMap);
        localStorage.setItem("layout", JSON.stringify(newLayout));
        localStorage.setItem("pluginData", JSON.stringify(newPluginDataMap));
    };

    return (
        <ResponsiveGridLayout
            className="layout"
            cols={{ lg: 5, md: 5, sm: 5, xs: 5, xxs: 2 }}
            layouts={{ lg: layout }}
            isDroppable
            isDraggable
            onDrop={onDrop}
            compactType={null}
            preventCollision
            rowHeight={276}
            onLayoutChange={onLayoutChange}
            style={{
                minHeight: `${windowHeight}px`,
                boxShadow:
                    "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
            }}
        >
            {layout.map((item) => (
                <section
                    key={item.i}
                    id={item.i}
                    style={{
                        boxShadow:
                            "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
                        borderRadius: "10px",
                    }}
                >
                    <FrameGridElement
                        id={item.i}
                        item={item}
                        onResize={(layout, oldItem, newItem) => {
                            setLayout(layout);
                        }}
                        pluginDataMap={pluginDataMap}
                        removePlugin={removePlugin}
                    />
                </section>
            ))}
        </ResponsiveGridLayout>
    );
};

export default FrameGrid;