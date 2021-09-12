import styled from 'styled-components';


const Componente = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`
const Wrapper = styled.div`
    margin: 1rem;
    background-color: #cfcece;
    border-radius: 5px;
`

const PictureDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
`
const Description = styled.div`
    background-color: #7e7e7e;
    padding: 1.8rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`
const TopDescription = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.h2`
    font-weight: 500;
`
const TDContainer = styled.div`
    display: flex;
`
const StatusColor = styled.div`
    
`
const Status = styled.span`
    color: #d1d0d0;
    margin-right: 10px;
`
const ResidentType = styled.span`
    color: #d1d0d0;
`
const Center = styled.div`
    margin-top: 1.5rem;
`
const BottomDescription = styled.div`
    margin-bottom: 1rem;
`
const LKL = styled.span`
    font-weight: 600;
`
const LKLDescription = styled.h3`
    margin-bottom: 15px;
    font-weight: 400;
    color: #d1d0d0;
`
const MoreDescription = styled.div`
    margin-top: 1rem;
`
const ApearIn = styled.h4`
    font-weight: 400;
`


const ResidentInfo = ({ resData }) => {
    console.log("Ya no!!!", resData)
    return (
        <Componente>
            {resData ?
                resData.map((resident) => {
                    return (
                        <Wrapper>
                            <PictureDiv>
                                <Image src={resident.image} />
                            </PictureDiv>
                            <Description>
                                <TopDescription>
                                    <Name> {resident.name} </Name>
                                    <TDContainer>
                                        <StatusColor bc={resident.status} >  </StatusColor>
                                        <Status> {resident.status} </Status>
                                        <span style={{ color: "white", marginRight: "10px" }} >-</span>
                                        <ResidentType> {resident.type} </ResidentType>
                                    </TDContainer>
                                </TopDescription>
                                <Center>
                                    <LKL> Ultima ubicación conocida: </LKL>
                                    <LKLDescription> {resident.location.name} </LKLDescription>
                                </Center>
                                <BottomDescription>
                                    <LKL> Origen: </LKL>
                                    <LKLDescription> {resident.origin.name} </LKLDescription>
                                </BottomDescription>
                                <MoreDescription>
                                    <ApearIn> Aparece en {resident.episode.length} episodios  </ApearIn>
                                </MoreDescription>

                            </Description>
                        </Wrapper>
                    )
                })
                : <h2>Este lugar no tiene residentes, intenta otra dimención</h2>}
        </Componente>
    )
}

export default ResidentInfo