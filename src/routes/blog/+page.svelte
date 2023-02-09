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
<h1>Euismod Ipsum Cras</h1>

<p>
	Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget
	risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.
	Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non
	mi porta gravida at eget metus.
</p>

<h2>Heading 2</h2>

<p>
	Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Etiam porta
	sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Maecenas
	faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget
	risus varius blandit sit amet non magna.
</p>

<h3>Heading 3</h3>

<p>
	Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit
	amet fermentum. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis
	dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.
</p>

<h4>Heading 4</h4>

<p>
	Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas sed diam eget
	risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla.
	Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non
	mi porta gravida at eget metus.
</p>

<h5>Heading 5</h5>

<p>
	Vestibulum id ligula porta felis euismod semper. Maecenas faucibus mollis interdum. Etiam porta
	sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Maecenas
	faucibus mollis interdum. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget
	risus varius blandit sit amet non magna.
</p>

<h6>Heading 6</h6>

<p>
	Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit
	amet fermentum. Sed posuere consectetur est at lobortis. Cum sociis natoque penatibus et magnis
	dis parturient montes, nascetur ridiculus mus. Sed posuere consectetur est at lobortis.
</p>

<blockquote>
	Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
	commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras justo odio,
	dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
	consectetur et.
</blockquote>

<h3>This is an unordered list</h3>

<ul>
	<li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
	<li>
		Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
		justo sit amet risus.
	</li>
	<li>Donec sed odio dui.</li>
</ul>

<h3>This is an ordered list</h3>

<ol>
	<li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</li>
	<li>
		Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
		justo sit amet risus.
	</li>
	<li>Donec sed odio dui.</li>
</ol>

<table>
	<thead><tr><th>Wrestler</th> <th>Origin</th> <th>Finisher</th></tr></thead>
	<tbody
		><tr><td>Bret “The Hitman” Hart</td> <td>Calgary, AB</td> <td>Sharpshooter</td></tr>
		<tr><td>Stone Cold Steve Austin</td> <td>Austin, TX</td> <td>Stone Cold Stunner</td></tr>
		<tr><td>Randy Savage</td> <td>Sarasota, FL</td> <td>Elbow Drop</td></tr>
		<tr><td>Vader</td> <td>Boulder, CO</td> <td>Vader Bomb</td></tr>
		<tr><td>Razor Ramon</td> <td>Chuluota, FL</td> <td>Razor’s Edge</td></tr></tbody
	>
</table>

<Highlight language={typescript} {code} />

<Highlight language={xml} code={code2} />

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

<Highlight language={dart} code={code3} />

<style>
	:global(code.hljs) {
		background-color: inherit;
	}
</style>
