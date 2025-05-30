import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Navigate, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "store";
import { App } from "@/App";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@components/ErrorFallback";
import { Loader } from "@components/Loader";
import "./index.css";
import "./global.scss";

const PostsListRoute = lazy(() => import("@routes/PostsListRoute"));
const PostRoute = lazy(() => import("@routes/PostRoute"));
const ErrorRoute = lazy(() => import("@routes/ErrorRoute"));
const UserPageRoute = lazy(() => import("@routes/UserPageRoute"));
const ProtectedRoute = lazy(() => import("@routes/ProtectedRoute"));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <Provider store={store}>
        <HashRouter>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="*" element={<ErrorRoute />} />
              <Route path="/" element={<App />}>
                <Route
                  path="me"
                  element={
                    <ProtectedRoute>
                      <UserPageRoute />
                    </ProtectedRoute>
                  }
                />
                <Route path="posts" element={<PostsListRoute />} />
                <Route path="posts/:id" element={<PostRoute />} />
                <Route index element={<Navigate to="/posts" replace />} />
              </Route>
            </Routes>
          </Suspense>
        </HashRouter>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
