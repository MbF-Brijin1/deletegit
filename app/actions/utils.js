import 'whatwg-fetch';

// handle exception here
export function handleResponse(response) {
  const json = response.json();
  if (response.ok) {
    return json;
  }
  return json.then(err => {
    throw err;
  });
}
