import style from './App.module.css'
//import Card from './components/Card.jsx'
import Cards from './components/Cards/Cards.jsx'
//import SearchBar from './components/SearchBar.jsx'
import React, { useState } from 'react';
//import characters from './data.js'
import Nav from './components/Nav/Nav.jsx'
import { Route, Routes } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';


function App () {
  const [characters, setCharacters] = useState([]);

  function onSearch(character){
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
         if (data.name) {
          let existe = characters.find((e)=>e.id===data.id);
          if (existe) {
            alert (data.name+" ("+data.id+") ya está");
          } else {
            setCharacters((oldChars) => [...oldChars, data]);
          }
         } else {
            window.alert('No hay personajes con ese ID');
         }
      });
  }

  function onClose(id){
    console.log(id);
    setCharacters((data)=>{
      return data.filter((e)=> e.id!==id);
    });
  }

  function random() {
    let aleatorio=Math.floor(Math.random()*826); // aleatorio hasta 826
    //console.log("aleatorio= "+ aleatorio)
    return (onSearch(aleatorio));
  }

  return (
    <div className={style.App}>
      <div className={style.container}>
        <Nav onSearch={onSearch}
            random={random}/>  
      </div>
      <Routes>
        <Route path="/home" element=
        {
          <Cards
            characters={characters}
            onClose={onClose}
          />
        }
        />
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:detailId' element={<Detail/>}/>
        
      </Routes>  
    </div>
    
  )
}

export default App


/* <Card
          name={Rick.name}
          species={Rick.species}
          gender={Rick.gender}
          image={Rick.image}
          onClose={() => window.alert('Emulamos que se cierra la card')}
        /> 
    <div>
        /*<SearchBar
          onSearch={(characterID) => window.alert(characterID)}
        />
        </div>    
        */