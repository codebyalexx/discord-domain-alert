import {Client, GatewayIntentBits} from 'discord.js';
import {env} from './lib/env';
const client = new Client({intents: [GatewayIntentBits.GuildMembers]});

async function main() {
  try {
    await client.login(env.DISCORD_TOKEN);
    console.log('Successfully logged-in to Discord API!');
  } catch (e) {
    console.error(e);
  }
}

main();
