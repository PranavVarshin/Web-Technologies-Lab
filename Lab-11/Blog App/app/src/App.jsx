import { useState } from "react";

import Home from "./pages/Home";
import Create from "./pages/Create";
import Post from "./pages/Post";
import Archive from "./pages/Archive";

function App() {
    const [page, setPage] = useState("home");
    const [selectedPost, setSelectedPost] = useState(null);

    const renderPage = () => {
        if (page === "home") {
            return (
                <Home
                    setPage={setPage}
                    setSelectedPost={setSelectedPost}
                />
            );
        }

        if (page === "create") {
            return <Create setPage={setPage} />;
        }

        if (page === "post") {
            return (
                <Post
                    postId={selectedPost}
                    setPage={setPage}
                />
            );
        }

        if (page === "archive") {
            return <Archive />;
        }
    };

    return (
        <div className="app">
            <nav>
                <button onClick={() => setPage("home")}>
                    Home
                </button>

                <button onClick={() => setPage("create")}>
                    Create Post
                </button>

                <button onClick={() => setPage("archive")}>
                    Archive
                </button>
            </nav>

            <main>
                {renderPage()}
            </main>
        </div>
    );
}

export default App;