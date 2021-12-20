import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import "../../src/index.css";

const InstructorDetail = () => {
  const navigate = useNavigate();
  const { login } = useParams();

  let url = "https://api.github.com/users/" + login;
  const [user, setUser] = useState([]);
  const { avatar_url, html_url, company, location } = user;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [url]);

  return (
    <Container className="text-center mt-4">
      <h1>
        Name :<span style={{ color: "red" }}> {login}</span>
      </h1>
      <img style={{ borderRadius: "40%" }} src={avatar_url} alt={login} />
      <h3>{html_url}</h3>
      <h4>
        Company :<span style={{ color: "red" }}> {company}</span>
      </h4>
      <h4>
        Location :<span style={{ color: "red" }}>{location}</span>
      </h4>
      <button
        style={{ padding: "5px 20px", borderRadius: "15px" }}
        className="btn-primary"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </Container>
  );
};

export default InstructorDetail;
