import { writable } from 'svelte/store';

export const appState = writable({
	isMenuOpen: false,
	activeMenu: ''
});

export const toggleIsMenuOpen = (menu: App.AppState.Menu = '') => {
	appState.update((data) => ({ activeMenu: menu, isMenuOpen: !data.isMenuOpen }));
};
