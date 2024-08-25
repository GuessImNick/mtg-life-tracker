import { get, writable, type Writable } from 'svelte/store';

export const appSettings = writable({
	playerCount: 4,
	startingLifeTotal: 40,
	customStartingLifeTotal: 60,
	customRandomNumber: 0
});

export const setPlayerCount = (playerCount: number) => {
	appSettings.update((data) => ({ ...data, playerCount }));
};

export const setStartingLifeTotal = (startingLifeTotal: number) => {
	appSettings.update((data) => ({ ...data, startingLifeTotal }));
};

export const setCustomStartingLifeTotal = (customStartingLifeTotal: number) => {
	appSettings.update((data) => ({ ...data, customStartingLifeTotal }));
};

export const setCustomRandomNumber = (customRandomNumber: number) => {
	appSettings.update((data) => ({ ...data, customRandomNumber }));
};
