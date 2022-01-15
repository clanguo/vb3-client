import Vue from "vue";

Vue.filter("standardTime", function (d) {
  if (!d) return d;

  let date = new Date(d);
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
});
