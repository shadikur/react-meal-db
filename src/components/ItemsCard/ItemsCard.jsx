import React, { useContext } from "react";
import { handleCart } from "../../App";

const ItemsCard = ({ meal }) => {
  const processCart = useContext(handleCart);
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl p-4">
        <figure>
          <img
            src={meal.strMealThumb}
            style={{ width: 300, objectFit: "cover", borderRadius: 10 }}
            alt={meal.strMeal}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{meal.strMeal}</h2>
          <p>Price: ${(parseInt(meal.idMeal) / 1000 - 40).toFixed(2)}</p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() => processCart(meal)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
