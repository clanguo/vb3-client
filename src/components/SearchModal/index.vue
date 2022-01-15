<template>
	<div class="modal">
		<Transition name="modal"
			>2
			<div class="modal-container" v-if="visible" @click.self="onPrevent">
				<Transition
					name="modal-content"
					appear
					@after-enter="onModalAfterEnter"
				>
					<div class="modal-content" v-if="show">
						<span class="modal-close" @click="onCloseModal"
							><i class="iconfont icon-guanbi"></i
						></span>
						<div class="modal-title">本地搜索</div>
						<div class="modal-input">
							<input
								type="text"
								placeholder="按回车键搜索文章(只显示前五个搜索结果)"
                @keyup.enter="onSearch"
                v-model="searchVal"
                @input="onInput"
							/>
						</div>
						<HrBorder></HrBorder>
						<div class="search-result">
							<div class="search-result-item" v-for="blog in searchResults" :key="blog.id">
								<div class="search-result-title">
									<router-link :to="`/blog/${blog.id}`">{{ blog.title }}</router-link>
								</div>
								<div class="search-result-description">
									{{ blog.description }}
								</div>
								<div class="search-result-created">
									发布于 <span>{{ blog.createdAt }}</span>
								</div>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</Transition>
	</div>
</template>

<script>
import HrBorder from '../HrBorder';
import { getBlog } from "../../api";
import { throttle } from "../../utils";

export default {
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
	},
	components: {
		HrBorder,
	},
	data() {
		return {
			show: true,
      searchVal: "",
      searchResults: []
		};
	},
	watch: {
		visible(value) {
			if (value) {
				this.show = true;
			}
		},
	},
	methods: {
		hanldeMouseMove(e) {
			if (this.debounceTimer) return;
			this.timer = setTimeout(() => {
				let hrDom = this.$refs.hr;
				if (hrDom) {
					let offsetX = e.offsetX >= 0 ? e.offsetX : 0;
					offsetX =
						offsetX >= hrDom.clientWidth - 20
							? hrDom.clientWidth - 20
							: offsetX;
					this.percent = (offsetX / hrDom.clientWidth) * 100 + '%';
				}

				clearTimeout(this.timer);
				this.timer = null;
			}, 1500);
		},
		onCloseModal() {
			this.show = false;
			this.$emit('hide');
		},
		onModalAfterEnter() {
			let modalInputDom = this.$refs.modalInput;
			modalInputDom && modalInputDom.focus();
		},
		onPrevent() {
			this.onCloseModal();
		},
    onSearch: throttle(async function() {
      const { data, err } = await getBlog(1, 5, this.searchVal);
      if (!err) {
        this.searchResults = data;
      }
    }, true),
    onInput() {
      if (this.searchVal.trim() === "") {
        this.searchResults = [];
      }
    }
	},
};
</script>

<style scoped>
.modal-enter,
.modal-leave-to {
	opacity: 0;
}
.modal-enter-active,
.modal-leave-active {
	transition: all 0.3s;
}
.modal-enter-to,
.modal-leave {
	opacity: 1;
}

.modal-content-enter,
.modal-content-leave-to {
	opacity: 0;
	transform: scale(0.8);
}

.modal-content-enter-active,
.modal-content-leave-active {
	transition: all 0.3s;
}

.modal-content-enter-to,
.modal-content-leave {
	opacity: 1;
	transform: scale(1);
}

.modal-container {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: var(--modal-bg);
	z-index: 9000;
}

.modal-content {
	position: absolute;
	top: 5rem;
	left: 0;
	right: 0;
	width: 30rem;
	border-radius: 8px;
	margin: auto;
	padding: 1rem;
	background-color: var(--search-bg);
	box-sizing: border-box;
  transition: all .3s;
}

.modal-close {
	position: absolute;
	top: 1rem;
	right: 1rem;
	width: 40px;
	height: 40px;
	box-sizing: border-box;
	transform: translateY(-10px) translateX(10px);
	text-align: center;
	cursor: pointer;
	font-size: 1.2rem;
	line-height: 40px;
}
.modal-title {
	color: var(--btn-bg);
	font-size: 1.4rem;
	padding: 0 0 0.7rem 0;
	line-height: 1;
}
.modal-input input {
	border-radius: 2rem;
	padding: 0.25rem 0.7rem;
	width: 100%;
	outline: 0;
	border: 2px solid var(--input-border);
	color: var(--search-input-color);
	appearance: none;
	box-sizing: border-box;
}

@media screen and (max-width: 768px) {
	.modal-content {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 0;
	}
}

.search-result-item {
	width: 100%;
	display: flex;
	flex-direction: column;
	transition: all 0.3s;
	overflow-x: hidden;
}

.search-result-title {
	overflow: hidden;
	text-decoration: underline;
	color: var(--text-highlight-color);
	transition: all 0.3s;
	white-space: nowrap;
	text-overflow: ellipsis;
  font-size: 1.2rem;
	color: var(--a-color);
}

.search-result-title:hover {
	color: var(--a-hover-color);
}

.search-result-description {
	font-size: .9rem;
	margin: 0.2rem 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.search-result-created {
  font-size: .75rem;
  color: var(--text-grey);
}
</style>
