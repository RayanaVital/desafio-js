let carArr = [];

class Car {
    nome;
    preco;
    alturaCacamba;
    alturaVeiculo;
    alturaSolo;
    capacidadeCarga;
    motor;
    potencia;
    volumeCacamba;
    roda;
    image;

    constructor(
        nome,
        preco,
        alturaCacamba,
        alturaVeiculo,
        alturaSolo,
        capacidadeCarga,
        motor,
        potencia,
        volumeCacamba,
        roda,
        image
    ) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;

    }
}

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            carArr.push(carClass);
        } else {
            const carPosition = GetCarArrPosition(carArr, carClass);
            carArr.splice(carPosition);
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if (carArr.length !== 2 ) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }
    

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare() {
    document.getElementById("compare").style.display = "none";
}

function UpdateCompareTable() {
    
    for (let i = 0; i < carArr.length; i++){
        const car = carArr[i];
        let tdImage = document.getElementById("compare_image_" + i);
        console.log({car, tdImage});
        tdImage.innerHTML = `<img src="${car.image}" alt="${car.nome}" width="150">`;
        let tdModelo = document.getElementById("compare_modelo_" + i);
        tdModelo.innerText = car.nome;
        
    }
}
