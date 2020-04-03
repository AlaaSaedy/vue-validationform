<template>
    <div class="blog-sidebar">
        <p>{{title | capitalize}}</p>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            title: "Testing"
        }
    },
    name: "BlogSidebar",
    
    // Local Filter
    filters: {
        uppercase: function(v) {
            return v.charAt(0).toUpperCase() + v.slice(1);
        }
    }
};
</script>
