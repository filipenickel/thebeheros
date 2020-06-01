import React from 'react';
import {Link} from 'react-router-dom'
//Importando icons do https://feathericons.com/
import {FiLogIn} from 'react-icons/fi'
import './styles.css';

import heroesImg from '../../assets/heroes.png'
import LogoImg from '../../assets/logo.svg'

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
            <img src={LogoImg} alt='logo' />

            <form>
                <h1>Faça seu login</h1>

                <input placeholder="Sua ID"/>
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