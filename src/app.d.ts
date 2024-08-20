// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		namespace Player {
			type LifeMoveType = 'subtract' | 'add';
			type Orientation = 'up' | 'down' | 'left' | 'right';

			type Data = {
				lifeTotal: number;
				playerName: string;
			};
		}
	}
}

export {};
