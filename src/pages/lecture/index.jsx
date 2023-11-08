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
      path: "https://t.me/tashkentInstituteOfFinance/48",
      url: "1",
      themeName:
        "НАУЧНО-ПРАВОВЫЕ ОСНОВЫ УПРАВЛЕНИЯ ГОСУДАРСТВЕННЫМИ ФИНАНСАМИ: ФУНКЦИИ И ОСОБЕННОСТИ ОРГАНИЗАЦИЙ",
    },
    {
      id: 2,
      path: "https://t.me/tashkentInstituteOfFinance/49",
      url: "2",
      themeName:
        "ГОСУДАРСТВЕННОЕ РЕГУЛИРОВАНИЕ ЭКОНОМИКИ: НЕОБХОДИМОСТЬ, ЦЕЛИ, ФУНКЦИИ",
    },
    {
      id: 3,
      path: "https://t.me/tashkentInstituteOfFinance/50",
      url: "3",
      themeName: "ОСНОВЫ ГОСУДАРСТВЕННО-ЧАСТНОГО ПАРТНЁРСТВА",
    },
    {
      id: 4,
      path: "https://t.me/tashkentInstituteOfFinance/51",
      url: "4",
      themeName:
        "УПРАВЛЕНИЕ ФИНАНСОВЫМИ РЕСУРСАМИ ПРЕДПРИЯТИЙ С ДОЛЕЙ ГОСУДАРСТВА: ФОРМИРОВАНИЕ И ИСПОЛЬЗОВАНИЕ",
    },
    {
      id: 5,
      path: "https://t.me/tashkentInstituteOfFinance/52",
      url: "5",
      themeName:
        "АКТУАЛЬНЫЕ ЗАДАЧИ ОРГАНИЗАЦИИ БЮДЖЕТНОГО УСТРОЙСТВА И БЮДЖЕТНОГО ПРОЦЕСС УЗБЕКИСТАНА",
    },
    {
      id: 6,
      path: "https://t.me/tashkentInstituteOfFinance/53",
      url: "6",
      themeName:
        "ВОПРОСЫ ОБЕСПЕЧЕНИЯ УСТОЙЧИВОСТИ ДОХОДОВ РЕСПУБЛИКАНСКОГО И МЕСТНЫХ БЮДЖЕТОВ",
    },
    {
      id: 7,
      path: "https://t.me/tashkentInstituteOfFinance/54",
      url: "7",
      themeName:
        "ВОПРОСЫ РАСПРЕДЕЛЕНИЯ РАСХОДОВ РЕСПУБЛИКАНСКОГО И МЕСТНЫХ БЮДЖЕТОВ И ЭФФЕКТИВНОГО ИСПОЛЬЗОВАНИЯ ИХ",
    },
    {
      id: 8,
      path: "https://t.me/tashkentInstituteOfFinance/55",
      url: "8",
      themeName: "ВОПРОСЫ УПРАВЛЕНИЯ ГОСУДАРСТВЕННОГО КРЕДИТА И ДОЛГА.",
    },
    {
      id: 9,
      path: "https://t.me/tashkentInstituteOfFinance/56",
      url: "9",
      themeName:
        "РОЛЬ ВНЕБЮДЖЕТНЫХ ГОСУДАРСТВЕННЫХ ЦЕЛЕВЫХ ФОНДОВ В СОЦИАЛЬНО-ЭКОНОМИЧЕСКОМ РАЗВИТИИ СТРАНЫ",
    },
    {
      id: 10,
      path: "https://t.me/tashkentInstituteOfFinance/57",
      url: "10",
      themeName: "ПЕНСИОННЫЙ ФОНД И ПУТИ ЕГО ИСПОЛЬЗОВАНИЯ",
    },
    {
      id: 13,
      path: "https://t.me/tashkentInstituteOfFinance/58",
      url: "13",
      themeName:
        "ДОХОДЫ И РАСХОДЫ ГОСУДАРСТВЕННОГО ФОНДА СОДЕЙСТВИЯ ЗАНЯТОСТИ НАСЕЛЕНИЯ",
    },
    {
      id: 16,
      path: "https://t.me/tashkentInstituteOfFinance/59",
      url: "16",
      themeName:
        "ДОХОДЫ И РАСХОДЫ ФОНДА РЕКОНСТРУКЦИИ И РАЗВИТИЯ РЕСПУБЛИКИ УЗБЕКИСТАН.",
    },
  ];
  return (
    <Box className="" sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] font-bold text-white">Лекции</h1>
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
                Лекция - {item.id}
              </span>
              {item.themeName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
