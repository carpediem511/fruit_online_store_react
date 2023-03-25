import Modal from "components/Modal";
import Product from "components/Product/productCardTemplate";
import { useState } from "react";
import uuid4 from "uuid4";
import Header from "components/Header";

function ProductList() {
  //массив с продуктами, проверки
  // Создаем состояние для списка продуктов
  const [productList, setProductList] = useState([
    {
      id: uuid4(),
      image: "bananas.jpeg",
      cost: 10,
      costTotal: 10,
      name: "Бананы",
      count: 1,
      isAdded: false,
    },

    {
      id: uuid4(),
      image: "peach.jpg",
      cost: 15,
      costTotal: 15,
      name: "Персики",
      count: 1,
      isAdded: false,
    },

    {
      id: uuid4(),
      image: "mango.jpg",
      cost: 100,
      costTotal: 100,
      name: "Манго",
      count: 1,
      isAdded: false,
    },

    {
      id: uuid4(),
      image: "pitahaya.jpg",
      cost: 150,
      costTotal: 150,
      name: "Питахайя",
      count: 1,
      isAdded: false,
    },

    {
      id: uuid4(),
      image: "coconut.jpg",
      cost: 100,
      costTotal: 100,
      name: "Кокос",
      count: 1,
      isAdded: false,
    },

    {
      id: uuid4(),
      image: "dzhekfruit.jpg",
      cost: 250,
      costTotal: 250,
      name: "Джекфрут",
      count: 1,
      isAdded: false,
    },

    {
      id: uuid4(),
      image: "inzir.jpg",
      cost: 20,
      costTotal: 20,
      name: "Инжир",
      count: 1,
      isAdded: false,
    },

    {
      id: uuid4(),
      image: "mangostin.jpg",
      cost: 70,
      costTotal: 70,
      name: "Мангостин",
      count: 1,
      isAdded: false,
    },

    {
      id: uuid4(),
      image: "papaya.jpg",
      cost: 350,
      costTotal: 350,
      name: "Папайя",
      count: 1,
      isAdded: false,
    },

    {
      id: uuid4(),
      image: "passion.jpg",
      cost: 90,
      costTotal: 90,
      name: "Маракуйя",
      count: 1,
      isAdded: false,
    },
  ]);

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Header setModalActive={setModalActive} />
      <Modal
        active={modalActive}
        setActive={setModalActive}
        productList={productList}
      />
      <p className="text-teal-600 decoration-1 underline underline-offset-8 decoration-fuchsia-700 decoration-wavy font-semibold text-2xl text-center mt-12">
        Экзотические фрукты, имеющиеся в наличии:
      </p>

      <div className="mx-20 max-w-screen-lg mx-auto flex justify-center gap-8 max-w-5xl flex-wrap">
        {/* Добавляем проверку на наличие продуктов */}
        {productList.length > 0 &&
          productList.map((product) => {
            return (
              <Product
                key={product.id}
                product={product}
                productList={productList}
                setProductList={setProductList}
              />
            );
          })}
      </div>
    </>
  );
}

export default ProductList;
