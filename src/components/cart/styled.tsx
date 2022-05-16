import styled from "styled-components";

export const CartWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.dark};
  padding: 10%;
`;
export const CartContainer = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 50px;
  > div:nth-last-child(1) {
    padding: 0 50px;
    padding-top: 30px;
    font-size: 20px;
   }
`;
