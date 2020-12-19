class APIHandler {
  constructor (baseUrl) {
    this.APIRequest = axios.create({
      baseURL: baseUrl
    })
  }

  async getFullList () {
    try{
      const {data : characters} = await this.APIRequest.get('/characters')
      console.log(characters)
      return characters
    }catch(err){console.log(err)}
  }

  async getOneRegister () {
    try{
      const idCh = document.querySelector('.character-id');
      const {data: dataId} = await this.APIRequest.get(`/characters/${idCh}`)
      console.log("id's: ",dataId)
      return dataId
    }catch(err){console.error(err)}
  }

  createOneRegister () {

  }

  updateOneRegister () {

  }

  deleteOneRegister () {

  }
}
