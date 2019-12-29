import React, {useState} from 'react';
import styled from 'styled-components'
import { RecordButton, ValuedPill} from './components/buttons';
import { SchemaForm } from './components/forms/schemaForm';

const StyledContainer = styled.div`
  * {
    @import url('https://fonts.googleapis.com/css?family=Nunito:400,600,700&display=swap');
    font-family: 'Nunito', sans-serif;
  }
`

const AppearanceForm = props => {

  const Schema = [
    {type:'text', name:'symptom', label:'Symptom'},
    {type:'range', name:'severity', label:'Severity', min:0,max:10},
    {type:'text', name:'location', label:'Location', hint:'Note down any location within the abdominal area'},
    {type:'text',name:'notes',label:'Notes'}
  ]

  const onChange = formState => {
    console.log(formState)
  }

  const onSubmit = formState => {
    console.log(formState)
  }

  if(props.isCustom){
    return (
      <SchemaForm schema={Schema} onSubmit={onSubmit} onChange={onChange}/>
    )
  } else {
    return ''
  }
}

const App = () => {

  let [state, setState] = useState({formState:'pain',isCustom:false})

  const shortcutSymptom = name => {
    setState({isCustom:false})
    console.log(name)
  }

  const customSymptom = () => {
    setState({isCustom:state.isCustom ? false : true})
    console.log('customSymptom')
  }
  

  return (
    <StyledContainer className='App'>
      <RecordButton/>
      <div>
        <p>One Press Shortcuts</p>
        <ValuedPill onClick={() => shortcutSymptom('burp')} text='+ Burp' value='burp'/>
        <ValuedPill onClick={() => shortcutSymptom('gurgle')} text='+ Gurgle' value='gurgle'/>
        <ValuedPill onClick={() => shortcutSymptom('fart')} text='+ Fart' value='gurgle'/>
        <ValuedPill onClick={() => shortcutSymptom('urgeToPoop')} text='+ Urge To Poo' value='urgeToPoop'/>
      </div>
      <div>
        <p>Descriptive Symptoms (Pain,Twinge, Bloating etc...)</p>
        <ValuedPill onClick={() => customSymptom()} text={`${!state.isCustom ? '+' : '-'} Create Descriptive Symptom`}/>
        <AppearanceForm isCustom={state.isCustom}/>
      </div>
    </StyledContainer>
  )
}

export default App