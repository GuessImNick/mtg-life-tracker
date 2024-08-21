<script lang="ts">
	import Menu from '../components/menu/Menu.svelte';
	import Player from '../components/player/Player.svelte';
	import { appState } from '../store/app';
</script>

<div class="flex flex-col h-full">
	<div class="h-6 flex items-start" class:h-full={!$appState.isMenuOpen}>
		<Player orientation="down" id={1} />
	</div>
	<div class="flex-grow">
		<Menu />
	</div>
	<div class="h-6 flex items-end" class:h-full={!$appState.isMenuOpen}>
		<Player id={0} />
	</div>
</div>
