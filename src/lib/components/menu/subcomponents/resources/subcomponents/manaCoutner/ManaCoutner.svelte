<script lang="ts">
	import Minus from '$lib/assets/icons/Minus.svelte';
	import Plus from '$lib/assets/icons/Plus.svelte';
	import { resourceCounter, setResource } from '$lib/store/app';
	import CircularButton from '../../../circularButton/CircularButton.svelte';

	export let type: App.Resources.Resource;

	const images: { [key in App.Resources.Resource]: string } = {
		white: '/white-mana.png',
		blue: '/blue-mana.png',
		black: '/black-mana.png',
		red: '/red-mana.png',
		green: '/green-mana.png',
		waste: '/waste-mana.png',
		storm: '/storm-counter.png'
	};
</script>

<li class="flex flex-row items-center justify-between w-full">
	<div>
		<CircularButton
			on:click={() => setResource(type, --$resourceCounter[type])}
			customText
			highlight
			light
			small><Minus light size="1rem" /></CircularButton
		>
	</div>
	<div class="h-16 w-16 flex flex-row items-center justify-center flex-grow">
		<img src={images[type]} alt="mana symbol" class="h-16 w-16" /><span class="ml-4 text-2xl text-center w-2"
			>{$resourceCounter[type]}</span
		>
	</div>
	<div>
		<CircularButton
			on:click={() => setResource(type, ++$resourceCounter[type])}
			customText
			highlight
			light
			small><Plus light size="1rem" /></CircularButton
		>
	</div>
</li>
