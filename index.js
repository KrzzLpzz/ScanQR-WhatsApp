const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function whatsAPP() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2143, 3];

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('Krzz')}${chalk.blue.bold('Lpzz')}
${chalk.white.italic('QR Scanner')}
${chalk.blue.italic('⏳ Connecting to WhatsApp... Please wait :)')}`);
	});

  conn.on('open', async () => {
		console.log(
			chalk.green.bold('QR Scanner Code: '),
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo()))
		);
		await conn.sendMessage(
			conn.user.jid,
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid ,

				'*¡Dont share this code, is secret ' +
					conn.user.name +
					'!*\n\n @KrzzLpzz',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*¡Dont share this code, is secret ' +
					conn.user.name +
					'!*\n\n @KrzzLpzz',
				MessageType.text
			);
		}
		console.log(
			chalk.red.bold(
				"Copy this code!"
			),
			chalk.red.bold(
				'Paste it in the session file of your bot.'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

whatsAPP();