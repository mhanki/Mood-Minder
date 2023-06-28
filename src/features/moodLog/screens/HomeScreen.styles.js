import styled from "styled-components";

export const Header = styled.View`
`;

export const NavOptionsContainer = styled.View`
  flex: 1;
  flexDirection: row;
  flexWrap: wrap;
  justifyContent: space-between;
  alignContent: center;
`;

export const Card = styled.View`
  borderWidth: 1px;
  width: 160px;
  height: 120px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.bg.lighter};
  margin-bottom: ${({ theme }) => theme.space.medium}px;
  border-radius: 15px;
`;
