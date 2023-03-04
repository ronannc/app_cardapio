import React, {useEffect, useState} from 'react';
import {Container, Search} from './styles';
import {FlatList} from 'react-native';
import {HeaderHome} from "../../components/HeaderHome";
import {ListCompany, ListCompanyProps} from "../../components/ListCompany";
import {useNavigation} from "@react-navigation/native";

export function Home() {
  const [company, setCompany] = useState<ListCompanyProps[]>([])
  const [text, setText] = useState('');
  
  const navigation = useNavigation();
  
  function handleOpenMenu({id, name, description}: ListCompanyProps) {
    navigation.navigate('menu', {id, name, description});
  }
  
  useEffect(() => {
    console.log(text)
    if (text != '') {
      fetch(`http://192.168.0.125:8000/api/companies?search=${text}`)
      .then(response => response.json())
      .then(data => setCompany(data['data']))
    }
  }, [text]);
  
  return (
    <Container>
      <HeaderHome title={'Seja bem vindo(a)!'} subTitle={'Escolha um menu:'}></HeaderHome>
      <Search
        onChangeText={setText}
        placeholder="Pesquise algum menu"
        value={text}
      />
      <FlatList
        data={company}
        renderItem={({item}) => (
          <ListCompany
            data={item}
            onPress={() => handleOpenMenu(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
