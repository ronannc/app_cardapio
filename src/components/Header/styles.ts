import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: black;
  border-bottom-right-radius: 40px;
  margin-bottom: 10px;
`;

export const Balon = styled.View`
  width: 70%;
  margin-top: 60px;
  padding: 30px;
  background-color: darkorange;
  border-bottom-right-radius: 40px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.BACKGROUND};
  font-size: ${({theme}) => theme.FONT_SIZE.LG};
  font-family: ${({theme}) => theme.FONTS_FAMILY.MEDIUM};
`;

export const SubTitle = styled.Text`
  color: ${({theme}) => theme.COLORS.BACKGROUND};
  font-size: ${({theme}) => theme.FONT_SIZE.SM};
  font-family: ${({theme}) => theme.FONTS_FAMILY.REGULAR};
`;
