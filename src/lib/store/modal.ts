import { writable } from 'svelte/store';

const initialRandomizerModalState = { isOpen: false, result: 0, type: '' };

export const randomizerModalData = writable(initialRandomizerModalState);

export const generateRandomNumber = (type: string, amount: number | null = null) => {
	const dieTypes: { [key: string]: number | null } = {
		d2: 2,
		d4: 4,
		d6: 6,
		d8: 8,
		d10: 10,
		d12: 12,
		d20: 20,
		custom: amount
	};

	const max = dieTypes[type] || 0;
	const result = max > 0 ? Math.floor(Math.random() * max) + 1 : 0;
	randomizerModalData.set({ isOpen: true, result, type });

	return result;
};

export const resetRandomizer = () => {
	randomizerModalData.set(initialRandomizerModalState);
};
