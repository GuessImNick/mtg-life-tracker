<script lang="ts">
	import Minus from '$lib/assets/icons/Minus.svelte';
	import Plus from '$lib/assets/icons/Plus.svelte';

	export let orientation: App.Player.Orientation = 'up';
	export let playerData: App.Player.Data;
	export let isMenuOpen = false;

	let interval: number;
	let timeout: number;
	let isHolding = false;

	const manageLifeTotal = (type: App.Player.LifeMoveType, amount: number = 1) => {
		switch (type) {
			case 'add':
				playerData.lifeTotal += amount;
				break;
			case 'subtract':
				playerData.lifeTotal -= amount;
				break;

			default:
				break;
		}
		lifeTotalStabalizer();
	};

	const handleMouseDown = (type: App.Player.LifeMoveType) => {
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

	const handleMouseUp = (type: App.Player.LifeMoveType) => {
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
			case playerData.lifeTotal <= 0:
				playerData.lifeTotal = 0;
				break;
			case playerData.lifeTotal >= 999:
				playerData.lifeTotal = 999;
				break;
			default:
				break;
		}
	};

	const handleOrientation = (orientation: App.Player.Orientation) => {
		switch (orientation) {
			case 'up':
				return '';
			case 'down':
				return 'rotate-180';
			case 'left':
				return '-rotate-90';
			case 'right':
				return 'rotate-90';
			default:
				break;
		}
	};

	const onNameClick = () => {};

	const classesHorizontal = '';
	const classesVertical = '';
</script>

<div
	class="bg-player flex w-full transition-all duration-[0.25s] rounded-3xl relative flex-grow h-6"
	class:h-full={!isMenuOpen}
	class:ml-1={orientation === 'left'}
	class:mr-1={orientation === 'right'}
>
	{#if !isMenuOpen}
		<div class="flex w-full relative {handleOrientation(orientation)}">
			<button
				on:mousedown={() => handleMouseDown('subtract')}
				on:mouseup={() => handleMouseUp('subtract')}
				class="w-1/2 flex justify-start items-center active:bg-player-light rounded-l-3xl"
			>
				<Minus />
			</button>
			<button
				on:mousedown={() => handleMouseDown('add')}
				on:mouseup={() => handleMouseUp('add')}
				class="w-1/2 flex justify-end items-center active:bg-player-light rounded-r-3xl"
			>
				<Plus />
			</button>
			<div
				class="absolute h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer pointer-events-none flex flex-col justify-between"
			>
				<div class="grow h-1/3 text-center">
					<button
						on:click={onNameClick}
						class="bg-[#dfeaf2]/80 py-2 px-3 rounded-lg mt-1 text-xl pointer-events-auto"
						>{playerData.playerName}</button
					>
				</div>
				<span class="text-black text-7xl grow h-1/3 flex items-center text-center justify-center"
					>{playerData.lifeTotal}</span
				>
				<div class="grow h-1/3"></div>
			</div>
		</div>
	{/if}
</div>
