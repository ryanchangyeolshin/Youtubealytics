/* eslint-disable no-unused-vars */

function renderTableContent(data) {
  const $card = document.createElement('div')
  const $cardBody = document.createElement('div')
  const $tableWrapper = document.createElement('div')
  const $table = document.createElement('table')
  const $thead = renderTableHeader()
  const $tbody = document.createElement('tbody')

  data.forEach(function (termData) {
    const $data = renderTableRow(termData)
    $tbody.appendChild($data)
  })

  $card.setAttribute('class', 'card')
  $cardBody.setAttribute('class', 'card-body')
  $tableWrapper.setAttribute('class', 'table-wrapper-2')
  $table.setAttribute('class', 'table table-responsive')

  $table.appendChild($thead)
  $table.appendChild($tbody)
  $tableWrapper.appendChild($table)
  $cardBody.appendChild($tableWrapper)
  $card.appendChild($cardBody)

  return $card
}

function renderTableHeader() {
  const $thead = document.createElement('thead')
  const $tr = document.createElement('tr')
  const $idHeader = document.createElement('th')
  const $searchTermHeader = document.createElement('th')
  const $sentimentHeader = document.createElement('th')
  const $confidenceHeader = document.createElement('th')

  $thead.setAttribute('class', 'mdb-color lighten-4')
  $searchTermHeader.setAttribute('class', 'th-lg')
  $sentimentHeader.setAttribute('class', 'th-lg')
  $confidenceHeader.setAttribute('class', 'th-lg')

  $idHeader.textContent = 'ID'
  $searchTermHeader.textContent = 'Search Term'
  $sentimentHeader.textContent = 'Sentiment'
  $confidenceHeader.textContent = 'Confidence Level'

  $tr.appendChild($idHeader)
  $tr.appendChild($searchTermHeader)
  $tr.appendChild($sentimentHeader)
  $tr.appendChild($confidenceHeader)

  $thead.appendChild($tr)
  return $thead
}

function renderTableRow(data, id) {
  const $tr = document.createElement('tr')
  const $id = document.createElement('th')
  const $searchTerm = document.createElement('td')
  const $sentiment = document.createElement('td')
  const $confidence = document.createElement('td')

  $tr.setAttribute('class', 'data')
  $id.setAttribute('scope', 'row')

  $id.textContent = data['_id']
  $searchTerm.textContent = data['searchTerm']
  $sentiment.textContent = data['sentiment']
  $confidence.textContent = data['confidence']

  $tr.appendChild($id)
  $tr.appendChild($searchTerm)
  $tr.appendChild($sentiment)
  $tr.appendChild($confidence)

  return $tr
}
