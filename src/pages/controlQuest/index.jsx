import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import lectureIcon from "../../assets/images/lecture-icon.png";

export default function Lecture() {
  const items = [
    {
      id: 1,
      path: "",
      url: "1",
      themeName: "Тема",
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName: "Тема",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName: "Тема",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName: "Тема",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName: "Тема",
    },
    {
      id: 6,
      path: "",
      url: "6",
      themeName: "Тема",
    },
    {
      id: 7,
      path: "",
      url: "7",
      themeName: "Тема",
    },
    {
      id: 8,
      path: "",
      url: "8",
      themeName: "Тема",
    },
    {
      id: 9,
      path: "",
      url: "9",
      themeName: "Тема",
    },
  ];
  return (
    <Box className="" sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] font-bold text-white">
        контрольные вопросы
      </h1>
      {items.map((item) => (
        <Card
          sx={{
            margin: "10px 0px",
          }}
          key={item.id}
          className="border-[1px] border-[solid] border-[grey] my-4 rounded-md shadow-inner"
        >
          <CardContent>
            <Typography
              className="flex justify-between"
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              <img className="h-20" src={lectureIcon} alt="" />
              <CardActions>
                <Button variant="outlined" size="small">
                  <NavLink to={item.url} key={items.id}>
                    открыть
                  </NavLink>
                </Button>

                <TelegramShareButton url={item.path}>
                  <TelegramIcon className="rounded w-8"></TelegramIcon>
                </TelegramShareButton>
              </CardActions>
            </Typography>
            <Typography
              className="flex flex-col mb-5"
              sx={{
                display: "flex",
                fontSize: "22px",
              }}
            >
              <span className="font-bold text-xl my-3 text-black">
                Тема №{item.id}
              </span>
              контрольные вопросы - {item.id}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
