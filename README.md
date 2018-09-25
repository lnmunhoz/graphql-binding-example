## What is this repo?
This repo is a proof of concept on how you wrap your graphql apis into a graphql-binding. A binding is basically client wrapping all your graphql operations into a single object, so its easier to interact with your api from multiple clients.

## How to use it?
Too see it working, there's one command that triggers all the steps:
```
yarn bootstrap
```

### Steps breakdown
  1. Start the graphql server (the server you want to make request from the binding)
  2. Assuming we are creating the binding from another project, for the sake of this example, we fetch the schema from the server and save in `./src/generated/binding/schema.graphql`. It will be a copy of the schema in `./src/server/schema.graphql`.
  3. Generate the binding class using the fetched schema and store in `./src/binding/generated/binding.ts`
  4. Run the example file that creates a new instance of the binding for the `hello` query

## Conclusion
You can use this approach to communicate between multiple graphql servers from your api. You can create a new instance of the bindings and add to your context, so all your resolvers will have access to multiple graphql apis powered by `typescript` and `graphql-binding`.

I hope it was useful! Cheers :)

## License
MIT



