import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {FaShoppingBag ,FaLaptop ,FaLock} from "react-icons/fa"
import { useRef } from "react";
import {BiLogOutCircle , BiSolidUserCircle} from "react-icons/bi"

export default function Home(props){
  const Services=useRef(null)
  const navigate=useNavigate()
  const [color,setColor]=useState(false)

  const changeColor = ()=> {
    
    if(window.scrollY >= 90){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  window.addEventListener('scroll' ,changeColor )

  function scrollToSection(elementRef){
    window.scrollTo({
      top : elementRef.current.offsetTop,
      behavior:"smooth"
    })
  }

  return(
    <div>
       <div class={color ? "contai contai-bg" :"contai"} > 
        <h3 class="h3"> <Link class="link1" to="/home"><img class="imgH" src="faviconeBooks.png" alt=" " />BOOKS</Link></h3>
        <ul class="nav1" >
              <li><Link class="linklogout" to="/" ><BiLogOutCircle/></Link></li>
              <li><Link class="linklogout" to="/profil" ><BiSolidUserCircle/></Link></li>
              <li><Link class="link" to="/add" >Ajouter Article</Link></li>
              <li><Link class="link" to="/list" >Liste of books </Link></li>
              <li><Link class="link" to="/search" >SEARCH</Link></li>
              <li><Link class="link" onClick={()=>scrollToSection(Services)} >Services</Link></li>
              
              
        </ul>
      </div>
      <img  class="imghome" src="home.jpg" alt=""/>
      <h2 class="We">Welcome To Our World!</h2>
      <h1 class="it">IT'S NICE TO MEET YOU </h1>
      <div class="div1" ref={Services}>
            <div>
                <div class="divService">
                    <h2 class="service" >Services</h2>
                    <h3 class="pservice">This place has all the features of a perfect book shop. Throughout 2 stylish as
                         well as peaceful levels, the cozy shop features a broad yet taken into consideration range of modern fiction as well as non-fiction titles, along with a large 
                        selection of worldwide imports. Would you like to check out our Ebook Store Template?.</h3>
                </div>
                <div>
                    <div class="buy">
                      <FaShoppingBag class="icone" />
                        <h4>Buy books</h4>
                        <p class="para">THOUSANDS OF PRODUCTS: Read customer reviews and find the best sellers. Low prices on Bokks.
                             Free delivery (see cond.).</p>
                    </div>
                    <div class="onlineread">
                        <FaLaptop class="icone"/>
                        <h4>Online reading</h4>
                        <p class="para">Great selection of modern and classic books waiting to be discovered. All free and available 
                            in most ereader formats.</p>
                    </div>
                    <div class="web">
                      <FaLock class="icone" />
                        <h4>Web Security</h4>
                        <p class="para">Web security refers to protecting networks and computer systems from
                             damage to or the theft of software, hardware, or data. .</p>
                    </div>
                </div>
            </div>
      </div>
      
    </div>
  )
}