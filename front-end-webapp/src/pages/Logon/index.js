import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import api from '../../services/api'
//Importando icons do https://feathericons.com/
import {FiLogIn} from 'react-icons/fi'
import './styles.css';

import heroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'

export default function Logon(){
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();
        try{
            const response = await api.post('session',{id})
            
            //Salvando ID e name no localstorage
            ;
            localStorage.setItem('ongName', response.data.name)
            localStorage.setItem('ongId',JSON.stringify(id))
            history.push('/profile')
        }catch (err){
            alert(`Falha no login tente novamente.`)
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
            <img src={LogoImg} alt='logo' />

            <form onSubmit={handleLogin}>
                <h1>Faça seu login</h1>

                <input placeholder="Sua ID"
                value={id}
                onChange={e => setId(e.target.value)}/>
                <button className="button" type="submit">Entrar</button>

            <Link className="back-link" to='/register'>
                    <FiLogIn size={16} color="#E02041"/>
                    Faça um cadastro agora!
                </Link>
                
            </form>
            </section>

            <img src={heroesImg} alt='Heroes' />
        </div>
    )
}