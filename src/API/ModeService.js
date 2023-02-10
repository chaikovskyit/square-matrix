import axios from "axios";

export default class ModeService {
  static async getAll() {
    const response = await axios.get("http://demo7919674.mockable.io/");
    return response.data;
  }
}
