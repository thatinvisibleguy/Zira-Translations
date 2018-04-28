'use strict';

module.exports = {
  title: 'Command Usage',
  titleError: 'Error :warning:',
  titleComp: 'Complete :white_check_mark:',
  unknownChannel: 'Unknown channel.',
  unknownRole: 'Unknown role.',
  unknownMessage: 'Unknown message.',
  unknownEmoji: 'Unknown emoji.',
  noChannel: ['Please set a channel first with **', 'channel**.'],
  noMessage: ['Please set a message to use with **', 'message**.'],
  help: {
    commandsTitle: 'Commands',
    commands: {
      channel: 'set channel you want to use\n',
      message: 'set the message you want to use\n',
      add: 'add a role with an emoji\n',
      toggle: 'add a role that can be toggled\n',
      remove: 'remove a role that has been set\n',
      edit: 'edit a message sent by Zira\n',
      list: 'list the roles being used\n',
      autorole: 'give users and bots a role on join\n',
      log: 'log when Zira gives/takes a role\n',
      join: 'sends a message when a user joins\n',
      leave: 'sends a message when a user leaves\n',
      lang: 'set locale\n',
      reset: 'reset guild config\n',
      info: 'info about Zira\n',
      faq: 'frequently asked questions\n',
      ping: 'Zira\'s ping\n',
      invite: 'invite Zira',
    },
    categories: {
      role: 'Roles',
      logs: 'Logging',
      misc: 'Miscellaneous',
    },
    linksTitle: 'Links',
    links: '[Guide to setup Zira](https://demo.zira.pw)\n[Support Guild](https://zira.pw/support)\n[Zira\'s Dashboard](https://zira.pw)\n[Donate to keep Zira running](https://www.patreon.com/HazedSPaCEx)\n[Translate Zira](https://github.com/HazedSPaCEx/Zira-Translations)',
    news: 'News',
  },
  channel: {
    help: 'channel #channel** ~~-~~ set the channel that will be used',
    set: 'Channel set to <#',
  },
  message: {
    help: 'message [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) | message]** ~~-~~ use an existing message or create a new one',
    cannotSend: ['Unable to send a message to <#', '> because I lack the `Send Messages` permission.'],
    cannotRead: ['Unable to send a message to <#', '> because I lack the `Read Messages` or `Read Message History` permission.'],
    unknown: 'Unable to send message.',
    cannotReadID: ['Unable to get the message from <#', '> because I lack the `Read Messages` or `Read Message History` permission.'],
    unknownID: 'Unable to set message ID.',
    set: 'Message set with the ID of ',
  },
  add: {
    help: 'add [emoji] [@role | role name]** ~~-~~ add a role with an emoji to the message set',
    cannotRead: ['Unable to react to the message in <#', '> because I lack the `Read Messages` or `Read Message History` permission.'],
    cannotReact: ['Unable to react to the message in <#', '> because I lack the `Add Reaction` permission.'],
    unknown: 'Unable to react to the message in <#',
    set: ['<@&', '> added with the emoji ', '\n\n**NOTE:** The `Zira` role needs to be above the role you\'ve set and needs to have `Manage Roles` permission to give this role.'],
    emoji: 'That emoji is already in use on this message.',
    role: 'That role is already in use on this message.',
  },
  toggle: {
    help: 'toggle [emoji] [@role | role name]** ~~-~~ add a role with an emoji to the message set',
    image: 'https://stuff.zira.pw/files/1524932965273.gif', /* I will replace this with a gif that is fast as my internet and laptop is slow */
  },
  perm: {
    noPerm: 'You need be the owner of the guild, or have the `MANAGE_ROLES` perm to use these commands.',
    noLangPerm: 'You need be the owner of the guild, or have the `MANAGE_GUILD` perm to change the bot\'s language.',
    noGuildPerm: 'You need be the owner of the guild, or have the `MANAGE_GUILD` permission to use this command.',
  },
  lang: {
    langUpdate: 'Language updated.',
    translate: 'If you want Zira in a language that isn\'t on the list above,\nyou can help translate it [here](https://github.com/HazedSPaCEx/Zira-Translations)',
  },
  log: {
    title: 'Log Command',
    help: ['log #channel** ~~-~~ set the channel for logging\n\nTo stop logging, do **', 'log stop**\n\nAn example of a message is below'],
    set: ['Log channel set to <#', '>\n\n**NOTE:** If Zira is not able to send to the channel, logging will be disabled.'],
    stop: 'Log messages will no longer be sent.',
    image: 'https://stuff.zira.pw/files/logExample.png',
    give: [' reacted ', ' to get '],
    remove: [' unreacted ', ' to remove '],
  },
  faq: {
    title: 'Frequently Asked Questions',
    fields: [{
      name: 'Whenever I do commands, Zira doesn\'t send messages, what do I do?',
      value: 'Make sure Zira has permission to embed links and send messages in the channel you are trying the commands in.',
    }, {
      name: 'Zira says `"Can\'t find a message with that ID"` or `"Unknown message ID"`, what do I do?',
      value: 'Make sure that the message ID is in the channel you\'ve set, and that Zira is able to read the channel',
    }, {
      name: 'Even though I set it up properly, Zira doesn\'t give roles.',
      value: 'Make sure Zira has permission to manage roles, and that the "Zira" role is above the roles you\'ve setup.',
    }, {
      name: 'Is Zira able to remove emojis that don\'t have a corresponding role setup with them?',
      value: 'Yes, but you must allow Zira to `manage messages` in the channel you\'ve setup.',
    }, {
      name: 'Is Zira able to handle more than one message?',
      value: 'Yes, just set another message, and add roles to that message.',
    }, {
      name: 'Is Zira able to handle more than one channel?',
      value: 'Yes, just set another channel, then message, etc.',
    }, {
      name: 'How many roles are allowed per message?',
      value: 'Since Discord only allows 20 emojis per message, 20 roles are allowed per message.',
    }],
  },
  join: {
    title: 'Join Command',
    help: ['join channel** ~~-~~ set the channel that messages will be sent to\n**', 'join message** ~~-~~ set the message that will be sent when a user joins\n\nYou can use these placeholders in the message:\n$user ~~-~~ username\n$mention ~~-~~ user mention\n$guild ~~-~~ guild name\n$membercount ~~-~~ new member count'],
    channel: ['join channel #channel** ~~-~~ set the channel that join messages will be sent to\n\nTo stop sending to the channel set, do **', 'join channel stop**'],
    stop: 'Join messages will stop being sent.',
    setChannel: ['Channel set to <#', '>\n\n**NOTE:** If Zira is not able to send to the channel, join messages will be disabled.'],
    message: 'join message [message]** ~~-~~ set the message that will be sent when a user joins\n\nYou can use these placeholders in the message:\n$user ~~-~~ username\n$mention ~~-~~ user mention\n$guild ~~-~~ guild name\n$membercount ~~-~~ new member count',
    setMessage: 'Join message set to:\n',
  },
  leave: {
    title: 'Leave Command',
    help: ['leave channel** ~~-~~ set the channel that messages will be sent to\n**', 'leave message** ~~-~~ set the message that will be sent when a user leave\n\nYou can use these placeholders in the message:\n$user ~~-~~ username\n$mention ~~-~~ user mention\n$guild ~~-~~ guild name\n$membercount ~~-~~ new member count'],
    channel: ['leave channel #channel** ~~-~~ set the channel that leave messages will be sent to\n\nTo stop sending to the channel set, do **', 'leave channel stop**'],
    stop: 'Leave messages will stop being sent.',
    setChannel: ['Channel set to <#', '>\n\n**NOTE:** If Zira is not able to send to the channel, leave messages will be disabled.'],
    message: 'leave message [message]** ~~-~~ set the message that will be sent when a user leaves\n\nYou can use these placeholders in the message:\n$user ~~-~~ username\n$mention ~~-~~ user mention\n$guild ~~-~~ guild name\n$membercount ~~-~~ new member count',
    setMessage: 'Leave message set to:\n',
  },
  auto: {
    title: 'Auto Role',
    help: ['autorole show** ~~-~~ show the current roles set\n**', 'autorole user** ~~-~~ add or remove roles that should be given on user join\n**', 'autorole bot** ~~-~~ add or remove roles that should be given on bot join'],
    user: 'autorole user [@role | role name]** ~~-~~ add or remove a role that should be given when a user joins\n\nTo remove a role that has been set do the above command.',
    userAdd: ['Added role <@&', '> that will be given when a user joins.\n\n**NOTE:** The `Zira` role needs to be above the role you\'ve set and needs to have `Manage Roles` permission to give this role.'],
    userRemove: ['Removed role <@&', '> from being given when a user joins.'],
    botAdd: ['Added role <@&', '> that will be given when a bot is invited.\n\n**NOTE:** The `Zira` role needs to be above the role you\'ve set and needs to have `Manage Roles` permission to give this role.'],
    botRemove: ['Removed role <@&', '> from being given when a bot invited.'],
    bot: 'autorole bot [@role | role name]** ~~-~~ add or remove a role that should be given when a bot is invited\n\nTo remove a role that has been set do the above command.',
    showUser: 'User Roles',
    showBot: 'Bot Roles',
    no: 'No roles set.',
  },
  reset: {
    title: 'Config Reset :warning:',
    question: 'Are you sure you want to reset the guild config?\n**EVERYTHING** setup through Zira will be reset.\n\nType `yes` or `no`',
    yes: 'Guild config has been reset.',
    no: 'Nothing has been reset.',
    perm: 'Only the owner of the guild can reset the config.',
  },
  list: {
    title: ' Role List',
    cont: 'List Continued',
    null: 'If a message ID is null either reset your config and readd the roles or join the [support server](https://zira.pw/support).',
    noTitle: 'OwO',
    noDesc: 'What\'s this?',
  },
  remove: {
    help: ['remove [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [@role | role name]** ~~-~~ remove a role that has been setup by Zira\n\nTo get the message ID that a role is on do **', 'list**.'],
    setup: 'Unable to remove the role as it either was not setup by Zira or is not on the specified message.',
    removed: ['<@&', '> removed with the emoji '],
  },
  edit: {
    help: 'edit [[message ID](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-)] [new message]** ~~-~~ edit a message sent by Zira',
    read: ['Unable to get the message in <#', '> because I lack the `Read Messages` or `Read Message History` permission.'],
    unknownGet: 'Unable to get that message in <#',
    unknownEdit: 'Unable to edit the message.',
    no: 'That message can\'t be edited by Zira as it was not sent by Zira.',
    edited: 'Message has been edited.',
  },
};
