import './App.css'
import Header from './Header.jsx'
import Entry from './Entry.jsx'
import data from './data.js'

function App() {

  const entryDet = data.map((dataElem) => (
    <Entry
      elemImg = {dataElem.elemImg}
      entryImg = {dataElem.entryImg}
      elemSubtitle = {dataElem.elemSubtitle}
      elemName = {dataElem.elemName}
      elemLink = {dataElem.elemLink}
      elemDate = {dataElem.elemDate}
      elemDesc = {dataElem.elemDesc}
    />
  ))
  return(
    <div className='main'>
      <Header />
      {entryDet}
    </div>
  )
}
export default App
