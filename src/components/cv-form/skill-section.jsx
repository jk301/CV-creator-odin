// skill-section.jsx
import "./../../styles/skill-section.css"

export function SkillSection ({ skill, setSkill }) {

    function handleInputChange (event, index) {
        return setSkill(previous => previous.map((entry, i) => 
            i === index 
                ? {...entry, [event.target.name]: event.target.value}
                : entry
            ))
    }

    function addEntry () {
        return setSkill(previous => [...previous, {type: "", kill: ""}])
    }

    function removeEntry (index) {
        return setSkill(previous => previous.filter((_, i) => i !== index))
    }

    return (
        <div className="skill-section">
            <div className="skill-items">

                {skill.map((entry, index) => (
                    <div className="skill-entry" key={index}>

                        <div className="form-field">
                            <label>Type of skill:</label>
                            <input 
                                type="text"
                                name="type"
                                value={entry.type}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Languages or tools"
                            />
                        </div>

                        <div className="form-field">
                        <label>Skill</label>
                            <input 
                                type="text"
                                name="kill"
                                value={entry.kill}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="good with cats (debatable)"
                            />
                        </div>

                        <button className="red-but" onClick={() => removeEntry(index)}>Remove</button>

                    </div>
                ))}
            </div>
            <button className="green-but" onClick={addEntry}>Add Skill</button>
        </div>
    )
}