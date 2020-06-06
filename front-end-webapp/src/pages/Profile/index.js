import React, { useState,useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi'
import  './styles.css'
import logoImg from '../../assets/logo.svg';

import api from '../../services/api'

export default function Profile(){
  const [incidents, setIncidents] = useState([])

  const ongId = JSON.parse(localStorage.getItem('ongId'));
  const ongName = localStorage.getItem('ongName');
 
  const history = useHistory()
  //userEffect('Atualiza a função sempre que o ['Algo'] mudar dentro das 
  //[] parecido com ComponentDid')
  useEffect(()=>{
    api.get('profile',{ 
      headers:{
        autorization: ongId,
      }
    }).then(response =>{
      setIncidents(response.data);
    })
  }, [ongId]);

  //Função delete Inicidents
  async function handleDeleteIncident(id) {
    try{
      await api.delete(`incidents/${id}`,{
        headers: {
          autorization: ongId,
        }
      });
      //Atualizando a pagina depois de deletar
      setIncidents(incidents.filter(incident => incident.id !== id))
    }catch (err) {
      alert('Ocorreu um erro ao deleter o Caso')
    }
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

    return(
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the hero"/>
                  <span>Bem vindo {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="button">
                    <FiPower size={18} />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
        <div>
            <ul>
                {incidents.map(incident => (
                  <li key={incident.id}>
                  <strong>Casos:</strong>
                <p>{incident.title}</p>

                  <strong>Descrição</strong>
                <p>{incident.description}</p>

                  <strong>Valor</strong>
                <p>{Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL'}).format(incident.value)}</p>

                  <button onClick={() => handleDeleteIncident(incident.id)} type="submit">
                    <FiTrash2 size={18} color="a8a8b3" />
                  </button>
                </li>
                ))}  
            </ul>
            </div>

           
        </div>
    )
}