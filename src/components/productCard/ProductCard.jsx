import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";
import "./ProductCard.css";
import { db } from "../../firebaseConfig";
import { collection, deleteDoc, doc } from "firebase/firestore";

export const ProductCard = ({ title, description, price, id, img }) => {
  const eliminar = () => {
    let productColl = collection(db, "products");
    let refDoc = doc(productColl, id);
    deleteDoc(refDoc);
  };

  return (
    <Card sx={{ width: 345 }}>
      <CardMedia
        component={"img"}
        sx={{ height: 140, width: "100%" }}
        image={img}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="outlined">
            Ver mas
          </Button>
        </Link>
        <Button size="small" variant="outlined" onClick={eliminar}>
          Eliminar
        </Button>
      </CardActions>
    </Card>
  );
};
