<script>
	import { getPlayerCount } from '$lib/store/app';

	let playerCount = getPlayerCount();
</script>

<button class="rounded-full h-10 w-10 bg-[#42d5ff] flex justify-center items-center">
	<div class="rounded-full h-8 w-8 bg-[#2d2f30]">
		<span class="text-white flex justify-center items-center h-full">{playerCount}</span>
	</div>
</button>
