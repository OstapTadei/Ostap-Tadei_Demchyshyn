import fetch from 'node-fetch'

export default async function getData(id) {
  const rawToGetData = JSON.stringify({
    file: id,
    actions: [],
  })

  const myHeadersToGetData = {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer VIfLVHEiYvkAAAAAAAAAAaiughz-fSivT8Y6dpWPBzEycDOjnQ6tUDEaDD15htRb',
  }

  const requestOptionsToGetData = {
    method: 'POST',
    headers: myHeadersToGetData,
    body: rawToGetData,
    redirect: 'follow',
  }
  return await fetch(
    'https://api.dropboxapi.com/2/sharing/get_file_metadata',
    requestOptionsToGetData
  )
    .then((response) => response)
    .catch((error) => console.log('error', error))
}
