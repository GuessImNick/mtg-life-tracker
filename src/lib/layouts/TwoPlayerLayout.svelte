<script lang="ts">
	import MenuBar from '../components/menu/Menu.svelte';
	import Player from '../components/player/Player.svelte';

	export let players: App.Player.Data[];
</script>

<div class="flex flex-col h-full">
	<Player orientation="down" playerData={players[1]} />
	<MenuBar />
	<Player playerData={players[0]} />
</div>
