import CartTitle from "./cartTitle";
import TemplateForOneProductCard from "./templateForOneProductCard";
import CartHeader from "./cartHeader";
import CartFooter from "./cartFooter";
import { useEffect, useState } from "react";

function Cart({ productList, setProductList }) {
	//шаблон для всей продуктовой корзины

	let [cart, setCart] = useState(productList.filter((p) => p.isAdded));

	const [total, setTotal] = useState({
		cost: cart.reduce((previous, current) => previous + current.costTotal, 0),
		count: cart.reduce((previous, current) => previous + current.count, 0),
	});

	useEffect(() => {
		setTotal({
			cost: cart.reduce((previous, current) => previous + current.costTotal, 0),
			count: cart.reduce((previous, current) => previous + current.count, 0),
		});
	}, [cart]);

	useEffect(() => {

		setCart(productList.filter((p) => p.isAdded))
	}, [productList])

	const removeItemFromCart = (id) => {//удаляет из корзины

		const newArr = [...productList].map((itemInCart) => {

			if (id === itemInCart.id) {

				return { ...itemInCart, isAdded: false }
			}
			return itemInCart

		})
		setProductList(newArr)
	};


	const increase = (id) => {
		setCart((cart) => {
			return cart.map((itemInCart) => {
				if (itemInCart.id === id) {
					return {
						...itemInCart,
						count: itemInCart.count + 1,
						costTotal: (itemInCart.count + 1) * itemInCart.cost,
					};
				}
				return itemInCart;
			});
		});
	};

	const decrease = (id) => {
		setCart((cart) => {
			return cart.map((itemInCart) => {
				if (itemInCart.id === id) {
					return {
						...itemInCart,
						count: itemInCart.count - 1 > 1 ? itemInCart.count - 1 : 1,
						costTotal: (itemInCart.count - 1) * itemInCart.cost,
					};
				}
				return itemInCart;
			});
		});
	};

	const changeValue = (id, value) => {
		setCart((cart) => {
			return cart.map((itemInCart) => {
				if (itemInCart.id === id) {
					return {
						...itemInCart,
						count: value,
						costTotal: value * itemInCart.cost,
					};
				}

				return itemInCart;
			});
		});
	};

	const foodBasket = cart.map((itemInCart) => {
		return (
			<TemplateForOneProductCard
				itemInCart={itemInCart}
				key={itemInCart.id}
				increase={increase}
				decrease={decrease}
				changeValue={changeValue}
				removeItemFromCart={removeItemFromCart}
			/>
		);
	});

	return (
		<div className="w-full">
			<div>
				<CartTitle />
			</div>

			<div>
				<CartHeader />

				{/* Добавляем проверку на пустой список */}
				{cart.length === 0 && (
					<div className="m-auto mt-10">
						<img src="/images/empty_basket.jpg" className="w-1/4 m-auto" alt="" />
						<div className="mt-4 text-rose-600 text-2xl font-semibold text-center">
							Ваша корзина пуста!
						</div>
					</div>
				)}
				<div>{foodBasket}</div>
				<CartFooter total={total} />
			</div>
		</div>
	);
}

export default Cart;
