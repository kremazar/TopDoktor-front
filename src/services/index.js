import axios from "axios";

let Service = axios.create({
  baseURL: "https://webdoktor.herokuapp.com",
  timeout: 1000,
});
let Registracija = {
  async getAll(podaci) {
    let response = await Service.post("/register", podaci);
    return response;
  },
};
let Login = {
  async getAll(podaci) {
    let response = await Service.post("/login", podaci);
    return response;
  },
};
let Doktori = {
  async getAll() {
    let response = await Service.get("/doktori");
    let data = response.data;
    return data;
  },
};
let deleteDoctor = {
  async getAll(id) {
    let response = await Service.delete(`/delete/${id}`);
    return response;
  },
};
let Doktor = {
  async getAll(id) {
    let response = await Service.get(`/doktor/${id}`);
    let data = response.data;
    return data;
  },
};
let DodajDoktora = {
  async getAll(podaci) {
    let response = await Service.post("/dodajDoktora", podaci);
    return response;
  },
};
let Clanak = {
  async getAll() {
    let response = await Service.get("/clanak");
    let data = response.data;
    return data;
  },
};
let DodajClanak = {
  async getAll(podaci) {
    let response = await Service.post("/dodajClanak", podaci);
    return response;
  },
};
let Ocjeni = {
  async getAll(podaci) {
    let response = await Service.post("/ocjeni", podaci);
    return response;
  },
};
let Ocjene = {
  async getAll() {
    let response = await Service.get("/ocjena");
    let data = response.data;
    return data;
  },
};
let Najbolji = {
  async getAll() {
    let response = await Service.get("/najbolji");
    let data = response.data;
    return data;
  },
};
export {
  Service,
  Registracija,
  Login,
  Doktori,
  deleteDoctor,
  DodajDoktora,
  Clanak,
  DodajClanak,
  Ocjeni,
  Ocjene,
  Doktor,
  Najbolji,
};
