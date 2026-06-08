import { useState } from 'react'
import './App.css'

import { Preview } from './components/cv-preview/preview.jsx'

import { MainForm } from './components/cv-form/main-form.jsx'


function App() {

  const [personal, setPersonal] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
  })

  // const [education, setEducation] = useState([])

  const data = { personal }
  const setData = { setPersonal }

  return (
    <div className='app'>
      <Preview data={data} />
      <MainForm data={data} setData={setData} />
    </div>
  )
}

export default App
