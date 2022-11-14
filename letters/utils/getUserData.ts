const usernameKey = "Twoja nazwa na forum YWP";

export const getUserData = (entry: [string, string][]) => {
  const [, username] = entry.find(([key]) => key === usernameKey) || ["", ""];

  return { username };
};


