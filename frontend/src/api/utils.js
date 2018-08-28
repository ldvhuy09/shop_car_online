export var fetchApi = (query) => fetch(query).then(getJson);
export var getJson = (response) => response.json();