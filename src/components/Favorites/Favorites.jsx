import Card from '../Card/Card.jsx';
import style from './favorites.module.css';
import { connect } from "react-redux";

export function Favorites({myFavorites}) {
    //const { myFavorites} = props;
    console.log("mis favoritos>>>> ",myFavorites);
    //const caracteres = characters.map((caracter)=><Card caracter={caracter} />)
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