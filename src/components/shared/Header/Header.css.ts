import { vars } from '@/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const headerContainer = style({
	background: vars.color.strongOrange,
	color: vars.color.black,
	padding: '1.2rem 8rem',
	boxShadow: '.5rem .5rem 1rem rgba(0, 0, 0, .3)',
});

export const headerContentWrapper = style({
	fontSize: '2rem',
	fontWeight: 'bold',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
});

export const logoWrapper = style({
	width: '8rem',
	height: '5rem',
	boxShadow: `2px 8px 15px ${vars.color.veryPaleOrange}`,
	borderRadius: '50%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
});
