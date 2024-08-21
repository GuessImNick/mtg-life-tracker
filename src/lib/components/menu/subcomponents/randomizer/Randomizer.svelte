<script>
	import Dsix from '$lib/assets/icons/Dsix.svelte';
	import { createEventDispatcher } from 'svelte';

	export let isMenuOpen;

	const dispatch = createEventDispatcher();

	const onOpenMenu = () => {
		dispatch('toggleMenuOpen', { menuName: 'randomizer' });
	};
</script>

{#if !isMenuOpen}
	<button on:click={onOpenMenu}>
		<Dsix />
	</button>
{/if}
