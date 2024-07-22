# Serverless architecture:

## Serverless:

Serverless architecture is an approach to **software design** that allows developers to build and run services without having to manage the underlying infrastructure.

## How Serverless Architecture Works.

One of the most popular serverless architectures is Function as a Service (FaaS), where developers write their application code as a set of discrete functions.

1. Each function will perform a specific task when triggered by an event, such as an incoming email or an HTTP request.
2. After the customary stages of testing, developers then deploy their functions, along with their triggers, to a cloud provider account. When a function is invoked, the cloud provider either executes the function on a running server, or, if there is no server currently running, it spins up a new server to execute the function.
3. This execution process is abstracted away from the view of developers, who focus on writing and deploying the application code.

Diagram:
https://imgix.datadoghq.com/img/knowledge-center/serverless-architecture/how-serverless-functions-work.png?auto=format&fit=max&w=847&dpr=2

## Benefits of Serverless Architecture:

1. Costs - on demand execution (lambda)
2. Scalability
3. Productivity

## Serverless Architecture Use Cases

1. Trigger Based tasks
2. REST API
3. Async Processing

## Local workspace setup (Serverless - lambda):

In this call, we are going to discuss about the way to implement the AWS lambda in our local using the __serverless framework__ using the nodejs.

1. Install the __serverless__ .
2. __serverless-offline__ a package helps to run the serverless applications in local without providing the credentials in serverless framework app.
3. __axios__ for performing API Calls.