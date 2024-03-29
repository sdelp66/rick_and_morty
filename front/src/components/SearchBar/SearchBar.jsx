import React, { useState } from 'react';
import style from "./SearchBar.module.css"

export default function SearchBar(props) {
   const [character,setCharacter] = useState("");

   function handleInput(event){
      setCharacter(event.target.value)

   }

   return (
      <div className={style.searchBar}>
         <input type='text' name='search' placeholder='Tipea Id'
          onChange={(e)=>handleInput(e)} value={character} />
         <button onClick={()=>{props.onSearch(character)}}>Agregar</button>
      </div>
   );
}
