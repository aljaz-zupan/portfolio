// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

declare interface Gradient {
	color: any;
	position: Position;
}

declare type Position = 't' | 'l' | 'r' | 'b' | 'tl' | 'tr' | 'bl' | 'br';

declare type navigationDirection = 'row' | 'col';
