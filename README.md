# Postman Node Docker example

An example node project with basic infrastructure for automating postman integration tests.

## Project structure

This project consists of the following parts:

1. simple node api located at `/api` folder
2. mongo db which the api is talking to. mongoose model is at `/api/models` folder
3. postman tests + environments are at `/postman` folder
4. `docker-compose` that knows how to run everything together

## Postman collections

There are two postman collections that can be run separately as separate services in `docker-compose`:

1. [users.postman_collection](postman/collections/users.postman_collection.json) - collection of self contained tests, that have request and response hardcoded.
2. [users-iterations.postman_collection](postman/collections/users-iterations.postman_collection.json) - collection of tests that leverage [postman data files feature](https://learning.postman.com/docs/running-collections/working-with-data-files/)

- Tests are referencing the `iterationData` object, therefore they requre appropriate data file to be included in each test run
- Respective data file: [users-test-cases](postman/collections/users-test-cases.json)

## Running

### Run `users.postman_collection`

Run tests with:

```bash
docker-compose up --abort-on-container-exit api_tests
```

#### Output

```bash
postman-node-docker-example-api_tests-1  | users
postman-node-docker-example-api_tests-1  |
postman-node-docker-example-api_tests-1  | → create user
postman-node-docker-example-api_tests-1  |   POST node_api:3000/users [201 Created, 324B, 87ms]
postman-node-docker-example-api_tests-1  |   ✓  Status code is 201
postman-node-docker-example-api_tests-1  |   ✓  Schema is valid
postman-node-docker-example-api_tests-1  |
postman-node-docker-example-api_tests-1  | → get user
postman-node-docker-example-api_tests-1  |   GET node_api:3000/users/61f511c339d227df97c472de [200 OK, 319B, 23ms]
postman-node-docker-example-api_tests-1  |   ✓  Status code is 200
postman-node-docker-example-api_tests-1  |
postman-node-docker-example-api_tests-1  | → update user
postman-node-docker-example-api_tests-1  |   PUT node_api:3000/users/61f511c339d227df97c472de [200 OK, 313B, 37ms]
postman-node-docker-example-api_tests-1  |   ✓  Status code is 200
postman-node-docker-example-api_tests-1  |   ✓  Schema is valid
postman-node-docker-example-api_tests-1  |   ✓  Check values
postman-node-docker-example-api_tests-1  |
postman-node-docker-example-api_tests-1  | → delete user
postman-node-docker-example-api_tests-1  |   DELETE node_api:3000/users/61f511c339d227df97c472de [200 OK, 273B, 19ms]
postman-node-docker-example-api_tests-1  |   ✓  Status code is 200
postman-node-docker-example-api_tests-1  |   ✓  Check repsonse
postman-node-docker-example-api_tests-1  |
postman-node-docker-example-api_tests-1  | ┌─────────────────────────┬───────────────────┬──────────────────┐
postman-node-docker-example-api_tests-1  | │                         │          executed │           failed │
postman-node-docker-example-api_tests-1  | ├─────────────────────────┼───────────────────┼──────────────────┤
postman-node-docker-example-api_tests-1  | │              iterations │                 1 │                0 │
postman-node-docker-example-api_tests-1  | ├─────────────────────────┼───────────────────┼──────────────────┤
postman-node-docker-example-api_tests-1  | │                requests │                 4 │                0 │
postman-node-docker-example-api_tests-1  | ├─────────────────────────┼───────────────────┼──────────────────┤
postman-node-docker-example-api_tests-1  | │            test-scripts │                 4 │                0 │
postman-node-docker-example-api_tests-1  | ├─────────────────────────┼───────────────────┼──────────────────┤
postman-node-docker-example-api_tests-1  | │      prerequest-scripts │                 0 │                0 │
postman-node-docker-example-api_tests-1  | ├─────────────────────────┼───────────────────┼──────────────────┤
postman-node-docker-example-api_tests-1  | │              assertions │                 8 │                0 │
postman-node-docker-example-api_tests-1  | ├─────────────────────────┴───────────────────┴──────────────────┤
postman-node-docker-example-api_tests-1  | │ total run duration: 539ms                                      │
postman-node-docker-example-api_tests-1  | ├────────────────────────────────────────────────────────────────┤
postman-node-docker-example-api_tests-1  | │ total data received: 284B (approx)                             │
postman-node-docker-example-api_tests-1  | ├────────────────────────────────────────────────────────────────┤
postman-node-docker-example-api_tests-1  | │ average response time: 41ms [min: 19ms, max: 87ms, s.d.: 27ms] │
postman-node-docker-example-api_tests-1  | └────────────────────────────────────────────────────────────────┘
postman-node-docker-example-api_tests-1 exited with code 0
Aborting on container exit...
[+] Running 1/0
 ⠿ Container postman-node-docker-example-api_tests-1  Stopped                                                                                                                                                                                                   0.0s
ERRO[0018] 0
```

### Run `users-iterations.postman_collection`

Run tests with:

```bash
docker-compose up --abort-on-container-exit api_iterations_tests
```

#### Output

```bash
postman-node-docker-example-api_iterations_tests-1  | newman
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | users-iterations
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | Iteration 1/3
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | → create user
postman-node-docker-example-api_iterations_tests-1  |   POST node_api:3000/users [201 Created, 322B, 134ms]
postman-node-docker-example-api_iterations_tests-1  |   ✓  Status code is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Schema is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Data is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Errors are valid
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | → get user
postman-node-docker-example-api_iterations_tests-1  |   GET node_api:3000/users/61f50df0b901d195da6f7626 [200 OK, 317B, 14ms]
postman-node-docker-example-api_iterations_tests-1  |   ✓  Status code is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Data is valid
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | → update user
postman-node-docker-example-api_iterations_tests-1  |   PUT node_api:3000/users/61f50df0b901d195da6f7626 [200 OK, 318B, 22ms]
postman-node-docker-example-api_iterations_tests-1  |   ✓  Status code is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Schema is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Data is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Errors are valid
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | → delete user
postman-node-docker-example-api_iterations_tests-1  |   DELETE node_api:3000/users/61f50df0b901d195da6f7626 [200 OK, 273B, 26ms]
postman-node-docker-example-api_iterations_tests-1  |   ✓  Status code is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Check repsonse
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | Iteration 2/3
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | → create user
postman-node-docker-example-api_iterations_tests-1  |   POST node_api:3000/users [400 Bad Request, 296B, 14ms]
postman-node-docker-example-api_iterations_tests-1  |   ✓  Status code is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Schema is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Data is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Errors are valid
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | Iteration 3/3
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | → create user
postman-node-docker-example-api_iterations_tests-1  |   POST node_api:3000/users [201 Created, 322B, 25ms]
postman-node-docker-example-api_iterations_tests-1  |   ✓  Status code is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Schema is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Data is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Errors are valid
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | → get user
postman-node-docker-example-api_iterations_tests-1  |   GET node_api:3000/users/61f50df1b901d195da6f7630 [200 OK, 317B, 20ms]
postman-node-docker-example-api_iterations_tests-1  |   ✓  Status code is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Data is valid
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | → update user
postman-node-docker-example-api_iterations_tests-1  |   PUT node_api:3000/users/61f50df1b901d195da6f7630 [400 Bad Request, 297B, 7ms]
postman-node-docker-example-api_iterations_tests-1  |   ✓  Status code is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Schema is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Data is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Errors are valid
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | → delete user
postman-node-docker-example-api_iterations_tests-1  |   DELETE node_api:3000/users/61f50df1b901d195da6f7630 [200 OK, 273B, 14ms]
postman-node-docker-example-api_iterations_tests-1  |   ✓  Status code is valid
postman-node-docker-example-api_iterations_tests-1  |   ✓  Check repsonse
postman-node-docker-example-api_iterations_tests-1  |
postman-node-docker-example-api_iterations_tests-1  | ┌─────────────────────────┬───────────────────┬──────────────────┐
postman-node-docker-example-api_iterations_tests-1  | │                         │          executed │           failed │
postman-node-docker-example-api_iterations_tests-1  | ├─────────────────────────┼───────────────────┼──────────────────┤
postman-node-docker-example-api_iterations_tests-1  | │              iterations │                 3 │                0 │
postman-node-docker-example-api_iterations_tests-1  | ├─────────────────────────┼───────────────────┼──────────────────┤
postman-node-docker-example-api_iterations_tests-1  | │                requests │                 9 │                0 │
postman-node-docker-example-api_iterations_tests-1  | ├─────────────────────────┼───────────────────┼──────────────────┤
postman-node-docker-example-api_iterations_tests-1  | │            test-scripts │                 9 │                0 │
postman-node-docker-example-api_iterations_tests-1  | ├─────────────────────────┼───────────────────┼──────────────────┤
postman-node-docker-example-api_iterations_tests-1  | │      prerequest-scripts │                 2 │                0 │
postman-node-docker-example-api_iterations_tests-1  | ├─────────────────────────┼───────────────────┼──────────────────┤
postman-node-docker-example-api_iterations_tests-1  | │              assertions │                28 │                0 │
postman-node-docker-example-api_iterations_tests-1  | ├─────────────────────────┴───────────────────┴──────────────────┤
postman-node-docker-example-api_iterations_tests-1  | │ total run duration: 866ms                                      │
postman-node-docker-example-api_iterations_tests-1  | ├────────────────────────────────────────────────────────────────┤
postman-node-docker-example-api_iterations_tests-1  | │ total data received: 592B (approx)                             │
postman-node-docker-example-api_iterations_tests-1  | ├────────────────────────────────────────────────────────────────┤
postman-node-docker-example-api_iterations_tests-1  | │ average response time: 30ms [min: 7ms, max: 134ms, s.d.: 36ms] │
postman-node-docker-example-api_iterations_tests-1  | └────────────────────────────────────────────────────────────────┘
postman-node-docker-example-api_iterations_tests-1 exited with code 0
Aborting on container exit...
[+] Running 1/0
 ⠿ Container postman-node-docker-example-api_iterations_tests-1  Stopped                                                                                                                                                                                        0.0s
ERRO[0005] 0
```

### NOTE

Once test run is completed, you use standard bash command: `$?` to get the last exit code, this is particularly usefull when running in CI environment.

### Run with `npm`

There's also an npm [newman](https://www.npmjs.com/package/newman) module, that is useful for quick runs during development.
Use

```bash
npx newman run postman/collections/users.postman_collection.json \
-e postman/environments/local.postman_environment.json
```

Or

```bash
npx newman run postman/collections/users-iterations.postman_collection.json \
-d postman/collections/users-test-cases.json \
-e postman/environments/local.postman_environment.json
```

### Development

Start mongo contaier:
`docker-compose up mongo`
Run dev server:
`npm run dev`
