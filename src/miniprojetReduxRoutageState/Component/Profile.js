import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import {BiSolidUserCircle , BiLogOutCircle ,BiArrowBack} from "react-icons/bi"
import { Link } from "react-router-dom";

export default function Profile(props){
  const {user}=props
  const utili = useSelector((state) => state.listeUtulisateur);
  const profileUtilisateur=utili.find((u)=>u.id== user)
  
  return(
    <div>
      <Link class="goback2" to="/home"><b class="b2"><BiArrowBack/></b>go back</Link>
      <img  class="imghome" src="home.jpg" alt=""/>
      <div class="classP"><BiSolidUserCircle/></div>
      <div class="containerProfile">
          <p> <b>ID :</b> {user}</p>
          <p> <b>nom :</b> {profileUtilisateur.nom}</p>
          <p> <b>prenom :</b> {profileUtilisateur.prenom}</p>
          <p> <b>login :</b> {profileUtilisateur.login}</p>
          <p> <b>Password :</b> {profileUtilisateur.password}</p>
      </div>
    </div>
  )
}