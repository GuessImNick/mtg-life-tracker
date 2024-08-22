<script lang="ts">
	import Menu from '../components/menu/Menu.svelte';
	import Player from '../components/player/Player.svelte';
	import { appState } from '../store/app';
</script>

<div class="flex flex-col justify-between relative h-full">
	<div class="h-6 w-full flex justify-between gap-2 " class:h-full={!$appState.isMenuOpen}>
		<div class="w-1/2">
			<Player orientation="right" id={1} />
		</div>
		<div class="w-1/2">
			<Player orientation="left" id={2} />
		</div>
	</div>
	<div class="flex-grow">
		<Menu />
	</div>
	<div class="h-6 w-full flex justify-between gap-2 " class:h-full={!$appState.isMenuOpen}>
		<div class="w-1/2">
			<Player orientation="right" id={0} />
		</div>
		<div class="w-1/2">
			<Player orientation="left" id={3} />
		</div>
	</div>
</div>
