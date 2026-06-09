// experience-section.jsx
import "../../styles/experience-section.css"

export function ExperienceSection ({ experience, setExperience }) {

    function handleInputChange (event, index) {
        return setExperience(previous => previous.map((entry, i) => 
            i === index 
                ? {...entry, [event.target.name]: event.target.value}
                : entry
            ))
    }

    function handleBulletChange (expIndex, bulletIndex, value) {
        return setExperience(previous => previous.map((entry, index) => 
            index === expIndex
                ? {
                    ...entry, bullets: entry.bullets.map((bullet, i) => 
                        i === bulletIndex
                            ? value
                            : bullet
                    )
                }
                : entry     
        ))
    }

    function addEntry () {
        return setExperience(previous => [...previous, {company: "", position: "", date: "", bullets: []}])
    }

    function addBullet (expIndex) {
        return setExperience(previous => previous.map((entry, i) => (
            i === expIndex ? {...entry, bullets: [...entry.bullets, ""]} : entry
        )))
    }

    function removeEntry (index) {
        return setExperience(previous => previous.filter((_, i) => i !== index))
    }

    function removebullet (expIndex, bulletIndex) {
        return setExperience(previous => previous.map((entry, i) => (
            i === expIndex
                ? {...entry, bullets: entry.bullets.filter((_, j) => j !== bulletIndex) } 
                : entry
        )))
    }

    return (
        <div className="experience-section">
            <div className="experience-items">

                {experience.map((entry, index) => (
                    <div className="experience-entry" key={index}>

                        <div className="form-field">
                            <label>Company name</label>
                            <input 
                                type="text"
                                name="company"
                                value={entry.company}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Company Name"
                            />
                        </div>

                        <div className="form-field">
                        <label>Position</label>
                            <input 
                                type="text"
                                name="position"
                                value={entry.position}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="Position"
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

                        {
                            (entry.bullets.length > 0) &&
                            entry.bullets.map((bullet, bindex) => 
                                <div className="form-field" key={bindex}>
                                    <label></label>
                                    <input 
                                        type="text"
                                        name="bullet"
                                        value={bullet}
                                        onChange={(e) => handleBulletChange(index, bindex, e.target.value)}
                                        placeholder="ex - Solved global hunger"
                                    />
                                    <button onClick={() => removebullet(index, bindex)} className="red-but">Remove bullet</button>
                                </div>
                            )
                        }


                        <button className="green-but" onClick={() => addBullet(index)}>Add a Bullet Point</button>
                        <button className="red-but" onClick={() => removeEntry(index)}>Remove experience</button>

                    </div>
                ))}
            </div>
            <button className="green-but" onClick={addEntry}>Add Experience</button>
        </div>
    )
}