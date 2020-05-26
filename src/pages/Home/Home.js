import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'
import { useHistory } from 'react-router-dom';

function Home() {

    const history = useHistory('');
    const [usuario, setUsuario] = useState('');
    const [erro, setErro] = useState(false);

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(r => {
            const repositories = r.data;
            const repositoriesName = [];

            repositories.map((repository) => {
                repositoriesName.push(repository.name)
            })

            localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
            setErro(false);
            history.push('/repositories');
        }).catch(e => {
            setErro(true);
        })
    }

    return (
        <S.Container>
            <S.Item>
                <S.Input className="usuario" placeholder="Insira seu usuário aqui" value={usuario} onChange={e => setUsuario(e.target.value)} />
                <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
            </S.Item>
            {erro ? <S.Erro>Usuário não encontrado, tente novamente!</S.Erro> : ''}
        </S.Container>
    );
}

export default Home;