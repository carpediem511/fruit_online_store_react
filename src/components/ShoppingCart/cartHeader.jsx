const CartHeader = ({ showHeader }) => {
	if (!showHeader) {
		return null;
	}

	return (
		<div className="flex justify-around bg-teal-50 py-4 text-lg text-emerald-600 text-start sticky top-0 items-center">
			<div className="w-1/6"></div>
			<div className="pr-2">наименование</div>
			<div className="py-2">количество</div>
			<div className="w-1/6 pl-4">стоимость</div>
			<div className="w-1/6"></div>
		</div>
	);
};

export default CartHeader;
