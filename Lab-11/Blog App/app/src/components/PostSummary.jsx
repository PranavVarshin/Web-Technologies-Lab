function PostSummary({ post, onSelect }) {
    return (
        <div className="post-card">
            <h2>{post.title}</h2>

            <p>
                {post.content.length > 100
                    ? post.content.substring(0, 100) + "..."
                    : post.content}
            </p>

            <small>
                By {post.author}
            </small>

            <br />

            <button onClick={() => onSelect(post._id)}>
                View Post
            </button>
        </div>
    );
}

export default PostSummary;