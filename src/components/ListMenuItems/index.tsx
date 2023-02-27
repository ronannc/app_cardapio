import {Container, DescriptionText, NameText, ValueText} from "./styles";

export interface ListMenuItemsProps {
  id: number;
  name: string;
  description: string;
  value: number;
}

interface Props {
  data: ListMenuItemsProps;
}

export function ListMenuItems({data}: Props) {
  console.log(data)
  return (
    <Container>
      <NameText>{data.name}</NameText>
      <DescriptionText>{data.description}</DescriptionText>
      <ValueText>Preco: {data.value}</ValueText>
    </Container>
  )
}
