/* eslint-disable no-undef */
const {
    crearUsuario,
	agregarMetodoPrototype,
	agregarStringInvertida,
	crearInstanciaPersona,
	agregarMetodo,
	Persona
} = require('../tareas');

describe('crearUsuario()', function() {
	it('Debería retornar un constructor Usuario que cree correctamente objetos usuario', function() {
		const Usuario = crearUsuario();
		const user = new Usuario({usuario: 'jssamuel', nombre: 'Samuel', email: 'samuel@email.com', password: 'LoveJS' });
		expect(user.usuario).toBe('jssamuel');
		expect(user.nombre).toBe('Samuel');
		expect(user.email).toBe('samuel@email.com');
		expect(user.password).toBe('LoveJS');
    	expect(user.saludar()).toBe('Hola, mi nombre es Samuel');
	});
});

describe('agregarMetodoPrototype(Constructor)', function() {
	it('Debería agregar el método saludar al constructor', function() {
		function Test() {
			this.test = true;
		}
		agregarMetodoPrototype(Test);
		const test = new Test();
		expect(test.saludar()).toBe('Hello World!');
	});
});

describe('agregarStringInvertida(StringPrototype)', function(){
	it('Debería agregar un método reverse al prototype String que devuelva una string invertida', function() {
		agregarStringInvertida();
		const str = 'Hello';
		expect(str.reverse()).toBe('olleH');
	});
});

describe('crearInstanciaPersona()', function() {
	it('Debería retornar una nueva instancia de Persona', function() {
		expect(crearInstanciaPersona("Juan", "Pérez", 22, "Saavedra 123")).toBeInstanceOf(Persona);
	});
});

describe('agregarMetodo(Persona)', function() {
	it('Debería agregar el método datos al Constructor', function() {
		agregarMetodo();
		const persona = new Persona("Juan", "Pérez", 22, "Saavedra 123");
		expect(persona.datos()).toBe('Juan, 22 años');
	});
});