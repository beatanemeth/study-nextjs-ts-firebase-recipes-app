import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import 'src/styles/global.css.ts';

export default function DashboardLayout({
	children, // will be a page or nested layout
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			<main style={{ width: '80vw', padding: '5rem', margin: '0 auto' }}>
				{children}
			</main>
			<Footer />
		</>
	);
}
