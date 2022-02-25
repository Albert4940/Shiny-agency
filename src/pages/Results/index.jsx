import {useContext} from 'react'
import {SurveyContext} from '../../utils/context'
import {useFetch} from '../../utils/hooks'

function formatQueryParams(answers){
  const answerNumbers = Object.keys(answers);

  return answerNumbers.reduce((previousParams, answerNumber, index)=>{
    const isFirstAnswer = index === 0
    const separator = isFirstAnswer ? '' : '&'
    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumbers]}`
  },'')
}

function Results() {
  const {answers} = useContext(SurveyContext);
  const queryParams = formatQueryParams(answers);
  const {data, isLoading, error} = useFetch(
    `http://localhost:8000/results?${queryParams}`
  )
  console.log("==== data ====", data);
  if(error){
    return <span>Il y a un probleme</span>
  }
  return (
    <div>
      <h1>Les resultats</h1>
      {/* {console.log(data)} */}
    </div>
  )
}

export default Results
