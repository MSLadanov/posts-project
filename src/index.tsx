import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { Provider } from "react-redux";
import { store } from "store";
import { App } from "@/App";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@components/ErrorFallback";
import { Loader } from "@components/Loader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import "./global.scss";

const PostsListRoute = lazy(() => import("@routes/PostsListRoute"));
const PostRoute = lazy(() => import("@routes/PostRoute"));
const ErrorRoute = lazy(() => import("@routes/ErrorRoute"));
const UserPageRoute = lazy(() => import("@routes/UserPageRoute"));
const ProtectedRoute = lazy(() => import("@routes/ProtectedRoute"));

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <BrowserRouter>
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
          </BrowserRouter>
        </Provider>
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
