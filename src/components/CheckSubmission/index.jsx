import { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import { fetchSubmissions } from "../../data/actions/submissions";
import State from "../../data/State";
import Spinner from "../Spinner";

const CheckSubmission = ({ children }) => {
  const {
    submissions: [{ data: submissions, received }, setSubmissions],
  } = useContext(State);
  const [searchParams] = useSearchParams();
  const user = searchParams.get("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!received) {
      fetchSubmissions(user, setSubmissions);
    } else {
      if (submissions.ok) {
        navigate(`/see-results?user=${user}`);
      } else {
        navigate(`/wizard?user=${user}`);
      }
    }
  }, [received, user, navigate, submissions, setSubmissions]);

  if (received) return children;
  return <Spinner />;
};

export default CheckSubmission;
