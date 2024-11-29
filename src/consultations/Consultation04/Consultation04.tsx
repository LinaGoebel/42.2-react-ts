import LoginForm from "../../components/LoginForm/LoginForm";
import { Consultaiton04Container } from "./styles";

function Consultation04() {
  //readonly
  interface User {
    readonly name: string;
    age: number;
  }

  const user: User = { name: "Tom", age: 23 };

  user.age = 24;
  // user.name = 'John';

  const colors: readonly string[] = ["red", "black"];
  // colors[0] = 'blue';

  //unknow
  let userName: unknown;
  userName = "John";
  userName = undefined;
  userName = "Olga";

  //   console.log(userName.toUpperCase());
  if (typeof userName === "string") {
    console.log(userName.toUpperCase);
  }

  return (
    <Consultaiton04Container>
      <LoginForm /> 
    </Consultaiton04Container>
  );
}

export default Consultation04;
