<script lang="ts">
	import FirstPlace from '$lib/assets/icons/FirstPlace.svelte';
	import Minus from '$lib/assets/icons/Minus.svelte';
	import Plus from '$lib/assets/icons/Plus.svelte';
	import { appSettings } from '$lib/store/appSettings';
	import { appState } from '$lib/store/appState';
	import { openPlayerModal } from '$lib/store/modal';
	import { manageLifeTotal, players } from '$lib/store/player';

	export let orientation: App.Player.Orientation = 'up';
	export let id: number;

	let interval: number;
	let timeout: number;
	let isHolding = false;
	$: innerWidth = 0;
	$: isMobile = innerWidth < 640;
	$: index = id - 1;

	const handleMouseDown = (type: App.Player.LifeMoveType) => {
		if (!isMobile) {
			isHolding = true;

			timeout = setTimeout(() => {
				manageLifeTotal(type, id, 10);
				if (isHolding) {
					interval = setInterval(() => {
						manageLifeTotal(type, id, 10);
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
				manageLifeTotal(type, id);
			}
			clearTimeout(timeout);
			timeout = 0;
			isHolding = false;
		}
	};

	const handleTouchStart = (type: App.Player.LifeMoveType) => {
		isHolding = true;

		timeout = setTimeout(() => {
			manageLifeTotal(type, id, 10);
			if (isHolding) {
				interval = setInterval(() => {
					manageLifeTotal(type, id, 10);
				}, 1000);
			}
		}, 1000);
	};

	const handleTouchEnd = (type: App.Player.LifeMoveType) => {
		if (interval) {
			clearInterval(interval);
			interval = 0;
		} else {
			manageLifeTotal(type, id);
		}
		clearTimeout(timeout);
		timeout = 0;
		isHolding = false;
	};
</script>

<svelte:window bind:innerWidth />

<div
	class="bg-player flex w-full rounded-3xl flex-grow h-6"
	class:h-full={!$appState.isMenuOpen}
	class:bg-player-light={$players[index].highlighted}
>
	{#if !$appState.isMenuOpen}
		<div class="flex flex-col w-full relative">
			<div class="h-full flex flex-col" class:flex-col-reverse={orientation === 'left'}>
				<button
					on:mousedown={() => handleMouseDown('subtract')}
					on:mouseup={() => handleMouseUp('subtract')}
					on:touchstart={() => handleTouchStart('subtract')}
					on:touchend={() => handleTouchEnd('subtract')}
					class="w-full h-1/2 flex justify-center {orientation === 'left'
						? 'items-end rounded-b-3xl'
						: 'items-start rounded-t-3xl'} active:bg-player-light select-none"
				>
					<div class="rotate-90"><Minus /></div>
				</button>
				<button
					on:mousedown={() => handleMouseDown('add')}
					on:mouseup={() => handleMouseUp('add')}
					on:touchstart={() => handleTouchStart('add')}
					on:touchend={() => handleTouchEnd('add')}
					class="w-full h-1/2 flex justify-center {orientation === 'left'
						? 'items-start rounded-t-3xl'
						: 'items-end rounded-b-3xl'} active:bg-player-light select-none"
				>
					<Plus />
				</button>
			</div>
			<div
				class="absolute h-full w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-none flex items-center"
				class:flex-row={orientation === 'left'}
				class:flex-row-reverse={orientation === 'right'}
			>
				<div class="grow w-1/3 text-center flex justify-center items-center">
					<button
						on:click={() => openPlayerModal(id)}
						class="bg-[#dfeaf2]/80 py-2 px-3 rounded-lg mt-1 text-lg pointer-events-auto whitespace-nowrap vert"
						class:rotate-180={orientation === 'left'}
					>
						<div class="flex">
							{$players[index].playerName}
							{#if $players[index].isFirst}
								<div class="flex justify-center items-center mt-2 rotate-90">
									<FirstPlace />
								</div>
							{/if}
						</div>
					</button>
				</div>
				<div
					class="w-1/3 flex justify-center items-center vert"
					class:flex-row-reverse={orientation === 'left'}
				>
					<span
						class="h-16 text-center"
						class:rotate-180={orientation === 'left'}
						class:h-8={$appSettings.playerCount >= 5}
						>{$players[index].tempLifeDiff < 0 ? `-${$players[index].tempLifeDiff * -1}` : ''}</span
					>
					<span
						class="text-black text-6xl flex items-center text-center"
						class:-rotate-180={orientation === 'left'}
						class:text-5xl={$appSettings.playerCount >= 5}>{$players[index].lifeTotal}</span
					>
					<span
						class="h-16 text-center"
						class:rotate-180={orientation === 'left'}
						class:h-8={$appSettings.playerCount >= 5}
						>{$players[index].tempLifeDiff > 0 ? `+${$players[index].tempLifeDiff}` : ''}</span
					>
				</div>

				<div class="grow w-1/3 vert"></div>
			</div>
		</div>
	{/if}
</div>

<style>
	.vert {
		writing-mode: vertical-rl;
	}
</style>
