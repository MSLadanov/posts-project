import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "store";
import { App } from "@/App";
import { PostsListRoute } from "@/routes/PostsListRoute";
import { PostRoute } from "@/routes/PostRoute";
import { ErrorRoute } from "@routes/ErrorRoute";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@components/ErrorFallback";
import { UserPageRoute } from "@routes/UserPageRoute";
import './global.scss'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<ErrorRoute />} />
            <Route path="/" element={<App />}>
              <Route path="me" element={<UserPageRoute/>}/>
              <Route path="posts" element={<PostsListRoute />} />
              <Route path="posts/:id" element={<PostRoute />} />
              <Route path="/" element={<Navigate to="/posts" replace />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
