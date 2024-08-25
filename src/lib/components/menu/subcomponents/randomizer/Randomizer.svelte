<script lang="ts">
	import Arrow from '$lib/assets/icons/Arrow.svelte';
	import Deight from '$lib/assets/icons/Deight.svelte';
	import Dfour from '$lib/assets/icons/Dfour.svelte';
	import Dsix from '$lib/assets/icons/Dsix.svelte';
	import Dten from '$lib/assets/icons/Dten.svelte';
	import Dtwelve from '$lib/assets/icons/Dtwelve.svelte';
	import Dtwenty from '$lib/assets/icons/Dtwenty.svelte';
	import Dtwo from '$lib/assets/icons/Dtwo.svelte';
	import { appSettings } from '$lib/store/appSettings';
	import { toggleIsMenuOpen } from '$lib/store/appState';
	import { generateRandomNumber } from '$lib/store/modal';
	import DiceCard from './subcomponents/diceCard/RandomizerButton.svelte';

	$: innerHeight = 0;
</script>

<svelte:window bind:innerHeight />

<div
	class="w-full overflow-scroll scrollbar-hidden h-full"
	style="max-height: {innerHeight - ($appSettings.playerCount >= 5 ? 110 : 80)}px;"
>
	<div class="flex flex-col">
		<div
			class="w-full text-center flex px-4 flex-col justify-between items-center my-4 py-2 sticky top-[-1px] bg-black"
		>
			<button on:click={() => toggleIsMenuOpen('')} class="text-white absolute left-0 pl-4">
				<Arrow />
			</button>
			<span class="text-gray-400 text-center">Dice & Misc</span>
		</div>

		<div class="w-full flex justify-center">
			<div class="grid grid-rows-3 grid-cols-6 gap-y-8 gap-x-4">
				<div class="col-span-2 col-start-2">
					<DiceCard
						on:click={() => {
							generateRandomNumber('d2');
						}}
						text="Flip coin"><Dtwo size="4rem" /></DiceCard
					>
				</div>
				<div class="col-span-2">
					<DiceCard
						on:click={() => {
							generateRandomNumber('custom');
						}}
						text="Custom">Custom</DiceCard
					>
				</div>
				<div class="col-span-2">
					<DiceCard
						on:click={() => {
							generateRandomNumber('d4');
						}}
						text="Roll d4"><Dfour size="4rem" /></DiceCard
					>
				</div>
				<div class="col-span-2">
					<DiceCard
						on:click={() => {
							generateRandomNumber('d6');
						}}
						text="Roll d6"><Dsix size="4rem" /></DiceCard
					>
				</div>
				<div class="col-span-2">
					<DiceCard
						on:click={() => {
							generateRandomNumber('d8');
						}}
						text="Roll d8"><Deight size="4rem" /></DiceCard
					>
				</div>
				<div class="col-span-2">
					<DiceCard
						on:click={() => {
							generateRandomNumber('d10');
						}}
						text="Roll d10"><Dten size="4rem" /></DiceCard
					>
				</div>
				<div class="col-span-2">
					<DiceCard
						on:click={() => {
							generateRandomNumber('d12');
						}}
						text="Roll d12"><Dtwelve size="4rem" /></DiceCard
					>
				</div>
				<div class="col-span-2">
					<DiceCard
						on:click={() => {
							generateRandomNumber('d20');
						}}
						text="Roll d20"><Dtwenty size="4rem" /></DiceCard
					>
				</div>
			</div>
		</div>
	</div>
</div>
