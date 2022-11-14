import { GetStaticPaths, GetStaticProps } from "next";
import { renderLetter } from "../letters/letter";
import { useUsername } from "../letters/letters";
import { getList, getUsernamesFromList, WishlistModel } from "../letters/santaList";
import { getUserData } from "../letters/utils/getUserData";

const GiftPage = (props: { gift: WishlistModel }): JSX.Element => {
  if (!props.gift) {
    return <></>;
  }

  return <>{renderLetter(props.gift)}</>;
};

export default GiftPage;

export const getStaticProps: GetStaticProps = async (ctx) => {
  const list = await getList();
  const usernameFromParams = ctx.params?.username;

  if (typeof usernameFromParams !== "string") {
    return { notFound: true };
  }

  const usernamesMatch = list.find((listItem) => {
    const [, username] = listItem.personalDetails.find(
      ([key]) => key === "Twoja nazwa na forum YWP"
    ) || ["", ""];

    return username === usernameFromParams;
  });

  if (!usernamesMatch) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      gift: usernamesMatch,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const usernames = await getUsernamesFromList();

  return {
    paths: usernames.map((username) => ({ params: { username } })),
    fallback: true,
  };
};
