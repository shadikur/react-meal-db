import React from "react";
import { useLoaderData } from "react-router-dom";
import ItemsCard from "../ItemsCard/ItemsCard";

const Order = () => {
  const { meals } = useLoaderData();
  return (
    <div className="grid grid-rows-2 md:grid-rows-1 md:grid-cols-12 justify-between max-w-[90%] mx-auto">
      <div className="item col md:col-span-9">
        <div className="grid grid-cols-3">
          {meals.map((meal) => (
            <ItemsCard key={meal.idMeal} meal={meal}></ItemsCard>
          ))}
        </div>
      </div>
      <div className="sidebar col md:col-span-3">Sidebar</div>
    </div>
  );
};

export default Order;
