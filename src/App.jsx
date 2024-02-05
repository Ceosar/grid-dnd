// import React, { useState, useEffect } from "react";
// import _, { add, set } from "lodash";
// import { Responsive, WidthProvider } from "react-grid-layout";
// import "./App.css"
// const ResponsiveReactGridLayout = WidthProvider(Responsive);

// const generateLayout = () => {
//   return _.map(_.range(0, 5), function (item, i) {
//     var y = Math.ceil(Math.random() * 4) + 1;
//     return {
//       x: Math.round(Math.random() * 5) * 2,
//       y: Math.floor(i / 6) * y,
//       w: 2,
//       h: y,
//       i: i.toString(),
//       static: Math.random() < 0.05,
//     };
//   });
// };

// const DragFromOutsideLayout = () => {
//   const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
//   // const [layouts, setLayouts] = useState({ lg: generateLayout() });
//   const [layouts, setLayouts] = useState([generateLayout()]);

//   const onLayoutChange = (layout, layouts) => {
//     // Implement your onLayoutChange logic here
//     // For now, just log the layout
//     console.log(layout, layouts);
//   };

//   useEffect(() => {
//     console.log(layouts)
//   }, [layouts])

//   // const onDrop = (layout, layoutItem, _event) => {
//   //   alert(
//   //     `Dropped element props:\n${JSON.stringify(
//   //       layoutItem,
//   //       ["x", "y", "w", "h"],
//   //       2
//   //     )}`
//   //   );
//   // };

//   // const onDrop = (layout, layoutItem, _event) => {
//   //   // Generate a unique key for the new item
//   //   const newItemKey = Date.now().toString();

//   //   console.log(layout)
//   //   console.log(layoutItem)

//   //   console.log(layout[layout.length-1])
//   //   // layout[layout.length-1].x = 5
//   //   // layout[layout.length-1].y = 5
//   //   // // Create a new layout item with default values
//   //   const newItem = {
//   //     x: layoutItem.x,
//   //     y: layoutItem.y,
//   //     w: layoutItem.w,
//   //     h: layoutItem.h,
//   //     i: newItemKey,
//   //     static: false,
//   //   };
//   //   const prevLayout = {...layouts};
//   //   prevLayout.lg[prevLayout.lg.length] = newItem;
//   //   // prevLayout.lg = layout
//   //   // console.log(newItem)


//   //   setLayouts(prevLayout);
//   // };

//   const onDrop = (layout, layoutItem, _event) => {
//     // Generate a unique key for the new item
//     const index = Math.random().toFixed(3);

//     setLayouts([
//       ...layout,
//       {
//         ...layoutItem,
//         w: 2,
//         h: 2,
//         i: index,
//       }
//     ])

//   };

//   const addBlockAtCoordinates = (e, x = 3, y = 3) => {
//     const newItemKey = Date.now().toString();
//     console.log(x)
//     const newItem = {
//       x: x,
//       y: y,
//       w: 2,
//       h: 2,
//       i: newItemKey,
//       static: false,
//     };

//     const prevLayout = { ...layouts };
//     prevLayout.lg[prevLayout.lg.length] = newItem;
//     setLayouts(prevLayout);
//   };


//   return (
//     <div>
//       <button onClick={addBlockAtCoordinates}>OOOOOOOOOOOOOO</button>
//       <div
//         className="droppable-element"
//         draggable={true}
//         unselectable="on"
//         onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
//       >
//         Droppable Element (Drag me!)
//       </div>
//       <ResponsiveReactGridLayout
//         layouts={{ lg: layouts }}
//         // onBreakpointChange={onBreakpointChange}
//         onLayoutChange={onLayoutChange}
//         onDrop={onDrop}
//         isBounded={false}
//         compactType={null}
//         preventCollision={true}
//         isDroppable={true}
//       >
//         {layouts.map((l, i) => (
//           <div key={l.i} className={l.static ? "static" : ""}>
//             {l.static ? (
//               <span
//                 className="text"
//                 title="This item is static and cannot be removed or resized."
//               >
//                 Static - {i}
//               </span>
//             ) : (
//               <span className="text">{l.i}</span>
//             )}
//           </div>
//         ))}
//       </ResponsiveReactGridLayout>
//     </div>
//   );
// };















// import React, { useState } from "react";
// import { Card } from "antd";
// import { Layout, Responsive, WidthProvider } from "react-grid-layout";
// import { Row, Col } from "antd";

// const { Meta } = Card;
// const ResponsiveGridLayout = WidthProvider(Responsive);

// const MainGrid = () => {
//   const [layout, setLayout] = useState([]);

//   const onDrop = (lay, item, event) => {
//     if (event.dataTransfer?.getData("type") !== "container") {
//       event.preventDefault();
//       return;
//     }

//     const index = Math.random().toFixed(3);
//     setLayout([
//       ...layout,
//       {
//         ...item,
//         i: String(index),
//         w: 1,
//         h: 1,
//       },
//     ]);
//   };

//   return (
//     <ResponsiveGridLayout
//       className="layout"
//       layouts={{ lg: layout }}
//       isDroppable
//       onDrop={onDrop}
//       isBounded={false}
//       preventCollision
//       rowHeight={750}
//       style={{
//         height: "800px",
//         boxShadow:
//           "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
//       }}
//     >
//       {layout.map((item) => (
//         <Card
//           key={item.i}
//           id={item.i}
//           hoverable
//           style={{
//             boxShadow:
//               "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
//             borderRadius: "10px",
//             padding: "15px",
//             boxSizing: "border-box",
//           }}
//         >
//           <Meta title="Card Title"  />
//         </Card>
//       ))}
//     </ResponsiveGridLayout>
//   );
// };

// function App() {
//   return (
//     <Row gutter={16} style={{ width: "100vw", height: "100vh" }}>
//       <Col span={3}>
//         <div
//           key="1"
//           draggable
//           onDragStart={(e) => e.dataTransfer.setData("type", "container")}
//           style={{
//             padding: "10px",
//             background: "#e0e0e0",
//             borderRadius: "5px",
//             marginBottom: "16px",
//             cursor: "move",
//           }}
//         >
//           <span>Container</span>
//         </div>
//         {/* <div
//           key="2"
//           draggable
//           onDragStart={(e) => e.dataTransfer.setData("type", "item")}
//           style={{
//             padding: "10px",
//             background: "#e0e0e0",
//             borderRadius: "5px",
//             cursor: "move",
//           }}
//         >
//           <span>Element</span>
//         </div> */}
//       </Col>
//       <Col span={21} style={{ padding: "16px" }}>
//         123
//         <MainGrid />
//       </Col>
//     </Row>
//   );
// }

const App = () => {
  return (
    <div>
      <h1>Combined App Component</h1>
      <MainGrid/>
      {/* <DragFromOutsideLayout /> */}
    </div>
  );
};



export default App;