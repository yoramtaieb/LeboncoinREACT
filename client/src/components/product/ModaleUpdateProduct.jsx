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

export default function ModaleUpdateProduct() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <div>
    //   <button type="submit" className="product-buttonUpDel">
    //     {" "}
    //     Modifier le produit{" "}
    //   </button>
    // </div>
    <div>
      <div>
        <button
          className="product-buttonUpDel"
          type="button"
          onClick={handleOpen}
        >
          Modifier le produit
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
              <form action="POST">
                <label htmlFor="firstName" className="updateProduct-label">
                  Nom
                </label>
                <div className="updateProduct-input1">
                  <input
                    name="name"
                    // onChange={handleChange}
                    type="text"
                    placeholder="Saisissez un nouveau nom"
                  />
                </div>
                <label htmlFor="lastName" className="updateProduct-label">
                  Prix
                </label>
                <div className="updateProduct-input2">
                  <input
                    name="description"
                    // onChange={handleChange}
                    type="number"
                    placeholder="Saisissez un nouveau prix"
                  />
                </div>

                <label htmlFor="email" className="updateProduct-label">
                  Description
                </label>
                <div className="updateProduct-input3">
                  <input
                    name="description"
                    // onChange={handleChange}
                    type="text"
                    placeholder="Saisissez une nouvelle description"
                  />
                </div>

                <label htmlFor="password" className="updateProduct-label">
                  Catégories
                </label>
                <div className="updateProduct-input4">
                  <select
                    name="idCategory"
                    className="updateProduct-input4-select"
                  >
                    <option value="">
                      --Choississez une nouvelle catégorie--
                    </option>
                    <option value="1">Informatique</option>
                    <option value="2">Voiture</option>
                    <option value="3">Ameublement</option>
                    <option value="4">Vente Immo</option>
                  </select>
                </div>

                <label htmlFor="password" className="updateProduct-label">
                  Régions
                </label>
                <div className="updateProduct-input5">
                  <select name="idCity" className="updateProduct-input5-select">
                    <option value="">
                      --Choississez une nouvelle région--
                    </option>
                    <option value="1">Alsace</option>
                    <option value="2">Aquittaine</option>
                    <option value="3">Auverge</option>
                    <option value="4">Basse-Normandie</option>
                    <option value="5">Bourgogne</option>
                    <option value="6">Bretagne</option>
                    <option value="7">Centre</option>
                    <option value="8">Champagne-Ardenne</option>
                    <option value="9">Corse</option>
                    <option value="10">Franche-Comté</option>
                    <option value="11">Haute-Normandie</option>
                    <option value="12">Île-de-France</option>
                    <option value="13">Languedoc-Roussillon</option>
                    <option value="14">Limousin</option>
                    <option value="15">Lorraine</option>
                    <option value="16">Midi-Pyrénées</option>
                    <option value="17">Nord-Pas-de-Calais</option>
                    <option value="18">Pays de la Loire</option>
                    <option value="19">Picardie</option>
                    <option value="20">Poitou-Charentes</option>
                    <option value="21">Provence-Alpes-Côtes d'Azur</option>
                    <option value="22">Rhônes-Alpes</option>
                  </select>
                </div>
                {/* {updatedUser.errorMessage && (
                  <span className="errorUpdateUser">
                    {updatedUser.errorMessage.data.description}
                  </span>
                )} */}
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
