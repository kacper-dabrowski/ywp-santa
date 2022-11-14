import { TableData } from "./letterItem.styles";

export const LetterItem = ({ entry }: { entry: [string, string] }) => {
  const [key, value] = entry;

  return (
    <tr>
      <TableData key={key}>{key}</TableData>
      <TableData>{value}</TableData>
    </tr>
  );
};
