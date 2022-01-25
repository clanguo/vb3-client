import axios from "axios";

const axiosIns = axios.create();

axiosIns.interceptors.request.use((request) => {
  request.baseURL = process.env.VUE_APP_API_URL;
  return request;
});

axiosIns.interceptors.response.use((response) => {
  return response.data;
});

function requestGet(url, config) {
  return axiosIns.get(url, config);
}

export const getBlog = (page = 1, limit = 10, key = "") => {
  return requestGet("/api/blog", {
    params: {
      page,
      limit,
      key
    },
  });
};

export const getProject = () => {
  return requestGet("/api/project");
};

export const getBlogById = (id) => {
  return requestGet(`/api/blog/${id}`);
};

export const getArchive = () => {
  return requestGet("/api/archive");
};

export const getTag = (id = "") => {
  return requestGet(`/api/tag/${id}`);
};

export const getCategory = (id = "") => {
  return requestGet(`/api/category/${id}`);
};

export const getComments = (page = 1, limit = 10, id = "") => {
  return requestGet(`/api/comment/${id}?page=${page}&limit=${limit}`);
}