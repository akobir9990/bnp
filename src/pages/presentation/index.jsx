import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import presentation from "../../assets/images/presentation.svg";

export default function BasicCard() {
  const items = [
    {
      id: 1,
      path: "",
      url: "1",
      themeName: "БЮДЖЕТНО-НАЛОГОВАЯ ПОЛИТИКА: ЧТО И КАК ИЗУЧАЕМ?",
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName:
        "ФУНДАМЕНТАЛЬНЫЕ ОСНОВЫ СОВЕРШЕНСТВОВАНИЯ БЮДЖЕТНО-НАЛОГОВОЙ ПОЛИТИКИ В УЗБЕКИСТАНЕ",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName:
        "СНИЖЕНИЕ БЮДЖЕТНОГО ДЕФИЦИТА – ОСНОВНАЯ ЗАДАЧА БЮДЖЕТНОЙ ПОЛИТИКИ",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName:
        "РАЗРАБОТКА СОВРЕМЕННОЙ НАЛОГОВОЙ ПОЛИТИКИ И ФУНДАМЕНТАЛЬНЫЕ ОСНОВЫ ВОПЛОЩЕНИЯ ЕЁ В ЖИЗНЬ",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName:
        "СОВРЕМЕННЫЕ ТЕОРИИ РАСПРЕДЕЛЕНИЯ НАЛОГОВОЙ НАГРУЗКИ И ИХ РОЛЬ В РАЗРАБОТКЕ НАЛОГОВОЙ ПОЛИТИКИ",
    },
    {
      id: 6,
      path: "",
      url: "6",
      themeName: "Оптимизация Налогового бремени ",
    },
    {
      id: 7,
      path: "",
      url: "7",
      themeName:
        "Виды налоговых льгот, предоставленных хозяйствующим субъектам",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] text-white font-bold">
        Презентации
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
              sx={{
                fontSize: 14,
                display: "flex",
                justifyContent: "space-between",
              }}
              color="text.secondary"
              gutterBottom
            >
              <img className="h-20" src={presentation} alt="" />
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
              sx={{ display: "flex", flexDirection: "column" }}
              className="flex flex-col"
              variant="h5"
              component="div"
            >
              <span className="font-bold text-xl my-3 text-black">
                {item.id}-презентация
              </span>
              {item.themeName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
