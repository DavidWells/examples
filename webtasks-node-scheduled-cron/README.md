<!--
title: Webtasks Scheduled Cron example in NodeJS
description: This is an example of creating a function that runs as a cron job using the serverless 'schedule' event.
layout: Doc
-->
# Webtasks Node Scheduled Cron Example

This is an example of creating a function that runs as a cron job using the serverless `schedule` event.

For more information on `schedule` event check out the Serverless docs on [schedule](https://serverless.com/framework/docs/providers/webtasks/events/schedule/).

Schedule events use the `rate` or `cron` syntax.

## Rate syntax

```pseudo
rate(value unit)
```

`value` - A positive number

`unit` - The unit of time. ( minute | minutes | hour | hours | day | days )

**Example** `rate(5 minutes)`

## Cron syntax

```pseudo
cron(Minutes Hours Day-of-month Month Day-of-week Year)
```

All fields are required and time zone is UTC only.

| Field         | Values         | Wildcards     |
| ------------- |:--------------:|:-------------:|
| Minutes       | 0-59           | , - * /       |
| Hours         | 0-23           | , - * /       |
| Day-of-month  | 1-31           | , - * ? / L W |
| Month         | 1-12 or JAN-DEC| , - * /       |
| Day-of-week   | 1-7 or SUN-SAT | , - * ? / L # |
| Year          | 1970-2199      | , - * /       |

## Deploy

In order to deploy the you endpoint simply run

```bash
serverless deploy
```

The expected result should be similar to:

```bash
FILL IN
```

The scheduled cron becomes active right away after deployment.
