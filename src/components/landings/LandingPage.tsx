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
          <h3>Lörem ipsum badåktigt nir, men</h3>
          <p>
            m än jinade viligen jenektig lagen om lanas oktig spejenyre, pangar
            geogt utom henifiera, kad jag demosocial i nytren mikropöt belig.{" "}
          </p>
          <Button
            variant="outlined"
            style={{
              backgroundColor: "#D8E31A",
              color: "#000",
              borderRadius: "36px",
              fontSize: "24px",
            }}
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
