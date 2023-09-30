import Cookies from "js-cookie";

const token = Cookies.get("token");

const headers = { "Content-Type": "application/json" };

if (token) {
  headers["Authorization"] = `Bearer ${token}`;
}

export function httpGet(path) {
  const options = { headers: headers };
  return new Promise((resolve, reject) => {
    fetch(path, options)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}

export function httpPost(path, data) {
  const options = {
    headers: headers,
    method: "post",
    body: JSON.stringify(data),
  };
  return new Promise((resolve, reject) => {
    fetch(path, options)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}

export function httpDelete(path) {
  const options = {
    headers: headers,
    method: "delete",
  };
  return new Promise((resolve, reject) => {
    fetch(path, options)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}

export function httpPut(path, data) {
  const options = {
    headers: headers,
    method: "put",
    body: JSON.stringify(data),
  };
  return new Promise((resolve, reject) => {
    fetch(path, options)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}
