export async function fetcher<T>(baseURL: string, path: string, query?: string): Promise<T> {
  const url = `${baseURL}/${path}?${query}`;
  console.log({ fetcherURL: url }); //*** */

  const fetchResult = await fetch(url);

  if (!fetchResult.ok) {
    throw new Error(`Error fetching data url: ${url}`);
  }

  const jsonData = await fetchResult.json();
  return jsonData;
}

export function getErrorMessage(error: unknown) {
  let message = "An unknown error occurred";
  if (error instanceof Error) {
    message = error.message;
  }

  return message;
}
