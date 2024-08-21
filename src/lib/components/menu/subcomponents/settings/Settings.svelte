<script lang="ts">
	import {
		appSettings,
		appState,
		setPlayerCount,
		setStartingLifeTotal,
		toggleIsMenuOpen
	} from '$lib/store/app';
	import { createEventDispatcher } from 'svelte';
	import CircularButton from '../circularButton/CircularButton.svelte';
	import Arrow from '$lib/assets/icons/Arrow.svelte';

	const dispatch = createEventDispatcher();

	const isCustomStartingLife = () => {
		return (
			$appSettings.startingLifeTotal !== 20 &&
			$appSettings.startingLifeTotal !== 25 &&
			$appSettings.startingLifeTotal !== 30 &&
			$appSettings.startingLifeTotal !== 40
		);
	};

	const setLifeTotal = (startingLifeTotal: number) => {
		// TODO: Add clean modal popup
		const confirm = window.confirm('Are you sure you want to continue?');
		if (confirm) {
			setStartingLifeTotal(startingLifeTotal);
			toggleIsMenuOpen('');
			dispatch('resetLifeTotals');
		}
	};

	const setNewPlayerCount = (playerCount: number) => {
		// TODO: Add clean modal popup
		const confirm = window.confirm('Are you sure you want to continue?');
		if (confirm) {
			setPlayerCount(playerCount);
			toggleIsMenuOpen('');
			// Dispatch event fucntion to change the selected layout
		}
	};
</script>

{#if $appState.isMenuOpen}
	<div class="w-full h-full">
		<div class="w-full text-center flex px-4 relative flex-col justify-center items-center mt-4">
			<button on:click={() => toggleIsMenuOpen('')} class="text-white absolute left-0 pl-4"
				><Arrow /></button
			>
			<span class="text-gray-400 text-center">Settings</span>
		</div>

		<div class="w-full text-center text-white mt-4 flex flex-col items-center">
			<!-- Player Count -->
			<div class="w-3/4">
				<div><span>Players</span></div>
				<div class="flex flex-row justify-between mt-3">
					{#each [2, 3, 4, 5, 6] as playerCount}
						{#key $appSettings.playerCount}
							<div>
								<CircularButton
									on:click={() => setNewPlayerCount(playerCount)}
									number={playerCount}
									highlight={$appSettings.playerCount === playerCount}
								/>
							</div>
						{/key}
					{/each}
				</div>
			</div>

			<!-- Starting Life Total -->
			<div class="mt-6 w-3/4">
				<div><span>Starting Life</span></div>
				<div class="flex flex-row justify-between mt-3">
					{#each [20, 25, 30, 40, 60] as lifeTotal}
						{#key $appSettings.startingLifeTotal}
							<div>
								<CircularButton
									on:click={() => setLifeTotal(lifeTotal)}
									number={lifeTotal}
									highlight={lifeTotal === 60
										? isCustomStartingLife()
										: $appSettings.startingLifeTotal === lifeTotal}
								/>
							</div>
						{/key}
					{/each}
				</div>
			</div>
		</div>
	</div>
{:else}
	<CircularButton
		on:click={() => toggleIsMenuOpen('settings')}
		number={$appSettings.playerCount}
		highlight
	/>
{/if}
