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

// export const cartItemsSlice = createSlice({
//   name: "cartItems",
//   initialState,
//   reducers: {
//     onAdd: (state, action) => {
//       //convert string to number to calculate total price
//       const priceWithoutDollarSign = action.payload.price.slice(1);
//       const priceIntegerType = parseInt(priceWithoutDollarSign);
//       // console.log(priceIntegerType)

//       const newItem = action.payload;

//       const existingItem = state.cartItems.find(item => item.id === newItem.id);

//       state.cartItem++;
//       state.totalPrice += priceIntegerType;

//       if (!existingItem) {
//         state.cartItems.push({
//           id: newItem.id,
//           orderQuantity: 1,
//           name: newItem.name,
//           img: newItem.img,
//           title: newItem.title,
//           price: newItem.price,
//           star: newItem.star
//         });
//       } else {
//         existingItem.orderQuantity++;
//         state.totalPrice += priceIntegerType;
//       }

//       //eklenmesi icin gonderilen urunun sepette olup olmadigini kontrol eder
//       // const exist = state.cartItems.find((x) => x.id === action.payload.id);

//       // console.log(JSON.parse(JSON.stringify(state)))

//       // if (exist === undefined) {

//       //   //urunun ozelliklerini tutan bir obj olusturulur
//       //   // const handleProduct = state.allproducts.filter(
//       //   //   (product) => product.id === action.payload.id
//       //   // );
//       //   // //urun ozelliklerinden siparis adedi 1 arttirilir ve state.cartItems guncellenir
//       //   // handleProduct[0].orderQuantity = handleProduct[0].orderQuantity + 1;
//       //   // state.cartItems = [...state.cartItems, handleProduct[0]];
//       //   //navbarda sepetteki urun sayisini tutan deger guncellenir
//       //   state.cartItem = state.cartItem + 1;

//       //   state.totalPrice = state.totalPrice + priceIntegerType;
//       // } else {
//       //   //eger urun halihazirda varsa sepetteki urunler gezilir ve eslesen id bulunur
//       //   for (let i = 0; i < state.cartItems.length; i++) {
//       //     if (state.cartItems[i].id === action.payload.id) {
//       //       state.cartItems[i].orderQuantity = state.cartItems[i].orderQuantity + 1;
//       //       state.cartItem = state.cartItem + 1;
//       //       state.totalPrice = state.totalPrice + priceIntegerType;
//       //     }
//       //   }
//       //   // console.log(JSON.parse(JSON.stringify(state.cartItems)));
//       // }
//       // console.log(state)
//       // console.log(exist)
//     },
//     onDelete: (state, action) => {
//       //convert string to number to calculate total price
//       const priceWithoutDollarSign = action.payload.price.slice(1);
//       const priceIntegerType = parseInt(priceWithoutDollarSign);
//       // console.log(priceIntegerType)

//       //onAdddeki gibi urunun sepette hangi urun oldugu bulunur ve orderQuantitysine gore islem yapilir
//       const exist = state.cartItems.find((x) => x.id === action.payload.id);

//       if (exist.orderQuantity === 1) {
//         state.cartItems = state.cartItems.filter(
//           (item) => item.id !== exist.id
//         );

//         state.cartItem = state.cartItem - 1;
//         state.totalPrice = state.totalPrice - priceIntegerType;

//         //sepette zaten 1 tane bulunan urun silinmek istediginde orderQuantity-si de sıfır olur
//         exist.orderQuantity = exist.orderQuantity - 1
//       }
//       else if (exist.orderQuantity > 1) {
//         exist.orderQuantity = exist.orderQuantity - 1;
//         state.cartItem = state.cartItem - 1;
//         state.totalPrice = state.totalPrice - priceIntegerType;
//       }
//       // else if (exist.orderQuantity === 0) {
//       //   state.orderQuantity = 0;
//       //   state.totalPrice = 0;
//       // }
//     },
//     onRemove: (state, action) => {
//       //convert string to number to calculate total price
//       const priceWithoutDollarSign = action.payload.price.slice(1);
//       const priceIntegerType = parseInt(priceWithoutDollarSign);
//       //console.log(priceIntegerType)

//       //tamamen sepetten kaldirilmasi istenen urunun id-si ile eslesen urun sepettekiler arasindan bulunur
//       const exist = state.cartItems.find((x) => x.id === action.payload.id);
//       console.log(JSON.parse(JSON.stringify(exist)))

//       const newArr = state.cartItems.filter((item) => item.id !== exist.id);
//       state.cartItems = newArr;

//       state.cartItem = state.cartItem - exist.orderQuantity;
//       state.totalPrice = state.totalPrice - (priceIntegerType*exist.orderQuantity);

//       exist.orderQuantity = 0;
//       // console.log(exist);
//       console.log(JSON.parse(JSON.stringify(exist)))
//       console.log(JSON.parse(JSON.stringify(state)))
//     },
//     clearCart:(state) => {
//       for(let i = 0 ; i < state.cartItems.length ; i++){
//         state.cartItems[i].orderQuantity = 0
//       }
//       console.log(JSON.parse(JSON.stringify(state)))
//       // console.log(state)
//       state.cartItems = []
//       state.cartItem = 0
//       state.totalPrice = 0
//       console.log(JSON.parse(JSON.stringify(state)))
//         // console.log(newState)
//         // state = newState
//     //  return newState
//     }
//   },
// });

export const { onAdd, onDelete, onRemove, clearCart } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
