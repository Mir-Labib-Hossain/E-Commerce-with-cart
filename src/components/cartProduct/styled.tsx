import styled from "styled-components";
import { Icon } from "../../styles/common.styled";

export const CartProductWrapper = styled.div`
  box-shadow: 10px 10px 22px -4px rgba(0, 0, 0, 0.6);
  -webkit-box-shadow: 10px 10px 22px -4px rgba(0, 0, 0, 0.6);
  -moz-box-shadow: 10px 10px 22px -4px rgba(0, 0, 0, 0.6);
  padding: 30px 50px;
  margin-bottom: 30px;
  border-radius: 10px;
  background-color: white;
  position: relative;
 `;

export const CartImage = styled.div<{ bg: string }>`
  background-image: url(${({ bg }) => bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
  width: 100px;
`;

export const DeleteProductIcon = styled(Icon)`
  position: absolute;
  top: -5px;
  right: -3px;
  background-color: ${({ theme }) => theme.red};
  padding: 2px;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: grid;
  place-content: center;
  color: white;
  cursor: pointer;
`;
