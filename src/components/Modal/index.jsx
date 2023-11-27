import ButtonOpenClose from "components/Button/buttonOpenClose";
import Cart from "components/ShoppingCart/cart";
import Button from "components/Button/button";

const Modal = ({ active, setActive, productList, setProductList }) => {
	if (!active) {
		return null;
	}

	const isCartEmpty = productList.filter((p) => p.isAdded).length === 0;

	return (
		<>
			<div className="modal fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-500">
				<div
					className="modal-content bg-white w-full max-w-2xl p-4 rounded-lg shadow-lg"
					onClick={(e) => e.stopPropagation()}
				>
					<Cart productList={productList} setProductList={setProductList} />

					<div className="flex justify-center space-x-4 mt-4">
						{!isCartEmpty && <Button title="Оформить" />}
						<ButtonOpenClose handleClick={() => setActive(false)} title="Закрыть" />
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;