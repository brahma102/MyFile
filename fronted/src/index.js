import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./hooks/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="abc">
    <BrowserRouter>
    <AuthProvider >

      <App />
    </AuthProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);
