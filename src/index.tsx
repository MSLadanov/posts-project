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

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
function fallbackRender({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}
root.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={<ErrorRoute />} />
            <Route path="/" element={<App />}>
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
