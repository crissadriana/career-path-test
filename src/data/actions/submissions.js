const requestingSubmissions = (setSubmissions) =>
  setSubmissions((curr) => ({ ...curr, received: false, requesting: true }));

const receivedSubmissions = (data, setSubmissions) =>
  setSubmissions((curr) => ({
    ...curr,
    data,
    requesting: false,
    received: true,
  }));

export const fetchSubmissions = (user, setSubmissions) => {
  requestingSubmissions(setSubmissions);
  fetch(`https://fhc-api.onrender.com/submissions?user=${user}`)
    .then((res) => res.json())
    .then((data) => {
      receivedSubmissions({...data, user }, setSubmissions);
    });
};

export const submitAnswers = (data, user, setSubmissions) => {
  return fetch(`https://fhc-api.onrender.com/submissions?user=${user}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((res) => res.json())
  .then((data) => {
    receivedSubmissions(data, setSubmissions);
  });;
};