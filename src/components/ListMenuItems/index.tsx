import {
  ContainerFlexRow,
  ContainerImage,
  ContainerText,
  CoverImageBack,
  DescriptionText,
  NameText,
  ValueText
} from "./styles";
import {ImageSourcePropType} from "react-native";

export interface ListMenuItemsProps {
  name: string;
  description: string;
  value: number;
  url_image: ImageSourcePropType
}

interface Props {
  data: ListMenuItemsProps;
}

export function ListMenuItems({data}: Props) {
  return (
    <ContainerFlexRow>
      <ContainerText>
        <NameText>{data.name}</NameText>
        <DescriptionText>{data.description}</DescriptionText>
        <ValueText>Preco: {data.value}</ValueText>
      </ContainerText>
      <ContainerImage>
        <CoverImageBack source={{uri: data.url_image}}></CoverImageBack>
      </ContainerImage>
    </ContainerFlexRow>
  )
}
