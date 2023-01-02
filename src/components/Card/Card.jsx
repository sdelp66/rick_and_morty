import style from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFavorite, removeFavorite } from "../../redux/actions";
import { connect } from 'react-redux';
import { useEffect, useState } from "react";

export function Card(props) {
   const [isFav, setIsFav] = useState(false);

   console.log("props.myfav>>>", props.myFavorites);

    useEffect(() => {
       props.myFavorites.forEach((fav) => {
          if (fav.id === props.id) {
             setIsFav(true);
          }
       });
    }, [props.myFavorites]);

   function handleFavorite() {
      //if (isFav) {props.removeFavorite(props.id)};
      // if(!isFav) {
      //    props.addFavorite(props)
      //    console.log("llamo a addFav para : ", props.id)
      // };
      if (isFav) {setIsFav(!isFav);
         props.removeFavorite(props.id)}
         else {setIsFav(!isFav)
            props.addFavorite(props)}
   }

   return (
      <div className={style.card}>
         {
         isFav ? (
            <button onClick={handleFavorite}>❤️</button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )
      }
         <div className={style.imagen}>
         <button className={style.btn} onClick={props.onClose}>X</button>
            <Link to={`/detail/${props.id}`} >
               <img src={props.image} alt=""/>
               <div className={style.name}>
                  <h2>{props.name}</h2>
               </div>
            </Link>
         </div>
         <div className={style.txt}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         
      </div>
   );
}

export function mapStateToProps(state) {

   console.log("state", state);
   console.log("state.myfav>>", state.myFavorites);
   return {
      myFavorites: state.myFavorites
   }
}

export function mapDispatchToProps (dispatch) {

   return {
      addFavorite:(char) => {
         dispatch(addFavorite(char))
      } ,
      removeFavorite: (id) => {
         dispatch(removeFavorite(id))
      }

   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);



