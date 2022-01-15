import moment from "moment";
import Vue from "vue";

Vue.filter("formatTime", (date, suffix) => {
  if (!date) return "";
  let d = moment(date);
  return d.fromNow(!!suffix);
});
