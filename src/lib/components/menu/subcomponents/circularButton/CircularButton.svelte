<script lang="ts">
	export let number: number;
	export let highlight = false;
	export let customText = false;

	const outline = highlight ? 'bg-[#42d5ff]' : 'bg-[#2d2f30]';
</script>

<button class="rounded-full h-10 w-10 flex justify-center items-center {outline}" on:click>
	<div class="rounded-full h-8 w-8 bg-[#2d2f30]">
		<span class="text-white flex justify-center items-center h-full">
			{#if customText}
				<slot />
			{:else}
				{number}
			{/if}
		</span>
	</div>
</button>
