import { useState } from 'react'

const Displayh = (props) => {
  return (
    <div><h1>{props.counter}</h1></div>
  )
}

const StatisticLine = (props) => {
  return(
    <>
      <table>
        <tbody>
          <tr>
            <td> {props.text} </td>
            <td> {props.value} </td>
          </tr>
        </tbody>
      </table>
    </>
  )
} 

const Statistics = (props) => {
  if (props.all) {
    return(
      <>

      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value ={props.avg} />
      <StatisticLine text="postive" value ={props.positive} />
      </>
   )}
  else{
    return (
      <div> No feedback given </div>
    )
  }

}

const Button = ({onClick, text}) =><button onClick={onClick}> {text} </button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }
  let total = good + neutral + bad
  let average = (good - bad)/ total
  let positive = (good / total) * 100

  return (
    <div>
      <Displayh counter='give feedback'/>

      <Button onClick={handleGood} text='good'/>
      <Button onClick={handleNeutral} text='neutral'/>     
      <Button onClick={handleBad} text='bad'/>

      <Displayh counter='statistics'/>
      
      <Statistics good={good} neutral={neutral} bad={bad} all={total} avg={average} positive={positive} /> 
    </div>
  )
}
export default App


