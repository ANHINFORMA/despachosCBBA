function createElement(elementType, content=undefined) {
  const element = document.createElement(elementType)
  if(content) {
    element.innerHTML = content
  }
  return element
}

function updateDateTime (datetime) {
  const footerUpdatedDateTime = document.getElementById('footerUpdatedDatetime')
  const headerUpdatedDatetime = document.getElementById('headerUpdatedDatetime')
  footerUpdatedDateTime.innerText = datetime
  headerUpdatedDatetime.innerText = datetime
} 

function updateTableBody (stations) {
  const tableBody = document.getElementById('tableBody') 
  tableBody.innerHTML = ''
  stations.forEach(({station, location, type, start_time, end_time}) => {
    const tableRow = createElement('tr')
    tableRow.appendChild(createElement('td', station))
    tableRow.appendChild(createElement('td', location))
    tableRow.appendChild(createElement('td', type))
    tableRow.appendChild(createElement('td', start_time))
    tableRow.appendChild(createElement('td', end_time))
    tableBody.appendChild(tableRow)
  })
}

window.addEventListener('load', async () => {
  const response = await fetch('/data.json', { method: 'GET' })
  const body = await response.json()
  updateDateTime(body.updated_datetime)
  updateTableBody(body.stations)
})