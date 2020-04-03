<template>
    <div class="blog">
        <h1>{{ pageName }}</h1>
        <p>{{ pageDescription }}</p>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area"></div>
                    <BlogPosts v-for="post in posts" v-bind:key="post.id" :views="post.views" :title="post.title" :date="post.date" :content="post.content" :category="post.category" :author="post.author"/>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <BlogSidebar />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogPosts from "@/components/blog/BlogPosts";
import BlogSidebar from "@/components/blog/BlogSidebar";
import JsonPosts from "../json/blog_posts.json";

export default {
    data: function() {
        return {
            pageName: "Our Blog",
            pageDescription: "This Is Blog Page",
            posts: JsonPosts
        };
    },
    name: "blog",
    components: {
        BlogPosts,
        BlogSidebar
    }
};
</script>
