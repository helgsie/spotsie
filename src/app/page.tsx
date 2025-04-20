import Header from '../components/Header';
import Footer from '../components/Footer';
import Songs from '../components/Songs';

export default function Home() {
	return (
		<div className="layout mx-auto overflow-x-hidden">
			<div className="py-6 flex flex-col gap-8">
				<Header/>
				<Songs/>
				<Footer/>
			</div>
		</div>
	);
}