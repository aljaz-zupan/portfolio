import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

export const scrollPosition = tweened(0, {
	duration: 1000,
	easing: cubicOut
});
