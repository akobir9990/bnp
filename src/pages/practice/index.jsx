import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import PracticeIcon from "../../assets/images/practice-work-icon.png";

export default function Lecture() {
  const items = [
    {
      id: 1,
      path: "https://t.me/tashkentInstituteOfFinance/48",
      url: "1",
      themeName: "Бюджетно-налоговая политика: что и как изучаем?",
    },
    {
      id: 2,
      path: "https://t.me/tashkentInstituteOfFinance/49",
      url: "2",
      themeName:
        "Модели формирования рыночной экономики и их взаимосвязь с бюджетно-налоговой политикой",
    },
    {
      id: 3,
      path: "https://t.me/tashkentInstituteOfFinance/50",
      url: "3",
      themeName:
        "Снижение бюджетного дефицита – основная задача бюджетной политики",
    },
    {
      id: 4,
      path: "https://t.me/tashkentInstituteOfFinance/51",
      url: "4",
      themeName:
        "Разработка современной налоговой политики и фундаментальные основы воплощения её в жизнь",
    },
    {
      id: 5,
      path: "https://t.me/tashkentInstituteOfFinance/52",
      url: "5",
      themeName:
        "Современные теории распределения налоговой нагрузки и их роль в разработке бюджетно-налоговой политики",
    },
    {
      id: 6,
      path: "https://t.me/tashkentInstituteOfFinance/53",
      url: "6",
      themeName:
        "Оптимизация налоговой нагрузки – актуальная проблема налоговой политики",
    },
    {
      id: 7,
      path: "https://t.me/tashkentInstituteOfFinance/54",
      url: "7",
      themeName:
        "Оптимальное предоставление налоговых льгот – залог эффективности налоговой политики",
    },
    {
      id: 8,
      path: "https://t.me/tashkentInstituteOfFinance/55",
      url: "8",
      themeName:
        "Современные актуальные проблемы бюджетно-налоговой политики, претензии, предъявляемые к ним, пути решения проблем и смягчения претензий",
    },
    {
      id: 9,
      path: "https://t.me/tashkentInstituteOfFinance/56",
      url: "9",
      themeName:
        "Фундаментальные основы совершенствования бюджетно-налоговой политики в Узбекистане",
    },
  ];
  return (
    <Box sx={{ minWidth: 275 }}>
      <h1 className="text-center text-[50px] text-white font-bold">
        Практическая работа
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
              <img className="h-20" src={PracticeIcon} alt="" />
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
                {item.id}-Практические занятия
              </span>
              {item.themeName}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
