<script>
	import Reset from '$lib/assets/icons/Reset.svelte';
	import { appSettings, appState } from '$lib/store/app';
	import { resetLifeTotals } from '$lib/store/player';
	import Randomizer from './subcomponents/randomizer/Randomizer.svelte';
	import Resources from './subcomponents/resources/Resources.svelte';
	import Settings from './subcomponents/settings/Settings.svelte';
</script>

<div
	class="flex justify-around py-1.5 items-center h-14 mb-full"
	class:h-full={$appState.isMenuOpen}
	class:mt-6={$appState.isMenuOpen && $appSettings.playerCount > 4}
>
	{#if !$appState.isMenuOpen}
		<div class="flex justify-center items-center flex-grow h-full">
			<button on:click={resetLifeTotals} class="h-10 w-10"><Reset /></button>
		</div>
	{/if}
	{#if !$appState.isMenuOpen || $appState.activeMenu === 'settings'}
		<div class="flex justify-center items-center flex-grow h-full">
			<Settings on:resetLifeTotals />
		</div>
	{/if}

	{#if !$appState.isMenuOpen || $appState.activeMenu === 'resources'}
		<div class="flex justify-center items-center flex-grow h-full">
			<Resources />
		</div>
	{/if}

	{#if !$appState.isMenuOpen || $appState.activeMenu === 'randomizer'}
		<div class="flex justify-center items-center flex-grow h-full">
			<Randomizer />
		</div>
	{/if}
</div>
