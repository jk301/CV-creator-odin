// preview.jsx
import "./../../styles/preview.css"

export function Preview ({ data }) {

    const hasPersonal = Object.values(data.personal).some(value => value !== '')
    const hasEducation = data.education.length > 0

    const links = [
        data.personal.phone && <span>{data.personal.phone}</span>,
        data.personal.email && <span>{data.personal.email}</span>,
        data.personal.linkedin && <a href={data.personal.linkedin}>LinkedIn</a>,
        data.personal.github && <a href={data.personal.github}>GitHub</a>,
    ].filter(Boolean)

    return (
        <div className="preview-container">
            <div className="preview">

                {
                    hasPersonal && 
                    <div className="preview-personal">
                        {data.personal.name && <h1>{data.personal.name}</h1>}
                        <div className="preview-personal-links">
                            {links.map((link, index) => (
                                <span key={index}>
                                    {index > 0 && ' | '}
                                    {link}
                                </span>
                            ))}
                        </div>
                    </div>
                }

                {
                    hasEducation && 
                    <div className="preview-education">
                        <h2>Education</h2>
                        {data.education.map((entry, index) => (
                            <div className="preview-education-entry" key={index}>
                                <div className="edu-detail">
                                    {entry.inst && <h3>{entry.inst}</h3>}
                                    {entry.degree && <span>{entry.degree}</span>}
                                </div>
                                <div className="edu-date">
                                    {entry.date && <span>{entry.date}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                }


            </div>
        </div>
    )
}