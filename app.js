alert("\t\t\t\t\t\t\t Bienvenido a ventas de articulos varios.\n\nEscoja el articulo que desee llevar de cada categoría indicando el # número del producto que se lista en las opciones.\n\nAl final se le indicará el valor total a pagar según lo escogido.")

//Funciones

const categorias = (a,b,c,d,e) => {
    let opcion
    while (opcion != "1" && opcion != "2" && opcion != "3" && opcion != "4"){
        opcion = prompt(a).toString()
    
        switch (opcion) { 
            case "1":
                alert(b)
                break;
            case "2":
                alert(c)
                break;
            case "3":
                alert(d)
                break;
            case "4":
                alert('Usted no escogío ningún producto')
                break;
            default:
                alert('Articulo incorrecto. \nPor favor ingrese un número del 1 al 4 según lo que desee escoger.');
                break;
        }
    }
    return opcion
}



const precios = (a,b,c,d) => {
    let valor
    if (a=='1') {
        valor=b;
    } else if (a=='2') {
        valor=c;
    } else if (a=='3') {
        valor=d;
    } else if (a=='4') {
        valor=0
    } else {
        valor=0
    }
    return valor
}

// Llamados



let categoria1 = categorias(
    '\t\t\t\t\t\t\tCategoría Electrodomesticos \n\nEscriba el # del articulo que desea llevar:\n#1 Nevera $4.500\n#2 Lavadora $2.500\n#3 Secadora $1.500.\n#4 Ninguno',
    'Usted escogió nevera por $4.500',
    'Usted escogió lavadora por $2.500',
    'Usted escogió secadora por $1.500',
    );



let categoria2 = categorias(
    '\t\t\t\t\t\t\tCategoría Celulares\n\nEscribra el # del articulo que desea llevar:\n#1 iPhone $1.500\n#2 Xiaomi $1.000\n#3 Huawei $800.\n#4 Ninguno',
    'Usted escogió iPhone por $1.500.',
    'Usted escogió Xiaomi por $1.000.',
    'Usted escogió Huawei por $800.',
    );



let categoria3 = categorias(
    '\t\t\t\t\t\t\tCategoría consolas\n\nEscribra el # del articulo que desea llevar:\n#1 Playstation 4 $600\n#2 XBox X $500\n#3 Nintendo Switch $400.\n#4 Ninguno',
    'Usted escogió Playstation 4 por $600.',
    'Usted escogió XBox por $500.',
    'Usted escogió Nintendo Switch por $400.',
    );


let articulo1 = precios(
    categoria1,
    4500,
    2500,
    1500
    );

let articulo2 = precios(
    categoria2,
    1500,
    1000,
    800
    );

let articulo3 = precios(
    categoria3,
    600,
    500,
    400
    );

//Para probar
// console.log(categoria1);
// console.log("En la categoría 1 compraste " + articulo1);
// console.log(categoria2);
// console.log("En la categoría 2 compraste " + articulo2);
// console.log(categoria3);
// console.log("En la categoría 3 compraste " + articulo3);


let total = articulo1 + articulo2 + articulo3;

//console.log(total)

if (total>0) {
    alert("El total a pagar por tus articulos seleccionados es: $" + total + ".\nGracias por confiar en nosotros.\n¡Vuelva pronto!");    
} else {
    alert("Vemos que no te interesó ningún articulo.\nGracias por visitarnos, vuelve pronto.");
}