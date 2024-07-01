import { Environment, Network, RecordSource, Store } from "relay-runtime";

const source = new RecordSource();
const store = new Store(source);

const network = Network.create((operation, variables) => {
  const graphqlEndpoint = "http://3.39.54.196:8080/graphql";

  return fetch(graphqlEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then((response) => {
    return response.json();
  });
});

const handlerProvider = null;

const environment = new Environment({
  handlerProvider,
  network,
  store,
});

export default environment;
