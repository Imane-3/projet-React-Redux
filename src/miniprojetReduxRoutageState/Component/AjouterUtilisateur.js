import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addUtili} from './../action'
import "./style.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AjouterArticle(){
  const [id,setid]=useState("")
  const [nom,setnom]=useState("")
  const [prenom,setprenom]=useState("")
  const [login,setlogin]=useState()
  const [password,setpassword]=useState("")

  const dispatch = useDispatch(); 
  const utili = useSelector((state) => state.listeUtulisateur);

  function Ajouter(e)  {
    e.preventDefault()
    if (!prenom.trim() || !nom.trim() || !login.trim() || !password.trim()) {
      toast.error("Must fill in all fields", {
        position: toast.POSITION.TOP_RIGHT
      });
    }
     else{
        const utilitId = utili.length + 1; 
        dispatch(addUtili(utilitId, login, password, nom, prenom));
        setid('');
        setlogin('');
        setprenom('');
        setnom('');
        setpassword('');
        toast.success(" the user has been added  ", {
          position: toast.POSITION.TOP_RIGHT
        })
        

     }
    
     

};
  return(
  <div>
    <div class="sign1">
        <h1 class="h1" >Welcome Back!</h1>
        <p class="p2">To keep connected with us please <br/> login with your personal info </p>
        <Link class="button2" to="/">Signe in</Link> 
    </div>
      <img class="img1" src="red.png" alt=""  />

    <div>
        <div class="containerr1" >
        <p class="p3">Create Account </p>
        <from>
              <tr>
                <td>
                  <input class="input1"  type="text" placeholder="Prenom " name="Prenom" id="Prenom" value={prenom} onChange={(e)=>setprenom(e.target.value)} required />
                </td>
              </tr>
              <tr>
                <td>
                  <input class="input1"  type="text" placeholder="nom " name="nom" id="nom" value={nom} onChange={(e)=>setnom(e.target.value)} required/>
                </td>
              </tr>
              <tr>
                <td>
                  <input class="input1"  type="text" placeholder="create your login" name="login" id="login" value={login} onChange={(e)=>setlogin(e.target.value)} required />
                </td>
              </tr>
              <tr>
                <td>
                  <input class="input1"  type="password" placeholder="create your password" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)}  />
                </td>
              </tr>
              <tr>
                <td>
                  <input  class="bouton1" type="submit"  onClick={(e)=>Ajouter(e)}  value="Sign up" />
                </td>
              </tr>
            </from>  
            <ToastContainer />   
        </div>      
    <div/>
  </div>
  </div>     
  )
}