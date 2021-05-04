import React from "react";
import {
  customizeSize,
  SauceAndCheese,
  VegToppings,
  meatToppings,
  extraFlavour,
} from "../DropDown_Cust/Data";
// import Data from "./Data";
import {
  ProductContainer,
  ProductHeading,
  ProductWrapper,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductTitle,
  ProductDesc,
  ProductPrice,
  ProductButton,
} from "./ProductElements";
import CustomizeList from "../DropDown_Cust/index";

const Products = ({ heading, data }) => {
  return (
    <ProductContainer>
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <CustomizeList
                  DataS={customizeSize}
                  DataSauceCheese={SauceAndCheese}
                  DataVegTs={VegToppings}
                  DataMeatTs={meatToppings}
                  DataExtraF={extraFlavour}
                />
                <ProductButton>{product.button}</ProductButton>
              </ProductInfo>
            </ProductCard>
          );
        })}
        {/* <DropDownCust DataS={customizeSize} DataSauceCheese={SauceAndCheese} DataVegTs={VegToppings} DataMeatTs={meatToppings} DataExtraF={extraFlavour} /> */}
      </ProductWrapper>
    </ProductContainer>
  );
};

export default Products;
