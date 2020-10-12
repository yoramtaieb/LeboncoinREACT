import React from "react";
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

export default function ModaleDeleteProduct() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    //   <div>
    //     <button type="submit" className="product-buttonUpDel">
    //       Supprimer le produit
    //     </button>
    //   </div>
    // );
    <>
      <div>
        <div>
          <button
            className="product-buttonUpDel"
            type="button"
            onClick={handleOpen}
          >
            Supprimer le produit
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
                  Êtes-vous sûr de vouloir supprimer ce produit ?
                </p>
              </div>
              <div className={classes.divButton}>
                <button className={classes.button} type="submit">
                  Supprimer
                </button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
