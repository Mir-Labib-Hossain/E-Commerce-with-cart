import styled from "styled-components";

export const CardImg = styled.div<{ bg: string }>`
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
  margin-bottom: 10px;
  max-height: 200px;
  min-height: 200px;
  position: relative;
`;

export const Megnify = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  transition: 0.5s;

  i {
    color: white;
  }
`;

export const ProductCard = styled.div`
  width: 200px;
  height: auto;
  margin: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
 
  /* this is Link */
  a {
    position: relative;
    
    &:hover ${CardImg} {
      -webkit-filter: blur(5px);
      -moz-filter: blur(5px);
      -o-filter: blur(5px);
      -ms-filter: blur(5px);
      filter: blur(5px);
    }
  
    &:hover ${Megnify} {
      opacity: 1;
    }
  }


  span {
    margin-right: 10px;
  }

  > div > a > p {
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

export const AddToCartBtn = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  border: none;
  padding: 10px;
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
