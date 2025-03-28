import "./AferaModal.css";
import { Afera } from "../data/afereData";

interface Props {
  afera: Afera;
  onClose: () => void;
}

const AferaModal = ({ afera, onClose }: Props) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-header">
          <span className="modal-icon">{afera.ikonica}</span>
          <h2>{afera.naziv}</h2>
        </div>
        <p>
          <strong>Godina:</strong> {afera.godina}
        </p>
        <p>
          <strong>Kategorija:</strong> {afera.kategorija}
        </p>
        <p className="modal-description">{afera.detalji || afera.opis}</p>
        <a href={afera.izvor} target="_blank" rel="noopener noreferrer">
          Više informacija
        </a>
      </div>
    </div>
  );
};

export default AferaModal;
