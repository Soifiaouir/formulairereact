import React from 'react';
import './Formulaire.css';
import { useForm } from 'react-hook-form';// useform=utilisation de la bibliotheque react-hook-form
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userReducer';

function Formulaire() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();// register=enregistrement des champs du formulaire
    //handleSubmit=fonction qui gere la soumission du formulaire
    //formState= un objet qui contient lit les erreurs et renvoie les message d'erreur 
    //useDispatch = hook fourni par react-redux qui permets aux composants fonctionnels de se connecterau store Redux et d'envoyer des actions

    const onSubmit = (data) => {
        if (data.age < 18) {
            alert('Vous ne pouvez pas vous inscrire!');
        } else {
            alert('Bienvenue!');
            console.log('données du formulaire:', data);
            // Enregistrer les données dans le store
            dispatch(setUser(data));
        }
    };

    return (
        <div className="Formulaire">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstname", { required: "Ce champ est requis" })} placeholder="Prénom"/>
                {/* register enregistre les données pour les stockers dans le store puis les affichés dans la console */}
                {errors.firstname && <span>{errors.firstname.message}</span>}
                
                <input {...register("lastname", { required: "Ce champ est requis" })} placeholder="Nom"/>
                {errors.lastname && <span>{errors.lastname.message}</span>}
                
                <input {...register("age", { required: "Ce champ est requis", min: { value: 18, message: "Vous devez avoir au moins 18 ans" } })} placeholder="Âge" type="number" min="0"/>
                {errors.age && <span>{errors.age.message}</span>}
                
                <input {...register("email", { required: "Ce champ est requis", pattern: { value: /^\S+@\S+$/i, message: "Email invalide" } })} placeholder="Email" type='email'/>
                {errors.email && <span>{errors.email.message}</span>}
                
                <input {...register("password", { required: "Ce champ est requis", minLength: { value: 8, message: "Le mot de passe doit contenir au moins 8 caractères" } })} placeholder="Mot de passe" type="password" />
                {errors.password && <span>{errors.password.message}</span>}
                
                <input type="submit" className='bouton'/>
            </form>
        </div>
    );
}

export default Formulaire;