import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar";

interface Props {
  starCount: number;
}

export default function Star({ starCount }: Props) {
  return (
    <p>
      {Array.from({ length: 5 }).map((_, idx) => (
        <AiFillStar
          key={idx}
          size={20}
          color={idx < starCount ? "#FAD85F" : "#d9d9d9"}
        />
      ))}
    </p>
  );
}
