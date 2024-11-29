import { ChangeEvent, useState } from "react";
import Counter from "../../components/Counter/Counter";
import { Lesson08Container, GreenBox, BlueBox, InputExample } from "./styles";

function Lesson08() {
  const [count, setCount] = useState<number>(0);

  const onPlusClick = (): void => {
    setCount((prevValue) => prevValue + 1);
  };

  const onMinusClick = (): void => {
    setCount((prevValue) => prevValue - 1);
  };

  // --------------------
  // Состояние для хранения значения инпута (только одного)
  const [inputValueExample, setInputValueExample] = useState<string>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    // setInputValueExample(`${event.target.value} control`)
    setInputValueExample(event.target.value);
  };

  return (
    <Lesson08Container>
      {/* Контролируемые и неконтролируемые компоненты */}
      <InputExample
        name="example1"
        placeholder="example text"
        onChange={onChangeInput}
        value={inputValueExample}
      />
      {/* Поднятие состояния */}
      <Counter countValue={count} onMinus={onMinusClick} onPlus={onPlusClick} />
      {/* Emotion (шаблоны) */}
      <GreenBox>Green Box</GreenBox>
      <BlueBox>Blue Box</BlueBox>
    </Lesson08Container>
  );
}

export default Lesson08;