import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import Alert from "react-bootstrap/Alert";

const Home = () => {
  const [data, setData] = useState([]);
  const [showdata, setShowData] = useState([]);
  console.log(showdata, "showdata");

  const [show, setShow] = useState(false);

  const getFileData = async () => {
    const res = await axios.get("/getdata", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
    } else {
      setData(res.data.getfile);
    }
  };

  const getData = async () => {
    const res = await axios.get("http://localhost:8005/api/user/getUser", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
    } else {
      setShowData(res.data);
    }
  };

  const dltUser = async (id) => {
    const res = await axios.delete(`/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.data.status === 401 || !res.data) {
      console.log("errror");
    } else {
      console.log("File delete");
      setShow(true);
    }
  };

  useEffect(() => {
    getFileData();
    getData();
  }, []);
  return (
    <>
      {show ? (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          file Delete
        </Alert>
      ) : (
        ""
      )}
      <div className="container mt-2">
        <h1 className="text-center">File Uploading System</h1>
        <div className="text-end">
          <Button variant="primary">
            <NavLink to="/upload" className="text-decoration-none text-light">
              Upload File{" "}
            </NavLink>
          </Button>
        </div>

        <div className="row d-flex justify-content-between align-iteams-center mt-5">
          {data.length > 0
            ? data.map((el, i) => {
                return (
                  <>
                    <Card
                      style={{ width: "22rem", height: "18rem" }}
                      className="mb-3"
                    >
                      <Card.Img
                        variant="top"
                        style={{
                          width: "100px",
                          textAlign: "center",
                          margin: "auto",
                        }}
                        src={`/uploads/${el.imgpath}`}
                        className="mt-2"
                      />
                      <Card.Body className="text-center">
                        <Card.Title>File Name : {el.fname}</Card.Title>
                        <Card.Text>
                          Date Added :{moment(el.date).format("L")}
                        </Card.Text>
                        <Button
                          variant="danger"
                          className="col-lg-6 text-center"
                          onClick={() => dltUser(el._id)}
                        >
                          Delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </>
                );
              })
            : ""}
        </div>
      </div>
    </>
  );
};

export default Home;
