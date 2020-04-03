<template>
  <div class="home">
    <ValidationForm />
    <SlidingForm />
  </div>
</template>

<script>
// @ is an alias to /src
import ValidationForm from "@/components/ValidationForm.vue";
import SlidingForm from "@/components/SlidingForm.vue"

export default {
  name: "Home",
  components: {
    ValidationForm,
    SlidingForm
  }
};
</script>
