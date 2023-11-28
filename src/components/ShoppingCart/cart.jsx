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
		setProductList((prevProductList) => {
			return prevProductList.map((itemInList) => {
				if (itemInList.id === id) {
					return {
						...itemInList,
						count: itemInList.count + 1,
						costTotal: (itemInList.count + 1) * itemInList.cost,
					};
				}
				return itemInList;
			});
		});
	};

	const decrease = (id) => {
		setProductList((prevProductList) => {
			return prevProductList.map((itemInList) => {
				if (itemInList.id === id) {
					return {
						...itemInList,
						count: itemInList.count - 1 > 1 ? itemInList.count - 1 : 1,
						costTotal: (itemInList.count - 1) * itemInList.cost,
					};
				}
				return itemInList;
			});
		});
	};

	const changeValue = (id, value) => {
		setProductList((prevProductList) => {
			return prevProductList.map((itemInList) => {
				if (itemInList.id === id) {
					return {
						...itemInList,
						count: value,
						costTotal: value * itemInList.cost,
					};
				}
				return itemInList;
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
				changeValue={(id, value) => changeValue(id, value)} // Передаем функцию changeValue
				removeItemFromCart={removeItemFromCart}
			/>
		);
	});

	return (
		<div className="w-full p-4 md:p-6 lg:p-8 xl:p-10">
			<div>
				<CartTitle />
			</div>

			<div>
				<CartHeader showHeader={cart.length > 0} />

				{cart.length === 0 && (
					<div className="m-auto mt-10">
						<img
							src="/images/empty_basket.jpg"
							className="w-1/4 m-auto"
							alt=""
						/>
						<div className="mt-4 text-rose-600 text-2xl font-semibold text-center">
							Ваша корзина пуста!
						</div>
					</div>
				)}

				<div className="mt-4">{foodBasket}</div>
				<CartFooter total={total} showFooter={cart.length > 0} />
			</div>
		</div>
	);
}

export default Cart;