/**
 * @generated SignedSource<<70254d6fd41ad4b775c7f0b546b12736>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddProductInput = {
  imageUrl?: string | null | undefined;
  location: string;
  price: number;
  title: string;
  uploadDate: string;
};
export type addProductMutation$variables = {
  input: AddProductInput;
};
export type addProductMutation$data = {
  readonly addProduct: {
    readonly id: string;
    readonly imageUrl: string | null | undefined;
    readonly location: string;
    readonly price: number;
    readonly title: string;
    readonly uploadDate: string;
  } | null | undefined;
};
export type addProductMutation = {
  response: addProductMutation$data;
  variables: addProductMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "addProduct",
    "plural": false,
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "addProductMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "addProductMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8e636176ce4ba0397f6479a8737c2754",
    "id": null,
    "metadata": {},
    "name": "addProductMutation",
    "operationKind": "mutation",
    "text": "mutation addProductMutation(\n  $input: AddProductInput!\n) {\n  addProduct(input: $input) {\n    id\n    title\n    imageUrl\n    price\n    location\n    uploadDate\n  }\n}\n"
  }
};
})();

(node as any).hash = "cfb4ebffc42f270d55ef62669b5e695d";

export default node;
