import fetch from 'node-fetch'

const myHeaders = {
  'Dropbox-API-Arg':
    '{"path": "/test_file.txt","mode": "add","autorename": true,"mute": false,"strict_conflict": false}',
  'Content-Type': 'application/octet-stream',
  Authorization:
    'Bearer VIfLVHEiYvkAAAAAAAAAAaiughz-fSivT8Y6dpWPBzEycDOjnQ6tUDEaDD15htRb',
}

var file = '<>Content<>'

const requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: file,
  redirect: 'follow',
}

async function upload(options) {
  const info = await fetch(
    'https://content.dropboxapi.com/2/files/upload',
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((error) => console.log('error', error))
  return info
}

const info = await upload(requestOptions)
const id = info.id

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

async function getData(options) {
  const info = await fetch(
    'https://api.dropboxapi.com/2/sharing/get_file_metadata',
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((error) => console.log('error', error))
  return info
}
const data = await getData(requestOptionsToGetData)

const path = data['path_lower']
const rawToDelete = JSON.stringify({
  path,
})

const myHeadersToDelete = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer VIfLVHEiYvkAAAAAAAAAAaiughz-fSivT8Y6dpWPBzEycDOjnQ6tUDEaDD15htRb',
}

const requestOptionsToDelete = {
  method: 'POST',
  headers: myHeadersToDelete,
  body: rawToDelete,
  redirect: 'follow',
}

async function deleteFile(options) {
  fetch('https://api.dropboxapi.com/2/files/delete_v2', options)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log('error', error))
}

deleteFile(requestOptionsToDelete)
