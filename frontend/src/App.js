import { Box } from "@chakra-ui/react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContainer from "./components/MainContainer";
import { AppState } from "./components/context/AppProvider";

function App() {
  const { contentLoading } = AppState();
  return (
    <Box
      className="mainInterFace"
      position="relative"
      filter="drop-shadow(2px 5px 5px rgba(0, 0, 0, 0.8))"
    >
      <Header />
      <MainContainer />
      <Footer />
    </Box>
  );
}

export default App;
