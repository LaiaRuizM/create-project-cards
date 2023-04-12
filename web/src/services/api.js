const url = "https://proyectos-y-ya-estaria.onrender.com/";
//const url = "http://localhost:4001/";

const dataApi = (data) => {
  console.log(data);
  return fetch(`${url}api/projects/add`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

const listProjectsApi = () => {
  return fetch(`${url}api/projects/all`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const showProject = (id) => {
  return fetch(`${url}api/projects/detail/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const api = {
  dataApi: dataApi,
  listProjectsApi: listProjectsApi,
  showProject: showProject,
};

export default api;
