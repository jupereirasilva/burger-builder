import React from "react";

import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  let ingredientsList = Object.keys(props.ingredients)
    .map(ingredientKey => {
      return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
        return (
          <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
        );
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (ingredientsList.length === 0) {
    ingredientsList = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientsList}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
