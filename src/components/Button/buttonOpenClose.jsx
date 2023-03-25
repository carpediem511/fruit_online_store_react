function ButtonOpenClose(props) {
  const { handleClick, title } = props;

  return (
    <button
      onClick={handleClick}
      className="transition-colors duration-300 bg-purple-300 cursor-pointer text-purple-900 text-lg font-medium grow-0 border border-emerald-600 px-2 py-2 rounded-lg hover:text-slate-50 hover:bg-red-500"
    >
      {title}
    </button>
  );
}

export default ButtonOpenClose;
