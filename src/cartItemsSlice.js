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
import HOPPAS from "./images/lowimages/whiteSofa.jpg"

const initialState = {
  allproducts: [
    {
      id: 1,
      orderQuantity: 0,
      name: "Vintage Yellow Couch",
      img: VIMLE,
      title: "VIMLE",
      price: 92,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 2,
      orderQuantity: 0,
      name: "Black Chair",
      img: EKOLSUND,
      title: "GISTAD",
      price: 82,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 3,
      orderQuantity: 0,
      name: "Wicker Hanmade Wooden Chair",
      img: JÄTTEBO,
      title: "JÄTTEBO",
      price: 90,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 4,
      orderQuantity: 0,
      name: "Vintage Mini Chair and Sofa",
      img: LANDSKRONA,
      title: "LANDSKRONA",
      price: 120,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 5,
      orderQuantity: 0,
      name: "Orange Box Foam Sofa",
      img: SÖDERHAMN,
      title: "SÖDERHAMN",
      price: 180,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 6,
      orderQuantity: 0,
      name: "Gray Padded Chair",
      img: LINNEBÄCK,
      title: "LINNEBÄCK",
      price: 100,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 7,
      orderQuantity: 0,
      name: "Claret Red Sofa",
      img: NOLMYRA,
      title: "NOLMYRA",
      price: 155,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 8,
      orderQuantity: 0,
      name: "Bohemian Wicker Chair",
      img: FAMMARP,
      title: "FAMMARP",
      price: 250,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 9,
      orderQuantity: 0,
      name: "Brown Woven Chair",
      img: PARUP,
      title: "PARUP",
      price: 175,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 10,
      orderQuantity: 0,
      name: "Bohemian Wicker Arm Chair",
      img: KIVIK,
      title: "KIVIK",
      price: 43,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 11,
      orderQuantity: 0,
      name: "Copper Wired Accent Chair",
      img: HEMNES,
      title: "HEMNES",
      price: 43,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 12,
      orderQuantity: 0,
      name: "Gray Couch",
      img: ASVANG,
      title: "ASVANG",
      price: 92,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 13,
      orderQuantity: 0,
      name: "Pink Sofa",
      img: AGOTNES,
      title: "AGOTNES",
      price: 210,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 14,
      orderQuantity: 0,
      name: "Teak Wood Sofa",
      img: LÖNSET,
      title: "LÖNSET",
      price: 90,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 15,
      orderQuantity: 0,
      name: "Vintage Green Sofa",
      img: LYCKSELE,
      title: "LYCKSELE",
      price: 120,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
    {
      id: 16,
      orderQuantity: 0,
      name: "Vintage White Sofa",
      img: HOPPAS,
      title: "HOPPAS",
      price: 189,
      hoverStates: false,
      isHeartClicked: false,
      heartClass: "heart-outline",
    },
  ],
  cartItem: 0,
  cartItems: [],
  totalPrice: 0,
  favorites: [],
  // isThereFavorites : false
};

export const cartItemsSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    onAdd: (state, action) => {
      const newProduct = action.payload;
      const preparedProduct = JSON.parse(JSON.stringify(newProduct));

      state.cartItem += 1;
      state.totalPrice += preparedProduct.price;

      const productIndex = state.cartItems.findIndex(
        (item) => item.id === preparedProduct.id
      );

      if (productIndex !== -1) {
        state.cartItems[productIndex].orderQuantity += 1;
      } else {
        preparedProduct.orderQuantity += 1;
        state.cartItems.push(preparedProduct);
      }

      // console.log(JSON.parse(JSON.stringify(state.cartItems)))
      // console.log(JSON.parse(JSON.stringify(state.cartItem)))
      // console.log(JSON.parse(JSON.stringify(state.totalPrice)))
    },

    onDelete: (state, action) => {
      const incomingProduct = action.payload;
      const preparedProduct = JSON.parse(JSON.stringify(incomingProduct));

      state.cartItem -= 1;
      state.totalPrice -= preparedProduct.price;

      const productIndex = state.cartItems.findIndex(
        (item) => item.id === preparedProduct.id
      );

      if (productIndex !== -1) {
        if (state.cartItems[productIndex].orderQuantity > 1) {
          state.cartItems[productIndex].orderQuantity--;
        } else {
          state.cartItems.splice(productIndex, 1);
        }
      }

      // console.log(JSON.parse(JSON.stringify(state.cartItems)))
      // console.log(JSON.parse(JSON.stringify(state.cartItem)))
      // console.log(JSON.parse(JSON.stringify(state.totalPrice)))
    },
    onRemove: (state, action) => {
      const incomingProduct = action.payload;
      const preparedProduct = JSON.parse(JSON.stringify(incomingProduct));

      const productIndex = state.cartItems.findIndex(
        (item) => item.id === preparedProduct.id
      );

      state.cartItem -= preparedProduct.orderQuantity;
      state.totalPrice -= preparedProduct.price * preparedProduct.orderQuantity;

      if (productIndex !== -1) {
        state.cartItems.splice(productIndex, 1);
      }

      // console.log(JSON.parse(JSON.stringify(state.cartItems)))
      // console.log(JSON.parse(JSON.stringify(state.cartItem)))
      // console.log(JSON.parse(JSON.stringify(state.totalPrice)))
    },
    clearCart: (state) => {
      state.cartItem = 0;
      state.totalPrice = 0;
      state.cartItems.splice(0, state.cartItems.length);

      // console.log(JSON.parse(JSON.stringify(state.cartItems)))
      // console.log(JSON.parse(JSON.stringify(state.cartItem)))
      // console.log(JSON.parse(JSON.stringify(state.totalPrice)))
    },
    handleHeartClick: (state, action) => {
      const newProduct = action.payload;
      const preparedProduct = JSON.parse(JSON.stringify(newProduct));

      const productIndex = state.favorites.findIndex(
        (item) => item.id === preparedProduct.id
      );

      const indexInAllProducts = state.allproducts.findIndex(
        (item) => item.id === preparedProduct.id
      );

      state.allproducts[indexInAllProducts].isHeartClicked =
        !state.allproducts[indexInAllProducts].isHeartClicked;

      // console.log("I'm console from redux: " + state.allproducts[indexInAllProducts].isHeartClicked);
      // state.favorites.length > 0 ? state.isThereFavorites = true : state.isThereFavorites = false


      if (state.allproducts[indexInAllProducts].isHeartClicked) {
        if (productIndex !== -1) {
          state.favorites.splice(productIndex, 1);
          console.log(
            "hi from redux favoriler " + JSON.stringify(state.favorites)
          );
        } else {
          // state.isThereFavorites = true
          state.favorites.push({
            id: preparedProduct.id,
            orderQuantity: preparedProduct.orderQuantity,
            name: preparedProduct.name,
            img: preparedProduct.img,
            title: preparedProduct.title,
            price: preparedProduct.price,
            hoverStates: preparedProduct.hoverStates,
            isHeartClicked: true,
            heartClass: preparedProduct.heartClass,
          });
          

          console.log(
            "hi from redux favoriler " + JSON.stringify(state.favorites)
          );
        }
      }
    },
    // handleMouseEnterance: (state, action) => {
    //   // console.log("hi from redux"+!(action.payload))
    //   const index = action.payload.index;
    //   const heartClickStatus = state.allproducts[index].isHeartClicked;

    //   if (!heartClickStatus) {
    //     state.allproducts[index].hoverStates = !(state.allproducts[index].hoverStates);
    //     state.allproducts[index].hoverStates
    //       ? (state.allproducts[index].heartClass = "heart")
    //       : (state.allproducts[index].heartClass = "heart-outline");
    //   }
    //   else if(heartClickStatus){
    //     state.allproducts[index].hoverStates = true;
    //     state.allproducts[index].heartClass = "heart"
    //   }

    // console.log(JSON.parse(JSON.stringify(state.allproducts)))
    // },
  },
});

export const { onAdd, onDelete, onRemove, clearCart, handleHeartClick } =
  cartItemsSlice.actions;

export default cartItemsSlice.reducer;
