import { get, writable, type Writable } from 'svelte/store';
import { appSettings } from './app';

export const players: Writable<App.Player.Data[]> = writable([
	{
		id: 1,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 1'
	},
	{
		id: 2,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 2'
	},
	{
		id: 3,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 3'
	},
	{
		id: 4,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 4'
	},
	{
		id: 5,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 5'
	},
	{
		id: 6,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 6'
	}
]);

export const resetLifeTotals = () => {
	const startingLifeTotal = get(appSettings).startingLifeTotal;

	players.update((currentPlayers) => {
		return currentPlayers.map((player) => ({
			...player,
			lifeTotal: startingLifeTotal
		}));
	});
};

export const setPlayerLifeTotal = (playerId: number, amount: number) => {
	players.update((currentPlayers) => {
		return currentPlayers.map((player) => {
			if (player.id === playerId) {
				return {
					...player,
					lifeTotal: player.lifeTotal + amount
				};
			}
			return player;
		});
	});
};

export const setPlayerName = (playerId: number, playerName: string) => {
	players.update((currentPlayers) => {
		return currentPlayers.map((player) => {
			if (player.id === playerId) {
				return {
					...player,
					playerName: playerName
				};
			}
			return player;
		});
	});
};
