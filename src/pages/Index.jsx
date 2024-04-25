import { Button, Input, InputGroup, InputRightElement, Flex } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <InputGroup size="lg" justifyContent="center" alignItems="center" w="30%">
        <Input pr="4.5rem" type={showPassword ? "text" : "password"} placeholder="Enter password" />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleToggleShowPassword} colorScheme="black">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  );
};

export default Index;
