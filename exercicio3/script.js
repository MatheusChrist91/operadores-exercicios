// Parte 1
 /*
const a = 5 > 20 && 5 < 2
console.log(`a) 5 é maior que 20 e também é menor que 2: ${a}`)

const b = 5 === 5 === '5'
console.log(`b) 5 é igual a 5 ou é igual a “5”: ${b}`)

const c = !(20 > 50)
console.log(`c) negação de (vinte é maior que cinquenta): ${c}`)

const d = !(20 > 50 || 60)
console.log(`d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta): ${d}`)

*/

// Parte 2

//janeiro

const salario = 2000
const creche = 45.50 * 2
const comissao = 0.1
const inss = 0.05
    
const vendasJan = 5784.50
const vendasFev = 3418.41
const vendasMar = 4124.10
const vendasAbr = 1874.00
const vendasMai = 7000
const vendasJun = 9450

const janCom = vendasJan * comissao
const fevCom = vendasFev * comissao
const marCom = vendasMar * comissao
const abrCom = vendasAbr * comissao
const maiCom = vendasMai * comissao
const junCom = vendasJun * comissao

const brutoJan = salario + janCom 
const brutoFev = salario + fevCom 
const brutoMar = salario + marCom 
const brutoAbr = salario + abrCom 
const brutoMai = salario + maiCom
const brutoJun = salario + junCom

const descJan = brutoJan * inss
const descFev = brutoFev * inss
const descMar = brutoMar * inss
const descAbr = brutoAbr * inss
const descMai = brutoMai * inss
const descJun = brutoJun * inss

const liqJan = brutoJan + creche - descJan
const liqFev = brutoFev + creche - descFev
const liqMar = brutoMar + creche - descMar
const liqAbr = brutoAbr + creche - descAbr
const liqMai = brutoMai + creche - descMai
const liqJun = brutoJun + creche - descJun
 

 //1 
console.log(`1) O salário fixo mais o auxílio creche: ${salario + creche}`)

//2 
console.log(`2) Quanto Fulano de Silva receberá de comissão em janeiro: ${vendasJan * comissao}`)

//3
console.log(`3) Quanto Fulano de Silva será descontado em janeiro pelo INSS: ${(salario + janCom) * inss}`)

//4
console.log(`O ganho líquidos de Janeiro foi: ${brutoJan + creche - descJan}`)
console.log(`O ganho líquidos de Janeiro foi: ${brutoFev + creche - descFev}`)
console.log(`O ganho líquidos de Janeiro foi: ${brutoMar + creche - descMar}`)
console.log(`O ganho líquidos de Janeiro foi: ${brutoAbr + creche - descAbr}`)
console.log(`O ganho líquidos de Janeiro foi: ${brutoMai + creche - descMai}`)
console.log(`O ganho líquidos de Janeiro foi: ${brutoJun + creche - descJun}`)

//5

console.log(`A média de salário entre Janeiro a Junho foi:${(liqJan+liqFev+liqMar+liqAbr+liqMai+liqJun) / 6}`)
