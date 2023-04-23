import React from "react";
import ReactDOM from "react-dom/client";
import { registerMicroApps, start, setDefaultMountApp } from "qiankun";

function App() {
  return (
    <div>
      <h1>主应用</h1>
    </div>
  );
}

/**
 * 主应用
 */

// Step1. 注册子应用
registerMicroApps([
  {
    name: "child-html",
    entry: "//127.0.0.1:9000",
    container: "#child-html",
    activeRule: "/child-html",
  },
]);

setDefaultMountApp("child-html");

start();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
    <div id="child-html"></div>
  </>
);
