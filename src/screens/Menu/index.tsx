import React, {useEffect, useState} from 'react';
import {Container} from './styles';
import {FlatList, StatusBar} from 'react-native';
import {useRoute} from "@react-navigation/native";
import {MenuParams} from "../../@types/navigation";
import {ListMenu, ListMenuProps} from "../../components/ListMenu";
import {HeaderMenu} from "../../components/HeaderMenu";

export function Menu() {
  const route = useRoute();
  const menuParams = route.params as MenuParams;
  
  const [menu, setMenu] = useState<ListMenuProps[]>([])
  
  useEffect(() => {
    fetch(`http://192.168.0.125:8000/api/company/${menuParams.id}/items-menu`)
    .then(response => response.json())
    .then(data => setMenu(data))
  }, [menu]);
  
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent></StatusBar>
      <HeaderMenu data={menuParams}></HeaderMenu>
      <FlatList
        data={menu}
        renderItem={({item}) => (
          <ListMenu
            data={item}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
