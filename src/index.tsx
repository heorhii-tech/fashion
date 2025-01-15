import ReactDOM from 'react-dom/client';
import "@/output.css"
import App from '@/components/app/App';
import React from "react";
import '@ant-design/v5-patch-for-react-19';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
<App />
);

