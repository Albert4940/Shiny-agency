import styled from 'styled-components'
import ErrorIllustration from '../../assets/404.svg';
import colors from '../../utils/style/colors'

function Error() {

  const ErrorDiv = styled.div`
    margin: 30px;
    background-color:${colors.backgroundLight};
    display:flex;
    flex-direction: column;
    align-items:center;
    max-width:1200px;
  `
  const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const Illustration = styled.img`
  max-width: 800px;
`

  return (
    <ErrorDiv>
      <ErrorTitle>Oups ...</ErrorTitle>      
      <Illustration alt="404 png" src={ErrorIllustration}/>
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorDiv>
  )
}

export default Error
