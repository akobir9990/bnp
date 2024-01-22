import { useState } from "react";

import one from "./img/1.jpg";
import two from "./img/2.jpg";
import three from "./img/3.jpg";
import four from "./img/4.jpg";
import five from "./img/5.jpg";
import six from "./img/6.jpg";
import seven from "./img/7.jpg";
import eight from "./img/8.jpg";
import nine from "./img/9.jpg";
import ten from "./img/10.jpg";
import eleven from "./img/11.jpg";
import twelve from "./img/12.jpg";
import threeTeen from "./img/13.jpg";
import fourTeen from "./img/14.jpg";
import fifTeen from "./img/15.jpg";
import sixteen from "./img/16.jpg";
import seventeen from "./img/17.jpg";
import eightteen from "./img/18.jpg";
import nineteen from "./img/19.jpg";
import twenty from "./img/20.jpg";
import twentyOne from "./img/21.jpg";
import twentyTwo from "./img/22.jpg";
import twentyThree from "./img/23.jpg";
import twentyFour from "./img/24.jpg";
import twentyFive from "./img/25.jpg";
import twentySix from "./img/26.jpg";
import twentySeven from "./img/27.jpg";
import twentyEight from "./img/28.jpg";

import "./style.css";

import { Button, Container, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import { TelegramIcon, TelegramShareButton } from "react-share";

function One() {
  const [goBack, setGoBack] = useState(false);
  const path = "";

  const items = [
    { id: 1, name: one },
    { id: 2, name: two },
    { id: 3, name: three },
    { id: 4, name: four },
    { id: 5, name: five },
    { id: 6, name: six },
    { id: 7, name: seven },
    { id: 8, name: eight },
    { id: 9, name: nine },
    { id: 10, name: ten },
    { id: 11, name: eleven },
    { id: 12, name: twelve },
    { id: 13, name: threeTeen },
    { id: 14, name: fourTeen },
    { id: 15, name: fifTeen },
    { id: 16, name: sixteen },
    { id: 17, name: seventeen },
    { id: 18, name: eightteen },
    { id: 19, name: nineteen },
    { id: 20, name: twenty },
    { id: 21, name: twentyOne },
    { id: 22, name: twentyTwo },
    { id: 23, name: twentyThree },
    { id: 24, name: twentyFour },
    { id: 25, name: twentyFive },
    { id: 26, name: twentySix },
    { id: 27, name: twentySeven },
    { id: 28, name: twentyEight },
  ];
  return (
    <Container sx={{ width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "20px 0px",
        }}
      >
        {goBack ? (
          <NavLink to={path}>
            <Button
              sx={{ bgcolor: "red", color: "white" }}
              onMouseEnter={() => setGoBack(!goBack)}
              variant="outlined"
            >
              X
            </Button>
          </NavLink>
        ) : (
          <NavLink to="/">
            <Button onMouseLeave={() => setGoBack(!goBack)} variant="contained">
              ortga
            </Button>
          </NavLink>
        )}
        <TelegramShareButton sx={{ borderraius: "10px" }} url={path}>
          <TelegramIcon
            sx={{ borderraius: "10px" }}
            className="rounded w-8"
          ></TelegramIcon>
        </TelegramShareButton>
      </Box>
      {items.map((item) => (
        <img className="img" key={item.id} src={item.name} alt="???" />
      ))}
    </Container>
  );
}

export default One;
