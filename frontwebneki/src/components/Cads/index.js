import { Link } from "react-router-dom"
import './style.css'

const CardHabilidade = ({ nome, descricao, url, id }) => {

    return (
    <div className="col-12 col-lg-4">
            <div className="col">
                    <div className="card">

                        <img className="card-img-top" src={url} />
                        <div className="card-body">
                            <h5 className="card-title"> {nome}</h5>
                            <h6 className="card-title">{descricao}</h6>
                        </div>

                        <Link className="text-decoration-none  " to={`habilidade/${id}`}>
                            <button className="btn btn-dark mt-3 block">Ver Mais</button>
                        </Link>
                    </div>
            </div>
    </div>

    )
}
export default CardHabilidade;
