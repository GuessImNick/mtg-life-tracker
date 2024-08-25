<script lang="ts">
	export let type: 'light' | 'dark' = 'light';
</script>

<button
	on:click
	class="border rounded-md px-2 w-20 {type === 'light'
		? 'bg-[#2d2f30]'
		: 'bg-[#2d2f30] border-red-500'}"><slot /></button
>
