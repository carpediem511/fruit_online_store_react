import Footer from "components/Footer";
import ProductList from "components/Product/productList";
import "./styles.css";

function App() {
	return (
		<div className="min-h-screen bg-gray-100">
			<div className="container mx-auto p-4">
				<ProductList />
			</div>

			<Footer />
		</div>
	);
}

export default App;