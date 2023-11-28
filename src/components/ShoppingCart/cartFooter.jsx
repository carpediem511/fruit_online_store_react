const CartFooter = ({ total, showFooter }) => {
  if (!showFooter) {
    return null;
  }

  const { count, cost } = total;

  let priceFormatNew = new Intl.NumberFormat();

  return (
    <div className="flex bg-teal-50 py-4 text-emerald-600 mb-6 text-start">
      <div className="w-1/6"></div>
      <div className="w-2/6"></div>
      <div className="w-1/6">{count} шт.</div>
      <div className="w-1/4 text-sm sm:text-md sm:font-semibold lg:text-base">
        {priceFormatNew.format(cost)} рублей
      </div>
    </div>
  );
};

export default CartFooter;
