const userDatabase = [];
alert('Welcome');
let newPassword = null;

(function start() {
	let logOrSign = prompt(
		'Do you want to log In yor account or to create a new one? Please answer with "login" or "Sign"'
	).toLowerCase();
	if (logOrSign === 'login') {
		logar();
	} else if (logOrSign === 'sign') {
		cadastro();
	} else {
		alert('Incorrect Option! Try again!');
		start();
	}

	function logar() {
		let username = prompt('Enter your login');
		let password = prompt('Enter your password');
		let checagem = userDatabase.some(function(item) {
			return item.user === username && item.pass === password;
		});
		if (checagem) {
			alert('Logged successfully');
		} else {
			alert('The user or password is incorrect!');
			start();
		}
	}
	function checarUser(userName) {
		const num = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
		for (let i of num) {
			if (userName.indexOf(num[i]) > -1) {
				return false;
			}
		}
		return true;
	}
	function checarPassword() {
		newPassword = prompt('Register your password');
		newPassword = String(newPassword);
		while (newPassword.length < 8) {
			alert('The password must have at least 8 digits! Try again!');
			checarPassword();
		}
		return;
	}
	function cadastro() {
		let newUserName = prompt('Enter the username that you want to register');

		let checagemUser = checarUser(newUserName);
		if (!checagemUser) {
			alert('The user can not contain numbers!');
			cadastro();
		}
		if (newUserName.length < 3) {
			alert('The username must have at least 4 caracthers');
			cadastro();
		}
		let checagem2 = userDatabase.some(function(item) {
			return item.user === newUserName;
		});
		if (checagem2) {
			alert('This user already exists, please create with another name!');
			cadastro();
		}
		while (!newPassword) {
			checarPassword();
		}
		alert('You are now registered. Thank you!');
		userDatabase.push({
			user: newUserName,
			pass: newPassword
		});
		newPassword = null;
		let firstLogin = prompt('Would you want to login for the first time?, answer with "Yes" ou "No"').toLowerCase();
		if (firstLogin === 'yes') {
			logar();
		} else if (firstLogin === 'no') {
			start();
		} else {
			alert('Incorrect option!. You are going to be redirected to the start page!');
			start();
		}
	}
})();
