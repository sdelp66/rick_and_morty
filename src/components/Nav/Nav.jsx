import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import Random from "../Random/Random";
//import styled from "styled-components";
import style from './Nav.module.css'


export default function Nav(props) {
    return (
        <div className={style.nav}>
            <Random random={props.random} />
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )

} 

