import { Td, Tr } from "@chakra-ui/react";

export const LetterItem = ({ entry }: { entry: [string, string] }) => {
  const [key, value] = entry;

  return (
    <Tr>
      <Td key={key}>{key}</Td>
      <Td>{value}</Td>
    </Tr>
  );
};
