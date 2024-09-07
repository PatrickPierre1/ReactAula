import { SyntheticEvent, useCallback, useRef, useState } from 'react';
import s from './style.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { Toast } from '../../components/Toast';

export default function Login() {
    const navigate = useNavigate();
    const refForm = useRef<any>();
    const [isLoading, setIsLoading] = useState(false);
    const [isToast, setIsToast] = useState(false);

    const submitForm = useCallback((e: SyntheticEvent) => {
        e.preventDefault();
        if (refForm.current.checkValidity()) {
            setIsLoading(true);
            const target = e.target as typeof e.target & {
                email: { value: string },
                password: { value: string }
            };
            axios.post("http://localhost:3001/login",
                {
                    email: target.email.value,
                    password: target.password.value
                }
            ).then((response) => {
                localStorage.setItem('americanos.token', JSON.stringify(response.data));
                navigate("/dashboard");
            }).catch((err) => {
                console.log(err);
                setIsLoading(false);
                setIsToast(true);
            })

        } else {
            refForm.current.classList.add('was-validated');
        }
    }, []);
    return (
        <>
            <Toast show={isToast} message='Credenciais inválidas' onClose={() => { setIsToast(false) }} color='danger' />
            <Loading visible={isLoading} />

            <div className={s.main}>
                <div className={s.border}>
                    <div className='d-flex flex-column align-items-center'>
                        <h1 className='text-primary'>Login</h1>
                        <p className='text-secondary'>Preencha os campos para logar</p>
                    </div>
                    <hr />
                    <form className='needs-validation align-items-center ' noValidate action="" onSubmit={submitForm} ref={refForm}>
                        <div className='col-md-12'>
                            <label htmlFor="email" className='form-label'>Email</label>
                            <input required id='email' type="email" className='form-control' placeholder='Digite seu email' />
                            <div className='invalid-feedback'>Por favor digite seu email</div>
                        </div>
                        <div className='col-md-12 mt-1'>
                            <label htmlFor="password" className='form-label'>Senha</label>
                            <input required id='password' type="password" className='form-control' placeholder='Digite sua senha' />
                            <div className='invalid-feedback'>Por favor digite sua senha</div>
                        </div>
                        <div className='col-md-12 mt-3'>
                            <button type='submit' id='botao' className='btn btn-primary w-100'>Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}