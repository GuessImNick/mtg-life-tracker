<script>
	import ManaPentagon from '$lib/assets/icons/ManaPentagon.svelte';
	import { appState, toggleIsMenuOpen } from '$lib/store/app';
</script>

{#if !$appState.isMenuOpen}
	<button on:click={() => toggleIsMenuOpen('resources')}>
		<ManaPentagon />
	</button>
{/if}
