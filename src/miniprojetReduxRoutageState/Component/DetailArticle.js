import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import Navigation from "./Navigation";
import { BiArrowBack } from "react-icons/bi"
import { Link } from "react-router-dom";



export default function A1()
{  

  const articles = useSelector((state) => state.articles);

  const {id}=useParams()

  const article = articles.find((article) => article.id==id ) ;
  

  
  
  return (
  <div>
    <Link class="goback" to="/list"><b class="b"><BiArrowBack/></b>go back</Link>
    <div >
      <img class="imgDetail"  src={`/${article.img}`} alt="" />
      <div class="contentD">
        <h1>{article.name}</h1>
        <p><b>Name Author :</b> {article.nameAuthor} </p>
        <p><b>Number page  :</b> {article.nbpage} </p>
        <p><b>Description  :</b> {article.description} </p>
      </div>
     
      
      
    </div>
  </div>
  )
}

