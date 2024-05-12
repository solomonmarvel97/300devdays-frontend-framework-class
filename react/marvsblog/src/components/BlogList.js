import "../assets/css/blog.css"

const BlogList = (props) => {
    const blogs = props.blogs
    console.log(blogs)
    return (
        <>
            <div className="blog-list">
                {blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <p>{blog.title}</p>
                        <p>{blog.description}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default BlogList;