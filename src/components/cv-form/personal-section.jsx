// personal-section.jsx
import "./../../styles/personal-section.css"

export function PersonalSection ({personal, setPersonal}) {

    function handleInputChange (event) {
        setPersonal( personal => ({...personal, [event.target.name]: event.target.value}))
    }
    
    return (
        <div className="personal-section">

            <div className="form-field">
                <label>Full Name: </label>
                <input 
                    type="text"
                    name="name"
                    value={personal.name}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                />
            </div>

            <div className="form-field">
                <label>Phone Number: </label>
                <input 
                    type="text" 
                    name="phone"
                    value={personal.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number" 
                />
            </div>

            <div className="form-field">
                <label>Email: </label>
                <input 
                type="text" 
                name="email" 
                value={personal.email} 
                onChange={handleInputChange}
                placeholder="Email link"
            />
            </div>
            
            <div className="form-field">
                <label>LinkedIn: </label>
                <input 
                    type="text" 
                    name="linkedin" 
                    value={personal.linkedin} 
                    onChange={handleInputChange}
                    placeholder="LinkedIn link" 
                />
                
            </div>

            <div className="form-field">
                <label>Github: </label>
                <input 
                    type="text" 
                    name="github" 
                    value={personal.github} 
                    onChange={handleInputChange}
                    placeholder="github link" 
                />
            </div>
            
        </div>
    )
}