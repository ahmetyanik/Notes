/* 2- Themeprovider ile styledcomponentin kendi temalarini kullanabiliriz.
  Bunun icin önce ThemeProvider'i import etmeliyiz.
  Daha sonra da en dis component olarak diger componentleri sarmalamaliyiz.
*/

import { ThemeProvider } from "styled-components";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import GlobalStyles from "./components/styles/Global";
import content from "./content.js";

/*
  3-
  ThemeProvider icin theme props'u ile her component'e
  style verilerimizi gönderebilecegiz. Bu nedenle asagidaki 
  theme degiskenini olusturup icine istedigimiz degerleri 
  objeler seklinde yazabiliriz.

*/

/*

  Globalstyles dosyasinda olusturulan global style degerleri
  asagidaki gibi <GlobalStyles/> adli component vasitasiyla
  her yerden erisilebilir hale gelir. ThemeProvider ile
  arasindaki farki tam olarak anlamadim. 

*/

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },

  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => {
            return (
              <div>
                <Card key={index} item={item} />
              </div>
            );
          })}
        </Container>
        <Footer/>
      </>
    </ThemeProvider>
  );
}

export default App;
