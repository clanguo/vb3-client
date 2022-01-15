<template>
	<div class="tags-share">
		<div class="tags">
			<!-- <span class="tag-item">教程</span> -->
			<router-link
      class="tag-item"
				v-for="tag in tags"
				tag="span"
				:to="`/tag/${tag.id}`"
				:key="tag.id"
				>{{ tag.name }}</router-link
			>
		</div>
		<div class="share">
			<a :href="`https://service.weibo.com/share/share.php?url=${href}`">
				<span class="share-item weibo">
					<i class="iconfont icon-weibo"></i>
				</span>
			</a>
			<a
				:href="`https://connect.qq.com/widget/shareqq/index.html?url=${href}`"
			>
				<span class="share-item qq">
					<i class="iconfont icon-qq"></i>
				</span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		tags: {
			type: Array,
			default: () => ([]),
		},
	},
	data() {
		return {
			href: '',
		};
	},
	created() {
		this.href = window.location.href;
	},
};
</script>

<style scoped>
.tags {
	display: inline-block;
}

.tag-item {
	display: inline-block;
	margin: 0.4rem 0.4rem 0.4rem 0;
	padding: 0 0.6rem;
	border-radius: 1.6rem;
	color: var(--btn-bg);
	border: 1px solid var(--btn-bg);
	font-size: 0.85rem;
	transition: all 0.3s;
	cursor: pointer;
}

.tag-item:hover {
	background-color: var(--btn-bg);
	color: var(--light-grey);
}

.share {
	float: right;
}

.share-item {
	display: inline-block;
	border-radius: 50%;
	border: 1px solid;
	margin: 0 4px;
	width: 1.65em;
	height: 1.65em;
	font-size: 1.2em;
	line-height: 1.45em;
	text-align: center;
	cursor: pointer;
	transition: all 0.3s;
}

.share-item.qq {
	color: #56b6e7;
	border-color: #56b6e7;
}

.share-item.qq:hover {
	background-color: #56b6e7;
	color: var(--white);
}

.share-item.weibo {
	color: #ff763b;
	border-color: #ff763b;
}

.share-item.weibo:hover {
	color: var(--white);
	background-color: #ff763b;
}
</style>
