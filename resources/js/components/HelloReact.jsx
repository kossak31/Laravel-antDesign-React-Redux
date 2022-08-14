// resources/js/components/HelloReact.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';

import Z from './DatePicker';

export default function HelloReact() {
    return (
        <div>
            <h1>ok7 React!</h1>
            <Z />
        </div>
    );
}


const root = ReactDOM.createRoot(document.getElementById("hello-react"));
root.render(
    <React.StrictMode>
        <HelloReact />
    </React.StrictMode>
);