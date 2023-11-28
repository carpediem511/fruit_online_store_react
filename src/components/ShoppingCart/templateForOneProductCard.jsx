import ButtonDelete from "components/Button/buttonDelete";
import Count from "components/Count";

const TemplateForOneProductCard = ({
	itemInCart,
	removeItemFromCart,
	increase,
	decrease,
	changeValue,
}) => {
	//шаблон для одного продукта в корзине
	const { image, name, costTotal, count, id } = itemInCart;

	let priceFormat = new Intl.NumberFormat();

	return (
		<div className="flex lg:flex-row items-center justify-around text-start text-lg gap-2">
			<div className="w-1/6"></div>
			<div className="w-full lg:w-1/2 m-auto sm:w-1/3">
				<img
					src={`./images/${image}`}
					className="w-24 lg:w-full sm:w-16"
					alt=""
				/>
			</div>

			<div className="w-full lg:font-medium mt-4 lg:mt-0 lg:pl-4">{name}</div>

			<div className="w-full lg:flex items-center text-center justify-between mt-2 lg:mt-3.5 lg:pl-4 sm:ml-2">
				<Count
					count={count}
					increase={increase}
					decrease={decrease}
					id={id}
					changeValue={changeValue}
				/>
			</div>

			<div className="w-full text-xs text-center lg:mt-0 sm:text-start sm:text-md md:text-base">
				{priceFormat.format(costTotal)} рублей
			</div>

			<ButtonDelete removeItemFromCart={removeItemFromCart} id={id} />
			<div className="w-1/6"></div>
		</div>
	);
};

export default TemplateForOneProductCard;
