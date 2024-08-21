<script lang="ts">
	import Menu from '../components/menu/Menu.svelte';
	import Player from '../components/player/Player.svelte';
	import { appState } from '../store/app';

	export let players: App.Player.Data[];
</script>

<div class="flex flex-col h-full justify-between">
	<div class="h-6 flex flex-col gap-2" class:h-[70%]={!$appState.isMenuOpen}>
		<div class="h-full w-full flex justify-between gap-2">
			<div class="w-1/2">
				<Player orientation="right" playerData={players[2]} />
			</div>
			<div class="w-1/2">
				<Player orientation="left" playerData={players[3]} />
			</div>
		</div>
		<div class="h-full w-full flex justify-between gap-2">
			<div class="w-1/2">
				<Player orientation="right" playerData={players[1]} />
			</div>
			<div class="w-1/2">
				<Player orientation="left" playerData={players[4]} />
			</div>
		</div>
	</div>
	<div class="flex-grow">
		<Menu on:resetLifeTotals />
	</div>
	<div class="h-6 flex items-end" class:h-[30%]={!$appState.isMenuOpen}>
		<Player orientation={'up'} playerData={players[0]} />
	</div>
</div>
