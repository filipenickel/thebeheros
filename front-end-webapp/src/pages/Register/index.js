import React from 'react';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css'
import LogoImg from '../../assets/logo.svg'


export default  function Reagister(){
    return(
        <div className="register-container">
            <div className="content">
                <section>
                  <img src={LogoImg} alt='logo' />

                  <h1>Cadastro</h1>
                  <p>Faça seu cadastro, entre na plataforma e ajude pessoas</p>

                  <Link className="back-link" to='/'>
                    <FiArrowLeft size={16} color="#E02041"/>
                    Faça um cadastro agora!
                </Link>
                </section>

                <form action="">
                    <input placeholder='Nome da ONG'/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="WhatsApp"/>

                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width: 80 }}/>
                    </div>
                    <button className="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}