import { Flex, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import { getImageUrl } from "./getImageUrl";
import { Header } from "./header/header";
import { Container } from "./letter.styles";
import { LetterItem } from "./letterItem";
import { WishlistModel } from "./santaList";
import { getUserData } from "./utils/getUserData";

export const renderLetter = (responseObject: WishlistModel): JSX.Element => {
  const { personalDetails, deliveryDetails } = responseObject;

  const { username } = getUserData(personalDetails);

  return (
    <Container>
      <Header username={username} />
      <Flex flexDir={"column"}>
        <Table style={{ tableLayout: "fixed", width:'80%', margin:'20px auto',  }}>
          <Thead>
            <Tr>
              <Th>Pytanie</Th>
              <Th>Odpowiedź</Th>
            </Tr>
          </Thead>
          <Tbody>
            {personalDetails
              .filter(([key, value]) => key !== "Twoja nazwa na forum YWP")
              .map((entry) => (
                <LetterItem key={entry[0]} entry={entry} />
              ))}
          </Tbody>
        </Table>

        <Table>
          <Thead>
            <Tr>
              <Th colSpan={2}>Dane dostawy</Th>
            </Tr>
          </Thead>
          <tbody>
            {deliveryDetails.map((entry) => (
              <LetterItem key={entry[0]} entry={entry} />
            ))}
          </tbody>
        </Table>
      </Flex>
    </Container>
  );
};
