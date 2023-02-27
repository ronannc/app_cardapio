import React, {useEffect, useState} from 'react';
import {Container} from './styles';
import {FlatList, TextInput} from 'react-native';
import {Header} from "../../components/Header";
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
    fetch(`http://192.168.0.72:8000/api/companies?search=${text}`)
    .then(response => response.json())
    .then(data => setCompany(data['data']))
  }, []);
  
  return (
    <Container>
      <Header title={'Seja bem vindo(a)!'} subTitle={'Escolha um menu:'}></Header>
      <TextInput
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
