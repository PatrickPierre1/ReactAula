import { SyntheticEvent } from 'react';
import s from './style.module.css';

export default function Login() {
    const submitForm = (e: SyntheticEvent) => {
      e.preventDefault();
      console.log('Enviou o formulário');
    }
    return(
        <>
            <div className={s.main}>
                <div className={s.border}>
                    <div className='d-flex flex-column align-items-center'>
                        <h1 className='text-primary'>Login</h1>
                        <p className='text-secondary'>Preencha os campos para logar</p>
                    </div>
                    <hr/>
                    <form className='needs-validation align-items-center ' noValidate action="" onSubmit={submitForm}>
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