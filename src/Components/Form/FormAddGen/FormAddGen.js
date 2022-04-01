import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../../Context/ThemeContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
import './FormAddGen.css';



export default function FormAddGen() {

    const [input, setInput] = useState({
        link: '',
        titre: ''
    })
    const [requestError, setRequestError] = useState(false)

    const navigate = useNavigate()
    const { theme } = useContext(ThemeContext)


    const handleForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/gen', input, { withCredentials: true })
            .then(response => {
                setInput({
                    link: '',
                    titre: ''
                })
                setRequestError(false)
                navigate("/")
            })  
            .catch(() => {
                setRequestError(true)
            });

    }

    const changeInput = (e) => {

        if (e.target.classList.contains('inp-link')) {
            const newObjState = { ...input, link: e.target.value };
            setInput(newObjState);

        } else if (e.target.classList.contains('inp-titre')) {
            const newObjState = { ...input, titre: e.target.value };
            setInput(newObjState);
        }

    }



    return (
        <>
            <form className="container-form" onSubmit={handleForm}>
                <label htmlFor="link">lien du genially</label>
                <input
                    type="text"
                    name="link"
                    id="link"
                    className='inp-link'
                    value={input.link}
                    onInput={changeInput}
                    placeholder="Entrer le lien" />
                <label htmlFor="titre">titre du genially</label>
                <input
                    type="text"
                    name="titre"
                    id="titre"
                    className='inp-titre'
                    value={input.titre}
                    onInput={changeInput}
                    placeholder="Entrer le titre" />
                <button
                    className={theme ? "btn-dark" : "btn-light"}
                    type="submit"
                >ajouter</button>
            </form>
            {requestError && (
                <h2>Error formulaire</h2>
            )}
        </>
    )
}
