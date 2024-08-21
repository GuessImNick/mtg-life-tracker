<script lang="ts">
	import TwoPlayerLayout from '$lib/layouts/TwoPlayerLayout.svelte';
	import ThreePlayerLayout from '$lib/layouts/ThreePlayerLayout.svelte';
	import { appData } from '$lib/store/app';
	import FourPlayerLayoutOne from '$lib/layouts/FourPlayerLayoutOne.svelte';
	import FivePlayerLayout from '$lib/layouts/FivePlayerLayout.svelte';
	import SixPlayerLayoutOne from '$lib/layouts/SixPlayerLayoutOne.svelte';

	let players: App.Player.Data[] = [
		{
			id: 1,
			lifeTotal: $appData.startingLifeTotal,
			playerName: 'Player 1'
		},
		{
			id: 2,
			lifeTotal: $appData.startingLifeTotal,
			playerName: 'Player 2'
		},
		{
			id: 3,
			lifeTotal: $appData.startingLifeTotal,
			playerName: 'Player 3'
		},
		{
			id: 4,
			lifeTotal: $appData.startingLifeTotal,
			playerName: 'Player 4'
		},
		{
			id: 5,
			lifeTotal: $appData.startingLifeTotal,
			playerName: 'Player 5'
		},
		{
			id: 6,
			lifeTotal: $appData.startingLifeTotal,
			playerName: 'Player 6'
		}
	];

	const resetLifeTotals = () => {
		players = players.map((player) => ({
			...player,
			lifeTotal: $appData.startingLifeTotal
		}));
		// TODO: Add random first player selection and add
		// first player badge by the players name. This badge
		// will disappear once any lifetotal has been changed
	};
</script>

<div class="w-full max-w-[24rem] bg-black px-1 py-2">
	{#if $appData.playerCount === 2}
		<TwoPlayerLayout {players} on:resetLifeTotals={resetLifeTotals} />
	{:else if $appData.playerCount === 3}
		<ThreePlayerLayout {players} on:resetLifeTotals={resetLifeTotals} />
	{:else if $appData.playerCount === 4}
		<FourPlayerLayoutOne {players} on:resetLifeTotals={resetLifeTotals} />
	{:else if $appData.playerCount === 5}
		<FivePlayerLayout {players} on:resetLifeTotals={resetLifeTotals} />
	{:else if $appData.playerCount === 6}
		<SixPlayerLayoutOne {players} on:resetLifeTotals={resetLifeTotals} />
	{/if}
</div>
