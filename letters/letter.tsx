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
      <Flex flexDir={"column"} paddingBottom="40px">
        <Table
          style={{ tableLayout: "fixed", width: "80%", margin: "20px auto" }}
        >
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
        <p
          style={{
            width: "80%",
            margin: "40px auto",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.5rem",
          }}
        >
          Aby osoba mogła otrzymać Twój prezent wyślij go na adres, który podała
          w formularzu,
          <br /> pamiętaj jednak, żeby wysłać prezent maksymalnie do 9 grudnia
          2021 roku!
        </p>
        <Table
          style={{ tableLayout: "fixed", width: "80%", margin: "20px auto" }}
        >
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

        <p
          style={{
            width: "80%",
            margin: "0 auto",
            textAlign: "justify",
            fontSize: "1.2rem",
          }}
        >
          Po wysłaniu prezentu pamiętaj, żeby wysłać nam w odpowiedzi do tej
          wiadomości numer do śledzenia paczki, co da nam możliwość sprawdzenia
          czy obdarowywany otrzymał swój prezent. Skoro otrzymałeś tą wiadomość
          oznacza to, że Ty również masz swojego sekretnego Mikołaja! Oczekuj
          więc prezentu w swojej skrzynce (lub w rękach kuriera czy w otworze
          paczkomatu), a jak już prezent rozpakujesz możesz się nim pochwalić w
          odpowiednim temacie na forum. Jeżeli chcesz trochę ułatwić zadanie
          swojemu mikołajowi możesz zmienić ustawienia swojego konta na forum z
          prywatnego na publiczny, żeby Mikołaj mógł na podstawie twoich postów
          dowiedzieć się o Tobie trochę więcej. Jeśli wszystko jest jasne, to
          odpowiedz na tę wiadomość. Daj nam znać, że do Ciebie dotarła.
          (wystarczy, że klikniesz serduszko pod tą wiadomością) 
          <br />
          <br/>
          Z poważaniem,
          Elfowi pomocnicy! <br />
          <br/>
          <b>
            P.S. Jeśli masz jakiś problem lub pytania w pierwszej kolejności
            napisz do nas.
          </b>
        </p>
      </Flex>
    </Container>
  );
};
