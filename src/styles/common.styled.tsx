import styled from "styled-components";

export const Header = styled.h1<{ fontSize: string }>`
  color: ${({ theme }) => theme.orange};
  font-size: ${({ fontSize }) => fontSize};
  border: 2px solid red;
`;

export const Paragraph = styled.p<{ bold?: boolean }>`
  color: black;
  font-family: "Roboto Flex", sans-serif;
  font-weight: ${({ bold }) => (bold ? "bolder" : "normal")};
`;

export const Span = styled.span`
  color: gray;
  font-family: "Dancing Script", cursive;
`;

export const Row = styled.div<{ justifyContent: string; alignItems: string; flexDirectionColumn?: boolean; width?: string }>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-direction: ${({ flexDirectionColumn }) => (flexDirectionColumn ? "column" : "row")};
  width: ${({ width }) => (width ? width : "fit-content")};
 `;

export const ThemedBtn = styled.button<{ width: string }>`
  padding: 10px;
  background-color: ${({ theme }) => theme.yellow};
  border: 0;
  border-radius: 20px;
  font-weight: bolder;
  color: white;
  width: ${({ width }) => width};
  font-size: 23px;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.orange};
  }
`;

export const CircleBtn = styled.button`
  width: 40px;
  height: 40px;
  display: grid;
  place-content: center;
  margin: 0 10px;
  background-color: ${({ theme }) => theme.yellow};
  cursor: pointer;
  font-size: 23px;
  border-radius: 50%;
  i {
    font-size: 18px;
  }
  :hover {
    background-color: ${({ theme }) => theme.orange};
  }
`;
export const Icon = styled.i<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
`;

export const Div = styled.div``;
export const Image = styled.img``;
