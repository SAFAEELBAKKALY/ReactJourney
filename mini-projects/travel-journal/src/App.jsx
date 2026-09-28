import './App.css'
import Header from './Header.jsx'
import Entry from './Entry.jsx'

function App() {
  return(
    <div className='main'>
      <Header />
      <Entry
        entryImg='./pic/japan.png'
        elemImg='./pic/marker.png'
        elemName='JAPAN'
        elemLink='...'
        elemSubtitle='Mount Fuji'
        elemDate='12 Jan, 2023 - 24 Jan, 2023'
        elemDesc='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'
      />
      <hr/>
      <Entry
        entryImg='./pic/australia.png'
        elemImg='./pic/marker.png'
        elemName='AUSTRALIA'
        elemLink='...'
        elemSubtitle='Sydney Opera House'
        elemDate='27 May, 2023 - 8 Jun, 2023'
        elemDesc="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings."
      />
      <hr/>
      <Entry
        entryImg='./pic/norway.png'
        elemImg='./pic/marker.png'
        elemName='NORWAY'
        elemLink='...'
        elemSubtitle='Geirangerfjord'
        elemDate='01 Oct, 2024 - 18 Nov, 2024'
        elemDesc="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
      />
    </div>
  )
}
export default App
