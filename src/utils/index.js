// 防抖
export const debounce = (fn, duration = 1500) => {
	let timer = null;
	return function (...args) {
		clearTimeout(timer);
		timer = setTimeout(() => {
			fn.apply(this, args);
			timer = null;
		}, duration);
	};
};

// 节流
export const throttle = (fn, immediate = false, duration = 1500) => {
	let timer = null;
	return function (...args) {
		if (timer) return;
		if (immediate) {
			fn.call(this, ...args);
		}
		timer = setTimeout(() => {
			if (!immediate) {
				fn.call(this, ...args);
			}
			clearTimeout(timer);
			timer = null;
		}, duration);
	};
};
