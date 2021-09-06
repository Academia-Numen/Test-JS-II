/* eslint-disable no-undef */
const {
	mayuscula,
	invocarCallback,
	operacionMatematica,
	sumarArray,
	forEach,
	map,
	filter
} = require('../tareas');

describe('mayuscula(nombre)', function() {
	it('Debería retornar el mismo nombre pero con la primera letra mayúscula', function() {
		expect(mayuscula("mario")).toBe("Mario");
		expect(mayuscula("ana")).toBe("Ana");
	});
});

describe('invocarCallback(cb)', function() {
  it('Debería invocar el callback que se pasó como parámetro', function() {
		const cb = jest.fn();
		invocarCallback(cb);
    	expect(cb).toHaveBeenCalled();
  });
});

describe('operacionMatematica(n1, n2, cb)', function() {
	it('Debería retornar la función callback con los argumentos recibidos', function() {
		const cb = jest.fn();
		operacionMatematica(100, 20, cb);
		expect(cb).toHaveBeenCalled();
	});
});

describe('sumarArray(cb)', function() {
	it('Debería retornar el callback con la suma total de los valores en el arreglo', function(done) {
		sumarArray([1, 2, 3, 4, 5], function(sum) {
			expect(sum).toBe(15);
			done();
		});
	});
});

describe('forEach(arr, cb)', function() {
	it('Debería aplicar el callback a los valores del arreglo uno por uno', function() {
		const nums = [];
		forEach([1, 2, 3, 4, 5], function(num) {
			nums.push(num);
		});
		expect(nums).toEqual([1, 2, 3, 4, 5]);
	});
});

describe('map(arr, cb)', function() {
	it('Debería retornar un arreglo con los valores nuevos luego de aplicar el callback', function() {
		const squares = map([1, 2, 3, 4, 5], function(num) {
			return num * num;
		});
		expect(squares).toEqual([1, 4, 9, 16, 25]);
	});
});

describe('filter(array)', function() {
	it('Debería retornar un arreglo con las palabras que empiecen con la letra "a"', function() {
		var array = ['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo'];
		expect(filter(array)).toEqual(["abajo", "alerta", "azteca", "arbol"]);
	});
});
