import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import AuthContext from "../atoms/context/Auth";
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
    backgroundColor: "black",
    boxShadow: theme.shadows[2],
    borderRadius: 5,
    color: "white",
    width: "90%",
    padding: theme.spacing(2, 4, 3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid white",
    outline: "none",
  },
  button: {
    border: "none",
    borderRadius: "5px",
    marginTop: 25,
    width: "76vw",
    backgroundColor: "#fe6e14",
    color: "white",
    padding: 10,
    fontWeight: "bold",
  },
}));

export default function ModaleDeleteUser() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    return () => {};
  }, [state]);

  const CloseAccount = () => {
    return dispatch({ type: "LOGOUT" });
  };

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("user");

  const handleDelete = async (event) => {
    try {
      event.preventDefault();
      await axios.delete(`http://localhost:5000/leboncoin/user/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      CloseAccount();
      history.push("/leboncoin");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="buyer-deleteUser">
          <button
            className="buyer-deleteUser-button"
            type="button"
            onClick={handleOpen}
          >
            Supprimer mon compte
          </button>
        </div>
        <Modal
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
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
              <div className="buyer">
                <p className="buyer-p">
                  Êtes-vous sûr de vouloir supprimer votre compte ? <br />
                  Vos données seront effacées.
                </p>
              </div>
              <div className={classes.divButton}>
                <button
                  className={classes.button}
                  id="buttonModale"
                  type="submit"
                  onClick={handleDelete}
                >
                  {" "}
                  Supprimer{" "}
                </button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
