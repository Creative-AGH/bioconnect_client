import styles from "./Tutorials.module.scss";
import art1 from "../../assets/img/art1.png";
import art2 from "../../assets/img/art2.png";
const Tutorials = () => {
  return (
    <div>
      <span>Strona główna / Poradnik </span>
      <h1>BioConnect</h1>
      <h3 style={{ color: "#D8E31A" }}>Poradnik</h3>
      <div className={styles.row}>
        <div className={styles.element}>
          <div className={styles.header}>
            <img src={art1} alt="img" />
            <h4
              style={{
                fontSize: "32px",
              }}
            >
              Witaj w BioConnect
            </h4>
          </div>
          <p className="text">
            Lörem ipsum ribelt plabelig. Fövodat infral, inte ryrar har fade
            söska. Teling geohengar i demyns mådade semåd i dönerade till emfas:
            i käligt.
          </p>
        </div>
        <div className={styles.element}>
          <div className={styles.header}>
            <img src={art2} alt="img" />
            <h4
              style={{
                fontSize: "32px",
              }}
            >
              Czy kompostowanie się opłaca?
            </h4>
          </div>
          <p className="text">
            Lörem ipsum ribelt plabelig. Fövodat infral, inte ryrar har fade
            söska. Teling geohengar i demyns mådade semåd i dönerade till emfas:
            i käligt.
          </p>
        </div>
      </div>
      <hr className={styles.hr} />
      <span className={styles.readMore}>Wczytaj więcej</span>
    </div>
  );
};

export default Tutorials;
