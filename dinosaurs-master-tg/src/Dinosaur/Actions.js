require("es6-promise").polyfill();
import fetch from "isomorphic-fetch";
import constant from "./Constants";

const fetchDinosaurRequest = () => {
  return {
    type: constant.FETCH_DINOSAUR_REQUEST
  }
};

const fetchDinosaurSuccess = (dinosaurs) => {
  return {
    type: constant.FETCH_DINOSAUR_SUCCESS,
    dinosaurs
  }
};

const fetchDinosaurFailure = (err) => {
  return {
    type: constant.FETCH_DINOSAUR_FAILURE,
    err
  }
};

export const fetchDinosaurFromAPI = () => dispatch => {
  dispatch(fetchDinosaurRequest);
  return fetch("https://dinosaur-facts.firebaseio.com/dinosaurs.json", {
          method: "GET",
          cache: "default"
        })
        .then(res => res.json())
        .then(json => dispatch(fetchDinosaurSuccess(json)))
        .catch(err => dispatch(fetchDinosaurFailure(err.message)));
};
