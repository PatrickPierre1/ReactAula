import { SyntheticEvent, useCallback, useRef } from 'react';
import s from './style.module.css';
import axios from 'axios';

export default function Login() {

    const refForm = useRef<any>();

    const submitForm = useCallback((e: SyntheticEvent) => {
        e.preventDefault();
        if (refForm.current.checkValidity()) {
            const target = e.target as typeof e.target & {
                email: { value: string },
                password: { value: string }
            }
            
            console.log(target.email.value);
            console.log(target.password.value);

        } else {
            refForm.current.classList.add('was-validated');
        }
    }, []);
    return (
        <>
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