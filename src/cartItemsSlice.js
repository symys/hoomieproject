import { createSlice } from "@reduxjs/toolkit";
import VIMLE from "./images/lowimages/vintageYellowCouch.jpg";
import EKOLSUND from "./images/lowimages/blackPlasticChair.jpg";
import JÄTTEBO from "./images/lowimages/wickerHanmadeWoodenChair.jpg";
import LANDSKRONA from "./images/lowimages/vintageMiniChairandSofa.jpg";
import SÖDERHAMN from "./images/lowimages/orangeBoxFoamSofa.jpg";
import LINNEBÄCK from "./images/lowimages/grayPaddedChair.jpg";
import NOLMYRA from "./images/lowimages/claretRedSofa.jpg";
import FAMMARP from "./images/lowimages/bohemianWickerChair.jpg";
import PARUP from "./images/lowimages/brownWovenChair.jpg";
import KIVIK from "./images/lowimages/brownWickerArmchair.jpg";
import HEMNES from "./images/lowimages/copperWiredAccentChair.jpg";
import ASVANG from "./images/lowimages/grayCouch.jpg";
import AGOTNES from "./images/lowimages/pinksofa.jpg";
import LÖNSET from "./images/lowimages/teakWoodSofa.jpg";
import LYCKSELE from "./images/lowimages/greenWoodenSofa.jpg";



const initialState = {
  allproducts: [
    {
      id: 1,
      orderQuantity: 0,
      name: "Vintage Yellow Couch",
      img: VIMLE,
      title: "VIMLE",
      price: "$92",
      star: "../images/4.png",
    },
    {
      id: 2,
      orderQuantity: 0,
      name: "Black Chair",
      img: EKOLSUND,
      title: "GISTAD",
      price: "$82",
      star: "../images/3.png",
    },
    {
      id: 3,
      orderQuantity: 0,
      name: "Wicker Hanmade Wooden Chair",
      img: JÄTTEBO,
      title: "JÄTTEBO",
      price: "$90",
      star: "../images/4.png",
    },
    {
      id: 4,
      orderQuantity: 0,
      name: "Vintage Mini Chair and Sofa",
      img: LANDSKRONA,
      title: "LANDSKRONA",
      price: "$120",
      star: "../images/5.png",
    },
    {
      id: 5,
      orderQuantity: 0,
      name: "Orange Box Foam Sofa",
      img: SÖDERHAMN,
      title: "SÖDERHAMN",
      price: "$180",
      star: "../images/5.png",
    },
    {
      id: 6,
      orderQuantity: 0,
      name: "Gray Padded Chair",
      img: LINNEBÄCK,
      title: "LINNEBÄCK",
      price: "$100",
      star: "../images/3.png",
    },
    {
      id: 7,
      orderQuantity: 0,
      name: "Claret Red Sofa",
      img: NOLMYRA,
      title: "NOLMYRA",
      price: "$77",
      star: "../images/4.png",
    },
    {
      id: 8,
      orderQuantity: 0,
      name: "Bohemian Wicker Chair",
      img: FAMMARP,
      title: "FAMMARP",
      price: "$43",
      star: "../images/4.png",
    },
    {
      id: 9,
      orderQuantity: 0,
      name: "Brown Woven Chair",
      img: PARUP,
      title: "PARUP",
      price: "$43",
      star: "../images/4.png",
    },
    {
      id: 10,
      orderQuantity: 0,
      name: "Bohemian Wicker Arm Chair",
      img: KIVIK,
      title: "KIVIK",
      price: "$43",
      star: "../images/4.png",
    },
    {
      id: 11,
      orderQuantity: 0,
      name: "Copper Wired Accent Chair",
      img: HEMNES,
      title: "HEMNES",
      price: "$43",
      star: "../images/4.png",
    },
    {
      id: 12,
      orderQuantity: 0,
      name: "Gray Couch",
      img: ASVANG,
      title: "ASVANG",
      price: "$92",
      star: "../images/4.png",
    },
    {
      id: 13,
      orderQuantity: 0,
      name: "Pink Sofa",
      img: AGOTNES,
      title: "AGOTNES",
      price: "$82",
      star: "../images/3.png",
    },
    {
      id: 14,
      orderQuantity: 0,
      name: "Teak Wood Sofa",
      img: LÖNSET,
      title: "LÖNSET",
      price: "$90",
      star: "../images/4.png",
    },
    {
      id: 15,
      orderQuantity: 0,
      name: "Vintage Green Sofa",
      img: LYCKSELE,
      title: "LYCKSELE",
      price: "$120",
      star: "../images/5.png",
    },
  ],
  cartItem: 0,
  cartItems: [],
  totalPrice: 0,
  // toppings: ['pepperoni'],
  // gluten : true
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    // toggleGluten : (state) => {
    //     state.gluten = !state.gluten
    // },
    // addTopping: (state, action) => {
    //     state.toppings = [...state.toppings, action.payload]
    // },
    onAdd: (state, action) => {
      //convert string to number to calculate total price
      const priceWithoutDollarSign = action.payload.price.slice(1);
      const priceIntegerType = parseInt(priceWithoutDollarSign);
      console.log(priceIntegerType)
      // console.log("onadd")
      const exist = state.cartItems.find((x) => x.id === action.payload.id);
      if (!exist) {
        // action.payload.orderQuantity = action.payload.orderQuantity + 1;
        const handleProduct = state.allproducts.filter(
          (product) => product.id === action.payload.id
        );
        handleProduct[0].orderQuantity = handleProduct[0].orderQuantity + 1;
        state.cartItems = [...state.cartItems, handleProduct[0]];
        state.cartItem = state.cartItem + 1;

        state.totalPrice = state.totalPrice + priceIntegerType;
        // console.log("totol:"+state.totalPrice)
        // console.log(state.cartItems);
      } else {
        for (let i = 0; i < state.cartItems.length; i++) {
          if (state.cartItems[i].id === action.payload.id) {
            state.cartItems[i].orderQuantity =
              state.cartItems[i].orderQuantity + 1;
            state.cartItem = state.cartItem + 1;
            state.totalPrice = state.totalPrice + priceIntegerType;
            // console.log("totol:"+state.totalPrice)
          }
        }
        // console.log(JSON.parse(JSON.stringify(state.cartItems)));
      }
      // state.cartItem = state.cartItem + 1;
      // console.log(state.cartItem)
      // state.cartItems = [...state.cartItems, action.payload]
    },
    onDelete: (state, action) => {
      const priceWithoutDollarSign = action.payload.price.slice(1);
      const priceIntegerType = parseInt(priceWithoutDollarSign);
      // console.log(priceIntegerType)
      
      const exist = state.cartItems.find((x) => x.id === action.payload.id);
      if (exist.orderQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== exist.id
        );
        state.cartItem = state.cartItem - 1;
        state.totalPrice = state.totalPrice - priceIntegerType;
      } 
      else if (exist.orderQuantity > 1) {
        exist.orderQuantity = exist.orderQuantity - 1;
        state.cartItem = state.cartItem - 1;
        state.totalPrice = state.totalPrice - priceIntegerType;
      } 
      else if (exist.orderQuantity === 0) {
        state.orderQuantity = 0;
        state.totalPrice = 0;
      }
    },
    onRemove: (state, action) => {
      const priceWithoutDollarSign = action.payload.price.slice(1);
      const priceIntegerType = parseInt(priceWithoutDollarSign);
       console.log(priceIntegerType)

      const exist = state.cartItems.find((x) => x.id === action.payload.id);

      const newArr = state.cartItems.filter((item) => item.id !== exist.id);
      state.cartItems = newArr;
      state.cartItem = state.cartItem - exist.orderQuantity;
      state.totalPrice = state.totalPrice - (priceIntegerType*exist.orderQuantity);
      exist.orderQuantity = 0;
      
      
            // console.log(exist);
    },
  },
});

export const { onAdd, onDelete, onRemove } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
