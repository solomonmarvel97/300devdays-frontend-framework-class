import { useState } from "react";
import BlogList from "./BlogList";

const Blog = () => {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "blog 1",
            description: "This is blog 1"
        },
        {
            id: 2,
            title: "blog 2",
            description: "This is blog 2"
        },

    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
    );
}

export default Blog;