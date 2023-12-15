import { Box, Container } from "@mui/material";
import titul from "../../assets/titul.png";
import "./style.css";
// import quiz from "../../../test";
function HomePage() {
  // console.log("console log => ", quiz);

  return (
    <Container className="text-white">
      <Box className="flex justify-center items-center text-center py-[15px]">
        <Box className="backdrop-blur-sm bg-white/30 p-[5px] md:py-[10px] md:px-[50px] max-w-2xl h-[100vh] bg-scroll flex flex-col justify-center items-center text-center border-[solid] rounded-md border-[white] border-[3px]">
          <h1>
            МИНИСТЕРСТВО ВЫСШЕГО ОБРАЗОВАНИЯ, НАУКИ И ИННОВАЦИЙ РЕСПУБЛИКИ
            УЗБЕКИСТАН
          </h1>
          <h2>ТАШКЕНТСКИЙ ФИНАНСОВЫЙ ИНСТИТУТ</h2>
          <h2 className="md:text-3xl text-xl mb-2 uppercase">
            Н.Э.Жиянова, Х.М.Исаев
          </h2>

          <h1 className="md:text-3xl text-xl font-bold my-5">
            БЮДЖЕТНО-НАЛОГОВАЯ ПОЛИТИКА{" "}
          </h1>
          <h2 className="md:text-3xl text-4 mb-4">ИННОВАЦИОННЫЙ ВЕБ УЧЕБНИК</h2>
          <h3 className="">
            для специальности магистратуры 70410401–”Государственные финансы и
            международные финансы”
          </h3>

          <img className="md:w-[400px] w-[300px] m-10" src={titul} alt="" />
          <p className="mt-10">Ташкент-2023 г.</p>
          {/* <p className="md:text-5xl text-[22px]">ГОСУДАРСТВЕННЫЕ ФИНАНСЫ</p> */}
        </Box>
      </Box>
    </Container>
  );
}

export default HomePage;
