import React from "react";
import { Link } from "react-router-dom";
import {BiLogOutCircle} from "react-icons/bi"


export default function Navigation(){
  

  return(
    <div>
      <div >
      <div class="contai1" > 
      <h3 class="h3"> <Link class="link1" to="/home"><img class="imgH" src="faviconeBooks.png" alt=" " />BOOKS</Link></h3>
        <ul class="nav1" >
            <li><Link class="linklogout" to="/" ><BiLogOutCircle/></Link></li>
              <li><Link class="link" to="/add" >Ajouter Article</Link></li>
              <li><Link class="link" to="/list" >Liste of books </Link></li>
              <li><Link class="link" to="/search" >SEARCH</Link></li>
        </ul>
        
      </div>
            
          </div>
    </div>
  
  )
}