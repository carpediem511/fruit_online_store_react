import classNames from "classnames";

const Product = (props) => {
	//шаблон для главной страницы с продуктами
	let { product, productList, setProductList } = props;

	let handleClick = (id) => {
		const copyArrOfProducts = [...productList];

		const stateOfProduct = copyArrOfProducts.find(
			(product) => product.id === id
		);

		stateOfProduct.isAdded = !stateOfProduct.isAdded;

		setProductList(copyArrOfProducts);
	};

	return (
		<div className="bg-purple-200 rounded-lg shadow-md text-purple-900 mt-8 p-4">
			<div className="flex flex-col items-start mb-4">
				<img src={`./images/${product.image}`} className="w-full rounded-md" alt="" />
				<p className="text-xl mt-2">{product.cost} рублей</p>
				<p className="text-2xl font-bold">{product.name}</p>
				<p className="text-md">{product.count} шт.</p>
			</div>

			<div className="flex justify-between items-center">
				<button
					className={classNames(
						"transition-colors duration-300 cursor-pointer text-purple-900 border border-emerald-600 px-2 py-1 rounded-lg hover:text-slate-50",
						{
							"bg-red-600 text-slate-50": product.isAdded,
							"bg-teal-500": !product.isAdded,
						}
					)}
					onClick={() => handleClick(product.id)}
				>
					{product.isAdded ? "Добавлено!" : "Добавить в корзину"}
				</button>
			</div>
		</div>
	);
};

export default Product;