import http from '../../components/http'
import CardHabilidade from '../../components/Cads'
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import './style.css'

const HabilidadesNaoRelacionadas = () => {

    const [habilidades, setHabilidades] = useState([])

    const id = localStorage.getItem('idUsuario');
   
    const habilidadesNaoCadastradas = () => {
      
        const usuario = {
            id: id
        }
         http.post('habilidade/naorelacionadas',usuario)
         .then(response => {
             console.log(response.data)
             setHabilidades(response.data)
         })
             .catch(erro => {
                 console.log(erro)
             })
    }

    useEffect(() => {
        console.log(id)
        habilidadesNaoCadastradas()

    }, [])

    return (
        <div className='tabela '>
            <h2>Habilidades não relacionadas:</h2>
            <div className="btn-group me-2" role="group" aria-label="Second group">
                <Link to="/cadastrohabilidade" className="btn btnHabilidade mt-3 block">Adicionar Habilidades</Link>
            </div>
            <div className="container paraAparecer">
            <div className="row RowTelaInicial">
                {habilidades.map((item) => <CardHabilidade key={item.id} id={item.id} nome={item.nome} url={item.url} descricao={item.descricao} />)}

            </div>
            </div>
        </div>
    )
}
export default HabilidadesNaoRelacionadas