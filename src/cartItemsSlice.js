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
      price: 92,
    },
    {
      id: 2,
      orderQuantity: 0,
      name: "Black Chair",
      img: EKOLSUND,
      title: "GISTAD",
      price: 82,
    },
    {
      id: 3,
      orderQuantity: 0,
      name: "Wicker Hanmade Wooden Chair",
      img: JÄTTEBO,
      title: "JÄTTEBO",
      price: 90,
    },
    {
      id: 4,
      orderQuantity: 0,
      name: "Vintage Mini Chair and Sofa",
      img: LANDSKRONA,
      title: "LANDSKRONA",
      price: 120,
    },
    {
      id: 5,
      orderQuantity: 0,
      name: "Orange Box Foam Sofa",
      img: SÖDERHAMN,
      title: "SÖDERHAMN",
      price: 180,
    },
    {
      id: 6,
      orderQuantity: 0,
      name: "Gray Padded Chair",
      img: LINNEBÄCK,
      title: "LINNEBÄCK",
      price: 100,
    },
    {
      id: 7,
      orderQuantity: 0,
      name: "Claret Red Sofa",
      img: NOLMYRA,
      title: "NOLMYRA",
      price: 77,
    },
    {
      id: 8,
      orderQuantity: 0,
      name: "Bohemian Wicker Chair",
      img: FAMMARP,
      title: "FAMMARP",
      price: 43,
    },
    {
      id: 9,
      orderQuantity: 0,
      name: "Brown Woven Chair",
      img: PARUP,
      title: "PARUP",
      price: 43,
    },
    {
      id: 10,
      orderQuantity: 0,
      name: "Bohemian Wicker Arm Chair",
      img: KIVIK,
      title: "KIVIK",
      price: 43,
    },
    {
      id: 11,
      orderQuantity: 0,
      name: "Copper Wired Accent Chair",
      img: HEMNES,
      title: "HEMNES",
      price: 43,
    },
    {
      id: 12,
      orderQuantity: 0,
      name: "Gray Couch",
      img: ASVANG,
      title: "ASVANG",
      price: 92,
    },
    {
      id: 13,
      orderQuantity: 0,
      name: "Pink Sofa",
      img: AGOTNES,
      title: "AGOTNES",
      price: 82,
    },
    {
      id: 14,
      orderQuantity: 0,
      name: "Teak Wood Sofa",
      img: LÖNSET,
      title: "LÖNSET",
      price: 90,
    },
    {
      id: 15,
      orderQuantity: 0,
      name: "Vintage Green Sofa",
      img: LYCKSELE,
      title: "LYCKSELE",
      price: 120,
    },
  ],
  cartItem: 0,
  cartItems: [
    
  ],
  totalPrice: 0,
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    onAdd: (state, action) => {
      const newProduct = action.payload;
      const preparedProduct = JSON.parse(JSON.stringify(newProduct))

      state.cartItem += 1
      state.totalPrice += preparedProduct.price

      var productIndex = state.cartItems.findIndex(item => item.id === preparedProduct.id)
    
      if (productIndex !== -1) {
        state.cartItems[productIndex].orderQuantity += 1;
      } else {
       
        preparedProduct.orderQuantity += 1
        state.cartItems.push(preparedProduct);
      }

      // console.log(JSON.parse(JSON.stringify(state.cartItems)))
      // console.log(JSON.parse(JSON.stringify(state.cartItem)))
      // console.log(JSON.parse(JSON.stringify(state.totalPrice)))
    },

    onDelete : (state, action) => {

      const incomingProduct = action.payload;
      const preparedProduct = JSON.parse(JSON.stringify(incomingProduct))

      state.cartItem -= 1
      state.totalPrice -= preparedProduct.price

      var productIndex = state.cartItems.findIndex(item => item.id === preparedProduct.id)
    
      if (productIndex !== -1) {
        if (state.cartItems[productIndex].orderQuantity > 1) 
        {
          state.cartItems[productIndex].orderQuantity--;
        } 
        else 
        {
          state.cartItems.splice(productIndex, 1);
        }
      }

      // console.log(JSON.parse(JSON.stringify(state.cartItems)))
      // console.log(JSON.parse(JSON.stringify(state.cartItem)))
      // console.log(JSON.parse(JSON.stringify(state.totalPrice)))
    },
    onRemove: (state, action) => {
      const incomingProduct = action.payload;
      const preparedProduct = JSON.parse(JSON.stringify(incomingProduct))

      var productIndex = state.cartItems.findIndex(item => item.id === preparedProduct.id)

      state.cartItem -= preparedProduct.orderQuantity
      state.totalPrice -= (preparedProduct.price*preparedProduct.orderQuantity)
    
      if (productIndex !== -1) {
        state.cartItems.splice(productIndex, 1);
      }

      // console.log(JSON.parse(JSON.stringify(state.cartItems)))
      // console.log(JSON.parse(JSON.stringify(state.cartItem)))
      // console.log(JSON.parse(JSON.stringify(state.totalPrice)))
    },
    clearCart: (state) => {
      state.cartItem = 0
      state.totalPrice = 0
      state.cartItems.splice(0, (state.cartItems.length) )

      // console.log(JSON.parse(JSON.stringify(state.cartItems)))
      // console.log(JSON.parse(JSON.stringify(state.cartItem)))
      // console.log(JSON.parse(JSON.stringify(state.totalPrice)))
    }
  },
});

export const { onAdd, onDelete, onRemove, clearCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
