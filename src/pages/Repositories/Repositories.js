import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repositories() {

    const [nome, setNome] = useState([]);
    const history = useHistory('');

    useEffect(() => {
        let repositoriesName = localStorage.getItem('repositoriesName');

        if (repositoriesName == null) {
            history.push('/');
        } else {
            repositoriesName = JSON.parse(repositoriesName);
            setNome(repositoriesName);
            localStorage.clear();
        }
    }, [])

    return (
        <S.Container>
            <S.Title>Repositorios</S.Title>
            <S.List>
                {nome.map(e => {
                    return (
                        <S.ListItem>Repositório: {e}</S.ListItem>
                    )
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    );
}