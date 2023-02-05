<script lang="ts">
	import { Highlight } from 'svelte-highlight';
	import { dart, xml, typescript } from 'svelte-highlight/languages';

	import atomOneDark from 'svelte-highlight/styles/atom-one-dark';

	const code = `class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();`;

	const code2 = `<div class="text-sm max-w-prose ...">
  <p>Oh yeah. It's the best part. It's crunchy, it's explosive, it's where the muffin breaks free of the pan and sort of does it's own thing. I'll tell you. That's a million dollar idea right there. Just sell the tops.</p>
</div>

<div class="text-base max-w-prose ...">
  <p>Oh yeah. It's the best part. It's crunchy, it's explosive, it's where the muffin breaks free of the pan and sort of does it's own thing. I'll tell you. That's a million dollar idea right there. Just sell the tops.</p>
</div>

<div class="text-xl max-w-prose ...">
  <p>Oh yeah. It's the best part. It's crunchy, it's explosive, it's where the muffin breaks free of the pan and sort of does it's own thing. I'll tell you. That's a million dollar idea right there. Just sell the tops.</p>
</div>`;

	const code3 = `import 'package:flutter/material.dart';

void main() => runApp(const MyApp());

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  static const String _title = 'Flutter Code Sample';

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(
      title: _title,
      home: MyStatefulWidget(),
    );
  }
}

class MyStatefulWidget extends StatefulWidget {
  const MyStatefulWidget({super.key});

  @override
  State<MyStatefulWidget> createState() => _MyStatefulWidgetState();
}

class _MyStatefulWidgetState extends State<MyStatefulWidget> {
  int _count = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Sample Code'),
      ),
      body: Center(child: Text('You have pressed the button $_count times.')),
      floatingActionButton: FloatingActionButton(
        onPressed: () => setState(() => _count++),
        tooltip: 'Increment Counter',
        child: const Icon(Icons.add),
      ),
    );
  }
}`;
</script>

<svelte:head>
	{@html atomOneDark}
</svelte:head>

<h1>Blog</h1>
<h2>Sveltekit, Tailwind and Typescript</h2>
<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, dolorem molestias doloribus
	minus sequi voluptates, necessitatibus cum quos id deserunt assumenda, quisquam rem optio dolores
	officia tenetur beatae ipsam nihil?
</p>
<ul>
	<li>Lorem, ipsum dolor.</li>
	<li>Eveniet, eius. Esse.</li>
	<li>Facere, quis dolor.</li>
	<li>Et, possimus eum.</li>
</ul>

<Highlight language={typescript} {code} langtag />

<blockquote>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis distinctio non expedita ut
	nobis accusantium a voluptatibus cum, necessitatibus, reprehenderit accusamus quas!
</blockquote>

<Highlight language={xml} code={code2} langtag />

<ol>
	<li>
		Lorem ipsum dolor sit.
		<ul>
			<li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, et?</li>
			<li>Maxime cumque alias fugit architecto, soluta molestias illo deserunt doloremque.</li>
		</ul>
	</li>
	<li>Praesentium, odit! Rem, consectetur?</li>
	<li>Quidem mollitia eius officiis?</li>
</ol>

<Highlight language={dart} code={code3} langtag />

<style>
	:global(code.hljs) {
		background-color: inherit;
	}
</style>
