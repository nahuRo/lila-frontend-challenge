import request from '.';

const FormServices = {
  save: (payload) =>
    request('/form', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: sessionStorage.getItem('sessionToken'),
      },
      method: 'post',
      // ToDo: Make this a POST request and send the payload in the body.
      body: JSON.stringify(payload),
    }),
};

export default FormServices;
