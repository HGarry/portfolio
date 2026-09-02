import DownloadIcon from "@mui/icons-material/Download";
import { liquidStyles } from "./styles/styles";

export default function DownloadCVButton() {
  return (
    <button
      className={`${liquidStyles.button} ${liquidStyles.glowTextWhite} cursor-pointer mt-4 mr-2`}
    >
      <a
        href="/Kaung-Si-Thu-Hein-CV.pdf"
        download="Kaung-Si-Thu-Hein-CV.pdf"
      >
        <DownloadIcon fontSize="small" />
        <span>Download CV</span>
      </a>
    </button>
  );
}
