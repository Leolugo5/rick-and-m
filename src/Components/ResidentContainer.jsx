import styled from 'styled-components';
import { useState, useEffect } from 'react';
import ResidentInfo from './ResidentInfo';



const Container = styled.div`

`

const ResidentContainer = (loc) => {
    const [mainData, setMainData] = useState([])
    const url = `${loc.loc}`
    const fetchData = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setMainData(data.residents)

    }

    useEffect(() => {
        fetchData(url)
    }, [url])


    const [resData, getResidentsInfo] = useState([])

    async function getResidents(mainData) {

        const laUltimaYNosVamos = []
        getResidentsInfo(laUltimaYNosVamos)
        for (let i = 0; i < mainData.length; i++) {
            const element = mainData[i];
            const res = await fetch(element)
            const data = await res.json()
            laUltimaYNosVamos.push(data)
        }
    }
    useEffect(() => {
        getResidents(mainData)
    }, [mainData])
    return (
        <Container>
            <h2>Residentes: </h2>
            {resData? <ResidentInfo resData={resData} />: null}
        </Container>
    )
}

export default ResidentContainer
