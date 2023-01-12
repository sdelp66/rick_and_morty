import Card from '../Card/Card.jsx';
import style from './favorites.module.css';
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from '../../redux/actions.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Favorites({myFavorites}) {
    //const { myFavorites} = props;
    console.log("mis favoritos>>>> ",myFavorites);
    //const caracteres = characters.map((caracter)=><Card caracter={caracter} />)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    ///const [orden,setOrden] = useState(false);


   function despacha(e) {
      console.log("etargetvalue>>",e.target.value)
      dispatch(orderCards(e.target.value));
      //setOrden(!orden);
   }

   function despachaFiltro(e) {
      dispatch(filterCards(e.target.value));
   }

   // useEffect(()=>{
   //    alert("cuando se monta este alert se dispara");
   // },[dispatch])

    return (
       <div className={style.cards}>
          {
             myFavorites.map(({name,species,gender,image,id},index)=>{
                console.log(id)
             return <Card 
                id={id}
                key={index}
                name={name}
                species = {species}
                gender={gender}
                image={image}
                />
             })
          }
          <div>
            <select name="" id="" onChange={despacha}>
               <option value="Ascendente">Ascendente</option>
               <option value="Descendente">Descendente</option>
            </select>
            <select name="" id="" onChange={despachaFiltro}>
               <option value="Male">Male</option>
               <option value="Female">Female</option>
               <option value="Genderless">Genderless</option>
               <option value="unknown">unknown</option>
            </select>
          </div>
       </div>
    )
 }

 export function mapStateToProps(state) {
    console.log("state - Favoritos", state.myFavorites)
    return { 
        myFavorites: state.myFavorites
    }
 }

 export default connect(mapStateToProps,null)(Favorites);