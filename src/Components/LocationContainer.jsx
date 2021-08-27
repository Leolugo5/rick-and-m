import React from "react";
import { useState, useEffect } from "react";


function LocationContainer({imaUrl}) {

    

    useEffect(() => {
        const request = async () => {

            const rndm = Math.floor(Math.random() * 107)
            const link = `https://rickandmortyapi.com/api/character/${rndm}`;
            const response = await fetch(link);
            const data = await response.json();
            console.log(data.image)
            const imaUrl = props.data.image
        }
        request();

    }, [])
    
    return <div>

    Holas
    

    </div>
}
export default LocationContainer