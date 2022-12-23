import style from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
   return (
      <div className={style.card}>
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


