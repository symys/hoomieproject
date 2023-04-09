import React from "react";
import { useLocation } from "react-router-dom";

function Product() {
  const location = useLocation();
  const propsData = location.state;
  return (
    <div>
      <div>
        <div>image</div>
        <div>
          <div>{propsData.title}</div>
          <div>{propsData.name}</div>
          <div>stars</div>
          <div>price</div>
          <div>colors</div>
          <div>add button</div>
        </div>
      </div>
      <div>dimensions</div>
    </div>
  );
}

export default Product;
