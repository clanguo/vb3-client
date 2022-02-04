<template>
	<Layout class="blog-view">
		<template #header>
			<Header class="blog-header"></Header>
		</template>
		<template #main>
			<TwoColumnLayout>
				<template>
					<BlogContent :content="blog.content"></BlogContent>
					<Notice></Notice>
					<TagShare :tags="(blog && blog.tags) || []"></TagShare>
					<Comment v-if="blog.id" :id="blog.id" :qr="blog.qrCode" ></Comment>
				</template>
				<template #aside>
					<Aside></Aside>
				</template>
			</TwoColumnLayout>
		</template>
	</Layout>
</template>

<script>
import { getBlogById } from '../../api';
import Header from './components/Header';
import BlogContent from './components/BlogContent';
import Aside from '../../components/Aside';
import Notice from './components/Notice';
import TagShare from './components/TagsShare';
import Layout from '../../components/Layout';
import TwoColumnLayout from '../../components/TwoColumnLayout';
import Comment from '../../components/Comment';

export default {
	components: {
		Header,
		BlogContent,
		Aside,
		Notice,
		TagShare,
		Layout,
		TwoColumnLayout,
		Comment,
	},
	data() {
		return {
			blog: {},
		};
	},
	created() {
		let id = this.$route.params.id;
		if (!id) {
			console.warn('id is' + id);
		}

		getBlogById(id).then(r => {
			this.blog = r.data;
			console.log(r.data);

			if (r.err) {
				this.blog = {
					content:
						'发生了预料之外的错误等待处理，你可以 [点击这里回到首页](/)',
				};
			} else {
				this.blog.content = this.blog.content.content;
			}
		});

		
	},
};
</script>

<style scoped>
.blog-view {
	min-height: 100vh;
}

.blog-header {
	animation: headerAnimation 1s;
	transition: all 0.5s;
}
</style>
