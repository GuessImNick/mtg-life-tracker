import { get, writable } from 'svelte/store';

const appData = writable({
	playerCount: 2
});

export const setPlayerCount = (count: number) => {
	appData.set({ ...appData, playerCount: count });
};

export const getPlayerCount = () => {
	return get(appData).playerCount;
};
