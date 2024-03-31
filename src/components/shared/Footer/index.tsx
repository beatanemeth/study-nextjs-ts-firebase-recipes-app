import { footerContainer, footerText } from './Footer.css';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={footerContainer}>
			<p className={footerText}>Copyright ⓒ {currentYear}</p>
		</footer>
	);
}
