/**
 * @generated SignedSource<<73bd2aca3c883fb7c2377abe4d0f6e4c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type getProductsQuery$variables = Record<PropertyKey, never>;
export type getProductsQuery$data = {
  readonly products: ReadonlyArray<{
    readonly id: string;
    readonly imageUrl: string | null | undefined;
    readonly location: string;
    readonly price: number;
    readonly title: string;
  } | null | undefined> | null | undefined;
};
export type getProductsQuery = {
  response: getProductsQuery$data;
  variables: getProductsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "products",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "imageUrl",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "location",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "getProductsQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "getProductsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "28694e68aa841d3f73c5fe014848c2cd",
    "id": null,
    "metadata": {},
    "name": "getProductsQuery",
    "operationKind": "query",
    "text": "query getProductsQuery {\n  products {\n    id\n    title\n    imageUrl\n    price\n    location\n  }\n}\n"
  }
};
})();

(node as any).hash = "35a60a561a1e2aa092e6b2350233f965";

export default node;
