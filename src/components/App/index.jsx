import Footer from "components/Footer";
import ProductList from "components/Product/productList";
import Header from "components/Header";
import "./styles.css";
import { useState } from "react";

function App() {

	const [modalActive, setModalActive] = useState(false);

	return (
		<>
			<Header setModalActive={setModalActive} />

			<div className="min-h-screen bg-gray-100">
				<div className="container mx-auto p-4">
					<ProductList setModalActive={setModalActive} modalActive={modalActive} />
				</div>

				<Footer />
			</div>
		</>
	);
}

export default App;