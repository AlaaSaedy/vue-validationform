import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from 'vuelidate';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/main.scss";
import "normalize.css";
import "./filter"; // Global Filters

Vue.config.productionTip = false;

Vue.use(Vuelidate)

Vue.directive('bold', {
    bind: function(el) {
        el.style.fontWeight = "bold";
    }
});

Vue.directive('font', {
    bind: function(el, binding) {
        el.style.fontSize = binding.value + 'px';
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");