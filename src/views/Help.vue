<template>
  <div class="help-page">
    <h1>{{pageName}}</h1>
    <p>{{pageDescription}}</p>
    
  </div>
</template>

<script>
export default {
  name: "help",
  data: function() {
    return {
      pageName: "Help Page",
      pageDescription: "This Is Help Page"
    };
  }
};
</script>