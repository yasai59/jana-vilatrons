import { useNavigate } from "react-router";
import "./category.css";

export const Category = ({ img, text, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      className="category"
      style={{ backgroundImage: `url(${img})` }}
      onClick={handleClick}
    >
      <div className="tapa flex items-center justify-center bg-clip-content">
        <p style={{ zIndex: 10 }} className="font-bold text-[15vmin]">
          {text}
        </p>
      </div>
    </div>
  );
};
