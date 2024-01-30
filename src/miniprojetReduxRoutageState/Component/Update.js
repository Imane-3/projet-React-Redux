import React  from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {updateArticle} from './../action'
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import {BiLogOutCircle} from "react-icons/bi"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function UpdateBooks(){
  const {id}=useParams()
  const dispatch = useDispatch();                    
  const article = useSelector((state) => state.articles.find((u)=>u.id==parseInt(id)));

 
  const [name,setname]=useState(article.name)
  const [nameAuthor,setnameAuthor]=useState(article.nameAuthor)
  const [nbpage,setnbpage]=useState(article.nbpage)
  const [desc,setdesc]=useState(article.description)
  const [img , setimg]=useState(article.img)


  function Update(e)  {
    e.preventDefault()

    
    dispatch(updateArticle(id,name, nameAuthor,nbpage,desc,img));
    toast.success(" the Book has been added  ", {
      position: toast.POSITION.TOP_RIGHT
    })
};

  

  return(
  <div>
    <div class="contai"> 
        <h3 class="h3"> <Link class="link1" to="/home"><img class="imgH" src="/faviconeBooks.png" alt=" " />BOOKS</Link></h3>
        <ul class="nav1" >
              <li><Link class="linklogout" to="/" ><BiLogOutCircle/></Link></li>
              <li><Link class="link" to="/add" >Ajouter Article</Link></li>
              <li><Link class="link" to="/list" >Liste of books </Link></li>
              <li><Link class="link" to="/search" >SEARCH</Link></li>
        </ul>
      </div>
    <img class="imghome" src="/VyuQp6b.jpg" alt=""/>
    <div class="ajoutbook" >
      <form >
        <table>
        <caption class="titreA" align="TOP">        </caption>
        <caption class="titreA" align="TOP">        </caption>
        <caption class="titreA" align="TOP">        </caption>
          <tr>
              <td>
                <input class="inputA" type="text" name="name" id="name" value={name} placeholder="Name of book" onChange={(e)=>setname(e.target.value)} required/>
              </td>
              <td rowSpan={3}><textarea class="desc" id="Description" name="Description" placeholder="Description" value={desc} onChange={(e)=>setdesc(e.target.value)} ></textarea></td>
          </tr>
          <tr>
            <td>
               <input class="inputA"  type="text" name="nameAuthor" id="nameAuthor" placeholder="Name of Author" value={nameAuthor} onChange={(e)=>setnameAuthor(e.target.value)} />
            </td>
          </tr>
          <tr>
            <td>
              <input class="inputA"  type="text" name="nbpage" id="nbpage" placeholder="Number of page" value={nbpage} onChange={(e)=>setnbpage(e.target.value)}  />
            </td>
          </tr>
            </table>
            <input  class="buttonA"   type="submit"  onClick={(e)=>Update(e)}  value="UPDATE" />
            <ToastContainer />
      </form>
    </div>
    
  </div> 
  )
}