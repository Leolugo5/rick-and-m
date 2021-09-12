import styled from 'styled-components';



const SearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 20%;
    margin-bottom: 50px;
    position: absolute;
    z-index: 3;
`
const Container = styled.div`
    width: 100%;
    height: 15vw;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    z-index: 2;
`
const SearchInput = styled.input`
    margin-bottom: 15px;
    padding: .5rem .2rem;
    font-weight: 500;
    border-style: none;
    border-radius: 5px;
    background-color: #fcf9f9;
    color: black;
`
const SearchButton = styled.button`
    padding: .6rem 2rem;
    font-weight: 500;
    border-style: none;
    border-radius: 5px;
    background-color: #3b3b3b;
    color: white;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    &:hover {
        scale: 1.08;
    }
`




const SearchBox = () => {
    return (
        <Container>
            <Image src='https://wallpapercave.com/wp/wp4030076.png' />
            <SearchContainer>
                <SearchInput placeholder="Buscar ubicación" />
                <SearchButton> Buscar </SearchButton>
            </SearchContainer>
        </Container>
    )
}

export default SearchBox
