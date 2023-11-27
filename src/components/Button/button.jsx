function Button(props) {
	const { title } = props;

	return (
		<button
			type="submit"
			className="transition-colors duration-300 bg-purple-300 cursor-pointer text-purple-900 text-lg font-medium md:grow-0 border border-emerald-600 px-2 py-2 rounded-lg hover:text-slate-50 hover:bg-emerald-500"
		>
			{title}
		</button>
	);
}

export default Button;
