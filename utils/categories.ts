import {
  foodStuff,
  vegetables,
  fruits,
  meats,
  seaFood,
  beverages,
  diaryProducts,
} from "../public/assets/dashboard/product";
import { CategoryDataTypes } from "@/types/products";

export const categoriesData: CategoryDataTypes[] = [
  {
    id: 1,
    name: "Food stuff",
    img: foodStuff,
    total: 20,
    bgColor: "#feefea",
  },
  {
    id: 2,
    name: "Vegetables",
    img: vegetables,
    total: 230,
    bgColor: "#fff3ff",
  },
  {
    id: 3,
    name: "Fruits",
    img: fruits,
    total: 10,
    bgColor: "#f2fce4",
  },
  {
    id: 4,
    name: "Meat & Poultry",
    img: meats,
    total: 40,
    bgColor: "#feefea",
  },
  {
    id: 5,
    name: "Sea food",
    img: seaFood,
    total: 23,
    bgColor: "#ecffec",
  },
  {
    id: 6,
    name: "Beverages",
    img: beverages,
    total: 3,
    bgColor: "#fffceb",
  },
  {
    id: 7,
    name: "Diary products",
    img: diaryProducts,
    total: 9,
    bgColor: "#def9ec",
  },
];
