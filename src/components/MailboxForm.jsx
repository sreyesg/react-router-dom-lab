import { useState } from "react"

const initialState = {
    boxholder: '', 
    boxSize:''
}

export default function MailboxForm(props){
    
    const [formData, setFormData] = useState(initialState)
    
    const handlgeChange = (event) => {
        event.preventDefault()
        setFormData = ({...FormData, [event.target.name]:event.target.value})
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
                value={FormData.boxholder}
                onChange={handlgeChange}
                />
            <label htmlFor="boxSize">Select a Box Size: </label>
            <input 
                type="text" 
                name="boxSize" 
                id="boxSize"
                value={FormData.boxSize}
                onChange={handlgeChange}
                />
            <button type="submit">Submit</button>
        </form>
    )
}