import { useState } from "react";

function Create({ setPage }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [author, setAuthor] = useState("");

    const createPost = async (e) => {
        e.preventDefault();

        if (!title || !content || !author) {
            alert("Please fill all fields.");
            return;
        }

        const response = await fetch(
            "http://localhost:5000/api/posts",
            {
                method: "POST",
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

        if (response.ok) {
            alert("Post created successfully!");

            setTitle("");
            setContent("");
            setAuthor("");

            setPage("home");
        }
    };

    return (
        <div>
            <h1>Create New Post</h1>

            <form onSubmit={createPost}>
                <input
                    type="text"
                    placeholder="Post Title"
                    value={title}
                    onChange={(e) =>
                        setTitle(e.target.value)
                    }
                />

                <br /><br />

                <input
                    type="text"
                    placeholder="Author"
                    value={author}
                    onChange={(e) =>
                        setAuthor(e.target.value)
                    }
                />

                <br /><br />

                <textarea
                    placeholder="Write your post..."
                    value={content}
                    onChange={(e) =>
                        setContent(e.target.value)
                    }
                />

                <br /><br />

                <button type="submit">
                    Create Post
                </button>
            </form>
        </div>
    );
}

export default Create;