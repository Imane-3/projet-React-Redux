// la création de deux créateur d'action 
export const loginUtili = (login,password) => {
  return {
    type: 'LOGIN',
    payload: {login,password}
  };
};

export const addARTICLE = (id, name, nameAuthor, nbpage , description,img) => {
  return {
    type: 'ADD_ARTICLE',
    payload: { id, name,nameAuthor, nbpage, description ,img}
  };
};

export const addUtili = (id, login, password, nom, prenom) => {
  return {
    type: 'ADD_UTILI',
    payload: {id, login, password, nom, prenom }
  };
};
export const updateArticle=(id,name, nameAuthor,nbpage,desc,img)=>{
  return{
    type:'UPDATE_ARTICLE',
    payload:{id,name, nameAuthor,nbpage,desc,img}
  }
}

export const deleteARTICLE = (id) => {
  return {
    type: 'DELETE_ARTICLE',
    payload: { id }
  };
};



export const filterArticle=(name)=>{
  return{
    type:'FILTERE_ARTICLE',
    payload :{name}
  }
}

// export const detailARTICLE = (id) => {
//   return {
//     type: 'DETAIL_ARTICLE',
//     payload: { id }
//   };
// };






