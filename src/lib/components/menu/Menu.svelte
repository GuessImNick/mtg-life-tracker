<script>
	import Reset from '$lib/assets/icons/Reset.svelte';
	import Randomizer from './subcomponents/randomizer/Randomizer.svelte';
	import Resources from './subcomponents/resources/Resources.svelte';
	import Settings from './subcomponents/settings/Settings.svelte';
</script>

<div class="h-14 flex justify-around py-1.5 items-center">
	<div class="flex justify-center items-center"><button class="h-10 w-10"><Reset /></button></div>
	<div class="flex justify-center items-center"><Settings /></div>
	<div class="flex justify-center items-center"><Resources /></div>
	<div class="flex justify-center items-center"><Randomizer /></div>
</div>
