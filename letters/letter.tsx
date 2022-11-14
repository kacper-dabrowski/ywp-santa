import { Header } from "./header/header";
import { Container, Table, Wrapper } from "./letter.styles";
import { LetterItem } from "./letterItem";
import { WishlistModel } from "./santaList";
import { getUserData } from "./utils/getUserData";

export const renderLetter = (responseObject: WishlistModel): JSX.Element => {
  const { personalDetails, deliveryDetails } = responseObject;

  const { username } = getUserData(personalDetails);

  return (
    <Container>
      <Wrapper >
        <Header username={username} />
        <Table >
          <thead>
            <tr>
              <th>Pytanie</th>
              <th>Odpowiedź</th>
            </tr>
          </thead>
          <tbody>
            {personalDetails.map((entry) => (
              <LetterItem key={entry[0]} entry={entry} />
            ))}
          </tbody>
        </Table>

        <Table >
          <thead>
            <tr>
              <th colSpan={2}>Dane dostawy</th>
            </tr>
          </thead>
          <tbody>
            {deliveryDetails.map((entry) => (
              <LetterItem key={entry[0]} entry={entry} />
            ))}
          </tbody>
        </Table>
      </Wrapper>
    </Container>
  );
};
