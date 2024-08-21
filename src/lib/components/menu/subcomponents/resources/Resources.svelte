<script>
	import ManaPentagon from '$lib/assets/icons/ManaPentagon.svelte';
	import { createEventDispatcher } from 'svelte';

	export let isMenuOpen;

	const dispatch = createEventDispatcher();

	const onOpenMenu = () => {
		dispatch('toggleMenuOpen', { menuName: 'resources' });
	};
</script>

{#if !isMenuOpen}
	<button on:click={onOpenMenu}>
		<ManaPentagon />
	</button>
{/if}
