const requestingQuestions = (setQuestions) =>
  setQuestions((curr) => ({ ...curr, received: false, requesting: true }));

const receivedQuestions = (data, setQuestions) =>
  setQuestions((curr) => ({
    ...curr,
    data,
    requesting: false,
    received: true,
  }));

export const fetchQuestions = (user, setQuestions) => {
  requestingQuestions(setQuestions);
  // const hardcoded = [
  //   {
  //     text: "Receiving attention and praise for good work and achievements.",
  //     id: "yvdk/mzB8YpyoAFCs3dSJw==",
  //   },
  //   {
  //     text: "Influencing others and getting more responsibility and control.",
  //     id: "EXDnZinkJKiS/ksc9d5Owg==",
  //   },
  //   {
  //     text: "Working in enjoyable, entertaining and open-minded environments.",
  //     id: "GSNqDav0CPbjkuf7qnH55w==",
  //   },
  //   {
  //     text: "Helping people (within the company and externally) and increasing morale.",
  //     id: "Qkvj/C9e4dS18y50xzGUXg==",
  //   },
  //   {
  //     text: "Social interaction, diverse collaboration and feeling a sense of belonging, care and community.",
  //     id: "IWuclss7tOBWCnBuOlHhrA==",
  //   },
  //   {
  //     text: "Working with structure, set rules and established customs.",
  //     id: "cA+qucZ5iG2bc56DMOH+tw==",
  //   },
  // ];
  // receivedQuestions(hardcoded, setQuestions);

  fetch(`https://fhc-api.onrender.com/questions?user=${user}`)
    .then((res) => res.json())
    .then((data) => {
      receivedQuestions(data.questions, setQuestions);
    });
};
