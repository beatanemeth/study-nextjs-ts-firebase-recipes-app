import { globalStyle } from '@vanilla-extract/css';
import { vars } from './colors.css';

globalStyle('*', {
	margin: '0', // https://www.freecodecamp.org/news/html-page-width-height/
	padding: '0',
	boxSizing: 'border-box',
});

globalStyle('html, body', {
	width: '100vw',
	minHeight: '100vh',
	overflowX: 'hidden',
	fontSize: '16px',
});

globalStyle('a, a:link', {
	textDecoration: 'none',
	fontSize: '1.5rem',
	color: 'currentColor',
	fontWeight: 700,
});

globalStyle('button', {
	border: 0,
	background: 'none',
	color: vars.color.black,
	fontSize: '1.5rem',
	fontWeight: 700,
	cursor: 'pointer',
});

globalStyle('::placeholder', {
	fontSize: '1rem',
	color: vars.color.vividOrangeDark,
	opacity: '1' /* Firefox */,
});

globalStyle('textarea', {
	resize: 'vertical',
	overflow: 'auto',
});
