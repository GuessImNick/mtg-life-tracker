<script lang="ts">
	import TwoPlayerLayout from '$lib/layouts/TwoPlayerLayout.svelte';
	import ThreePlayerLayout from '$lib/layouts/ThreePlayerLayout.svelte';
	import { appSettings } from '$lib/store/appSettings';
	import FourPlayerLayoutOne from '$lib/layouts/FourPlayerLayoutOne.svelte';
	import FivePlayerLayout from '$lib/layouts/FivePlayerLayout.svelte';
	import SixPlayerLayoutOne from '$lib/layouts/SixPlayerLayoutOne.svelte';
	import { playerModalData, randomizerModalData } from '$lib/store/modal';
	import RandomizerModal from '$lib/components/modals/randomizerModal/RandomizerModal.svelte';
	import PlayerDataModal from '$lib/components/modals/playerDataModal/PlayerDataModal.svelte';

	$: innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<div class="w-full bg-black px-1 pt-2 relative" style="max-width: {innerWidth}px;">
	{#if $appSettings.playerCount === 2}
		<TwoPlayerLayout />
	{:else if $appSettings.playerCount === 3}
		<ThreePlayerLayout />
	{:else if $appSettings.playerCount === 4}
		<FourPlayerLayoutOne />
	{:else if $appSettings.playerCount === 5}
		<FivePlayerLayout />
	{:else if $appSettings.playerCount === 6}
		<SixPlayerLayoutOne />
	{/if}
	{#if $randomizerModalData.isOpen}
		<RandomizerModal />
	{/if}
	{#if $playerModalData.isOpen}
		<PlayerDataModal />
	{/if}
</div>
