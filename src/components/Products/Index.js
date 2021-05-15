import Cart from "../Cart/Index";
import React from "react";
import { observer } from "mobx-react-lite";
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
import { products_data } from "./Data";

const Products = observer(({ heading }) => {
  return (
    <ProductContainer id="product">
      <ProductHeading>{heading}</ProductHeading>
      <ProductWrapper>
        {products_data.productsData.map((product, index) => {
          return (
            <ProductCard key={index}>
              <ProductImg src={product.img} alt={product.alt} />
              <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                <ProductPrice>{product.price}</ProductPrice>
                <CustomizeList key={index} productIndex={index} />
              </ProductInfo>
            </ProductCard>
          );
        })}

        {/* <DropDownCust DataS={customizeSize} DataSauceCheese={SauceAndCheese} DataVegTs={VegToppings} DataMeatTs={meatToppings} DataExtraF={extraFlavour} /> */}
      </ProductWrapper>
      <ProductButton
        to="Cart"
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={40}
      >
        Go To Cart
      </ProductButton>
      <Cart />
    </ProductContainer>
  );
});

export default Products;
