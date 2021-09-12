import SearchBox from './Components/SearchBox';
import LocationContainer from './Components/LocationContainer';
import styled from 'styled-components';

function App() {


 const MainContainer = styled.div`
  
 `


  return ( 
    <MainContainer>
      <SearchBox />
      <LocationContainer />
    </MainContainer>
  );
}

export default App;
