<script lang="ts">
	import Menu from '../components/menu/Menu.svelte';
	import Player from '../components/player/Player.svelte';
	import { appState } from '../store/app';
	import { players } from '$lib/store/player';
</script>

<div class="flex flex-col h-full justify-between">
	<div class="flex flex-col gap-2 bg-black sticky top-0" class:h-[66%]={!$appState.isMenuOpen}>
		<div class="h-full w-full flex justify-between gap-2">
			<div class="w-1/2">
				<Player orientation="right" id={2} />
			</div>
			<div class="w-1/2">
				<Player orientation="left" id={3} />
			</div>
		</div>
		<div class="h-full w-full flex justify-between gap-2">
			<div class="w-1/2">
				<Player orientation="right" id={1} />
			</div>
			<div class="w-1/2">
				<Player orientation="left" id={4} />
			</div>
		</div>
	</div>
	<div class="flex-grow">
		<Menu />
	</div>
	<div
		class="flex flex-col gap-2 bg-black sticky bottom-0 pb-2"
		class:h-[33%]={!$appState.isMenuOpen}
		class:pt-2={$appState.isMenuOpen}
	>
		<div class="h-full w-full flex justify-between gap-2">
			<div class="w-1/2">
				<Player orientation="right" id={0} />
			</div>
			<div class="w-1/2">
				<Player orientation="left" id={5} />
			</div>
		</div>
	</div>
</div>
