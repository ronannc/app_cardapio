import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const NameText = styled.Text`
  background-color: darkorange;
  padding: 10px;
  border-radius: 15px;
  text-align: center;
  color: ${({theme}) => theme.COLORS.BACKGROUND};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  font-family: ${({theme}) => theme.FONTS_FAMILY.REGULAR};
`
