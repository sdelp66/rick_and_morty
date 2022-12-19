import Card from '../Card/Card.jsx';
import style from './Cards.module.css';

export default function Cards(props) {
   const { characters } = props;
   //const caracteres = characters.map((caracter)=><Card caracter={caracter} />)
   return (
      <div className={style.cards}>
         {
            characters.map(({name,species,gender,image,onClose,id},index)=>{
            return <Card 
               key={index}
               name={name}
               species = {species}
               gender={gender}
               image={image}
               onClose = {()=>props.onClose(id)}
               />
            })
         }
      </div>
   )
}
