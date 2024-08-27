<script>
	import '../app.css';

	$: innerHeight = 0;
</script>

<svelte:window bind:innerHeight contextmenu="return false" />

<div
	class="mx-auto max-w-[500px] font-sans flex justify-center overflow-hidden"
	style="height: {innerHeight}px;"
>
	<slot />
</div>
