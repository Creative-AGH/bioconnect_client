import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./index.module.scss";

interface IProps {
  open: boolean;
  handleClose: any;
  text: string;
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const ModalComponent = ({ open, handleClose, text }: IProps) => (
  <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Opis
      </Typography>
      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        {text}
      </Typography>
      <CloseIcon className={styles.closeIcon} onClick={handleClose} />
    </Box>
  </Modal>
);
