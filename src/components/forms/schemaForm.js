import React, {useState} from 'react'
import { TextInput, RangeInput } from '../inputs';
import { InputSubmitButton } from '../buttons';

export const SchemaForm = props => {

    let [state, setState] = useState({})

    let schema = props.schema || []

    let onChange = e => {
        setState({...state, [e.target.name]:e.target.value})
        if(props && props.onChange) props.onChange(state)
    }

    let onSubmit = e => {
        e.preventDefault()
        console.log('hmm...')
        if(props && props.onSubmit) props.onSubmit(state)
        setState({})
    }

    return (
        <form onSubmit={onSubmit}>
            {schema.map((item,index) => {
                if(item.type === 'text'){
                    return <TextInput value={state ? state[item.name] || '' : ''} {...item} key={index} onChange={onChange}/>
                } else if (item.type === 'range'){
                    return <RangeInput value={state ? state[item.name] || '' : ''} {...item} key={index} onChange={onChange}/>
                } else {
                    return <TextInput value={state ? state[item.name] || '' : ''} {...item} key={index} onChange={onChange}/>
                }
            })}
            <InputSubmitButton />
        </form>
    )

}