import ButtonOpenClose from "components/Button/buttonOpenClose";
import Cart from "components/ShoppingCart/cart";
import Button from "components/Button/button";
import ButtonSend from "components/Button/ButtonSend";
import SuccessModal from "./SuccessModal";
import { useState } from "react";

const Modal = ({ active, setActive, productList, setProductList }) => {
	const [orderPlaced, setOrderPlaced] = useState(false);

	const isCartEmpty = productList.filter((p) => p.isAdded).length === 0;

	const handleButtonClick = () => {
		setOrderPlaced(true);
		setActive(false);
	};

	const closeModal = () => {
		setOrderPlaced(false);
		setActive(false);
	};

	return (
		<>
			{active && (
				<div className="modal fixed inset-0 flex items-center justify-center bg-opacity-75 bg-gray-500">
					<div
						className="modal-content bg-white w-full max-w-2xl p-4 rounded-lg shadow-lg"
						onClick={(e) => e.stopPropagation()}
					>
						<Cart productList={productList} setProductList={setProductList} />

						<div className="flex justify-center space-x-4 mt-4">
							{!isCartEmpty && <ButtonSend onClick={handleButtonClick} />}
							<ButtonOpenClose handleClick={() => setActive(false)} title="Закрыть" />
						</div>
					</div>
				</div>
			)}
			{orderPlaced && <SuccessModal closeModal={closeModal} />}
		</>
	);
};

export default Modal;