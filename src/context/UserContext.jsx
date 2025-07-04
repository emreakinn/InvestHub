import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [users, setUsers] = useState([])

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState(null);
    const [err, setErr] = useState(null)

    const login = (email, password) => {
        const foundUser = users.find(user => user.email === email && user.password === password);

        if (foundUser) {
            setCurrentUser(foundUser)
            setIsLoggedIn(true)
        } else {
            setErr('Kullanıcı Bulunamadı')
        }
    };

    const logout = () => {
        setCurrentUser(null);
        setIsLoggedIn(false);
    };

    const updateBalance = (newBalance) => {
        const updatedUser = { ...currentUser, balance: newBalance };
        setUsers(users.map(user =>
            user.id === updatedUser.id ? updatedUser : user
        ));
        setCurrentUser(updatedUser);
    };

    return (
        <UserContext.Provider value={{ users, setUsers, isLoggedIn, setIsLoggedIn, currentUser, setCurrentUser, login, logout, err, setErr, username, setUsername, email, setEmail, password, setPassword, updateBalance }}>
            {children}
        </UserContext.Provider>
    );
};
