import axios from 'axios';

export default class APIService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.NODE_ENV === 'production' 
      ? "https://sourcery-api.herokuapp.com" 
      : "http://localhost:9000" 
    });
  }

  getLocations(addresses) {
    return this.service.get('/api/v1/get_checkpoints_for_good_path', {
      params: {
        checkpoints: addresses
      }
      })
      .then(response => response)
      .catch(error => console.log(error));
  }
  
  createCheckpoint(checkpoint) {
    return this.service.post("/api/v1/checkpoints", checkpoint)
    .then((response) => {
      console.log("SUCCESS")
      return response
    })
    .catch((error) => {
      console.log("Fail")
      return error
    });
  }

  createLot(lot) {
    return this.service.post("/api/v1/lots", lot)
    .then((response) => {
      console.log("SUCCESS")
      return response
    })
    .catch((error) => {
      console.log("Fail")
      return error
    });
  }
}
