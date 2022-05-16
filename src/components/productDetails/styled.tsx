import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
`;

export const ProductImg = styled.div<{ bg: string }>`
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 50%;
`;

export const ProductDetails = styled.div`
  padding: 50px;
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
 