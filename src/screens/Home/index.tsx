import React, {useEffect, useState} from 'react';
import {Container} from './styles';
import {FlatList} from 'react-native';
import {Header} from "../../components/Header";
import {ListCompany, ListCompanyProps} from "../../components/ListCompany";

export function Home() {
    const [company, setCompany] = useState<ListCompanyProps[]>([])
    useEffect(() => {
        fetch('http://192.168.0.72:8000/api/companies')
            .then(response => response.json())
            .then(data => setCompany(data['data']))
    }, []);
    return (
        <Container>
            <Header title={'Title teste pela home'}></Header>
            <FlatList
                data={company}
                keyExtractor={item => item.id}
                renderItem={({item}) => (<ListCompany data={item}/>)}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}
 