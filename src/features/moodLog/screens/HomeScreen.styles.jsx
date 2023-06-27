import styled from "styled-components";

export const Header = styled.View`
  marginLeft: ${({theme}) => theme.space.medium}px;
`;

export const NavOptionsContainer = styled.View`
  flex: 1;
  flexDirection: row;
  flexWrap: wrap;
  justifyContent: center;
  alignContent: center;
`;

export const Card = styled.View`
  borderWidth: 1px;
  width: 150px;
  height: 130px;
  justify-content: center;
  marginLeft: 6px;
  marginRight: 6px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.bg.lighter};
  margin-bottom: ${({theme}) => theme.space.medium}px;
  border-radius: 15px;
`;