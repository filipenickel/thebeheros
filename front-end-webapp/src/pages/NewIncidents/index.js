import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import './styles.css'
import LogoImg from '../../assets/logo.svg'
import {FiArrowLeft} from 'react-icons/fi'

import api from '../../services/api'

export default function NewIncidents(){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory()

    const ongId = JSON.parse(localStorage.getItem('ongId'));

    async function handleCrateIncident(e){
        e.preventDefault()
        const data = {
            title,
            value,
            description,
        };
        try{
            await api.post('incidents', data, {
                headers:{
                    autorization: ongId,
                }
                
            })
            history.push('/profile')
        }catch(err){
            alert('Erro ao cadastrar novo caso')
        }

    }

    return(
        <div className="new-incidents-container">
        <div className="content">
            <section>
              <img src={LogoImg} alt='logo' />

              <h1>Cadastrar um novo caso</h1>
              <p>Descreve detalhadamente para encontrar um heroi para resolver isso.</p>

              <Link className="back-link" to='/profile'>
                <FiArrowLeft size={16} color="#E02041"/>
                Voltar para home
            </Link>
            </section>

            <form onSubmit={handleCrateIncident}>
                <input 
                    placeholder='Titulo do caso'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                rows="3"
                role='3'
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    placeholder="Valor em reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />

                <button className="button">
                    Cadastrar Caso
                </button>
            </form>
        </div>
    </div>
    )
}