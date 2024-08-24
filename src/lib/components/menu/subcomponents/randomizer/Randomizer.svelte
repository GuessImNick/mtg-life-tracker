<script>
	import Arrow from '$lib/assets/icons/Arrow.svelte';
	import Dsix from '$lib/assets/icons/Dsix.svelte';
	import { appSettings, toggleIsMenuOpen } from '$lib/store/app';
</script>

<div
	class="w-full overflow-scroll scrollbar-hidden"
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
	</div>
</div>
