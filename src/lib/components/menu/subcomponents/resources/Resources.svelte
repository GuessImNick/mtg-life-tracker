<script>
	import Arrow from '$lib/assets/icons/Arrow.svelte';
	import ManaPentagon from '$lib/assets/icons/ManaPentagon.svelte';
	import { appState, toggleIsMenuOpen, resetResources, appSettings } from '$lib/store/app';
	import ManaCoutner from './subcomponents/manaCoutner/ManaCoutner.svelte';

	$: innerHeight = 0;
</script>

<svelte:window bind:innerHeight />

<div
	class="w-full overflow-scroll scrollbar-hidden"
	style="max-height: {innerHeight - ($appSettings.playerCount >= 5 ? 110 : 80)}px;"
>
	<div class="flex flex-col">
		<div
			class="w-full text-center flex px-4 flex-col justify-between items-center my-4 py-2 sticky top-[-1px] bg-black z-10"
		>
			<button on:click={() => toggleIsMenuOpen('')} class="text-white absolute left-0 pl-4">
				<Arrow />
			</button>
			<span class="text-gray-400 text-center">Mana Counter</span>
		</div>

		<div class="flex flex-col">
			<div class="w-full text-center text-white flex flex-col items-center">
				<div class="w-2/4 flex justify-center">
					<ul class="w-full flex flex-col gap-3">
						<ManaCoutner type="white" />
						<ManaCoutner type="blue" />
						<ManaCoutner type="black" />
						<ManaCoutner type="red" />
						<ManaCoutner type="green" />
						<ManaCoutner type="waste" />
					</ul>
				</div>
			</div>
			<div class="w-full text-center text-white my-2 flex flex-col items-center">
				<span class="text-gray-400 text-center">Storm Counter</span>
				<div class="w-2/4 flex justify-center">
					<ul class="w-full">
						<ManaCoutner type="storm" />
					</ul>
				</div>
			</div>
			<div class="flex justify-center gap-2 py-2">
				<button
					on:click={() => toggleIsMenuOpen('')}
					class="border rounded-md bg-[#2d2f30] px-2 w-20">close</button
				>
				<button
					on:click={resetResources}
					class="border rounded-md bg-[#2d2f30] border-red-500 px-2 w-20">clear</button
				>
			</div>
		</div>
	</div>
</div>
