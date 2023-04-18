import FirmRegister from "../../components/Common/Register/FirmRegister";
import FirmReview from "../../components/Common/Register/FirmReview";
// import StarRating from "../../components/Common/Register/test";
// import App from "../../components/Common/Register/test";
// import StarIcon from "../../components/Common/Register/test/Star";
import App from "../../components/Common/Register/ReviewStarScope/index";

export default function RegisterPage() {
  return (
    <>
      <FirmRegister />
      <FirmReview />
      <App />
    </>
  );
}
