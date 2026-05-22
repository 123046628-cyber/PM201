import * as cocina from './cocina.js';
import * as caja from './caja.js';

//Promociones 
function obtenerPromoción(){
    const fecha = new Date();
    const dia = fecha.getDay();
    if (dia === 0 || dia === 6) {
        return {descripcion: "Fin de semana: 15% de descuento en bebidas", descuento: 0.15, tipo: "bebida"};
    }
    else if (dia === 2) {
        return {descripcion: "Martes de 2x1 en todos los postres", descuento: 0.50, tipo: "postre"};
    }
    else {
        return {descripcion: "Café de especialidad: 10% de descuento en tu primera compra", descuento: 0.10, tipo: null};
    }
}

function mostrarMenuDinamico(){
    const promocion = obtenerPromoción();
    console.log('---Promoción del día---');
    console.log(promocion.descripcion);
}

function mostrarMenuClientes() {
    console.log(`---Clientes----
  1. Ver productos disponibles
  2. Crear nuevo pedido
  3. Ver mis pedidos
  4. Ver total acumulado
  5. Filtro de productos
  6. Filtros de pedidos
  7. Volver al menú principal`);
}

function mostrarFiltroProductos() {
    console.log(`---Filtro de productos----
        1. Listar todos
        2. Productos baratos
        3. Productos caros
        4. Bebidas
        5. Postres `);
}

function mostrarFiltroPedidos() {
    console.log(`---Filtro de pedidos----
        1. Ver todos los pedidos
        2. Ver pedidos por producto
        3. Ver pedidos mayores a un monto`);
}

function pregunta(rl, texto) {
    return new Promise(function(resolve) {
        rl.question(texto, resolve);
    });
}

function listarProductos(){
    const productos = cocina.listarProductos();
    if (productos.length === 0) return;
    console.log("\nProductos disponibles:");
    const listaFormateada = productos.map(function(p) {
        return `${p.nombre} - $${p.precio}`;
    });
    listaFormateada.forEach(function(linea){
        console.log(linea);
    });
}

function aplicarPromocion(producto, cantidad) {
    const promocion = obtenerPromoción();
    let precioUnit = producto.precio;
    if (promocion.tipo && producto.tipo === promocion.tipo) {
        const descuento = promocion.descuento;
        if (descuento === 0.50 && producto.tipo === "postre") {
            const pagar = Math.ceil(cantidad / 2);
            precioUnit = producto.precio;
            console.log(`Promoción aplicada: 2x1 en postres. Pagas ${pagar} de ${cantidad}`);
            return { precioUnit, cantidadEfectiva: pagar };
        } else if (descuento === 0.15 || descuento === 0.10) {
            precioUnit = producto.precio * (1 - descuento);
            console.log('Descuento del ${descuento*100} ')
        }
}
}


export async function menuClientes(rl) {
    let enMenu = true;
    while (enMenu) {
        mostrarMenuClientes();
        const opcion = await pregunta(rl, "Elige una opción: ");
        switch (opcion) {
            case '1':
                cocina.listarProductos();
                break;
            case '2': {
                console.log("\nCrear nuevo pedido:");
                const productos = cocina.listarProductos();
                if (productos.length === 0) {
                    console.log("No hay productos disponibles para pedir.");
                    break;
                }
                const nombre = await pregunta(rl, "Nombre del producto: ");
                const producto = productos.find(function(p) {
                    return p.nombre.toLowerCase() === nombre.toLowerCase();
                });
                if (!producto) {
                    console.log("Producto no encontrado.");
                    break;
                }
                const cantidad = await pregunta(rl, "Cantidad: ");
                const cant = parseInt(cantidad);
                if (cant <= 0) {
                    console.log("Cantidad no válida.");
                    break;
                }
                const pedido = {
                    nombre: producto.nombre,
                    precio: producto.precio * cant,
                    cantidad: cant
                };
                caja.agregarPedido(pedido);
                console.log(`Pedido agregado: ${cant} x ${producto.nombre} - $${pedido.precio}`);
                break;
            }
            case '3':
                caja.mostrarPedidos();
                break;
            case '4':
                caja.mostrarTotal();
                break;
            case '5':
                enMenu = false;
                break;
            default:
                console.log("Opción no válida.");
        }
    }
}7