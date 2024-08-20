<script lang="ts">
	import TwoPlayerLayout from '$lib/layouts/TwoPlayerLayout.svelte';

	const players: App.Player.Data[] = [
		{
			lifeTotal: 40,
			playerName: 'Player 1'
		},
		{
			lifeTotal: 40,
			playerName: 'Player 2'
		},
		{
			lifeTotal: 40,
			playerName: 'Player 3'
		},
		{
			lifeTotal: 40,
			playerName: 'Player 4'
		},
		{
			lifeTotal: 40,
			playerName: 'Player 5'
		},
		{
			lifeTotal: 40,
			playerName: 'Player 6'
		}
	];
</script>

<div class="w-full max-w-[24rem] min-h-screen bg-black">
	<TwoPlayerLayout {players} />
</div>
