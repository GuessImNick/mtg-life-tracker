import { get, writable, type Writable } from 'svelte/store';

export const appSettings = writable({
	playerCount: 4,
	startingLifeTotal: 40,
	customStartingLifeTotal: 60
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

export const appState = writable({
	isMenuOpen: false,
	activeMenu: ''
});

export const toggleIsMenuOpen = (menu: App.AppState.Menu = '') => {
	appState.update((data) => ({ activeMenu: menu, isMenuOpen: !data.isMenuOpen }));
};

export const resourceCounter: Writable<{ [key in App.Resources.Resource]: number }> = writable({
	white: 0,
	blue: 0,
	black: 0,
	red: 0,
	green: 0,
	waste: 0,
	storm: 0
});

export const setResource = (resourceType: App.Resources.Resource, count: number) => {
	resourceCounter.update((currentResources) => {
		const resources = { ...currentResources };
		resources[resourceType] = count;
		if (resources[resourceType] <= 0) resources[resourceType] = 0;
		return resources;
	});
};

export const resetResources = () => {
	resourceCounter.update((currentResources) => {
		const resources = { ...currentResources };
		for (const resource in resources) {
			resources[resource as App.Resources.Resource] = 0;
		}
		return resources;
	});
};
