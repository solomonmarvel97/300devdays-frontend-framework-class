import { useState, useEffect } from "react";
import '../assets/css/blog.css'

const BlogCard = ({ title, body }) => {
    return (
        <div style={{ border: '1px solid black', borderRadius: '16px', padding: '10px', margin: '10px' }}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    );
}

const Blog = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data')
                }
                return response.json()
            })
            .then(data => {
                console.log(data)
                setPosts(data)
                setLoading(false)
            })
            .catch(err => {
                console.log(err.message)
                setError(err.message)
                setLoading(false)
            })
    }, []) // allow use effect to be called once

    if (loading) {
        return <div>Loading ..... </div>
    }

    if (error) {
        return <div style={{ background: 'red', color: 'white', borderRadius: '8px', padding: '10px' }}>Error: {error} </div>
    }

    return (
        <>
            <h1>All Blog Posts</h1>
            <div className="Blogs">
                {posts.map(post => (
                    <BlogCard title={post.title} body={post.body} key={post.id} />
                ))}
            </div>
        </>
    )
}

export default Blog;