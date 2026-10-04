import { useEffect, useState } from "react";

function Post({ postId, setPage }) {
    const [post, setPost] = useState(null);

    const [editing, setEditing] = useState(false);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const fetchPost = async () => {
        const response = await fetch(
            `http://localhost:5000/api/posts/${postId}`
        );

        const data = await response.json();

        setPost(data);
        setTitle(data.title);
        setContent(data.content);
        setAuthor(data.author);
    };

    useEffect(() => {
        fetchPost();
    }, [postId]);

    const updatePost = async () => {
        const response = await fetch(
            `http://localhost:5000/api/posts/${postId}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title,
                    content,
                    author
                })
            }
        );

        const data = await response.json();

        setPost(data);
        setEditing(false);

        alert("Post updated successfully!");
    };

    const deletePost = async () => {
        const response = await fetch(
            `http://localhost:5000/api/posts/${postId}`,
            {
                method: "DELETE"
            }
        );

        if (response.ok) {
            alert("Post deleted successfully!");
            setPage("home");
        }
    };

    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {editing ? (
                <>
                    <h1>Edit Post</h1>

                    <input
                        value={title}
                        onChange={(e) =>
                            setTitle(e.target.value)
                        }
                    />

                    <br /><br />

                    <input
                        value={author}
                        onChange={(e) =>
                            setAuthor(e.target.value)
                        }
                    />

                    <br /><br />

                    <textarea
                        value={content}
                        onChange={(e) =>
                            setContent(e.target.value)
                        }
                    />

                    <br /><br />

                    <button onClick={updatePost}>
                        Save Changes
                    </button>

                    <button
                        onClick={() => setEditing(false)}
                    >
                        Cancel
                    </button>
                </>
            ) : (
                <>
                    <h1>{post.title}</h1>

                    <p>
                        <strong>Author:</strong>{" "}
                        {post.author}
                    </p>

                    <p>{post.content}</p>

                    <button
                        onClick={() => setEditing(true)}
                    >
                        Edit
                    </button>

                    <button onClick={deletePost}>
                        Delete
                    </button>
                </>
            )}
        </div>
    );
}

export default Post;