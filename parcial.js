const salarioMinimo = 1750000;
const tope_max_IBC = 43750000;
const dependiente_paga = 4;
const empleador_paga = 8.5;
const independiente = 12.5; // indepentiente paga el total 
const upc_adicional = 150000; //Por cada padre

let salario;
let tipo; // 1 dependiente // 2 independiente
let p_acargo;

salario = math(prompt("digite el sueldo que gana: "))


if (salario < 0){
    alert("Sueldo no valido")
}else{
    alert("Dato tomado")
}

if (salario > salarioMinimo){
    alert("IBC no valido")
}else{
    alert("IBC tomado")
}



tipo = prompt("marque 1 si usted es dependiente(Trabajador), marque 2 si es independiente: ")

if (tipo = 1){
    alert("Dependiente (Trabajador)")
} else{
    alert("Error")
}

if(tipo = 2){
    p_acargo = prompt("¿cuantos padres dependen de usted?(responda con: 0,1,2): ")

    switch (p_acargo){
        case 0:
            alert("No genera costo adicional");
        break;

        case 1:
            alert("costo adicional de $150.000")
            function calcular_padre(p_acargo, salario, independiente){
                let calculo_independiente = independiente / salario;
                let calculo_padre = calculo_independiente + upc_adicional;
            }

            console.log= ("total a pagar = " + calculo_padre);
        break;    

        case 0:
            alert("costo adicional de $300.000")
            let costo2pades = calculo_padre + 150000;
            console.log("El costo adicional total es de: " + costo2pades);
        break;
        
    }

}


