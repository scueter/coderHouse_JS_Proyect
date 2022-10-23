alert("\t\t\t\t\t\t\t Bienvenido a ventas de articulos varios.\n\nEscoja el articulo que desee llevar de cada categoría indicando el # número del producto que se lista en las opciones.\n\nAl final se le indicará el valor total a pagar según lo escogido.")


let categoria1 



while (categoria1 != "1" && categoria1 != "2" && categoria1 != "3" && categoria1 != "4"){
    categoria1 = prompt('\t\t\t\t\t\t\tCategoría Electrodomesticos \n\nEscriba el # del articulo que desea llevar:\n#1 Nevera $4.500\n#2 Lavadora $2.500\n#3 Secadora $1.500.\n#4 Ninguno').toString()

    switch (categoria1) { 
        case "1":
            alert('Usted escogió nevera por $4.500')
            break;
        case "2":
            alert('Usted escogió lavadora por $2.500')
            break;
        case "3":
            alert('Usted escogió secadora por $1.500')
            break;
        case "4":
            alert('Usted no escogío ningún producto')
            break;
        default:
            alert('Articulo incorrecto. \nPor favor ingrese un número del 1 al 4 según lo que desee escoger.');
            break;
    }
}

let categoria2

while (categoria2 != "1" && categoria2 != "2" && categoria2 != "3" && categoria2 != "4"){
    categoria2 = prompt('\t\t\t\t\t\t\tCategoría Celulares\n\nEscribra el # del articulo que desea llevar:\n#1 iPhone $1.500\n#2 Xiaomi $1.000\n#3 Huawei $800.\n#4 Ninguno').toString()

    switch (categoria2) { 
        case "1":
            alert('Usted escogió iPhone por $1.500.')
            break;
        case "2":
            alert('Usted escogió Xiaomi por $1.000.')
            break;
        case "3":
            alert('Usted escogió Huawei por $800.')
            break;
        case "4":
            alert('Usted no escogió ningún producto.')
            break;
        default:
            alert('Articulo incorrecto. \nPor favor ingrese un número del 1 al 4 según lo que desee escoger.');
            break;
    }

}

let categoria3 


while (categoria3 != "1" && categoria3 != "2" && categoria3 != "3" && categoria3 != "4"){
    categoria3 = prompt('\t\t\t\t\t\t\tCategoría consolas\n\nEscribra el # del articulo que desea llevar:\n#1 Playstation 4 $600\n#2 XBox X $500\n#3 Nintendo Switch $400.\n#4 Ninguno').toString()

    switch (categoria3) { 
        case "1":
            alert('Usted escogió Playstation 4 por $600.')
            break;
        case "2":
            alert('Usted escogió XBox por $500.')
            break;
        case "3":
            alert('Usted escogió Nintendo Switch por $400.')
            break;
        case "4":
            alert('Usted no escogio ningún producto.')
            break;
        default:
            alert('Articulo incorrecto. \nPor favor ingrese un número del 1 al 4 según lo que desee escoger.');
            break;
    }

}



let articulo1

if (categoria1=='1') {
    articulo1=4500;
} else if (categoria1=='2') {
    articulo1=2500;
} else if (categoria1=='3') {
    articulo1=1500;
} else if (categoria1=='4') {
    articulo1=0
} else {
    articulo1=0
}

let articulo2

if (categoria2=="1") {
    articulo2=1500;
} else if (categoria2=="2") {
    articulo2=1000;
} else if (categoria2=="3") {
    articulo2=800;
} else if (categoria2=="4") {
    articulo2=0
} else {
    articulo2=0
}


let articulo3

if (categoria3=="1") {
    articulo3=600;
} else if (categoria3=="2") {
    articulo3=500;
} else if (categoria3=="3") {
    articulo3=400;
} else if (categoria3=="4") {
    articulo3=0
} else {
    articulo3=0
}





console.log(categoria1);
console.log("En la categoría 1 compraste " + articulo1);
console.log(categoria2);
console.log("En la categoría 2 compraste " + articulo2);
console.log(categoria3);
console.log("En la categoría 3 compraste " + articulo3);


let total



total = articulo1 + articulo2 + articulo3

console.log(total)

if (total>0) {
    alert("El total a pagar por tus articulos seleccionados es: $" + total + ".\nGracias por confiar en nosotros.\n¡Vuelva pronto!");    
} else {
    alert("Vemos que no te interesó ningún articulo.\nGracias por visitarnos, vuelve pronto.");
}



