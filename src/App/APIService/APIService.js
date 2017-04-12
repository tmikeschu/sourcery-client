import axios from 'axios';

export class APIService {
  constructor() {
    this.service = axios.create({
      baseURL: "https://sourcery-api.herokuapp.com" 
    });
  }

  getCheckpoints(addresses) {
    return this.service.get('/api/v1/get_checkpoints_for_good_path', {
      params: {
        checkpoints: addresses
      }
      })
      .then(response => response)
      .catch(error => console.error(error));
  }
  
  createCheckpoint(checkpoint) {
    return this.service.post("/api/v1/checkpoints", { checkpoint: checkpoint })
    .then(response => response)
    .catch(error => console.error(error));
  }

  createLot(lot) {
    return this.service.post("/api/v1/lots", { lot: lot })
    .then(response => response)
    .catch(error => console.error(error));
  }
}

export const service = new APIService();
