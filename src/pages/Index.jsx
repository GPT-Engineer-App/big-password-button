import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputGroup size="lg">
      <Input pr="4.5rem" type={showPassword ? "text" : "password"} placeholder="Enter password" />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleToggleShowPassword}>
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default Index;
