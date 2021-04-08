import { Resolver, Mutation, Arg, Query, InputType, Field } from "type-graphql";
import { Provider } from "../entity/Provider";

@InputType()
class ProviderInput {
  @Field()
  description: string;

  @Field()
  state: string;
}

@Resolver()
export class ProviderResolver {
  @Mutation(() => Provider)
  async create(@Arg("data", () => ProviderInput) data: ProviderInput) {
    const provider = await Provider.create(data).save();
    return provider;
  }

  @Query(() => [Provider])
  providers() {
    return Provider.find();
  }

  /*@Mutation(() => Boolean)
  async edit() {
    const providers = (await Provider.find()).map(({ id }) => id);
    providers.forEach((id) => {
      Provider.update(id);
    });
    return true;
  }*/


}