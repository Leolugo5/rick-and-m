import styled from 'styled-components';
import { useState, useEffect } from 'react';
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';


const Container = styled.div`

`

const LocationContainer = () => {

    const [mainData, setMainData] = useState([])
    const url = `https://rickandmortyapi.com/api/location`

    const fetchData = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMainData(data.results)
    }

    useEffect(() => {
        fetchData(url)
    }, [url])
    
    const ran = Math.floor(Math.random() * 19)
    const loc = mainData[ran]
    return (
        <Container>
            { loc ? <LocationInfo loc={loc} /> : null }
            { loc ? <ResidentContainer loc={loc.url} /> : null }
        </Container>
    )
}

export default LocationContainer
