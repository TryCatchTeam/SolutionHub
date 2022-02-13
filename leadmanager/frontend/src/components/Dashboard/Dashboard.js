import * as React from "react";
import Button from "@mui/material/Button";
import Navbar from "../components/Navbar";
import { CssBaseline } from "@mui/material";
import BeforeEditContent from "./components/BeforeEditContent";
import BeforeUneditableContent from "./components/BeforeUneditableContent";
import AfterEditContent from "./components/AfterEditContent";
import { useState } from "react";
import MyModal from "./components/MyModal";
import BeforeEditSkills from "./components/BeforeEditSkills";
import ImageHeader from "./components/ImageHeader";
import YourPosts from "./components/YourPosts";
import { useEffect } from "react";
import store from "../../store";
import { loadUser } from "../../actions/auth";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../accounts/Login";
import Header from "../components/Header";


function Dashboard(auth) {
  // useEffect(() => {
  //   store.dispatch(loadUser());
  // },[]);

  const [show, setShow] = useState({
    Username: true,
    FirstName: true,
    LastName: true,
    Email: true,
    Organisation: true,
    Skills: true,
    Description: true,
  });

  const [details, setDetails] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    organisation: "",
    skills: ["Angular", "React"],
    description: "",
    isStudent: null,
    password: "",
  });

  const allTrue = () => {
    setShow((previousState) => {
      return {
        ...previousState,
        Username: true,
        FirstName: true,
        LastName: true,
        Email: true,
        Organisation: true,
        Skills: true,
        Description: true,
      };
    });
  };

  const editUsername = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Username: false };
    });
  };
  const editFirstName = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, FirstName: false };
    });
  };
  const editLastName = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, LastName: false };
    });
  };
  const editOrganisation = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Organisation: false };
    });
  };
  const editSkills = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Skills: false };
    });
  };

  const editDescription = () => {
    allTrue();
    setShow((previousState) => {
      return { ...previousState, Description: false };
    });
  };

  const skillConvert = (str) => {
    if (str.length == 0) {
      return [];
    } else {
      str = str.trim();
      str = str.split(" ").join("");
      str = str.split(",,").join();
      str = str.split(",");
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i]?.charAt(0).toUpperCase() + str[i]?.slice(1);
      }
      return str;
    }
  };

  const handleInput = (e) => {
    if (e.target.name == "skills") {
      setDetails({
        ...details,
        [e.target.name]: skillConvert(e.target.value),
      });
    } else {
      setDetails({
        ...details,
        [e.target.name]: e.target.value,
      });
    }
  };

  const cancel = () => {
    allTrue();
  };

  const save = () => {
    allTrue();
    console.log(details);
  };

  const updatePassword = (passwordInput) => {
    setDetails({ ...details, password: passwordInput });
  };

  const allContent = [
    {
      toShow: show.Username,
      title: "Username",
      content: details.username,
      editButtonClick: editUsername,
      name: "username",
    },
    {
      toShow: show.FirstName,
      title: "First Name",
      content: details.firstName,
      editButtonClick: editFirstName,
      name: "firstName",
    },
    {
      toShow: show.LastName,
      title: "Last Name",
      content: details.lastName,
      editButtonClick: editLastName,
      name: "lastName",
    },
    {
      // uneditable
      toShow: show.Email,
      title: "Email",
      content: details.email,
      name: "email",
    },
    {
      toShow: show.Organisation,
      title: "Organisation",
      content: details.organisation,
      editButtonClick: editOrganisation,
      name: "organisation",
    },
    {
      toShow: show.Skills,
      title: "Skills",
      content: details.skills,
      editButtonClick: editSkills,
      name: "skills",
    },
    {
      toShow: show.Description,
      title: "Description",
      content: details.description,
      editButtonClick: editDescription,
      name: "description",
    },
  ];

  return (
    <>
      <Navbar />
      <CssBaseline />
      <ImageHeader />
      <section>
        <div className="a-center">
          <div className="a-edit-container shadow-lg rounded p-3 bg-white">
            <strong>
              <div className="a-title">Your Information</div>
            </strong>
            <div className="container">
              {allContent.map((data) => {
                return (
                  <div key={data.title} className="a-row-content">
                    {data.toShow ? (
                      data.title == "Skills" ? (
                        <BeforeEditSkills
                          title={data.title}
                          content={data.content}
                          editButtonClick={data.editButtonClick}
                        />
                      ) : data.title == "Email" ? (
                        <BeforeUneditableContent
                          title={data.title}
                          content={data.content}
                        />
                      ) : (
                        <BeforeEditContent
                          title={data.title}
                          content={data.content}
                          editButtonClick={data.editButtonClick}
                        />
                      )
                    ) : (
                      <AfterEditContent
                        title={data.title}
                        content={data.content}
                        saveClick={save}
                        cancelClick={cancel}
                        name={data.name}
                        onChange={handleInput}
                      />
                    )}
                  </div>
                );
              })}
              <div className="row a-edit-content a-row-wrapper">
                <div className="col-lg-4 col-sm-12">
                  <MyModal
                    buttonName="Change Password"
                    details={details}
                    updatePassword={updatePassword}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mt-5">
        <Header head="Your Posts" />
      </div>
      <YourPosts />

      <div className="container mt-5">
        <Header head="Your Requests" />
      </div>
      <div className="container a-center">
        <YourPosts />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
