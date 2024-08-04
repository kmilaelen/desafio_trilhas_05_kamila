//colaca aqui o dados do firebase
const firebaseConfig = {
    apiKey: "AIzaSyCpQq0S4J5XTea40bdmffWbwq-ZMRcbkTU",
    authDomain: "kamila-422a9.firebaseapp.com",
    projectId: "kamila-422a9",
    storageBucket: "kamila-422a9.appspot.com", 
    messagingSenderId: "112761561107",
    appId: "1:112761561107:web:5c167e7432799031af5fe6",
    measurementId: "G-SSFBHMBWTP"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function cadastrar() {
    firebase.auth().createUserWithEmailAndPassword(
        document.getElementById("email-cadastro").value, 
        document.getElementById("senha-cadastro").value
    ).then(function (user) {
        alert("Seus dados foram cadastrados com sucesso");
        document.getElementById('email-cadastro').value = '';
        document.getElementById('senha-cadastro').value = '';
    }).catch(function (error) {
        alert("Falha ao cadastrar: " + error.message);
    });
}

function login() {
    firebase.auth().signInWithEmailAndPassword(
        document.getElementById("email-login").value, 
        document.getElementById("senha-login").value
    ).then(function (user) {
        alert("Login realizado com sucesso");
        document.getElementById('email-login').value = '';
        document.getElementById('senha-login').value = '';
        // Redirecionar para index2.html
        window.location.href = 'index.html';
    }).catch(function (error) {
        alert("Falha ao fazer login: " + error.message);
    });
}

function mostrarLogin() {
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
}

function mostrarCadastro() {
    document.getElementById('form-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
}
