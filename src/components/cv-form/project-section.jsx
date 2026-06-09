// project-section.jsx
import "../../styles/project-section.css"

export function ProjectSection ({ project, setProject }) {

    function handleInputChange (event, index) {
        return setProject(previous => previous.map((entry, i) => 
            i === index 
                ? {...entry, [event.target.name]: event.target.value}
                : entry
            ))
    }

    function handleBulletChange (expIndex, bulletIndex, value) {
        return setProject(previous => previous.map((entry, index) => 
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
        return setProject(previous => [...previous, {name: "", link: "", stack: "", bullets: []}])
    }

    function addBullet (expIndex) {
        return setProject(previous => previous.map((entry, i) => (
            i === expIndex ? {...entry, bullets: [...entry.bullets, ""]} : entry
        )))
    }

    function removeEntry (index) {
        return setProject(previous => previous.filter((_, i) => i !== index))
    }

    function removebullet (expIndex, bulletIndex) {
        return setProject(previous => previous.map((entry, i) => (
            i === expIndex
                ? {...entry, bullets: entry.bullets.filter((_, j) => j !== bulletIndex) } 
                : entry
        )))
    }

    return (
        <div className="project-section">
            <div className="project-items">

                {project.map((entry, index) => (
                    <div className="project-entry" key={index}>

                        <div className="form-field">
                            <label>Project Name: </label>
                            <input 
                                type="text"
                                name="name"
                                value={entry.name}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="ex - battleship"
                            />
                        </div>

                        <p>* Link will be embedded in project name</p>

                        <div className="form-field">
                            <label>Project Link: </label>
                            <input 
                                type="text"
                                name="link"
                                value={entry.link}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="github.com/user"
                            />
                        </div>

                        <div className="form-field">
                        <label>Project Stack: </label>
                            <input 
                                type="text"
                                name="stack"
                                value={entry.stack}
                                onChange={(e) => handleInputChange(e, index)}
                                placeholder="any tools, libraries etc"
                            />
                        </div>

                        {
                            (entry.bullets.length > 0) &&
                            entry.bullets.map((bullet, bindex) => 
                                <div className="form-field" key={bindex}>
                                    <input 
                                        type="text"
                                        name="bullet"
                                        value={bullet}
                                        onChange={(e) => handleBulletChange(index, bindex, e.target.value)}
                                        placeholder="ex - Implemented Hash"
                                    />
                                    <button onClick={() => removebullet(index, bindex)} className="red-but">Remove bullet</button>
                                </div>
                            )
                        }


                        <button className="green-but" onClick={() => addBullet(index)}>Add a Bullet Point</button>
                        <button className="red-but" onClick={() => removeEntry(index)}>Remove Project</button>

                    </div>
                ))}
            </div>
            <button className="green-but" onClick={addEntry}>Add Project</button>
        </div>
    )
}