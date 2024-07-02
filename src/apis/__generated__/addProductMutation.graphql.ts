/**
 * @generated SignedSource<<5d4418055c217cd177e2e7600ce31efd>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type addProductMutation$variables = {
  imageUrl?: string | null | undefined;
  location?: string | null | undefined;
  price?: number | null | undefined;
  title?: string | null | undefined;
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
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "imageUrl"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "location"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "price"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "title"
},
v4 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "imageUrl",
        "variableName": "imageUrl"
      },
      {
        "kind": "Variable",
        "name": "location",
        "variableName": "location"
      },
      {
        "kind": "Variable",
        "name": "price",
        "variableName": "price"
      },
      {
        "kind": "Variable",
        "name": "title",
        "variableName": "title"
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "addProductMutation",
    "selections": (v4/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "addProductMutation",
    "selections": (v4/*: any*/)
  },
  "params": {
    "cacheID": "daf986f8d20d956ed54029de3a0e50f9",
    "id": null,
    "metadata": {},
    "name": "addProductMutation",
    "operationKind": "mutation",
    "text": "mutation addProductMutation(\n  $title: String\n  $imageUrl: String\n  $price: Int\n  $location: String\n) {\n  addProduct(title: $title, imageUrl: $imageUrl, price: $price, location: $location) {\n    id\n    title\n    imageUrl\n    price\n    location\n    uploadDate\n  }\n}\n"
  }
};
})();

(node as any).hash = "55426e231f71fd468e9e969264799c97";

export default node;
