import fetch from 'node-fetch'

async function upload() {
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
  return await fetch(
    'https://content.dropboxapi.com/2/files/upload',
    requestOptions
  )
    .then((response) => response)
    .catch((error) => console.log('error', error))
}

export default upload
