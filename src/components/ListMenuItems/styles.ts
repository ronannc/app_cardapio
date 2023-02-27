import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 5px;
  margin-top: 5px;
  padding-bottom: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: gray;
`;

export const NameText = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  font-family: ${({theme}) => theme.FONTS_FAMILY.MEDIUM};
`
export const DescriptionText = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}) => theme.FONTS_FAMILY.REGULAR};
`
export const ValueText = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}) => theme.FONTS_FAMILY.BOLD};
`
