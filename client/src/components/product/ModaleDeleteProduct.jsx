import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import ProductContext from "../context/Product";

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
  divButton: {
    paddingBottom: "5%",
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

export default function ModaleDeleteProduct({ product }) {
  // const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const context = useContext(ProductContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const token = localStorage.getItem("token");

  const handleDelete = async (event) => {
    try {
      event.preventDefault();
      const test = context.products.filter((item) => item.id !== product.id);
      context.setProducts(test);
      await axios.delete(
        `http://localhost:5000/leboncoin/product/delete/${product.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      handleClose();
      // history.push("/leboncoin/home/seller/product/all");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
                <button
                  className={classes.button}
                  type="submit"
                  onClick={handleDelete}
                >
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
