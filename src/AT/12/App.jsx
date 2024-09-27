import { useState } from "react";
import {
  Box,
  Container,
  Grid2,
  Typography,
  Button,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";

import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";

const itemsList = [
  { id: 1, name: "Arroz", price: 10 },
  { id: 2, name: "Feijão", price: 20 },
  { id: 3, name: "Carne", price: 30 },
];

const ShoppingCart = () => {
  const [items, setItems] = useState(
    itemsList.map((item) => ({ ...item, quantity: 0 }))
  );

  const handleQuantityChange = (id, change) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity + change, 0) }
          : item
      )
    );
  };

  const totalPurchase = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom textAlign="center">
        Carrinho de Compras
      </Typography>
      {items.map((item) => (
        <Paper key={item.id} sx={{ padding: 2, marginBottom: 2 }} elevation={3}>
          <Grid2 container alignItems="center" justifyContent="space-between">
            <Grid2 item xs={6}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body1">R$ {item.price}</Typography>
            </Grid2>
            <Grid2 item xs={6}>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <IconButton
                  onClick={() => handleQuantityChange(item.id, -1)}
                  aria-label="remove"
                >
                  <IoIosRemoveCircleOutline />
                </IconButton>
                <Typography variant="body1" sx={{ marginX: 2 }}>
                  {item.quantity}
                </Typography>
                <IconButton
                  onClick={() => handleQuantityChange(item.id, 1)}
                  aria-label="add"
                >
                  <IoIosAddCircleOutline />
                </IconButton>
              </Box>
              <Typography variant="body2" textAlign="right">
                Total: R$ {item.quantity * item.price}
              </Typography>
            </Grid2>
          </Grid2>
        </Paper>
      ))}
      <Divider />
      <Box mt={2} textAlign="right">
        <Typography variant="h6">Valor Total: R$ {totalPurchase}</Typography>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Finalizar Compra
        </Button>
      </Box>
    </Container>
  );
};

export default ShoppingCart;
