<template>
    <div class="post-item">
        <span class="post-views">{{views}}</span>
        <h3 class="posts-title" v-font="40">{{title}}</h3>
        <span class="post-date" v-bold>{{date}}</span>
        <p class="post-content">
            {{content | shorten(350, " read more..") | capitalize}}
        </p>
        <div class="row">
            <div class="col-md-6">
                <span class="post-author">{{author | capitalize}}</span>
            </div>
            <div class="col-md-6 text-right">
                <span class="post-category">{{category | capitalize }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "post",
    props: ["views", "title", "date", "content", "author", "category"]
};
</script>

<style lang="scss" scoped>
.post-item {
    padding: 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    box-shadow: 0 0 10px #ddd;
    position: relative;
    text-align: left;
    .post-views {
        position: absolute;
        top: 5px;
        right: 5px;
        background-color: #4caf50;
        border-radius: 4px;
        padding: 1px 5px;
        color: #fff;
    }
    .posts-title {
        color: #818080;
        padding: 7px 0;
    }
    .post-date {
        display: block;
        font-size: 14px;
        color: #888;
    }

    .post-content {
        padding: 10px 0;
        line-height: 1.8;
        color: #666;
    }

    .post-author {
        background-color: #607d88;
        color: #fff;
        border-radius: 4px;
        padding: 6px 10px;
    }

    .post-category {
        background-color: #636363;
        color: #fff;
        border-radius: 4px;
        padding: 6px 10px;
    }
}
</style>
