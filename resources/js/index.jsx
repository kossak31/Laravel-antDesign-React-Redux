import React from "react"
import ReactDOM from "react-dom"

import App from "./app/index.jsx"


import "./style/app.less"

console.log("root react")


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

//serviceWorker.unregister()

