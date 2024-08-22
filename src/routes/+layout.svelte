<script>
	import '../app.css';

	$: innerHeight = 0;
</script>

<svelte:window bind:innerHeight />

<div
	class="mx-auto max-w-screen-xl font-sans flex justify-center overflow-hidden"
	style="height: {innerHeight}px;"
>
	<slot />
</div>
