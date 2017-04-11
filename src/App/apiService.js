import axios from 'axios';

export default class apiService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.NODE_ENV === 'production' 
      ? "https://sourcery-api.herokuapp.com" 
      : "http://localhost:9000" 
    });
  }

  getLocations(addresses) {
    return this.service.get('/api/v1/get_locations_for_good_path', {
      params: {
        locations: addresses
      }
      })
      .then(response => response)
      .catch(error => console.log(error));
  }
  
  createCheckpoint(checkpoint) {
    debugger;
    this.service.post("/api/v1/locations", this.state.checkpoint)
    .then((response) => {
      // success message here
      console.log("SUCCESS")
      console.log(response)
    })
    .catch((response) => {
      console.log("Fail")
      console.log(response)
    });
  }
}
