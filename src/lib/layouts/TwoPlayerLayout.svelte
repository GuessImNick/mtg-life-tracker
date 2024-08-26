<script lang="ts">
	import Menu from '../components/menu/Menu.svelte';
	import { appState } from '$lib/store/appState';
	import PlayerVertical from '$lib/components/player/PlayerVertical.svelte';
</script>

<div class="flex flex-col h-full">
	<div class="flex items-start bg-black sticky top-0" class:h-full={!$appState.isMenuOpen}>
		<PlayerVertical orientation="down" id={1} />
	</div>
	<div class="flex-grow">
		<Menu />
	</div>
	<div
		class="flex items-end bg-black sticky bottom-0 pb-2"
		class:h-full={!$appState.isMenuOpen}
		class:pt-2={$appState.isMenuOpen}
	>
		<PlayerVertical id={0} />
	</div>
</div>
