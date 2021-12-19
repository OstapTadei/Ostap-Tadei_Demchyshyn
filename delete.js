import fetch from 'node-fetch'

export default async function deleteFile() {
  const myHeadersToDelete = {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer VIfLVHEiYvkAAAAAAAAAAaiughz-fSivT8Y6dpWPBzEycDOjnQ6tUDEaDD15htRb',
  }
  const rawToDelete = JSON.stringify({
    path: '/test_file.txt',
  })
  const requestOptionsToDelete = {
    method: 'POST',
    headers: myHeadersToDelete,
    body: rawToDelete,
    redirect: 'follow',
  }
  return await fetch(
    'https://api.dropboxapi.com/2/files/delete_v2',
    requestOptionsToDelete
  )
    .then((response) => response)
    .catch((error) => console.log('error', error))
}

deleteFile()
