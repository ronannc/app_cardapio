import React, {useEffect, useState} from 'react';
import {Container} from './styles';
import {FlatList} from 'react-native';
import {useRoute} from "@react-navigation/native";
import {MenuParams} from "../../@types/navigation";
import {ListMenu, ListMenuProps} from "../../components/ListMenu";
import {Header} from "../../components/Header";

export function Menu() {
  const route = useRoute();
  const menuParams = route.params as MenuParams;
  
  const [menu, setMenu] = useState<ListMenuProps[]>([])
  
  useEffect(() => {
    fetch(`http://192.168.0.72:8000/api/company/${menuParams.id}/items-menu`)
    .then(response => response.json())
    .then(data => setMenu(data['data']))
  }, []);
  return (
    <Container>
      <Header title={menuParams.name} subTitle={menuParams.description}></Header>
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
