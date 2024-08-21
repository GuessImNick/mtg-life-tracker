<script lang="ts">
	import Menu from '../components/menu/Menu.svelte';
	import Player from '../components/player/Player.svelte';
	import { appState } from '../store/app';

	export let players: App.Player.Data[];
</script>

<div class="flex flex-col h-full">
	<div class="h-6 flex items-start" class:h-full={!$appState.isMenuOpen}>
		<Player orientation="down" playerData={players[1]} />
	</div>
	<div class="flex-grow">
		<Menu on:resetLifeTotals />
	</div>
	<div class="h-6 flex items-end" class:h-full={!$appState.isMenuOpen}>
		<Player playerData={players[0]} />
	</div>
</div>
