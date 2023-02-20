import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  height: auto;
  margin-top: 74px;
  margin-bottom: 48px;
  color: ${({theme}) => theme.COLORS.TEXT};
  font-size: ${({theme}) => theme.FONT_SIZE.LG};
  font-family: ${({theme}) => theme.FONTS_FAMILY.BOLD};
`;
