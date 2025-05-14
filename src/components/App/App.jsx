import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage"));
const UsersPage = lazy(() => import("../../pages/UsersPage"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage"));
const UserDetailsPage = lazy(() => import("../../pages/UserDetailsPage"));
const UserTodos = lazy(() => import("../UserTodos/UserTodos"));
const UserPosts = lazy(() => import("../UserPosts/UserPosts"));

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />

      <Suspense fallback={<strong>Loading page...</strong>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<UsersPage />} />
          <Route path="/dashboard/:userId" element={<UserDetailsPage />}>
            <Route path="posts" element={<UserPosts />} />
            <Route path="todos" element={<UserTodos />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
