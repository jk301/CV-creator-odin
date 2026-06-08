// preview.jsx
import "./../../styles/preview.css"

export function Preview ({ data }) {

    const hasPersonal = Object.values(data.personal).some(value => value !== '')

    const links = [
        data.personal.phone && <span>{data.personal.phone}</span>,
        data.personal.email && <span>{data.personal.email}</span>,
        data.personal.linkedin && <a href={data.personal.linkedin}>LinkedIn</a>,
        data.personal.github && <a href={data.personal.github}>GitHub</a>,
    ].filter(Boolean)

    return (
        <div className="preview-container">
            <div className="preview">

                { hasPersonal && 
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


            </div>
        </div>
    )
}