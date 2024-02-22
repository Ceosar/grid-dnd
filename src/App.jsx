import React from "react";
import PluginsFrame from "./components/pluginsFrame/PluginsFrame";
import {PluginsGlobalContext} from "./components/pluginsFrame/PluginsGlobalContext";

function App() {
  return (
    <>
      <PluginsGlobalContext>
        <PluginsFrame />
      </PluginsGlobalContext>
    </>
  )
}

export default App;