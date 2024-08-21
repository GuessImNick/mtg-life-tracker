<script>
	import Dsix from '$lib/assets/icons/Dsix.svelte';
	import { appState, toggleIsMenuOpen } from '$lib/store/app';
</script>

{#if !$appState.isMenuOpen}
	<button on:click={() => toggleIsMenuOpen('randomizer')}>
		<Dsix />
	</button>
{/if}
