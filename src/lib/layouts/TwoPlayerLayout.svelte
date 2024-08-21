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
	<div class="h-6 flex items-start" class:h-full={!isMenuOpen}>
		<Player orientation="down" playerData={players[1]} {isMenuOpen} />
	</div>
	<div class="flex-grow">
		<Menu on:resetLifeTotals on:toggleMenuOpen={toggleMenuOpen} {activeMenu} {isMenuOpen} />
	</div>
	<div class="h-6 flex items-end" class:h-full={!isMenuOpen}>
		<Player playerData={players[0]} {isMenuOpen} />
	</div>
</div>
