import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";

import {
  Homework09Container,
  FormWrapper,
  ResultBlock,
  StyledDogImage,
} from "./styles";
import Input from "components/Input/Input";

function Homework09() {
  const [firstNote, setFirstNote] = useState<string>("");
  const [secondNote, setSecondNote] = useState<string>("");
  const [dogImage, setDogImage] = useState<string | undefined>(undefined);

  const firstNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstNote(event.target.value);
  };

  const secondNoteOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSecondNote(event.target.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );
      console.log(response);

      setDogImage(response.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [firstNote]);

  return (
    <Homework09Container>
      <FormWrapper>
        <Input
          name="first-note"
          placeholder="Enter first note"
          value={firstNote}
          onChange={firstNoteOnChange}
        />
        <Input
          name="second-note"
          placeholder="Enter second note"
          value={secondNote}
          onChange={secondNoteOnChange}
        />
      </FormWrapper>
      <ResultBlock>
        {dogImage && <StyledDogImage src={dogImage} alt="Random dog" />}
      </ResultBlock>
    </Homework09Container>
  );
}

export default Homework09;
