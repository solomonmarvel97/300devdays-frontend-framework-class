<script setup>
import BlogCard from '../components/BlogCard.vue'
</script>

<template>
    <main>
        <div class="blogs">
            <BlogCard v-for="blog in blogs" :imageSrc="blog.imageSrc" :altText="blog.altText" :title="blog.title"
                :description="blog.description" />
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            blogs: [
                {
                    id: 1,
                    imageSrc: "https://images.unsplash.com/photo-1671726203422-dd710fd8a72d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
                    altText: "Blog Item 1",
                    title: "Blog Item 1",
                    description: "This is an intro blog teaching us html"
                },

                {
                    id: 2,
                    imageSrc: "https://images.unsplash.com/photo-1671726203449-34e89df45211?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8fHw%3D",
                    altText: "Blog Item 2",
                    title: "Blog Item 2",
                    description: "This is an intro blog teaching us css"
                },

                {
                    id: 3,
                    imageSrc: "https://images.unsplash.com/photo-1671726203379-692599a6e70d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8OXx8fGVufDB8fHx8fA%3D%3D",
                    altText: "Blog Item 3",
                    title: "Blog Item 3",
                    description: "This is an intro blog teaching us nodejs"
                },

                {
                    id: 4,
                    imageSrc: "https://images.unsplash.com/photo-1671726203486-9b7ac1893ba1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTF8fHxlbnwwfHx8fHw%3D",
                    altText: "Blog Item 4",
                    title: "Blog Item 4",
                    description: "This is an intro blog teaching us vuejs"
                },

                {
                id: 5,
                imageSrc: "https://images.unsplash.com/photo-1671726203486-9b7ac1893ba1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTF8fHxlbnwwfHx8fHw%3D",
                altText: "Blog Item 5",
                title: "Blog Item 5",
                description: "This is an intro blog teaching us react"
                },
            ]
        }
    }
}
</script>


<style scoped>
.blogs {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px
}
</style>
