export var fetchApi = (query, payload = {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
}) => fetch(query, payload).then(getJson);
export var getJson = (response) => response.json();