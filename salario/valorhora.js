/**
 * Valor da Hora
 * @author Murillo Ramos
 */

 function calcularDinheiro()
 {
    let Salario, Custo, Carga, Hora
    Salario = parseFloat(frmValor.vlrSalario.value.replace(",","."))
    Custo = parseFloat(frmValor.vlrCusto.value.replace(",","."))
    Carga = parseFloat(frmValor.vlrCarga.value.replace(",","."))
    Hora = (((Salario * 30) / 100) + ((Salario * 20) / 100) + Salario + Custo) / Carga
    frmValor.vlrHora.value = Hora
 }