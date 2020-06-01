import React from 'react'
import {Link} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'
import  './styles.css'
import logoImg from '../../assets/logo.svg';

export default function Profile(){
    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                <span>Bem vindo (Nome da ONG)</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                  <strong>Casos:</strong>
                  <p>Caso teste</p>

                  <strong>Descrição</strong>
                  <p>descrição teste</p>

                  <strong>Valor</strong>
                  <p>R$ 120,00</p>

                  <button type="submit">
                    <FiTrash2 size={18} color="a8a8b3" />
                  </button>
                </li>

                <li>
                  <strong>Casos:</strong>
                  <p>Caso teste</p>

                  <strong>Descrição</strong>
                  <p>descrição teste</p>

                  <strong>Valor</strong>
                  <p>R$ 120,00</p>

                  <button type="submit">
                    <FiTrash2 size={18} color="a8a8b3" />
                  </button>
                </li>

                <li>
                  <strong>Casos:</strong>
                  <p>Caso teste</p>

                  <strong>Descrição</strong>
                  <p>descrição teste</p>

                  <strong>Valor</strong>
                  <p>R$ 120,00</p>

                  <button type="submit">
                    <FiTrash2 size={18} color="a8a8b3" />
                  </button>
                </li>

                <li>
                  <strong>Casos:</strong>
                  <p>Caso teste</p>

                  <strong>Descrição</strong>
                  <p>descrição teste</p>

                  <strong>Valor</strong>
                  <p>R$ 120,00</p>

                  <button type="submit">
                    <FiTrash2 size={18} color="a8a8b3" />
                  </button>
                </li>
            </ul>

           
        </div>
    )
}