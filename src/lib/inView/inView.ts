export default function inView(node: HTMLElement): { destroy: () => void } {
	const handleIntersect = (
		entries: IntersectionObserverEntry[],
		observer: IntersectionObserver
	) => {
		node.dispatchEvent(
			new CustomEvent('intersect', {
				detail: entries[0].isIntersecting
			})
		);
	};

	const root = null;
	const rootMargin = `0px 0px 0px 0px`;
	const options = { root, rootMargin };
	const observer = new IntersectionObserver(handleIntersect, options);
	observer.observe(node);

	return {
		destroy() {
			if (observer) observer.disconnect();
		}
	};
}
