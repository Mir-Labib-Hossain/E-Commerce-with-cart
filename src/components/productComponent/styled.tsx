import styled from "styled-components";

export const ProductCard = styled.div`
  width: 200px;
  height: 250px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  span {
    margin-right: 10px;
  }
  > div > div > p {
    font-size: 15px;
/* color: white; */
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 19px;
    margin-right: 3px;
  }
`;

export const CardImg = styled.div<{ bg: string }>`
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px;
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
  transition: background 0.5s;
  z-index: 99;
  :hover {
    background-color: ${({ theme }) => theme.orange};
  }
`;
