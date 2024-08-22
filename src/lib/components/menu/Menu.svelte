<script>
	import Reset from '$lib/assets/icons/Reset.svelte';
	import { appState } from '$lib/store/app';
	import { resetLifeTotals } from '$lib/store/player';
	import Randomizer from './subcomponents/randomizer/Randomizer.svelte';
	import Resources from './subcomponents/resources/Resources.svelte';
	import Settings from './subcomponents/settings/Settings.svelte';
</script>

<div
	class="flex justify-around py-1.5 items-center"
	class:h-14={!$appState.isMenuOpen}
>
	{#if !$appState.isMenuOpen}
		<div class="flex justify-center items-center flex-grow">
			<button on:click={resetLifeTotals} class="h-10 w-10"><Reset /></button>
		</div>
	{/if}
	{#if !$appState.isMenuOpen || $appState.activeMenu === 'settings'}
		<div class="flex justify-center items-center flex-grow">
			<Settings on:resetLifeTotals />
		</div>
	{/if}

	{#if !$appState.isMenuOpen || $appState.activeMenu === 'resources'}
		<div class="flex justify-center items-center flex-grow">
			<Resources />
		</div>
	{/if}

	{#if !$appState.isMenuOpen || $appState.activeMenu === 'randomizer'}
		<div class="flex justify-center items-center flex-grow">
			<Randomizer />
		</div>
	{/if}
</div>
