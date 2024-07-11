import React, { useState, useRef } from "react";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router";

import axios from "axios";

const ProductCard = (props) => {
    const navigate = useNavigate();
    const [product, setProduct] = useState(props.product);

    const handleUpdate = (id) => {
        navigate("/update/" + id);
    };

    const handleDelete = async (id) => {
        try {
            const response = await axios.delete("/delete/" + id);
            console.log(response.data);
            if (response.data === "Product deleted!") {
                props.getProduct();
            }
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <React.Fragment>
            <Card
                sx={{
                    width: 345,
                    height: 550,
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                }}
            >
                <CardHeader title={product.title} />
                <CardMedia
                    component="img"
                    height="194"
                    image={product.image}
                    alt="Product image"
                />
                <CardContent>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="body2" color="text.secondary">
                            {product.description}
                        </Typography>
                        <Stack direction="row" spacing={1}>
                            <Rating
                                name="half-rating-read"
                                defaultValue={product.rating}
                                precision={0.5}
                                readOnly
                            />
                            <Typography variant="body1" color="text.primary">
                                {product.rating}
                            </Typography>
                        </Stack>
                        <Stack direction="column">
                            <Typography variant="body1" color="text.primary">
                                {product.price} $
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                Price discount: {product.discountPercentage}%
                            </Typography>
                        </Stack>
                    </Stack>
                </CardContent>

                <CardActions>
                    <Stack direction="row" gap={2}>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={() => handleUpdate(product._id)}
                        >
                            Update
                        </Button>
                        <Button
                            color="error"
                            variant="contained"
                            onClick={() => handleDelete(product._id)}
                        >
                            Delete
                        </Button>
                    </Stack>
                </CardActions>

            </Card >
        </React.Fragment >
    );
};

export default ProductCard;