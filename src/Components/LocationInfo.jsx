import styled from 'styled-components';



const Container = styled.div`
    width: 100%;
    height: 5rem;
    background-color: #c8e097;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`
const Name = styled.div`
`
const Type = styled.div`
`
const Dimension = styled.div`
`
const ResidentsAmount= styled.div`
`

const LocationInfo = ({loc}) => {
    return (
        <Container>
            <Name>
                <h2> Nombre de la dimension </h2>
                { loc ? <span> {loc.name} </span> : null }
            </Name>
            <Type>
                <h2>Type</h2>
                { loc ? <span> {loc.type} </span> : null }
            </Type>
            <Dimension>
                <h2>Dimención</h2>
                { loc ? <span> {loc.dimension} </span> : null }
            </Dimension>
            <ResidentsAmount>
                <h2>Residentes</h2>
                { loc ? <span> {loc.residents.length} </span> : null }
            </ResidentsAmount>
        </Container>
    )
}

export default LocationInfo
