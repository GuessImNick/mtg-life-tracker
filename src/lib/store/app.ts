import { get, writable } from 'svelte/store';

export const appSettings = writable({
	playerCount: 4,
	startingLifeTotal: 40
});

export const setPlayerCount = (playerCount: number) => {
	appSettings.update((data) => ({ ...data, playerCount }));
	toggleIsMenuOpen('');
};

export const setStartingLifeTotal = (startingLifeTotal: number) => {
	appSettings.update((data) => ({ ...data, startingLifeTotal }));
	toggleIsMenuOpen('');
};

export const appState = writable({
	isMenuOpen: false,
	activeMenu: ''
});

export const toggleIsMenuOpen = (menu: App.AppState.Menu = '') => {
	appState.update((data) => ({ activeMenu: menu, isMenuOpen: !data.isMenuOpen }));
};
