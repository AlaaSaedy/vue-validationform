import Vue from "vue";

// Filter to Make UpperCase
Vue.filter('capitalize', function (v) {
    return v.charAt(0).toUpperCase() + v.slice(1);
});

// Filter to Make Letter Reverse
Vue.filter('reversing', function (v) {
    return v.split("").reverse().join("");
})

// Shorten Paragraph Text

Vue.filter("shorten", function(value, textLength, suffix) {
    return value.substring(0, textLength) + suffix;
})