import styled from "styled-components";

export const ProductCard = styled.div`
  border: 2px solid ${({ theme }) => theme.orange};
  width: 200px;
  height: 375px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background-color: white;
  cursor: pointer;
  
  h1 {
    font-size: 20px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 73px;
  }
`;

export const CardImg = styled.div<{ bg: string }>`
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  max-height: 200px;
  min-height: 200px;
  width: 100%;
`;

export const AddToCartBtn = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  border: none;
  padding: 10px;
  margin-top: 5px;
  border-radius: 7px;
  font-weight: bolder;
  color: white;
  cursor: pointer;
  transition: background .5s ;
  z-index: 99;
  :hover {
    background-color: ${({ theme }) => theme.orange};
  }
`;
