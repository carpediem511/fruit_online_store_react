const CartHeader = () => {
  return (
    <div className="flex justify-around bg-teal-50 py-4 text-lg text-emerald-600 text-start sticky top-0">
      <div className="w-1/6"></div>
      <div className="w-2/6">наименование</div>
      <div className="w-1/6">количество</div>
      <div className="w-1/6">стоимость</div>
      <div className="w-1/6"></div>
    </div>
  );
};

export default CartHeader;
