//FUNCIONES
function modeloRecomendado50(ingreso) {
    const porciento50 = ingreso * 0.5;
    return porciento50;
}

function modeloRecomendado30(ingreso) {
    const porciento30 = ingreso * 0.3;
    return porciento30;
}

function modeloRecomendado20(ingreso) {
    const porciento20 = ingreso * 0.2;
    return porciento20;
}

function necesidadesBasicasActuales(ingreso, necesidadesBasicas) {
    const porcentajeNecesidadesBasicasActuales = (necesidadesBasicas * 100) / ingreso;
    return porcentajeNecesidadesBasicasActuales;
}

function lifestyleActuales(ingreso, lifestyle) {
    const porcentajeLifestyleActual = (lifestyle * 100) / ingreso;
    return porcentajeLifestyleActual;
}

function ahorrosActuales (ingreso, ahorros) {
    const porcentajeAhorrosActual = (ahorros * 100) / ingreso;
    return porcentajeAhorrosActual;
}

//FUNCIONES DE INTERACCIÓN ENTRE JAVASCRIPT Y HTML
function onClickButton() {
    const inputIngreso = document.getElementById("inputIngresoMensual");
    const valueIngreso = inputIngreso.value;
    const mensajeModeloRecomendado50 = modeloRecomendado50(valueIngreso);
    const mensajeModeloRecomendado30 = modeloRecomendado30(valueIngreso);
    const mensajeModeloRecomendado20 = modeloRecomendado20(valueIngreso);

    const inputGastosBasicos = document.getElementById("inputGastosBasicos");
    const valueGastosBasicos = inputGastosBasicos.value;
    const mensajeNecesidadesBasicasActuales = necesidadesBasicasActuales(valueIngreso, valueGastosBasicos);

    const inputLifestyle = document.getElementById("inputGastosLifestyle");
    const valueLifestyle = inputLifestyle.value;
    const mensajeLifestyleActuales = lifestyleActuales(valueIngreso, valueLifestyle);

    const inputAhorros = document.getElementById("inputAhorros");
    const valueAhorros = inputAhorros.value;
    const mensajeAhorrosActuales = ahorrosActuales(valueIngreso, valueAhorros);

//SECCIÓN DE RESULTADOS FINALES
    const resultadoIngresoMensual = document.getElementById("resultadoIngresoMensual");
    resultadoIngresoMensual.innerText = `Tus ingresos mensuales son de $${valueIngreso}`

    const mensajeNumero1 = document.getElementById("mensaje1");
    mensajeNumero1.innerText = `De acuerdo con tus ingresos mensuales, el método 50/30/20 propone que éste sea distribuido de la siguiente manera:`

    const porcentajeRecomendado50 = document.getElementById("resultadoPorcentajeRecomendado50");
    porcentajeRecomendado50.innerText = `Para las necesidades básicas: $${mensajeModeloRecomendado50}`

    const porcentajeRecomendado30 = document.getElementById("resultadoPorcentajeRecomendado30");
    porcentajeRecomendado30.innerText = `Para los gastos lifestyle: $${mensajeModeloRecomendado30}`

    const porcentajeRecomendado20 = document.getElementById("resultadoPorcentajeRecomendado20");
    porcentajeRecomendado20.innerText = `Para los ahorros: $${mensajeModeloRecomendado20}`

    const mensajeNumero2 = document.getElementById("mensaje2");
    mensajeNumero2.innerText = `Actualmente la distribución de tus ingresos mensuales en porcentaje es de la siguiente manera:`

    const porcentajeGastosBasicos = document.getElementById("porcentajeGastosBasicos");
    porcentajeGastosBasicos.innerText = `Para las necesidades básicas: ${mensajeNecesidadesBasicasActuales.toFixed(2)}%`

    const porcentajeLifestyle = document.getElementById("porcentajeLifestyle");
    porcentajeLifestyle.innerText = `Para los gastos lifestyle: ${mensajeLifestyleActuales.toFixed(2)}%`

    const porcentajeAhorros = document.getElementById("porcentajeAhorros");
    porcentajeAhorros.innerText = `Para los ahorros: ${mensajeAhorrosActuales.toFixed(2)}%`
}