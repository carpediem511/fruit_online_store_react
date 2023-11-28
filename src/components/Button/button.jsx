function Button(props) {
	const { title, onClick } = props;

	return (
		<button
			type="submit"
			onClick={onClick}
			className="transition-colors duration-300 cursor-pointer text-purple-900 text-lg font-medium md:grow-0 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-emerald-200 hover:bg-purple-300 hover:text-white"
		>
			{title}
		</button>
	);
}

export default Button;
