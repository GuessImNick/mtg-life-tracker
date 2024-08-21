<script lang="ts">
	import TwoPlayerLayout from '$lib/layouts/TwoPlayerLayout.svelte';
	import ThreePlayerLayout from '$lib/layouts/ThreePlayerLayout.svelte';
	import { appSettings } from '$lib/store/app';
	import FourPlayerLayoutOne from '$lib/layouts/FourPlayerLayoutOne.svelte';
	import FivePlayerLayout from '$lib/layouts/FivePlayerLayout.svelte';
	import SixPlayerLayoutOne from '$lib/layouts/SixPlayerLayoutOne.svelte';

	let players: App.Player.Data[] = [
		{
			id: 1,
			lifeTotal: $appSettings.startingLifeTotal,
			playerName: 'Player 1'
		},
		{
			id: 2,
			lifeTotal: $appSettings.startingLifeTotal,
			playerName: 'Player 2'
		},
		{
			id: 3,
			lifeTotal: $appSettings.startingLifeTotal,
			playerName: 'Player 3'
		},
		{
			id: 4,
			lifeTotal: $appSettings.startingLifeTotal,
			playerName: 'Player 4'
		},
		{
			id: 5,
			lifeTotal: $appSettings.startingLifeTotal,
			playerName: 'Player 5'
		},
		{
			id: 6,
			lifeTotal: $appSettings.startingLifeTotal,
			playerName: 'Player 6'
		}
	];

	const resetLifeTotals = () => {
		players = players.map((player) => ({
			...player,
			lifeTotal: $appSettings.startingLifeTotal
		}));
		// TODO: Add random first player selection and add
		// first player badge by the players name. This badge
		// will disappear once any lifetotal has been changed
	};
</script>

<div class="w-full max-w-[24rem] bg-black px-1 py-2">
	{#if $appSettings.playerCount === 2}
		<TwoPlayerLayout {players} on:resetLifeTotals={resetLifeTotals} />
	{:else if $appSettings.playerCount === 3}
		<ThreePlayerLayout {players} on:resetLifeTotals={resetLifeTotals} />
	{:else if $appSettings.playerCount === 4}
		<FourPlayerLayoutOne {players} on:resetLifeTotals={resetLifeTotals} />
	{:else if $appSettings.playerCount === 5}
		<FivePlayerLayout {players} on:resetLifeTotals={resetLifeTotals} />
	{:else if $appSettings.playerCount === 6}
		<SixPlayerLayoutOne {players} on:resetLifeTotals={resetLifeTotals} />
	{/if}
</div>
