import { useState } from "react";
import { ModalComponent } from "./Modal";
import data from "./data.json";
import EducationElement from "./EducationElement";
import styles from "./index.module.scss";

export const EducationPage = () => {
  const [open, setOpen] = useState(false);
  const [textToModal, setTextToModal] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleSetTextToModal = (text: string) => setTextToModal(text);

  return (
    <div>
      <p className={styles.header}>
        Rzeczy których nie można wrzucić do kompostownika
      </p>
      <div className={styles.EducationElementsWrapper}>
        {data.list.map((item) => (
          <EducationElement
            handleOpenFromChild={() => handleOpen()}
            handleSetTextToModalFromChild={(text: string) => handleSetTextToModal(text)}
            description={item.description}
            name={item.name}
            imageName={item.imgName}
          />
        ))}
      </div>
      {open && (
        <ModalComponent
          handleClose={() => handleClose()}
          open={open}
          text={textToModal}
        />
      )}
    </div>
  );
};
