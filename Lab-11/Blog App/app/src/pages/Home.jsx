import { useEffect, useState } from "react";
import PostSummary from "../components/PostSummary";

function Home({ setPage, setSelectedPost }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data))
            .catch((error) =>
                console.error("Error fetching posts:", error)
            );
    }, []);

    const selectPost = (id) => {
        setSelectedPost(id);
        setPage("post");
    };

    return (
        <div>
            <h1>Blog Posts</h1>

            {posts.length === 0 ? (
                <p>No posts available.</p>
            ) : (
                posts.map((post) => (
                    <PostSummary
                        key={post._id}
                        post={post}
                        onSelect={selectPost}
                    />
                ))
            )}
        </div>
    );
}

export default Home;