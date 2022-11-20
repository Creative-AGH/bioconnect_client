import MapComponent from "../map";
import styles from "./LandingPage.module.scss";
import { Button } from "@mui/material";
import mainImg from "../../layout/imgs/main.svg";

export const LandingPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.row}>
        <div className={styles.column}>
          <img src={mainImg} alt="" />
        </div>
        <div className={styles.column}>
          <h1>BioConnect</h1>
          <h2>Wadowice</h2>
          <h3>Kompost “Złotem Ogrodników”</h3>
          <p>
          Ten naturalny nawóz użyźnia, napowietrza, zmniejsza zakwaszenie i zachwaszczenie gleby. Rośliny rosną większe, a plony są zdecydowanie okazalsze. Dzięki kompostownikowi oszczędzisz zarówno na zakupie chemicznych środków, jak i na wywozie bioodpadów
          </p>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#D8E31A",
              color: "#000",
              borderRadius: "36px",
              fontSize: "24px",
            }}
            className={styles.btn}
          >
            Zadeklaruj bio odpady
          </Button>
        </div>
      </div>
      <div className={styles.row}>
        <MapComponent />
      </div>
    </main>
  );
};
