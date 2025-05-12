import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserPosts } from "../../services/userService";
import css from "./UserPosts.module.css";

export default function UserPosts() {
  const { userId } = useParams();
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchUserPosts(userId)
      .then((data) => setPosts(data))
      .finally(() => setLoading(false));
  }, [userId]);

  return (
    <div className={css.container}>
      {loading && <strong>Loading posts...</strong>}
      {posts.length > 0 &&
        posts.map((post) => (
          <div key={post.id} className={css.post}>
            <h3 className={css.title}>{post.title}</h3>
            <p className={css.body}>{post.body}</p>
          </div>
        ))}
    </div>
  );
}
