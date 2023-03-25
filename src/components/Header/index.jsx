import Button from "components/Button/button";
import ButtonOpenClose from "components/Button/buttonOpenClose";

function Header({ setModalActive }) {
  return (
    <div>
      <div className="bg-teal-100 py-8 text-fuchsia-800 font-semibold text-xl flex">
        <div className="flex max-w-screen-lg mx-auto gap-8 px-15 justify-between">
          <nav className="flex gap-8 justify-between items-center">
            <div>
              <ButtonOpenClose
                title="Посмотреть корзину"
                handleClick={() => setModalActive(true)}
              />
            </div>

            <div>История покупок</div>

            <div>Профиль</div>
          </nav>

          <Button title="Связаться с нами" />
        </div>
      </div>
    </div>
  );
}

export default Header;
