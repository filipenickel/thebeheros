import React, {useState} from 'react';
import {Link ,useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi'
import './styles.css'
import LogoImg from '../../assets/logo.svg'

import api from '../../services/api'

export default  function Reagister(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')

    const history = useHistory();

   async function handleResgister(e){
        e.preventDefault();
        const data = {
            email,
            name,
            whatsapp,
            uf,
            city,
        }

        //enviando dados
       try {
        const response = await api.post('ong',data)
        alert(`Seu ID de acesso ${response.data.id}`)
        history.push('/');/**Deu tudo certo manda usuario pra pag inicial*/
       } catch(err) {
        alert('erro na cadastro')
       }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                  <img src={LogoImg} alt='logo' />

                  <h1>Cadastro</h1>
                  <p>Faça seu cadastro, entre na plataforma e ajude pessoas</p>

                  <Link className="back-link" to='/'>
                    <FiArrowLeft size={16} color="#E02041"/>
                    Voltar
                </Link>
                </section>

                <form onSubmit={handleResgister}>
                    <input 
                    placeholder='Nome da ONG'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input 
                    type="email" 
                    placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                    placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        />

                        <input 
                        placeholder="UF" 
                        style={{ width: 80 }}
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    </div>
                    <button className="button">
                        Cadastrar
                    </button>
                </form>
            </div>
        </div>
    )
}