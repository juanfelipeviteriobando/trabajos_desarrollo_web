interface OmsData
{
    altura: number
    peso: number
}
class oms implements OmsData{
altura: number
peso: number
  constructor(altura: number,peso:number) {
    this.altura=altura;
    this.peso=peso;
  }
  calcularoms(){
     let omsnumber=this.peso/(this.altura^2);
     console.log(omsnumber);
    if(omsnumber<=18){
        console.log("flaco");
    }else{
        if(omsnumber<=29){
        console.log("bien!");
        }else{if(omsnumber<=34){
            console.log("Obeso");
        }else{if(omsnumber>34){
            console.log("goooorrrrrdoooooooo!");
        }else{

        }}}}
  }
}
const omss = new oms(1.80,100);
omss.calcularoms(); // Output: