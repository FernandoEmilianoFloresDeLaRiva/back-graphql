import { Author } from "../entities/author/author.entity";

export const notifyUser = async (
  data: Author,
  url: string,
  event: string
): Promise<void> => {
  try {
    const dataObject = {
      data: {
        ...data,
      },
    };
    const body = {
      method: "POST",
      headers: { "content-type": "application/json", "graphql-event": event },
      body: JSON.stringify(dataObject),
    };
    fetch(url, body)
      .then(() => console.log(`data sent to ${url}`))
      .catch((err) => {
        throw new Error(err);
      });
  } catch (err: any) {
    throw new Error(err);
  }
};
