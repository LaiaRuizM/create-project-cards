const dataApi = (data) => {
  console.log(data)
   return fetch('http://localhost:4001/api/projects/add', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-type': 'application/json' },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

const listProjectsApi = () => {
  return fetch('http://localhost:4001/api/projects/all')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const showProject = (id) => {
  return fetch(`http://localhost:4001/api/projects/detail/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const api = { dataApi: dataApi, listProjectsApi: listProjectsApi, showProject:showProject };

export default api;
