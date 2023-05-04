import "./styles.css";
import ButtonOpenClose from "components/Button/buttonOpenClose";
import Cart from "components/ShoppingCart/cart";
import Button from "components/Button/button";

const Modal = ({ active, setActive, productList, setProductList }) => {
	if (!active) {
		return null;
	}
	return (
		<>
			<div className={"modal active"}>
				<div className="modal-content" onClick={(e) => e.stopPropagation()}>
					<Cart productList={productList} setProductList={setProductList} />

					<div className="flex justify-center gap-x-10">
						<Button title="Оформить" />

						<ButtonOpenClose
							handleClick={() => setActive(false)}
							title="Закрыть"
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
