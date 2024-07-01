/**
 * @generated SignedSource<<8f268447553dd806775e9844b3f87a5b>>
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
    readonly uploadDate: string;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "uploadDate",
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
    "cacheID": "4e9988528d01d07bb4bd132dbeee6232",
    "id": null,
    "metadata": {},
    "name": "getProductsQuery",
    "operationKind": "query",
    "text": "query getProductsQuery {\n  products {\n    id\n    title\n    imageUrl\n    price\n    location\n    uploadDate\n  }\n}\n"
  }
};
})();

(node as any).hash = "15824b391b16de628a48c34078c52ec0";

export default node;
