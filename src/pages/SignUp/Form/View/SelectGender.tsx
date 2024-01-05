import type { Gender } from "types/auth";

import Button from "components/Button";

interface Props {
  gender: Gender;
  onChange: (newValue: Gender) => void;
}

const SelectGender = ({ gender, onChange }: Props) => {
  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Button
        type="button"
        variant={gender === "MALE" ? "contained" : "outlined"}
        style={{
          width: "100%",
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
        onClick={() => onChange("MALE")}
      >
        남
      </Button>
      <Button
        type="button"
        variant={gender === "FEMALE" ? "contained" : "outlined"}
        style={{
          width: "100%",
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        onClick={() => onChange("FEMALE")}
      >
        여
      </Button>
    </div>
  );
};

export default SelectGender;
