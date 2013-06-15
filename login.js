/**
 * perfectLogin.js
 *
 */
var pLogin = (function() {

    function login() {
        var uname = document.getElementById('uname').value,
            pword = document.getElementById('pword').value;

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.open('get', this.action, false, uname, pword);
        xmlhttp.send('');

        if (xmlhttp.status === 200) {
            document.location = this.action;
        } else {
            errormsg.appendChild(document.createTextNode('Incorrect username and/or password.'));
            return false;
        }

    }

    function getHTTPObject() {
        var xmlhttp;
        if (typeof XMLHttpRequest !== 'undefined') {
            try {
                xmlhttp = new XMLHttpRequest();
            } catch (e) {
                xmlhttp = false;
            }
        }
        return xmlhttp;
    }

    function createForm(e) {
            e.preventDefault();
            var a = e.currentTarget;

            var pl = document.createElement('form');
            pl.action = a.href;
            pl.method = 'get';
            pl.classList.add('plogin');
            pl.onsubmit = login;

            var legend = document.createElement('h3');
            legend.appendChild(document.createTextNode('Login'));

            var unameInput = document.createElement('input');
            unameInput.name = 'uname';
            unameInput.type = 'text';
            unameInput.placeholder = 'Username';
            unameInput.id = 'uname';
            unameInput.required = 'true';

            var uname = document.createElement('label');
            uname.appendChild(unameInput);

            var passwordInput = document.createElement('input');
            passwordInput.name = 'pword';
            passwordInput.type = 'password';
            passwordInput.placeholder = 'Password';
            passwordInput.id = 'pword';
            passwordInput.required = 'true';

            var password = document.createElement('label');
            password.appendChild(passwordInput);

            var errormsg = document.createElement('span');
            errormsg.id = 'errormsg';

            var submit = document.createElement('input');
            submit.type = 'submit';
            submit.value = 'Login';

            pl.appendChild(legend);
            pl.appendChild(uname);
            pl.appendChild(password);
            pl.appendChild(errormsg);
            pl.appendChild(submit);

            document.body.appendChild(pl);
            a.removeEventListener('click', createForm, false);
        }

    return {

        init: function() {
            var a = document.getElementsByTagName('a');
            for (var x = 0; x < a.length; x++) {
                if (a[x].classList.contains('pl')) {
                    a[x].addEventListener('click', createForm, false);
                }
            }
        },

        logout: function() {
            var xmlhttp = getHTTPObject();
            xmlhttp.open('get', window.location.href, false, 'null', 'null');
            xmlhttp.send('');
            window.location.href = '/';
        }
    }

}());


pLogin.init();