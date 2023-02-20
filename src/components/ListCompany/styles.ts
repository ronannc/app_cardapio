import styled from 'styled-components/native';

export const ContainerTouchable = styled.TouchableOpacity`
  margin-right: 5px;
  margin-bottom: 5px;
`;

export const CoverImageBack = styled.ImageBackground`
  width: 100%;
  height: 240px;
  justify-content: flex-end;
  border-radius: 8px;
  overflow: hidden;
`;
export const Footer = styled.View`
  width: 100%;
  height: 80px;
  padding: 16px;
  justify-content: flex-end;
`

export const NameText = styled.Text`
  color: ${({theme}) => theme.COLORS.BACKGROUND};
  font-size: ${({theme}) => theme.FONT_SIZE.MD};
  font-family: ${({theme}) => theme.FONTS_FAMILY.REGULAR};
`

export const DescriptionText = styled.Text`
  color: ${({theme}) => theme.COLORS.BACKGROUND};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}) => theme.FONTS_FAMILY.MEDIUM};
`
