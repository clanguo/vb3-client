<template>
  <div class="content md-content" v-html="renderCnotent"></div>
</template>

<script>
import markdownIt from "markdown-it";
import hljs from "highlight.js";
import "../md.css";
import "../far.min.css";

const md = new markdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return (
          '<pre class="hljs"><code>' +
          hljs.highlight(str, {
            language: lang,
            ignoreIllegals: true,
          }).value +
          "</code></pre>"
        );
      } catch (e) {
        console.error(e);
      }
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
    );
  },
});

export default {
  props: {
    content: {
      type: String,
      default: "",
    },
  },
  computed: {
    renderCnotent() {
      return md.render((this.content && this.content) || "");
    },
  },
};
</script>
