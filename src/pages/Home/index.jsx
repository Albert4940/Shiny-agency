import styled from 'styled-components'
import color from '../../utils/style/colors.js'
import {StyledLink} from '../../utils/style/Atoms.jsx'
import HomeIllustration from '../../assets/home-illustration.svg'
function Home() {

  const HomeWrapper = styled.div`
    display:flex;
    justify-content:center;
  `
  const HomerContainer = styled.div`
    margin: 30px;
    background-color:${color.backgroundLight};
    padding: 60px 90px;
    display:flex;
    flex-direction: row;
    max-width:1200px;
  `
  const LeftCo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    flex:1;
    ${StyledLink}{
      max-width:250px;
      
    }
  `
  const TextHome = styled.h2`
    paddind-bottom:30px;
    max-width:280px;
    line-height:50px;   
  `
  const Illustration = styled.img`
    flex:1;
  `
  // const HomeDiv = styled.div`
  //   margin: 5px 30px;
  //   padding: 40px 5px;
  //   text-align:center;
  //   background-color:${color.backgroundLight};
  // `
  // const ProfilButton = styled.button`
  //   background-color: ${color.primary};
  //   border:none;
  //   padding:10px;
  //   border-radius:29px;
  //   color:white;
  // `
  // const Title = styled.h1`
  //   font-size: 31px;
  //   text-align:center;
  //   padding: 0px 50px;
  // `
  // const TitleSpan = styled.span`
  // color: ${color.primary};
  // `
  // const H3 = styled.h3`
  // color: ${color.primary};
  // `
  // const P = styled.p`
    
  // `
  return (
    <HomeWrapper>
      <HomerContainer>
      <LeftCo>
          <TextHome>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
          </TextHome>          
          <StyledLink to="/survey/1" $isFullLink>
            Faire le test
          </StyledLink>                
      </LeftCo>
      <Illustration alt="Home Illustration" src={HomeIllustration}/>
      </HomerContainer>
    </HomeWrapper>
    // <HomeDiv>
    //   <div>
    //     <Title>
    //     Les compétences dont vous avez besoin : <TitleSpan> UX Design, frontend, backend</TitleSpan>
    //     </Title>
    //     <ProfilButton>Decouvrez nos profils</ProfilButton>
    //     <div style={{"textAlign":"justify"}}>
    //     <P>
    //       <TitleSpan>UX Design</TitleSpan><br/>
    //       hjmshjgfjdsbjsd
    //     </P>
    //     </div>
    //   </div>
    // </HomeDiv>
  )
}

export default Home
