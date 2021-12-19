import expect from 'chai'
import upload from './upload.js'
import getData from './getFileMetadata.js'
import deleteFile from './delete.js'

describe('#WebAPI requests', function () {
  var id
  var data
  context('Upload - Get file - Delete file', function () {
    context('Uplodading file', function () {
      it('Upload should response with Status 200', async function () {
        var response = await upload()
        data = await response.json()
        id = await data.id
        expect.expect(response.status).to.equal(200)
      })
      context('gettig Data with valid id', function () {
        it('getFileMetadata should response with Status 200', async function () {
          var response = await getData(id)
          expect.expect(response.status).to.equal(200)
        })
      })
      context('gettig Data with invalid id', function () {
        it('getFileMetadata should response with Status 200', async function () {
          id += 'fdg' //adding random text to id in order to show response in case invalid ID
          var response = await getData(id)
          expect.expect(response.status).to.equal(200)
        })
      })
    })

    context('deleting', function () {
      it('deleteFile should response with Status 200', async function () {
        var response = await deleteFile()
        expect.expect(response.status).to.equal(200)
      })
    })
  })
})
