import React, { useState } from 'react';
import './login.css';
import cadastro from '../cadastro/cadastro'

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            username,
            password,
        };

        try {
            const response = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });

            if (response.ok) {
                console.log('Login successful');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="login"> 
            <div className="loginBox"> 
                <div className="loginForm"> 
                    <h1>Oi! Vamos começar?</h1> 
                    <h2>Faça login para entrar na nossa comunidade.</h2> 
                    <hr /> 
                    <form onSubmit={handleSubmit} className="form"> 
                        <div className="formGroup"> 
                            <label htmlFor="username"/> 
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                placeholder='Usuária'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="formGroup"> 
                            <label htmlFor="password"/> 
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder='Senha'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="checkbox"> 
                            <input type="checkbox" name="manterLogin" /> Manter-me logada
                        </div>
                        <button type="submit">Login</button> 
                    </form>
                </div>

                <div className="novoUsuario"> 
                    <a href="#" onClick={cadastro} > Quero me cadastrar! </a> {/* Link para a página de cadastro */}
                </div>

            </div>
        </div>
    );
}

export default Login;
