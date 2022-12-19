import style from './Card.module.css'

export default function Card(props) {
   return (
      <div className={style.card}>
         <div className={style.imagen}>
            <img src={props.image} alt=""/>
            <button className={style.btn} onClick={props.onClose}>X</button>
            <div className={style.name}>
               <h2>{props.name}</h2>
            </div>
         </div>
         <div className={style.txt}>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2>
         </div>
         
      </div>
   );
}
