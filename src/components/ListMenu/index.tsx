import {Container, NameText} from "./styles";
import {FlatList} from "react-native";
import {ListMenuItems, ListMenuItemsProps} from "../ListMenuItems";
import React from "react";

export interface ListMenuProps {
  id: number;
  name: string;
  items_menu: ListMenuItemsProps[]
}

interface Props {
  data: ListMenuProps;
}

export function ListMenu({data}: Props) {
  return (
    <Container>
      <NameText>{data.name}</NameText>
      <FlatList
        data={data.items_menu}
        renderItem={({item}) => (
          <ListMenuItems
            data={item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}
