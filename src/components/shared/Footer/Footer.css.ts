import { vars } from '@/styles/colors.css';
import { style } from '@vanilla-extract/css';

export const footerContainer = style({
	position: 'fixed',
	left: '0',
	bottom: '0',
	width: '100%',
	minHeight: '3rem',
	textAlign: 'center',
	marginTop: '2rem',
	padding: '1rem',
	backgroundColor: vars.color.strongOrange,
});

export const footerText = style({
	color: vars.color.white,
	fontSize: '1rem',
});
