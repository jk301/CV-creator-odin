// educational-section.jsx
import "./../../styles/education-section.css"


export function EducationSection ({ education, setEducation }) {

    function handleInputChange (event, index) {
        return setEducation(previous => previous.map((entry, i) => 
            i === index 
                ? {...entry, [event.target.name]: event.target.value}
                : entry
            ))
    }

    function addEntry () {
        return setEducation(previous => [...previous, {inst: "", degree: "", date: ""}])
    }

    function removeEntry (index) {
        return setEducation(previous => previous.filter((_, i) => i !== index))
    }

    return (
        <div className="education-section">
            <div className="education-items">

                {education.map((entry, index) => (
                    <div className="education-entry" key={index}>

                        <div className="form-field">
                            <label>Institution</label>
                            <input 
                                type="text"
                                name="inst"
                                value={entry.inst}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="University / School"
                            />
                        </div>

                        <div className="form-field">
                        <label>Degree</label>
                            <input 
                                type="text"
                                name="degree"
                                value={entry.degree}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="ex - computer science"
                            />
                        </div>

                        <div className="form-field">
                            <label>date</label>
                            <input 
                                type="text"
                                name="date"
                                value={entry.date}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Date"
                            />
                        </div>
                        <button className="red-but" onClick={() => removeEntry(index)}>Remove</button>

                    </div>
                ))}
            </div>
            <button className="green-but" onClick={addEntry}>Add Education</button>
        </div>
    )
}