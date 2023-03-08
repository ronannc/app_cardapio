import styled from 'styled-components/native';

export const ContainerSafeAreaView = styled.SafeAreaView`
  margin-bottom: 10px;
`;

export const ContainerBlack = styled.View`
  background-color: black;
  border-bottom-right-radius: 40px;
  height: 60px;
`;

export const ContainerFlexRow = styled.View`
  flex-direction: row;
  margin: 5px;
`;

export const Container = styled.View`
  flex: 1;
`;

export const ContainerCenter = styled.View`
  align-items: center;
`;

export const CoverImageBack = styled.ImageBackground`
  width: 100px;
  height: 100px;
  border-radius: 80px;
  overflow: hidden;
`;

export const Name = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}) => theme.FONTS_FAMILY.MEDIUM};
`;

export const Description = styled.Text`
  color: ${({theme}) => theme.COLORS.TEXT};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}) => theme.FONTS_FAMILY.REGULAR};
`;
