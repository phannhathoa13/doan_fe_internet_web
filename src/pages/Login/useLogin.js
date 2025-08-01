import { useState } from 'react';

export function useLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(`Username : ${username}, Password: ${password}`);
    };

    return {
        username,
        password,
        setUsername,
        setPassword,
        handleLogin,
    };
}