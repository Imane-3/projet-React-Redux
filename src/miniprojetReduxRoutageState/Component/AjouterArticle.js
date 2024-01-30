import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {addARTICLE} from './../action'
import Navigation from "./Navigation";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AjouterArticle(){
  const [name,setname]=useState("")
  const [nameAuthor,setnameAuthor]=useState("")
  const [nbpage,setnbpage]=useState("")
  const [desc,setdesc]=useState("")
  const [img , setimg]=useState("imgaucun.webp")

  const dispatch = useDispatch();                    
  const articles = useSelector((state) => state.articles);

  function Ajouter()  {

    const articlestId = articles.length + 1; 
    dispatch(addARTICLE(articlestId,name, nameAuthor,nbpage,desc,img));
    setname('');
    setnameAuthor('');
    setnbpage('');
    setdesc('');
    toast.success(" the Book has been added  ", {
      position: toast.POSITION.TOP_RIGHT
    })
};

  

  return(
  <div>
    <Navigation/>
    <img class="imghome" src="VyuQp6b.jpg" alt=""/>
    <div class="ajoutbook" >
      <form >
        <table>
        <caption class="titreA" align="TOP">share with us your favorite book </caption>
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
            <input  class="buttonA"   type="submit"  onClick={Ajouter}  value="ADD" />
            <ToastContainer />
      </form>
    </div>
    
  </div> 
  )
}