<template>
    <div>
        <div style="margin-bottom: 3em;">
            <h1>Blog Page</h1>
        </div>
        <div v-if="isLoading">Loading...</div>
        <div v-else class="blog-cards">
            <div v-for="blog in blogs" :key="blog.id">
                <BlogCard :blog="blog" />
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted } from 'vue';
import { useBlogStore } from '@/stores/blogs';
import BlogCard from '@/components/BlogCard.vue';

export default {
    components: {
        BlogCard,
    },
    data() {
        return {
            blogs: [],
            isLoading: true,
        };
    },
    async mounted() {
        const blogStore = useBlogStore();
        await blogStore.fetchBlogs();
        this.blogs = blogStore.blogs;
        this.isLoading = false;
    },
};
</script>


<style scoped>
.blog-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
}
</style>