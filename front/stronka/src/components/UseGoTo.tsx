import { useNavigate } from "react-router-dom";

const useGoTo = () => {
  const navigate = useNavigate();

  const goTo = (path: string) => {
    navigate(path);
  };

  return goTo;
};

export default useGoTo;
