<script lang="ts">
	import Menu from '../components/menu/Menu.svelte';
	import Player from '../components/player/Player.svelte';
	import { appState } from '$lib/store/appState';
</script>

<div class="flex flex-col h-full">
	<div class="flex items-start bg-black sticky top-0" class:h-full={!$appState.isMenuOpen}>
		<Player orientation="down" id={1} />
	</div>
	<div class="flex-grow">
		<Menu />
	</div>
	<div
		class="flex items-end bg-black sticky bottom-0 pb-2"
		class:h-full={!$appState.isMenuOpen}
		class:pt-2={$appState.isMenuOpen}
	>
		<Player id={0} />
	</div>
</div>
