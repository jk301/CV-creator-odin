// main-form.jsx
import "../../styles/main-form.css"
import { useState } from "react"
import { PersonalSection } from "./personal-section.jsx"

export function MainForm ({ data, setData}) {
    const [openSection, setOpenSection] = useState([])

    function toggleSection (section) {
        return setOpenSection(previous => {
            return previous.includes(section)
                ? previous.filter(s => s !== section)
                : [...previous, section]
        })
    }

    return (
        <div className="main-form">

            <div className="main-form-header">
                <h1>Edit Section</h1>
            </div>

            <div className="form-card">

                <div className="form-card-header" onClick={() => toggleSection('personal')}>
                    <h2>Personal Information</h2>
                    <span>{openSection.includes('personal') ? '▲' : '▼'}</span>
                </div>
                {openSection.includes('personal') && (
                    <PersonalSection personal={data.personal} setPersonal={setData.setPersonal} />
                )}

            </div>

        </div>
    )
}
