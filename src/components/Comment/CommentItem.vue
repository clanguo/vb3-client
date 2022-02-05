<template>
	<div class="comment-item-container">
		<div class="comment-item">
			<div class="comment-avater">
				<img :src="data.avater" alt="" />
			</div>
			<div class="comment-main">
				<div class="comment-username">{{ data.userName }} {{ data.replyUserId ? '> ' + data.replyUserName : "" }}</div>
				<div class="comment-content">
					{{ data.comment }}
				</div>
				<div class="comment-date">2021-10-23 12:21:21</div>
			</div>
		</div>

		<div v-if="data.comments && data.comments.length" class="comment-reply-list">
			<CommentItem v-for="comment in data.comments" :key="comment.id" :data="comment"></CommentItem>
		</div>
	</div>
</template>

<script>
// comments: [
// 				{
// 					id: '1',
// 					blogId: 'blog',
// 					userId: 'user1',
// 					comment: 'user1user1',
// 					avater: 'user1',
// 					userName: 'user1',
// 					comments: [
// 						{
// 							id: '2',
// 							commentId: '1',
// 							replyUserId: 'user1',
// 							replyUserName: 'user1',
// 							comment: 'user2',
// 							avater: 'user2user2',
// 							userName: 'user2',
// 						},
// 					],
// 				},
// 			],
export default {
	name: 'CommentItem',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style scoped>
.comment-item {
	width: 100%;
	display: flex;
	/* background-color: var(--light-grey); */
	padding: 12px;
	min-height: 104px;
  border-bottom: 1px solid #000;
}

.comment-avater {
	flex: 0 0 80px;
}

.comment-avater img {
	display: inline-block;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	border: 1px solid #fff;
}

.comment-main {
	flex: auto;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 0 10px;
}

.comment-username {
	font-size: 1rem;
	color: #000;
	font-weight: bold;
}

.comment-content {
	font-size: 0.9rem;
	color: #000;
}

.comment-date {
	font-size: 0.6rem;
	color: var(--text-grey);
	justify-self: flex-end;
}
.comment-reply-list {
  padding-left: 80px;
}
</style>
