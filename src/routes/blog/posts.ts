import { codeSnipets } from './codeSnipets';

export const posts = [
	{
		slug: 'svelte-vite-umd-library',
		title:
			'Step-by-Step Guide to Create a UMD Library with Svelte and Vite for Your Legacy Applications',
		date: '2. 4. 2023',
		content: `<h2>Introduction</h2>
        <p>In this blog post, we'll be exploring how to create a UMD (Universal Module Definition) library using Svelte, a popular modern frontend framework, for legacy applications. UMD is a module format that combines the benefits of AMD (Asynchronous Module Definition), CommonJS, and global variable formats, making it compatible with various module systems.</p>
		<p>By default, Vite, a build tool and development server, doesn't support multiple entry points for UMD (as of version 4.0). However, with some modifications, we can overcome this limitation and achieve our goal. Let's dive into the step-by-step process of building a UMD library with Svelte for legacy apps.</p>
		<h2>Prerequisites</h2>
		<p>Before we begin, make sure you have the following installed on your system:</p>
		<ol>
			<li>Node.js (v14 or above)</li>
			<li>npm (v7 or above)</li>
		</ol>
		<h3>Step 1: Set up the Svelte project</h3>
		<p>First, create a new Svelte project using the Vite template:</p>
		<pre><code class="language-${codeSnipets[0].lang}">${codeSnipets[0].code}</code></pre>
		`
	}
];
