<script>
	import { playerModalData, resetPlayerModalData } from '$lib/store/modal';
	import { players } from '$lib/store/player';
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
		class="bg-[#e2eaf5] max-w-80 max-h-80 w-full h-full opacity-100 rounded-[2rem] flex justify-center items-center text-black p-2"
		role="button"
		on:keydown={() => null}
		tabindex="0"
	>
		<div class="flex flex-col justify-center items-center">
            <h2>Customize Player</h2>
            <input type="text" bind:value={$players[$playerModalData.playerId - 1].playerName}>
        </div>
	</div>
</div>
