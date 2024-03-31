import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
	color: {
		vividOrangeLight: '#FFB229',
		vividOrangeDark: '#F69110',
		veryPaleOrange: '#FFF9F3',
		strongOrange: '#b36707',
		softOrange: '#f9b35a',
		strongBlue: '#0753b3',
		lightGrayishBlue: '#cfe0fd',
		strongPink: '#B30753',
		veryLightGray: '#DBDBDB',
		black: '#000000',
		white: '#FFFFFF',
	},
});
