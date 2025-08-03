import { useEffect, useState } from 'react';

const listUserAccount = [
    {
        username: "nguyenvana",
        password: "123456",
        classCode: "CTK42A",
        courses: [
            {
                courseName: "Advanced Mathematics",
                credits: 3,
                professor: "Dr. Nguyen Van B",
                duration: "September 1, 2025 - December 15, 2025"
            },
            {
                courseName: "C++ Programming",
                credits: 4,
                professor: "Ms. Tran Thi C",
                duration: "September 1, 2025 - December 1, 2025"
            }
        ]
    },
    {
        username: "lethib",
        password: "abcdef",
        classCode: "CTK42B",
        courses: [
            {
                courseName: "Database Systems",
                credits: 3,
                professor: "Dr. Pham Van D",
                duration: "September 5, 2025 - December 10, 2025"
            },
            {
                courseName: "Computer Networks",
                credits: 3,
                professor: "Mr. Nguyen Huu E",
                duration: "September 5, 2025 - December 1, 2025"
            }
        ]
    },
    {
        username: "tranvanc",
        password: "qwerty",
        classCode: "CTK42C",
        courses: [
            {
                courseName: "Artificial Intelligence",
                credits: 4,
                professor: "Assoc. Prof. Le Quoc F",
                duration: "October 1, 2025 - December 31, 2025"
            }
        ]
    }
];


function isFormEmptyField(username, password) {
    let isValid = true;

    if (!username) {
        isValid = false;
    }
    if (!password) {
        isValid = false;
    }

    return isValid;

}

export function useLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorUsername, setErrorUsername] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        setIsFormValid(username.trim() !== '' && password.trim() !== '');
        console.log(errorUsername, errorPassword);

    }, [username, password]);

    const handleLogin = () => {
        const isValid = isFormEmptyField(username, password);
        if (isValid) {
            console.log("Login success");
        }
    };

    return {
        username, password,
        setUsername, setPassword,
        errorUsername, errorPassword,
        handleLogin, isFormValid
    };
}
