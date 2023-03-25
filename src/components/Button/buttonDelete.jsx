function ButtonDelete({ removeItemFromCart, id }) {
  return (
    <div className="w-1/6 text-center">
      <button
        type="button"
        onClick={() => {
          removeItemFromCart(id);
        }}
      >
        <img src="/images/icon-close.png" className="w-5" />
      </button>
    </div>
  );
}

export default ButtonDelete;
