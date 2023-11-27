import Footer from "components/Footer";
import ProductList from "components/Product/productList";
import Header from "components/Header";
import "./styles.css";

function App() {

	return (
		<>
			<Header />

			<div className="min-h-screen bg-gray-100">
				<div className="container mx-auto p-4">
					<ProductList />
				</div>

				<Footer />
			</div>
		</>
	);
}

export default App;