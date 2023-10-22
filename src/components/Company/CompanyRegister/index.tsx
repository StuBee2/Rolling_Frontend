import useAlumniCheck from "@src/hooks/Alumni/useAlumniCheck";
import useTokenCheck from "@src/hooks/Auth/useTokenCheck";
import { useState } from "react";
import Portal from "../../Common/Portal";
import AddressModal from "./AddressModal";
import Banner from "./Banner";
import Form from "./Form";
import * as S from "./style";

export default function Register() {
  useTokenCheck();
  useAlumniCheck();

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <S.RegisterContainer>
      <Banner />
      <Form setIsOpenModal={setIsModalOpen} />
      {isModalOpen && (
        <Portal>
          <AddressModal setIsOpenModal={setIsModalOpen} />
        </Portal>
      )}
    </S.RegisterContainer>
  );
}
