import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import style from "./Detail.module.css";

  export default function Detail(){

    let { detailId } = useParams();

    const [character, setCharacter] = useState({});
    console.log(detailId)

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
                console.log("-------->", char)
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);

    return (
        <div className={style.detail}>
            <div className={style.txt}>
                <h2>Nombre: {character.name}</h2>
                <h3>Status: {character.status}</h3>
                <h3>Specie: {character.species}</h3>
                <h3>Genero: {character.gender}</h3>
                <h3>Origen: {character.origin?.name}</h3>
            </div>
            <img className={style.imgD} src={character.image} alt={character.name} />
        </div>
    )
  }