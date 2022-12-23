/* Este componente será una vista que contenga tu información y una explicación acerca de la aplicación!

Esto significa que es completamente libre. Puedes mostrar incluso una foto tuya. Esto le servirá a las personas que vean tu App para conocer al creador 🤠✨.

En la Navbar agrega el link About que dirija al componente About y el link Home para que dirija al
*/
import React from "react";
import style from "./About.module.css"

export default function About(){
    return (
        <div className={style.about}>
            <img src="../img/caricatura foto sdelp.eth.png" alt=""/>
            <h2>Sergio</h2>
            <p>Habia una vez un viejo programador que quizo volver a codear</p>
            <p>La app Rick & Morty nos permite aprender a jugar con React interactuando con lo básico, estílos, estados y ruteo hasta aquí</p>
        </div>
    )
}