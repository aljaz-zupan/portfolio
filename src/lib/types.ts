export type Categories = 'sveltekit' | 'svelte';

export type Post = {
	title: string;
	/* slug: string; */
	description: string;
	date: string;
	categories: Categories[];
	published: boolean;
	href: string;
};

export type GradientPosition =
	| '0% 0%'
	| '0% 50%'
	| '0% 100%'
	| '50% 0%'
	| '100% 0%'
	| '50% 50%'
	| '100% 100%'
	| '50% 100%'
	| '100% 50%';

export type Gradient = {
	position: Position;
	color: string;
};

export type Position = 't' | 'l' | 'r' | 'b' | 'tl' | 'tr' | 'bl' | 'br';

export type navigationDirection = 'row' | 'col';
