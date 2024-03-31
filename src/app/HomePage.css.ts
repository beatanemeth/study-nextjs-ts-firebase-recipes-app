import { vars } from '@/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const mainContainer = style({
	position: 'relative',
	width: '100vww',
	minHeight: '100vh',
	background: vars.color.veryPaleOrange,
	display: 'flex',
});

export const contentContainer = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'flex-start',
	alignItems: 'flex-start',
	gap: '15rem',
	borderRadius: '1rem',
	boxShadow: `15px 15px 35px ${vars.color.strongOrange}`,
	margin: '5rem',
	padding: '5rem',
	width: '65vw',
});

export const contentWrapper = style({
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	gap: '5rem',
	width: '35vw',
});

export const textWrapper = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '.5rem',
	margin: '0 3rem',
});

export const homeImage = style({
	position: 'absolute',
	top: '0', //https://www.freecodecamp.org/news/how-to-center-an-absolute-positioned-element/
	bottom: '0',
	margin: 'auto 0',
	left: '55rem',
	boxShadow: `-15px 15px 35px ${vars.color.strongOrange}`,
	borderRadius: '1rem',
});
