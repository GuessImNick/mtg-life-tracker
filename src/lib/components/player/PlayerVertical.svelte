<script lang="ts">
	import FirstPlace from '$lib/assets/icons/FirstPlace.svelte';
	import Minus from '$lib/assets/icons/Minus.svelte';
	import Plus from '$lib/assets/icons/Plus.svelte';
	import { appState } from '$lib/store/appState';
	import { openPlayerModal } from '$lib/store/modal';
	import { players, setTempLifeDiff } from '$lib/store/player';

	export let orientation: App.Player.Orientation = 'up';
	export let id: number;

	let interval: number;
	let timeout: number;
	let isHolding = false;

	$: innerWidth = 0;
	$: isMobile = innerWidth < 640;

	const manageLifeTotal = (type: App.Player.LifeMoveType, amount: number = 1) => {
		switch (type) {
			case 'add':
				$players[id].lifeTotal += amount;
				setTempLifeDiff(id + 1, type, amount);
				break;
			case 'subtract':
				$players[id].lifeTotal -= amount;
				setTempLifeDiff(id + 1, type, amount);
				break;

			default:
				break;
		}
		lifeTotalStabalizer();
	};

	const handleMouseDown = (type: App.Player.LifeMoveType) => {
		if (!isMobile) {
			isHolding = true;

			timeout = setTimeout(() => {
				manageLifeTotal(type, 10);
				if (isHolding) {
					interval = setInterval(() => {
						manageLifeTotal(type, 10);
					}, 1000);
				}
			}, 1000);
		}
	};

	const handleMouseUp = (type: App.Player.LifeMoveType) => {
		if (!isMobile) {
			if (interval) {
				clearInterval(interval);
				interval = 0;
			} else {
				manageLifeTotal(type);
			}
			clearTimeout(timeout);
			timeout = 0;
			isHolding = false;
		}
	};

	const handleTouchStart = (type: App.Player.LifeMoveType) => {
		isHolding = true;

		timeout = setTimeout(() => {
			manageLifeTotal(type, 10);
			if (isHolding) {
				interval = setInterval(() => {
					manageLifeTotal(type, 10);
				}, 1000);
			}
		}, 1000);
	};

	const handleTouchEnd = (type: App.Player.LifeMoveType) => {
		if (interval) {
			clearInterval(interval);
			interval = 0;
		} else {
			manageLifeTotal(type);
		}
		clearTimeout(timeout);
		timeout = 0;
		isHolding = false;
	};

	const lifeTotalStabalizer = () => {
		switch (true) {
			case $players[id].lifeTotal <= 0:
				$players[id].lifeTotal = 0;
				break;
			case $players[id].lifeTotal >= 999:
				$players[id].lifeTotal = 999;
				break;
			default:
				break;
		}
	};
</script>

<svelte:window bind:innerWidth />

<div
	class="bg-player flex w-full rounded-3xl flex-grow h-6"
	class:h-full={!$appState.isMenuOpen}
	class:rotate-180={orientation === 'down'}
	class:bg-player-light={$players[id].highlighted}
>
	{#if !$appState.isMenuOpen}
		<div class="flex w-full relative">
			<button
				on:mousedown={() => handleMouseDown('subtract')}
				on:mouseup={() => handleMouseUp('subtract')}
				on:touchstart={() => handleTouchStart('subtract')}
				on:touchend={() => handleTouchEnd('subtract')}
				class="w-1/2 flex justify-start items-center active:bg-player-light rounded-l-3xl select-none"
			>
				<Minus />
			</button>
			<button
				on:mousedown={() => handleMouseDown('add')}
				on:mouseup={() => handleMouseUp('add')}
				on:touchstart={() => handleTouchStart('add')}
				on:touchend={() => handleTouchEnd('add')}
				class="w-1/2 flex justify-end items-center active:bg-player-light rounded-r-3xl select-none"
			>
				<Plus />
			</button>
			<div
				class="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-none flex flex-col justify-between"
			>
				<div class="grow h-1/3 text-center">
					<button
						on:click={() => openPlayerModal(id + 1)}
						class="bg-[#dfeaf2]/80 py-2 px-3 rounded-lg mt-1 text-xl pointer-events-auto"
						><div class="flex">
							{$players[id].playerName}
							{#if $players[id].isFirst}
								<div class="flex justify-center items-center ml-2">
									<FirstPlace />
								</div>
							{/if}
						</div>
					</button>
				</div>
				<div class="h-1/3 flex justify-center items-center flex-row">
					<span class="w-16 text-center"
						>{$players[id].tempLifeDiff < 0 ? `-${$players[id].tempLifeDiff * -1}` : ''}</span
					>
					<span class="text-black text-7xl"> {$players[id].lifeTotal}</span>
					<span class="w-16 text-center"
						>{$players[id].tempLifeDiff > 0 ? `+${$players[id].tempLifeDiff}` : ''}</span
					>
				</div>
				<div class="grow h-1/3"></div>
			</div>
		</div>
	{/if}
</div>
