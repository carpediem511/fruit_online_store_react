import Modal from "components/Modal";
import Product from "components/Product/productCardTemplate";
import { useState } from "react";
import uuid4 from "uuid4";
import Header from "components/Header";

function ProductList() {
	//массив с продуктами, проверки
	// Создаем состояние для списка продуктов
	const [productList, setProductList] = useState([
		{
			id: uuid4(),
			image: "bananas.jpeg",
			cost: 10,
			costTotal: 10,
			name: "Бананы",
			count: 1,
			isAdded: false,
		},

		{
			id: uuid4(),
			image: "peach.jpg",
			cost: 15,
			costTotal: 15,
			name: "Персики",
			count: 1,
			isAdded: false,
		},

		{
			id: uuid4(),
			image: "mango.jpg",
			cost: 100,
			costTotal: 100,
			name: "Манго",
			count: 1,
			isAdded: false,
		},

		{
			id: uuid4(),
			image: "pitahaya.jpg",
			cost: 150,
			costTotal: 150,
			name: "Питахайя",
			count: 1,
			isAdded: false,
		},

		{
			id: uuid4(),
			image: "coconut.jpg",
			cost: 100,
			costTotal: 100,
			name: "Кокос",
			count: 1,
			isAdded: false,
		},

		{
			id: uuid4(),
			image: "dzhekfruit.jpg",
			cost: 250,
			costTotal: 250,
			name: "Джекфрут",
			count: 1,
			isAdded: false,
		},

		{
			id: uuid4(),
			image: "inzir.jpg",
			cost: 20,
			costTotal: 20,
			name: "Инжир",
			count: 1,
			isAdded: false,
		},

		{
			id: uuid4(),
			image: "mangostin.jpg",
			cost: 70,
			costTotal: 70,
			name: "Мангостин",
			count: 1,
			isAdded: false,
		},

		{
			id: uuid4(),
			image: "papaya.jpg",
			cost: 350,
			costTotal: 350,
			name: "Папайя",
			count: 1,
			isAdded: false,
		},

		{
			id: uuid4(),
			image: "passion.jpg",
			cost: 90,
			costTotal: 90,
			name: "Маракуйя",
			count: 1,
			isAdded: false,
		},
	]);

	const [modalActive, setModalActive] = useState(false);

	return (
		<>

			<Modal
				active={modalActive}
				setActive={setModalActive}
				productList={productList}
				setProductList={setProductList}
			/>
			<p className="text-teal-600 font-semibold text-2xl text-center mt-12">
				Экзотические фрукты, имеющиеся в наличии:
			</p>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[75%]">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10">
					{productList.map((product) => (
						<Product
							key={product.id}
							product={product}
							productList={productList}
							setProductList={setProductList}
						/>
					))}
				</div>
			</div>
		</>
	);
}

export default ProductList;