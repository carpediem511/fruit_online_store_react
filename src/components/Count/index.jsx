const Count = ({ count, increase, decrease, changeValue, id }) => {
  return (
    <div className="flex w-1/12 justify-start">
      <div className="w-10 h-12">
        <input
          type="number"
          onChange={(e) => {
            changeValue(id, +e.target.value);
          }}
          min="1"
          max="100"
          value={count}
          className="input-style bg-slate-200 w-10 h-8 rounded text-center"
        />
      </div>

      <div className="flex flex-col ml-2">
        <button
          type="button"
          onClick={() => {
            increase(id);
          }}
          className="w-4 mb-1"
        >
          <img src="/images/icon-up.png" alt="" />
        </button>

        <button
          type="button"
          onClick={() => {
            decrease(id);
          }}
          className="w-4"
        >
          <img src="/images/icon-down.png" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Count;
