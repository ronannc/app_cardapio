import {ViewProps} from "react-native";
import {
  Container,
  ContainerBlack,
  ContainerCenter,
  ContainerFlexRow,
  ContainerSafeAreaView,
  CoverImageBack,
  Description,
  Name,
} from "./styles";
import {ListCompanyProps} from "../ListCompany";

interface Props extends ViewProps {
  data: ListCompanyProps
}

export function HeaderMenu({data, ...rest}: Props) {
  return (
    <ContainerSafeAreaView>
      <ContainerBlack/>
      
      <ContainerFlexRow>
        <Container></Container>
        <Container>
          <ContainerCenter>
            <CoverImageBack source={{uri: data.url_logo}}/>
          </ContainerCenter>
        </Container>
        <Container><Description>Das {data.star_hours} ate {data.finish_hours}</Description></Container>
      </ContainerFlexRow>
      
      <ContainerCenter>
        <Name>{data.name}</Name>
        <Description>{data.description}</Description>
      </ContainerCenter>
    </ContainerSafeAreaView>
  
  )
}
