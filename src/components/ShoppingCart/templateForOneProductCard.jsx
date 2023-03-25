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
    <div className="flex items-center justify-around text-start text-lg">
      <div className="w-1/6 m-auto pl-2">
        <img src={`./images/${image}`} className="w-24" />
      </div>

      <div className="w-2/6 font-medium">{name}</div>

      <Count
        count={count}
        increase={increase}
        decrease={decrease}
        id={id}
        changeValue={changeValue}
      />

      <div className="w-1/6">{priceFormat.format(costTotal)} рублей</div>

      <ButtonDelete removeItemFromCart={removeItemFromCart} id={id} />
    </div>
  );
};

export default TemplateForOneProductCard;
