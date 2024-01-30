import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
// import {loginUtili} from './../action'
import "./style.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Useauthentification(props){
  const {setuser,setEtat ,setusername}=props
  const [login, setlogin]=useState("")
  const [password, setpassword]=useState("")
  const navigate=useNavigate()
   
  // const dispatch = useDispatch(); 
  
  const utili = useSelector((state) => state.listeUtulisateur);

  function vérifier(e){
    e.preventDefault()

    const utilisateurExists=utili.find((u)=>u.login==login && u.password==password)
    if (utilisateurExists){
      navigate("/home")
      setEtat("user")
      setuser(utilisateurExists.id)
      setusername(utilisateurExists.nom+" "+utilisateurExists.prenom)
    }
    else{
      // alert("l'utilisateur n'exists pas")
        toast.error("user does not exist ! If you don't have an account, please create it. ", {
          position: toast.POSITION.TOP_LEFT
        })
        
    }
  }
  // useEffect(()=>{document.title=utili.nom})
  return(
    <div class="cont1">
      <div class="sign">
        <h1 class="h1" >Hello ,Friend</h1>
        <p class="p2">Enter Your personal details and<br/>      start jounney with us </p>
        <Link class="button2" to="/addutili">Signe up</Link> 
      </div>
      
              <img class="img2" src="red.png" alt=""  />
              
              <div class="containerr" >
                <p class="p1">Sign in </p>
                <form>
                  <tr>
                    <td>
                      <input class="input1" type="text" id="login" name="login" placeholder="Login" onChange={(e)=>setlogin(e.target.value)} required/> 
                    </td>
                  </tr>
                  <tr>
                    <td>
                    <input class="input1" type="password"  id="password" name="password" placeholder="password" onChange={(e)=>setpassword(e.target.value)} required />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input class="bouton1" type="submit" onClick={(e)=>vérifier(e)} value="Sign in" />
                    </td>
                  </tr>
                </form>
                <ToastContainer />
              </div>
    </div>
  )
}



// react-toastify est une bibliothèque React qui permet d'afficher des notifications (messages temporaires à l'utilisateur) de manière simple et élégante. 
// Si vous travaillez avec TypeScript, il est important de noter que react-toastify inclut des déclarations de types intégrées. 
// Cela signifie que lorsque vous l'installez dans un projet TypeScript, vous pouvez utiliser ces déclarations de types sans aucune étape supplémentaire.