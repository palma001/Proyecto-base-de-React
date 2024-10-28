import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

const messageRequest = (error) => {
  try {
    if (error?.response?.data?.message) {
      return error?.response?.data?.message;
    }
    if (axios.isAxiosError(error)) {
      return error.message;
    }
  } catch (error) {
    return error?.message;
  }
};

export const get = async (url, params) => {
  try {
    const { data } = await api.get(url, params);
    return {
      message: "success",
      status: true,
      data: data.data || data,
    };
  } catch (error) {
    return { data: [], status: false, message: messageRequest(error) };
  }
};

export const post = async (url, params) => {
  try {
    const { data } = await api.post(url, params);
    return {
      message: "success",
      status: true,
      data: data.data || data,
    };
  } catch (error) {
    return { status: false, message: messageRequest(error) };
  }
};

// export const postLogout = async (url, params) => {
//   try {
//     const { data } = await api.post(url, {
//       ...params,
//     });
//     return {
//       message: "success",
//       status: true,
//       data,
//     };
//   } catch (error) {
//     return { status: false, message: messageRequest(error) };
//   }
// };

export const put = async (url, id, params) => {
  try {
    const { data } = await api.put(`${url}/${id}`, params);
    return {
      message: "success",
      status: true,
      data,
    };
  } catch (error) {
    return { status: false, message: messageRequest(error) };
  }
};

export const deleted = async (url, id) => {
  try {
    const { data } = await api.delete(`${url}/${id}`);
    return {
      message: "success",
      status: true,
      data,
    };
  } catch (error) {
    return { status: false, message: messageRequest(error) };
  }
};
