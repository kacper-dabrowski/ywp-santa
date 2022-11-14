import styled from "@emotion/styled";

interface HeaderProps {
  username: string;
}

export const Header = ({ username }: HeaderProps) => (
  <Wrapper>
    <MainHeader>Witaj Sekretny Mikołaju!</MainHeader>
    <SecondaryHeader>Nadszedł czas byś poznał osobę, którą będziesz obdarowywał!</SecondaryHeader>
    <br />
    <JustifyText>
    <p>
      Nasza maszyna losująca zdecydowała, że będziesz Mikołajem dla „{username}
      ”.
    </p>
    <p>Pamiętaj, przede wszystkim zachowaj to w tajemnicy.</p>
    <p>
      Żeby ułatwić Ci pracę i podsunąć jakiś pomysł mamy dla Ciebie odpowiedzi,
      które wspomniana wyżej osoba podała w formularzu.
    </p>
    </JustifyText>
  </Wrapper>
);

const MainHeader = styled.h1`
font-size:2rem;`

const SecondaryHeader = styled.h2`
font-size:1.25rem;`

const JustifyText = styled.div`
margin:0 auto;
text-align:center;`

const Wrapper = styled.div`
text-align:center;
width:40%;
margin:0 auto;`
