import {ViewProps} from "react-native";
import {Balon, Container, SubTitle, Title} from "./styles";

interface Props extends ViewProps {
  title: string;
  subTitle: string;
}

export function Header({title, subTitle, ...rest}: Props) {
  return (
    <Container>
      <Balon>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </Balon>
    </Container>
  )
}
