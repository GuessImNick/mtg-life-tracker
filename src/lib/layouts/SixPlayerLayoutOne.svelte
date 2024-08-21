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

<div class="flex flex-col h-full justify-between">
	<div class="h-6 flex flex-col gap-2" class:h-[66%]={!isMenuOpen}>
		<div class="h-full w-full flex justify-between gap-2">
			<div class="w-1/2">
				<Player orientation="right" playerData={players[2]} {isMenuOpen} />
			</div>
			<div class="w-1/2">
				<Player orientation="left" playerData={players[3]} {isMenuOpen} />
			</div>
		</div>
		<div class="h-full w-full flex justify-between gap-2">
			<div class="w-1/2">
				<Player orientation="right" playerData={players[1]} {isMenuOpen} />
			</div>
			<div class="w-1/2">
				<Player orientation="left" playerData={players[4]} {isMenuOpen} />
			</div>
		</div>
	</div>
	<div class="flex-grow">
		<Menu on:resetLifeTotals on:toggleMenuOpen={toggleMenuOpen} {activeMenu} {isMenuOpen} />
	</div>
	<div class="h-6 flex flex-col gap-2" class:h-[33%]={!isMenuOpen}>
		<div class="h-full w-full flex justify-between gap-2">
			<div class="w-1/2">
				<Player orientation="right" playerData={players[0]} {isMenuOpen} />
			</div>
			<div class="w-1/2">
				<Player orientation="left" playerData={players[5]} {isMenuOpen} />
			</div>
		</div>
	</div>
</div>
