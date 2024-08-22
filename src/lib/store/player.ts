import { get, writable, type Writable } from 'svelte/store';
import { appSettings } from './app';

export const players: Writable<App.Player.Data[]> = writable([
	{
		id: 1,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 1',
		tempLifeDiff: 0
	},
	{
		id: 2,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 2',
		tempLifeDiff: 0
	},
	{
		id: 3,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 3',
		tempLifeDiff: 0
	},
	{
		id: 4,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 4',
		tempLifeDiff: 0
	},
	{
		id: 5,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 5',
		tempLifeDiff: 0
	},
	{
		id: 6,
		lifeTotal: get(appSettings).startingLifeTotal,
		playerName: 'Player 6',
		tempLifeDiff: 0
	}
]);

// Object to store timeout references for each player
const resetTimers: { [key: number]: number } = {};

export const resetLifeTotals = () => {
	const startingLifeTotal = get(appSettings).startingLifeTotal;

	players.update((currentPlayers) => {
		return currentPlayers.map((player) => {
			// Clear any existing timer for this player
			if (resetTimers[player.id]) {
				clearTimeout(resetTimers[player.id]);
				delete resetTimers[player.id]; // Remove the timer reference
			}

			return {
				...player,
				lifeTotal: startingLifeTotal,
				tempLifeDiff: 0 // Reset tempLifeDiff to 0
			};
		});
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

export const setTempLifeDiff = (
	playerId: number,
	type: App.Player.LifeMoveType,
	amount: number
) => {
	players.update((currentPlayers) => {
		return currentPlayers.map((player) => {
			if (player.id === playerId) {
				let tempLifeDiff = player.tempLifeDiff;
				if (type === 'add') {
					tempLifeDiff += amount;
				} else if (type === 'subtract') {
					tempLifeDiff -= amount;
				}

				if (resetTimers[playerId]) {
					clearTimeout(resetTimers[playerId]);
				}

				resetTimers[playerId] = setTimeout(() => {
					players.update((currentPlayers) => {
						return currentPlayers.map((p) => {
							if (p.id === playerId) {
								return {
									...p,
									tempLifeDiff: 0
								};
							}
							return p;
						});
					});
				}, 6000);

				return {
					...player,
					tempLifeDiff // Update the player's tempLifeDiff
				};
			}
			return player;
		});
	});
};
