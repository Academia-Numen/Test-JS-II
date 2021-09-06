/* eslint-disable no-undef */
const {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
} = require('../tareas');

describe('crearGato(nombre, edad)', function() {
  it('Debería crear un objeto gato con las propiedades nombre y edad', function() {
    expect(crearGato('Snowball', 1).nombre).toBe('Snowball');
    expect(crearGato('Snowball', 1).edad).toBe(1);
    expect(crearGato('Snowball II', 5).nombre).toBe('Snowball II');
    expect(crearGato('Snowball II', 5).edad).toBe(5);
  });
  it('Debería tener un método que al ser invocado devuelva la String "Meow!"', function() {
    expect(crearGato('Snowball III', 2).meow()).toBe('Meow!');
  });
});

describe('agregarPropiedad(object, property)', function() {
  it('Debería agregar una propiedad nueva con el valor de null', function() {
    const object = {
      x: 1,
      y: 2,
    };
    const updatedObject = {
      x: 1,
      y: 2,
      z: null,
    };
    expect(agregarPropiedad(object, 'z')).toEqual(updatedObject);
  });
});

describe('invocarMetodo(object, metodo)', function() {
  it('Debería invocar el método del objeto', function() {
    const object = {
      x: 0,
      incrementX: function() {
        this.x++;
      },
    }
    invocarMetodo(object, 'incrementX');
    expect(object.x).toBe(1);
  });
});

describe('multiplicarNumeroDesconocidoPorCinco(mysteryNumberObject)', function() {
  it('Debería retornar la propiedad numeroMisterioso multiplicado por 5', function() {
    const mysteryBox = {
      numeroMisterioso: 999,
    };
    expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(4995);
    mysteryBox.numeroMisterioso = -5;
    expect(multiplicarNumeroDesconocidoPorCinco(mysteryBox)).toBe(-25);
  });
});

describe('eliminarPropiedad(object, property)', function() {
  it('Debería borrar la propiedad del objeto', function() {
    const updatedObject = {
      x: 1,
      y: 2,
    };
    const object = {
      x: 1,
      y: 2,
      z: null,
    };
    expect(eliminarPropiedad(object, 'z')).toEqual(updatedObject);
  });
});

describe('nuevoUsuario(nombre, email, password)', function() {
  it('Debería retornar un objeto usuario con las propiedades nombre, email y password', function() {
    const user = {
      nombre: 'Jhon',
      email: 'jhon@email.com',
      password: 'correcthorsebatterystaple',
    };
    expect(nuevoUsuario(user.nombre, user.email, user.password)).toEqual(user);
    const user2 = {
      nombre: 'Samuel',
      email: 'samuel@email.com',
      password: 'password',
    };
    expect(nuevoUsuario(user2.nombre, user2.email, user2.password)).toEqual(user2);
  });
});

describe('tieneEmail(user)', function() {
  it('Debería retornar true si el objeto usuario tiene la propiedad email', function() {
    expect(tieneEmail({ usernombre: 'Samuel', email: 'samuel@email.com' })).toEqual(true);
    expect(tieneEmail({ usernombre: 'Jhon', email: null })).toEqual(false);
    expect(tieneEmail({ usernombre: 'Fernando' })).toEqual(false);
  });
});

describe('tienePropiedad(object, property)', function() {
  it('Debería retornar true si el objeto tiene la propiedad pasada por parámetro', function() {
    const obj = {
      x: true,
    };
    expect(tienePropiedad(obj, 'x')).toEqual(true);
    expect(tienePropiedad(obj, 'y')).toEqual(false);
  });
});

describe('verificarPassword(user, password)', function() {
  it('Debería retornar true si las password coinciden', function() {
    const user = {
      password: 'Me encanta JS!',
    };
    const password = 'Me encanta JS!';
    expect(verificarPassword(user, password)).toBe(true);
  });
  it('Debería retornar false si las password no coinciden', function() {
    const user = {
      password: 'Me encanta JS!',
    };
    const password = 'Hacker time!';
    expect(verificarPassword(user, password)).toBe(false);
  });
});

describe('actualizarPassword(usuario, password)', function() {
  it('Debería retornar el objeto usuario con la contraseña actualizada', function() {
    const user = {
      password: 'Me encanta JS!',
    };
    const password = 'Me encanta JS mucho más!';
    expect(actualizarPassword(user, password).password).toBe(password);
  });
});

describe('agregarAmigo(usuario, nuevoAmigo)', function() {
  it('Debería agregar un nuevoAmigo al final del array amigos', function() {
    const user = {
      amigos: ['Ben', 'Austen', 'Ryan', 'Mike', 'Young'],
    };
    const newFriend = 'Shay';
    expect(agregarAmigo(user, 'Shay').amigos.pop()).toBe('Shay');
  });
});

describe('pasarUsuarioAPremium(usuarios)', function() {
  it('Debería retornar el arreglo de usuarios con todas las propiedades esPremium en true', function() {
    const users = [
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
      { esPremium: false },
    ];
    const updatedUsers = [
      { esPremium: true },
      { esPremium: true },
      { esPremium: true },
      { esPremium: true },
      { esPremium: true },
    ];
    expect(pasarUsuarioAPremium(users)).toEqual(updatedUsers);
  });
});

describe('sumarLikesDeUsuario(usuario)', function() {
  it('Debería retornar la suma de todos los likes de todos los objetos post', function() {
    const user = {
      usernombre: 'Jhon Doe',
      password: 'JavaScript es genial!',
      posts: [
        {
          id: '1',
          title: 'Aventuras en JS!',
          likes: 10
        },
        {
          id: '2',
          title: 'Soy Cristian!',
          likes: 100
        },
        {
          id: '3',
          title: 'Qué es un JavaScript?',
          likes: 35
        },
        {
          id: '4',
          title: 'JS Objects for Dummies',
          likes: 42
        },
        {
          id: '5',
          title: 'Educación online',
          likes: 99
        },
      ],
    };
    expect(sumarLikesDeUsuario(user)).toBe(286);
  });
});

describe('agregarMetodoCalculoDescuento(producto)', function() {
  const storeItem = {
    precio: 80,
    porcentajeDeDescuento: 0.1,
  };
  const storeItem2 = {
    precio: 5,
    porcentajeDeDescuento: 0.5,
  };

  it('Debería agregar el método \'calcularPrecioDescuento\' al objeto producto', function() {
    expect(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento).toBeDefined();
    expect(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento).toBeDefined();
  });
  it('Debería retornar el precio con descuento con el método \'precioConDescuento\'', function() {
    expect(agregarMetodoCalculoDescuento(storeItem).calcularPrecioDescuento()).toBe(72);
    expect(agregarMetodoCalculoDescuento(storeItem2).calcularPrecioDescuento()).toBe(2.5);
  });
});
