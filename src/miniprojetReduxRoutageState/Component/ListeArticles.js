import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {deleteARTICLE} from './../action' // ../ sa veut dire sortie de dossier 
import Navigation from "./Navigation";

export default function ListeArticle(){
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles);

  const divStyle = {
    width: '300px',
    display: 'inline-block' ,
    marginLeft:"50px"
  };

  function supprimer(articleId){
    dispatch(deleteARTICLE(articleId))

  }
  


  return (
  <div class="cont">
      <Navigation/>
      <div class="divC">
      
          {articles.map((element, index) => (
                  <div key={index} style={divStyle}>
                    <div className="content">
                      <img className="imglist" src={element.img} alt="" />
                      <h5>{element.name}</h5>
                      <p>{element.nameAuthor}</p>
                      <p>
                        <Link className="linkdetail" to={`/detail/${element.id}`}> Détail</Link>
                      </p>
                      { element.id  > 9 ? (
                                  <>
                                    <p>
                                      <Link className="linkdetail" to={`/update/${element.id}`}>
                                        Update
                                      </Link>
                                      <br />
                                    </p>
                                    <p>
                                      <button className="butonList" onClick={() => supprimer(element.id)}>
                                        Delete
                                      </button>
                                    </p>
                                  </>
                                ) : ""}
                    </div>
                  </div>
        ))}
          
          
    </div>
  </div>
  )
}
