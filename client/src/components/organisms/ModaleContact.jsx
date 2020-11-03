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
    overflowY: "scroll",
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

export default function ModaleContact() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [inputs, setInputs] = useState({
    email: "",
    messageSubject: "",
    message: "",
  });

  const [contactError, setContactError] = useState("");

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event) => {
    try {
      event.preventDefault();
      const result = await axios({
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        url: "http://localhost:5000/leboncoin/contact",
        data: inputs,
      });
      console.log("result ===>", result);
      history.push("/leboncoin/home/buyer");
    } catch (contactError) {
      setContactError(contactError.response.data);
    }
  };

  return (
    <div>
      <div className="buttonCont">
        <button
          className="buttonCont-buttonContact"
          type="button"
          onClick={handleOpen}
        >
          Un soucis avec l'annonce ?
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
            <div className="updateProduct-close" onClick={handleClose}>
              <p>X</p>
            </div>
            <div className="updateProduct">
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="email" className="updateProduct-label">
                  Email
                </label>
                <div className="updateProduct-input1">
                  <input
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Saisissez votre email"
                  />
                </div>
                <label htmlFor="messageSubject" className="updateProduct-label">
                  Sujet
                </label>
                <div className="updateProduct-input2">
                  <input
                    name="messageSubject"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Saisissez le sujet du message"
                  />
                </div>
                <label htmlFor="message" className="updateProduct-label">
                  Message
                </label>
                <div className="updateProduct-input2">
                  <textarea
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Saisissez votre message"
                  />
                </div>
                <div className="updateProduct-error">
                  {contactError !== "" ? (
                    <div className="updateProduct-error-spanAll">
                      <span className="updateProduct-error-spanAll-span">
                        {contactError.title}
                      </span>
                      <span className="updateProduct-error-spanAll-span">
                        {contactError.description}
                      </span>
                    </div>
                  ) : null}
                </div>

                <div className={classes.divButton}>
                  <button
                    type="submit"
                    id="buttonModale"
                    className={classes.button}
                    onSubmit={handleFormSubmit}
                  >
                    Envoyer
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
