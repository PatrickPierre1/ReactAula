import { useEffect } from "react";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Usuarios() {
    const navigate = useNavigate();
    useEffect(() => {
        let lsToken = localStorage.getItem("americanos.token");

        let token: IToken | null = null;

        if (typeof lsToken === 'string') {
            token = JSON.parse(lsToken);
        }

        if (!token || verificaTokenExpirado(token.accessToken)) {
            navigate("/");
        }

        // Fazer busca do banco com axios
        axios.get("http://localhost:3001/users")
            .then((response) => {
                console.log(response.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <LayoutDashboard>
                <div className="d-flex justify-content-between mt-3">
                    <h1>Usuários</h1>
                    <button type="button" className="btn btn-success" onClick={() => {
                        // navigate("")
                    }}>Adicionar</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <th>Patrick Pierre</th>
                            <th>patrick@gmail.com</th>
                            <th>
                                <button
                                    type="button"
                                    className="btn btn-warning text-light"
                                    style={{
                                        "marginRight": 5
                                    }}
                                >Editar</button>

                                <button
                                    type="button"
                                    className="btn btn-danger text-light"
                                >Excluir</button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </LayoutDashboard>
        </>
    )
}