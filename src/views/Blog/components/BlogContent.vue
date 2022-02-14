<template>
	<div class="content md-content" v-html="renderCnotent"></div>
</template>

<script>
import markdownIt from 'markdown-it';
// import hljs from "highlight.js";
import '../md.css';
import '../far.min.css';

let hjlsPromise;

const md = new markdownIt({
	// highlight: function (str, lang) {
	//   if (lang && hljs.getLanguage(lang)) {
	//     try {
	//       return (
	//         '<pre class="hljs"><code>' +
	//         hljs.highlight(str, {
	//           language: lang,
	//           ignoreIllegals: true,
	//         }).value +
	//         "</code></pre>"
	//       );
	//     } catch (e) {
	//       console.error(e);
	//     }
	//   }
	//   return (
	//     '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + "</code></pre>"
	//   );
	// },
});

export default {
	props: {
		content: {
			type: String,
			default: '',
		},
	},
	computed: {
		renderCnotent() {
			return md.render((this.content && this.content) || '');
		},
	},
	// watch: {
	// 	renderContent: {
	// 		handler() {
	// 			this.$nextTick(() => {
	// 				if (!hjlsPromise) return;
	// 				hjlsPromise.then(() => {
	// 					console.log('highlightAll', window.hljs);
	// 					debugger;
	// 					window?.hljs?.highlightAll();
	// 				});
	// 			});
	// 		},
	// 		immediate: true,
	// 	},
	// },
	created() {
		hjlsPromise = new Promise(resolve => {
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.onload = () => {
				console.log('highlight');
				resolve();
			};
			script.src =
				'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.4.0/highlight.min.js';
			document.body.appendChild(script);
		});
	},
	updated() {
		this.$nextTick(() => {
			if (!hjlsPromise) return;
			hjlsPromise.then(() => {
				window?.hljs?.highlightAll();
				console.log("highlightAll");
			});
		});
	},
};
</script>
