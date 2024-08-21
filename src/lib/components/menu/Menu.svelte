<script>
	import Reset from '$lib/assets/icons/Reset.svelte';
	import Randomizer from './subcomponents/randomizer/Randomizer.svelte';
	import Resources from './subcomponents/resources/Resources.svelte';
	import Settings from './subcomponents/settings/Settings.svelte';
	import { createEventDispatcher } from 'svelte';

	export let isMenuOpen = false;
	export let activeMenu = '';

	const dispatch = createEventDispatcher();

	const onResetLifeTotals = () => {
		// TODO: Add clean modal popup
		const confirm = window.confirm('Are you sure you want to continue?');
		if (confirm) {
			dispatch('resetLifeTotals');
		}
	};

</script>

<div
	class="flex justify-around py-1.5 items-center transition-all h-14 mb-full"
	class:h-full={isMenuOpen}
>
	{#if !isMenuOpen}
		<div class="flex justify-center items-center flex-grow h-full">
			<button on:click={onResetLifeTotals} class="h-10 w-10"><Reset /></button>
		</div>
	{/if}
	{#if !isMenuOpen || activeMenu === 'settings'}
		<div class="flex justify-center items-center flex-grow h-full">
			<Settings on:resetLifeTotals on:toggleMenuOpen {isMenuOpen} />
		</div>
	{/if}

	{#if !isMenuOpen || activeMenu === 'resources'}
		<div class="flex justify-center items-center flex-grow h-full">
			<Resources on:toggleMenuOpen {isMenuOpen} />
		</div>
	{/if}

	{#if !isMenuOpen || activeMenu === 'randomizer'}
		<div class="flex justify-center items-center flex-grow h-full">
			<Randomizer on:toggleMenuOpen {isMenuOpen} />
		</div>
	{/if}
</div>
