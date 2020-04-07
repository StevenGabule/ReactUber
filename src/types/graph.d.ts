export const typeDefs = ["type SayGoodbyeResponse {\n  text: String!\n  error: Boolean\n}\n\ntype Query {\n  sayBye(name: String!): SayGoodbyeResponse!\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: SayGoodbyeResponse;
}

export interface SayByeQueryArgs {
  name: string;
}

export interface SayGoodbyeResponse {
  text: string;
  error: boolean | null;
}
