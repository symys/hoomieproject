import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import ReduxToastr from "react-redux-toastr";
import Kommunicate from "@kommunicate/kommunicate-chatbot-plugin";

const root = ReactDOM.createRoot(document.getElementById("root"));
let persistor = persistStore(store);
//redux persist localstorage resetlemek için asagidaki yapilir
persistor.purge();

Kommunicate.init("3e9886febba0e5935d5403c20ab69591b", {
  automaticChatOpenOnNavigation: true,
  popupWidget: true
});

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <ReduxToastr className="text-sm lg:text-base"
          timeOut={3000}
          newestOnTop={false}
          preventDuplicates
          position="bottom-right"
          getState={(state) => state.toastr} // This is the default
          transitionIn="bounceIn"
          transitionOut="bounceOut"
          progressBar
          closeOnToastrClick={true}
        />
        
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
