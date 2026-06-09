// main-form.jsx
import "../../styles/main-form.css"
import { useState } from "react"
import { PersonalSection } from "./personal-section.jsx"
import { EducationSection } from "./education-section.jsx"
import { ExperienceSection } from "./experience-section.jsx"
import { ProjectSection } from "./project-section.jsx"
import { SkillSection } from "./skill-section.jsx"

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
                    <span>{openSection.includes('personal') ? '—' : '▼'}</span>
                </div>
                {openSection.includes('personal') && (
                    <PersonalSection personal={data.personal} setPersonal={setData.setPersonal} />
                )}

            </div>

            <div className="form-card">

                <div className="form-card-header" onClick={() => toggleSection('education')}>
                    <h2>Educational Information</h2>
                    <span>{openSection.includes('education') ? '—' : '▼'}</span>
                </div>
                {openSection.includes('education') && (
                    <EducationSection education={data.education} setEducation={setData.setEducation} />
                )}

            </div>

            <div className="form-card">

                <div className="form-card-header" onClick={() => toggleSection('experience')}>
                    <h2>Experience Information</h2>
                    <span>{openSection.includes('experience') ? '—' : '▼'}</span>
                </div>
                {openSection.includes('experience') && (
                    <ExperienceSection experience={data.experience} setExperience={setData.setExperience} />
                )}

            </div>

            <div className="form-card">

                <div className="form-card-header" onClick={() => toggleSection('project')}>
                    <h2>Project Information</h2>
                    <span>{openSection.includes('project') ? '—' : '▼'}</span>
                </div>
                {openSection.includes('project') && (
                    <ProjectSection project={data.project} setProject={setData.setProject} />
                )}

            </div>

            <div className="form-card">

                <div className="form-card-header" onClick={() => toggleSection('skill')}>
                    <h2>Skill Information</h2>
                    <span>{openSection.includes('skill') ? '—' : '▼'}</span>
                </div>
                {openSection.includes('skill') && (
                    <SkillSection skill={data.skill} setSkill={setData.setSkill} />
                )}

            </div>

        </div>
    )
}
