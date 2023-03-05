export default function inView(
	node: HTMLElement,
	params: { root?: HTMLElement; top?: number; bottom?: number } = {}
): {
	update: (params: { root?: HTMLElement; top?: number; bottom?: number }) => void;
	destroy: () => void;
} {
	let observer: IntersectionObserver;

	const handleIntersect = (entries: IntersectionObserverEntry[]) => {
		const v = entries[0].isIntersecting ? 'enter' : 'exit';
		node.dispatchEvent(new CustomEvent(v));
	};

	const setObserver = ({
		root,
		top,
		bottom
	}: {
		root?: HTMLElement;
		top?: number;
		bottom?: number;
	}) => {
		const marginTop = top ? top * -1 : 0;
		const marginBottom = bottom ? bottom * -1 : 0;
		const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
		const options = { root, rootMargin };
		if (observer) observer.disconnect();
		observer = new IntersectionObserver(handleIntersect, options);
		observer.observe(node);
	};

	setObserver({ ...params, root: params.root });

	return {
		update(params: { root?: HTMLElement; top?: number; bottom?: number }) {
			setObserver({ ...params, root: params.root });
		},
		destroy() {
			if (observer) observer.disconnect();
		}
	};
}
