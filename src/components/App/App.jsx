import { Routes, Route } from "react-router-dom";
import AppHeader from "../AppHeader/AppHeader";
import HomePage from "../../pages/HomePage";
import UsersPage from "../../pages/UsersPage";
import NotFoundPage from "../../pages/NotFoundPage";
import UserDetailsPage from "../../pages/UserDetailsPage";
import css from "./App.module.css";
import UserTodos from "../UserTodos/UserTodos";
import UserPosts from "../UserPosts/UserPosts";

export default function App() {
  return (
    <div className={css.container}>
      <AppHeader />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<UsersPage />} />
        <Route path="/dashboard/:userId" element={<UserDetailsPage />}>
          <Route path="posts" element={<UserPosts />} />
          <Route path="todos" element={<UserTodos />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
