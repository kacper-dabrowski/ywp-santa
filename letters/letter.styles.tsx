import styled from "@emotion/styled";
import { getImageUrl } from "./getImageUrl";

export const Table = styled.table`
  margin: auto;
  margin-top: 40px;
  border-collapse: collapse;
  border: 1px solid black;
`;

export const Container = styled.div`
padding-top:35%;
background-image: url(${getImageUrl()});
  background-size: contain;
  background-repeat:no-repeat;

  @media(min-width:1920px){
  background-size: cover;

  }
`;

export const Wrapper = styled.div`
  padding-top: 40%;
  padding-bottom: 10%;
  margin: auto;
`;
