import { makeAutoObservable, toJS } from "mobx";

class MainData {
  constructor() {
    makeAutoObservable(this);
  }
  options = [
    {
      id: 1,
      type: "Size",
    },
    {
      id: 2,
      type: "Sauce and Cheese",
    },
    {
      id: 3,
      type: "Veg Toppings",
    },
    {
      id: 4,
      type: "Meat Toppings",
    },
    {
      id: 5,
      type: "Extra Flavour",
    },
  ];
  dataset = [
    {
      id: 1,
      type: "Sizes",
      details: [
        {
          name: "Small",
          price: 12.0,
          quantity: 0,
        },
        {
          name: "Medium",
          price: 16.0,
          quantity: 0,
        },
        {
          name: "Large",
          price: 20.0,
          quantity: 0,
        },
        {
          name: "X-Large",
          price: 24.0,
          quantity: 0,
        },
      ],
    },
    {
      id: 2,
      type: "Sauce and Cheese",
      details: [
        {
          name: "Pasto Sauce",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Barbeque Sauce",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Sweet Chili Sauce",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Dairy Cheese",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Mozzarella Cheese",
          price: 1.5,
          quantity: 0,
        },
      ],
    },
    {
      id: 3,
      type: "Veg Toppings",
      details: [
        {
          name: "Brocollie",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Green Olives",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Bruschetta",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Red Peppers",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Mushrooms",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Green Pappers",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Pineapple",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Plant Based Pepperoni",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Jalepeno Pappers",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Red Onions",
          price: 2.0,
          quantity: 0,
        },
        {
          name: "Sun Dried Tomatoes",
          price: 2.0,
          quantity: 0,
        },
      ],
    },
    {
      id: 4,
      type: "Meat Topppings",
      details: [
        {
          name: "Anchovies",
          price: 3.0,
          quantity: 0,
        },
        {
          name: "Bacon Crumble",
          price: 3.0,
          quantity: 0,
        },
        {
          name: "Grilled Chicken",
          price: 3.0,
          quantity: 0,
        },
        {
          name: "Gound Beef",
          price: 3.0,
          quantity: 0,
        },
        {
          name: "Italian Hame",
          price: 3.0,
          quantity: 0,
        },
      ],
    },
    {
      id: 5,
      type: "Extra Flavour",
      details: [
        {
          name: "Creamy Garlic",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Chili Papers",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Hot Sauce Drizzle",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Italiano Blend",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Olive Oil",
          price: 1.5,
          quantity: 0,
        },
        {
          name: "Barbeque Drizzle",
          price: 1.5,
          quantity: 0,
        },
      ],
    },
  ];
}
export const dataClass = MainData;
window.toJS = toJS;
