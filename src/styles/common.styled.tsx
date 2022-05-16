import styled from "styled-components";

export const Header = styled.h1<{ fontSize: string }>`
  color: ${({ theme }) => theme.orange};
  font-size: ${({ fontSize }) => fontSize};
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

export const Button = styled.button`
  padding: 10px;
  background-color:${({ theme }) => theme.yellow};;
  border: 0;
  border-radius: 20px;
  font-weight: bolder;
  color: white;
  :hover{
    ${({ theme }) => theme.orange};
  }
`;
export const Icon = styled.i<{ fontSize: string }>`
  font-size: ${({ fontSize }) => fontSize};
`;

export const Div = styled.div``;
export const Image = styled.img``;
