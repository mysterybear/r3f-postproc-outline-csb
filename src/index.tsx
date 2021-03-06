import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import "./index.css"

ReactDOM.render(
  <React.StrictMode>
    <div className="full-screen">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
)
