import { useState } from 'react';

const Login = ({onSave}) => {

    const [nomUtilisateur, setNomUtilisateur] = useState('');

    const nomHandler = (e) => {
        setNomUtilisateur(e.target.value);
    }

    const saveNom = () => {
        onSave(nomUtilisateur);
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="text" className="nomDuUser" value={nomUtilisateur} onChange={nomHandler}/>
                <input type="button" value="Login" onClick={saveNom}/>
            </form>
        </div>
        
    )
}

export default Login;