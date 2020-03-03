// const baseUrl = process.env.REACT_APP_BASE_URL;
// const baseUrl2 = process.env.REACT_APP_BASE_URL2;
// const opts = { credentials: "include" };

const jr = (url, options) => {
  var headers = new Headers();
  //headers.append('Accept', 'application/json'); // This one is enough for GET requests
  headers.append("Content-Type", "application/json");
  var opts1 = {
    headers: headers,
    mode: "cors",
    credentials: "include"
  };
  var opts = { ...opts1, ...options };
  if (opts.data) {
    opts.body = JSON.stringify(opts.data);
  }
  return fetch(url, opts);
};

// const jd = url => {
//   return fetch(url, { mode: "cors", credentials: "include", method: "DELETE" });
// };


export async function login(username, password) {
  var data = { username, password };
  var method = "POST";
  var response = await jr(`https://lab.intentico.ai/tvsbackendapi/login`, { data, method });
  console.log("response",response);
 return response.json();
 //return "hello";
}

export async function logout() {
  //var data = { username, password };
  var method = "POST";
  var response = await jr(`https://lab.intentico.ai/tvsbackendapi/logout`, { method });
  console.log("response",response);
 return response.json();
 //return "hello";
}


export async function statusCheck() {
  //var data = { username, password };
  var method = "GET";
  var response = await jr(`https://lab.intentico.ai/tvsbackendapi/statusCheck`, { method });
  console.log("response",response);
 return response.json();
 //return "hello";
}

export async function call(phoneNumber, gender,dealerId,language) {
  var data = { phoneNumber, gender ,dealerId,language};
  console.log("data",data);
  var method = "POST";
  var response = await jr(`https://lab.intentico.ai/maya_multitenant/KooKooTVSISFCall/enQqAqoqndjMmBONsASxVHN0BePGnB`, { data, method });
  return response.json();
  //return "call connected"
}
