import Cookies from "js-cookie";

const token = Cookies.get('token')

export function httpGet(path) {
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const options = { headers: headers };
  return new Promise((resolve, reject) => {
    fetch(path, options)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}

export function httpPost(path, data) {
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
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

export function httpDelete(path, data) {
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const options = {
    headers: headers,
    method: "delete",
    body: JSON.stringify(data),
  };
  return new Promise()((resolve, reject) => {
    fetch(path, options)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}

export function httpPut(path, data) {
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  const options = {
    headers: headers,
    method: "put",
    body: JSON.stringify(data),
  };
  return new Promise()((resolve, reject) => {
    fetch(path, options)
      .then((response) => resolve(response.json()))
      .catch((error) => reject(error));
  });
}
