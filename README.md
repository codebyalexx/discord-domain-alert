# discord-domain-alert

Hello welcome to project's repo!! My name is Alex and I created this discord.js integrated tool to check domains availability and send you a message as soon as the domain name is available.

## Features

- Check domain name availabilty using whois npm package
- Send you a Discord message when a domain is available

## Run Locally

Clone the project
`git clone https://github.com/codebyalexx/discord-domain-alert.git`

Go to the project directory
`cd discord-domain-alert`

Install dependencies
`pnpm install`

Start the dev server
`pnpm run`

Compile app
`pnpm compile`

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file. You can clone `.env.dist` file to `.env` or create your own file with theses parameters :

`DISCORD_TOKEN` : your Discord bot's token

`DOMAIN` : the domain name to check (only top level domains)

`USERS` : the users ids to DM when the domain is free to claim (separrated by comma)

> Example : `USERS="1200292371078860840,416760388512776193,1113235897022951476"`

## Contributing

Contributions are always welcome!

To permit a long-term project life, here are some rules to contribute to the project :

- Always use typescript and typesafe code
- Always match with ESLint of the project
- Respect the project's structure (including commits)
- Limit external libraries import as much as possible

Do not hesitate to share ideas about these rules, note that the code has not to be perfect as he will be reviewed by myself so don't worry!

#### Commit structure

The project commit structure is : `{emoji} {message in PAST}`, example : **✨ Created homepage react component**.

You should use [gitmoji.dev](https://gitmoji.dev) tool to get the more accurate emoji related to the commit message.

## Authors & contributors

- Coded using ❤️ by [@codebyalexx](https://www.github.com/codebyalexx)

## 🔗 My links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://alex-development.eu/)

[![instagram](https://img.shields.io/badge/instagram-000?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/codebyalexx)

[![twitter](https://img.shields.io/badge/MY_X-000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/codebyalexx)
