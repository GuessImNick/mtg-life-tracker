<script lang="ts">
	import Pen from '$lib/assets/icons/Pen.svelte';
	import X from '$lib/assets/icons/X.svelte';
	import { playerModalData, resetPlayerModalData } from '$lib/store/modal';
	import { players } from '$lib/store/player';

	const handleOnKeyPress = (event: KeyboardEvent) => {
		if (event.key === 'Enter') {
			resetPlayerModalData();
		}

		if ($players[$playerModalData.playerId - 1].playerName.length >= 20) {
			$players[$playerModalData.playerId - 1].playerName = $players[
				$playerModalData.playerId - 1
			].playerName.slice(0, 19);
		}
	};
</script>

<div
	class="bg-black/70 absolute w-full h-full top-0 left-0 flex justify-center items-center"
	on:click={resetPlayerModalData}
	role="button"
	on:keydown={() => null}
	tabindex="0"
>
	<div
		on:click|stopPropagation
		class="bg-[#d8e5f7] max-w-80 max-h-80 w-full h-full opacity-100 rounded-[2rem] flex justify-center items-start text-black p-2 relative"
		role="button"
		on:keydown={() => null}
		tabindex="0"
	>
		<div class="flex flex-col justify-center">
			<div class="flex flex-col justify-center items-center">
				<h2 class="text-lg font-semibold my-2 relative w-full text-center">
					Customize Player<button on:click={resetPlayerModalData} class="absolute -right-4 top-0"
						><X /></button
					>
				</h2>
				<div class="relative">
					<input
						type="text"
						class="py-2 px-3 rounded-lg outline outline-1 outline-black text-black font-semibold bg-[#f1f6fe]"
						bind:value={$players[$playerModalData.playerId - 1].playerName}
						on:keypress={handleOnKeyPress}
					/>
					<div class="absolute right-3 top-2 pointer-events-none"><Pen /></div>
				</div>
			</div>
		</div>
	</div>
</div>
