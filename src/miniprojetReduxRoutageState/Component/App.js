import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AjouterArticle from './AjouterArticle';
import ListeArticles from "./ListeArticles";
import DetailArticle from "./DetailArticle";
import { Provider } from 'react-redux';
import store from '../store';
import Authentification from "./Authentification";
import AjouterUtilisateur from "./AjouterUtilisateur";
import Filtrer from './Filtrerr';
import Update from "./Update"
import Profile from "./Profile"

export default function App() {
  const [user,setuser]=useState()
  const [username,setusername]=useState("")
  const [etat,setEtat]=useState("")


  
  useEffect(()=>{
                  if (username === "") {
                    document.title = "Books";
                  } else {
                    document.title = "Welcome " + username;
                  }
                }
          ,[username])

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Authentification setuser={setuser} setEtat={setEtat} setusername={setusername}/>} />
          <Route path="/home" element={<Home etat={etat} username={username}/>} />
          <Route path="/add" element={<AjouterArticle />} />
          <Route path="/addutili" element={<AjouterUtilisateur />} />
          <Route path="/list" element={<ListeArticles />} />
          <Route path="/detail/:id" element={<DetailArticle />} />
          <Route path="/search" element={<Filtrer/>}/>
          <Route path="/update/:id"  element={<Update/>}/>
          <Route path="/profil" element={<Profile user={user}  />} />
        </Routes>
      </Router>
    </Provider>
  );
}

