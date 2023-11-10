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
      themeName:
        "Научно-правовые основы управления государственными финансами: функции и особенности организаций",
    },
    {
      id: 2,
      path: "",
      url: "2",
      themeName:
        "Государственное регулирование экономики: необходимость, цели, функции",
    },
    {
      id: 3,
      path: "",
      url: "3",
      themeName: "Основы государственно-частного партнёрства",
    },
    {
      id: 4,
      path: "",
      url: "4",
      themeName:
        "Управление финансовыми ресурсами предприятий с долей государства: формирование и использование",
    },
    {
      id: 5,
      path: "",
      url: "5",
      themeName:
        "Актуальные задачи организации бюджетного устройства и бюджетного процесс Узбекистана",
    },
    {
      id: 6,
      path: "",
      url: "6",
      themeName:
        "Вопросы обеспечения устойчивости доходовр еспубликанского и местных бюджетов",
    },
    {
      id: 7,
      path: "",
      url: "7",
      themeName:
        "Вопросы распределения расходов республиканского и местных бюджетов и эффективного использования их",
    },
    {
      id: 8,
      path: "",
      url: "8",
      themeName: "Вопросы управления государственного кредита и долга.",
    },
    {
      id: 9,
      path: "",
      url: "9",
      themeName:
        "Роль внебюджетных государственных целевых фондов в социально-экономическом развитии страны",
    },
    {
      id: 10,
      path: "",
      url: "10",
      themeName:
        "Доходы и расходы государственного фонда содействия занятости населения",
    },
    {
      id: 11,
      path: "",
      url: "11",
      themeName:
        "Доходы и расходы фонда реконструкции и развития республики узбекистан",
    },
    {
      id: 12,
      path: "",
      url: "12",
      themeName:
        "Доходы и расходы фонда реконструкции и развития республики узбекистан",
    },
    {
      id: 13,
      path: "",
      url: "13",
      themeName:
        "Доходы и расходы фонда реконструкции и развития республики узбекистан",
    },
    {
      id: 14,
      path: "",
      url: "14",
      themeName:
        "Доходы и расходы фонда реконструкции и развития республики узбекистан",
    },
    {
      id: 15,
      path: "",
      url: "15",
      themeName:
        "Доходы и расходы фонда реконструкции и развития республики узбекистан",
    },
    {
      id: 16,
      path: "",
      url: "16",
      themeName:
        "Доходы и расходы фонда реконструкции и развития республики узбекистан",
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
