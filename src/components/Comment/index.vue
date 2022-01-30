<template>
	<div class="comment-container">
		<div class="comment-count">留言 {{ count >= 0 ? count : '' }}</div>
		<!-- 留言跳转 -->
		<div class="comment-code">
			<button>参与留言</button>
			<img src="/assets/avater.jpg" alt="" />
		</div>
		<HrBorder></HrBorder>
		<div class="comment-area">
			<CommentItem
				v-for="comment in comments"
				:key="comment.id"
				:data="comment"
			>
			</CommentItem>
			<HrBorder></HrBorder>
			<div
				style="
					text-align: center;
					cursor: pointer;
					color: var(--btn-bg);
					padding-top: 20px;
				"
			>
				<div
					@click="getMore"
					v-if="count >= page * limit"
				>
					点击加载更多...
				</div>
				<div v-else>-----------------我是有底线的-----------------</div>
			</div>
		</div>
	</div>
</template>

<script>
import CommentItem from './CommentItem';
import HrBorder from '../HrBorder';
import { getComments } from "../../api";

export default {
	components: {
		CommentItem,
		HrBorder,
	},
	props: {
		id: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			comments: [],
			page: 1,
			count: -1,
			limit: 15,
			isLoading: false,
		};
	},
	created() {
		this.getMore();
	},
	methods: {
		getMore() {
			if (this.isLoading) return;
			this.isLoading = true;
			if (this.count === -1 || this.count >= this.page * this.limit) {
				getComments(this.page, this.limit, this.id)
					.then(
						res => {
							if (res.err) {
								console.error(res.err);
								return;
							} else {
								this.comments = res.data;
								this.page++;
								this.count = res.count;
							}
						},
						e => {
							console.error(e);
						}
					)
					.finally(() => {
						this.isLoading = false;
					});
			}
		},
	},
};
</script>

<style scoped>
.comment-container {
	margin: 20px 0;
	border-top: 1px solid #ccc;
	padding: 20px 0;
	width: 100%;
	overflow: hidden;
}

.comment-count {
	font-size: 1.2rem;
	font-weight: bold;
	padding-bottom: 10px;
}

.comment-code {
	position: relative;
	display: inline-block;
}

.comment-code button {
	outline: none;
	background-color: var(--btn-bg);
	border: 1px solid var(--btn-bg);
	color: var(--btn-color);
	font-size: 0.9rem;
	padding: 4px 10px;
	border-radius: 4px;
	margin-bottom: 10px;
	cursor: pointer;
}

.comment-code img {
	display: none;
	position: absolute;
	right: -10px;
	bottom: 0;
	width: 100px;
	height: 100px;
	border-radius: 50%;
	transform: translateX(100%);
	border: 1px solid #ccc;
	transition: all 0.3s;
}

.comment-code button:hover + img {
	display: block;
}

.comment-area {
	padding: 20px 0;
}
</style>
