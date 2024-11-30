import ReactDOM from "react-dom/client";
import axios from "axios";

import "./index.css";

import App from "./App";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_API;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(res => res, err => {
    console.log(err);
    return err;
});

const vh = window.innerHeight / 100;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    const vh = window.innerHeight / 100;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
