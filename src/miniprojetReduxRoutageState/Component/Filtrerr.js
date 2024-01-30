import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterArticle } from "../action";
import { Link } from "react-router-dom";
import {FaSearch} from "react-icons/fa"
import {BiLogOutCircle } from "react-icons/bi"

export default function Filter() {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const articlesf = useSelector((state) => state.articlefilter);
  const [color,setColor]=useState(false)

  const divStyle = {
    width: '300px',
    display: 'inline-block' ,
    marginLeft:"-40px"
  };

  function filtrer() {
    dispatch(filterArticle(name));
  }
  const changeColor = ()=> {
    
    if(window.scrollY >= 90){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll' ,changeColor )


  return (
    <div>
      <div class={color ? "contai contai-bg" :"contai"} > 
      <h3 class="h3"> <Link class="link1" to="/home"><img class="imgH" src="faviconeBooks.png" alt=" " />BOOKS</Link></h3>
        <ul class="nav1" >
              <li><Link class="linklogout" to="/" ><BiLogOutCircle/></Link></li>
              <li><Link class="link" to="/add" >Ajouter Article</Link></li>
              <li><Link class="link" to="/list" >Liste of books </Link></li>
              <li><Link class="link" to="/search" >SEARCH</Link></li>
        </ul>
      </div>
      <img  class="imgFILTER" src="searchim.png" alt=""/>
      <div class="searchC">
        <input class="searchinput" type="text" name="name" id="name" placeholder="name of book" value={name}  onChange={(e) => setName(e.target.value)} />
        <button class="searchbar" onClick={filtrer} ><FaSearch/></button>
        </div>
      <div class="divC1">
      <p class="psearch">Your Search Resultat :</p>
          {articlesf && articlesf.length > 0 ? (
            articlesf.map((element,index) => (
              <div style={divStyle}>
                       
                          <div class="content1">
                            <img class="imglist" src={element.img} alt=""  />
                              <h5>{element.name}</h5>
                                <p>{element.nameAuthor}</p>
                                <p>
                                  <Link class="linkdetail" to={"/detail/"+element.id}  >Détail</Link><br/>
                                </p>
                          </div>  
                  </div>
            ))) :
            
            (<p class="psearch"> no result ! </p>)
          }
        </div>
    </div>
  );
}