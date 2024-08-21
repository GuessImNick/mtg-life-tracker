<script lang="ts">
	import Menu from '../components/menu/Menu.svelte';
	import Player from '../components/player/Player.svelte';

	export let players: App.Player.Data[];

	let isMenuOpen = false;
	let activeMenu = '';

	const toggleMenuOpen = (event: CustomEvent) => {
		isMenuOpen = !isMenuOpen;
		activeMenu = event.detail.menuName;
	};
</script>

<div class="flex flex-col h-full">
	<div class="h-2/3 flex flex-row justify-betweenflex-grow">
		<Player orientation="right" playerData={players[1]} {isMenuOpen} />
		<Player orientation="left" playerData={players[2]} {isMenuOpen} />
	</div>
	<Menu on:resetLifeTotals on:toggleMenuOpen={toggleMenuOpen} {activeMenu} {isMenuOpen} />
	<div class="flex-grow h-1/3">
		<Player playerData={players[0]} {isMenuOpen} />
	</div>
</div>
