import styled from "@emotion/styled";
import { getImageUrl } from "./getImageUrl";

export const Table = styled.table`
  margin: auto;
  margin-top: 40px;
  border-collapse: collapse;
  border: 1px solid black;
`;

export const Container = styled.div`
  background-image: url(data:image/png;base64,${getImageUrl()});
  background-size: cover;
`;

export const Wrapper = styled.div`
  padding-top: 40%;
  padding-bottom: 10%;
  width: 70%;
  margin: auto;
`;
