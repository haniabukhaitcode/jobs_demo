import { Button } from "semantic-ui-react";
import React from "react";

const ButtonStyled = props => {
  const ButtonELement = () => {
    if (props.Primary) {
      return <Button color="red">{props.children}</Button>;
    } else if (props.secondary) {
      return <Button color="green">{props.children}</Button>;
    }
  };
  return <ButtonELement />;
};

export default ButtonStyled;
