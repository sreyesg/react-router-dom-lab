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
            <input 
                type="text" 
                name="boxSize" 
                id="boxSize"
                value={formData.boxSize}
                onChange={handleChange}
                />
            <button type="submit">Submit</button>
        </form>
    )
}