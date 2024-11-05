import { useState } from "react"

const initialState = {
    _id: 0,
    boxholder: '', 
    boxSize:''
}

export default function MailboxForm(props){
    
    const [formData, setformData] = useState(initialState)
    
    const handleChange = (event) => {
        event.preventDefault()
        setformData({...formData, [event.target.name]:event.target.value})
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        props.addMailbox(formData)
        setformData(initialState)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="boxholder">Enter a Boxholder: </label>
            <input 
                type="text" 
                name="boxholder" 
                id="boxholder"
                value={formData.boxholder}
                onChange={handleChange}
                />
            <label htmlFor="boxSize">Select a Box Size: </label>
            <select  name="boxSize" id="boxSize" onChange={handleChange}>
                <option value="small">Small</option>
                <option value="medium">medium</option>
                <option value="large">large</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}