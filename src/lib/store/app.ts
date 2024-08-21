import { get, writable } from 'svelte/store';

export const appData = writable({
	playerCount: 2,
	startingLifeTotal: 20
});

export const setPlayerCount = (playerCount: number) => {
	appData.update((data) => ({ ...data, playerCount }));
};

export const setStartingLifeTotal = (startingLifeTotal: number) => {
	appData.update((data) => ({ ...data, startingLifeTotal }));
	console.log(get(appData));
};
