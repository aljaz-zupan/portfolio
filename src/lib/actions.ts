export function anchorLinkOnHover(node: HTMLElement) {
	const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
	console.log('headings', headings);

	if (headings) {
		for (const heading of headings) {
			console.log(heading, heading.id, !heading.id);

			if (heading.id === '') return;
			const elementId = heading.id;

			const anchor = document.createElement('a');
			anchor.href = `#${elementId}`;
			anchor.text = '🔗';
			anchor.className = 'anchor-link';
			heading.appendChild(anchor);
		}
	}
}
