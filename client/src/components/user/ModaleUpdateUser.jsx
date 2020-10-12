import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    boxShadow: theme.shadows[2],
    borderRadius: 5,
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    border: "1px solid white",
    outline: "none",
    color: "white",
    backgroundColor: "black",
  },
  divButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    border: "none",
    borderRadius: "5px",
    marginTop: 25,
    backgroundColor: "#fe6e14",
    color: "white",
    padding: 10,
    fontWeight: "bold",
  },
}));

export default function ModaleUpdateUser() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [updatedUser, setUpdatedUser] = useState({
    errorMessage: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });
  };

  const id = localStorage.getItem("user");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const token = localStorage.getItem("token");
      const options = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const formData = {
        firstName: updatedUser.firstName,
        lastName: updatedUser.lastName,
        email: updatedUser.email,
        password: updatedUser.password,
      };
      const userUpdated = await axios.put(
        `http://localhost:5000/leboncoin/user/edit/${id}`,
        formData,
        options
      );
      if (userUpdated.status === 201) {
        setUpdatedUser({
          ...updatedUser,
          errorMessage: null,
        });
      }
      console.log(userUpdated);
      history.push("/leboncoin");
    } catch (error) {
      setUpdatedUser({
        ...updatedUser,
        errorMessage: error.response,
      });
    }
  };

  return (
    <div>
      <div className="buyer-updateUser">
        <button
          className="buyer-updateUser-button"
          type="button"
          onClick={handleOpen}
        >
          Modifier mon compte
        </button>
      </div>
      <Modal
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 200,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="updateUser-close" onClick={handleClose}>
              <p>X</p>
            </div>
            <div className="updateUser">
              <form action="POST" onSubmit={handleSubmit}>
                <label htmlFor="firstName" className="updateUser-label">
                  Prénom
                </label>
                <div className="updateUser-input1">
                  <input
                    name="firstName"
                    onChange={handleChange}
                    type="text"
                    placeholder="Saisissez un nouveau prénom"
                  />
                </div>
                <label htmlFor="lastName" className="updateUser-label">
                  Nom
                </label>
                <div className="updateUser-input2">
                  <input
                    name="lastName"
                    onChange={handleChange}
                    type="text"
                    placeholder="Saisissez un nouveau nom"
                  />
                </div>

                <label htmlFor="email" className="updateUser-label">
                  Email
                </label>
                <div className="updateUser-input3">
                  <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Saisissez un nouvel email"
                  />
                </div>
                <label htmlFor="password" className="updateUser-label">
                  Mot de passe
                </label>
                <div className="updateUser-input4">
                  <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Saisissez un nouveau mot de passe"
                  />
                </div>
                {updatedUser.errorMessage && (
                  <span className="errorUpdateUser">
                    {updatedUser.errorMessage.data.description}
                  </span>
                )}
                <div className={classes.divButton}>
                  <button type="submit" className={classes.button}>
                    Modifier
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
