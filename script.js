let input= document.querySelector("input");
let Data=[];
let NewData=[];
let un_box=document.querySelector("#uncomplete");
let com_box=document.querySelector("#complete");
let dat=[];


const Run=()=>{
  Data=[];
  
  let a=input.value
    if(a){
        Data.push(a);
        dat.push(a)
    }
    
//  console.log(dat);
    input.value="";
   Data.map((hamdan)=>{
    let element = document.createElement("li");
    let text=document.createTextNode(hamdan)
    element.className="daba"
    element.appendChild(text)
    un_box.appendChild(element)
    
  })
  let diba = document.getElementsByClassName("daba");
  // console.log(diba)
  for(let a=0;a<diba.length;a++){
      diba[a].onclick=()=>{
            diba[a].style.display="none";
            let myNew= dat.slice(a,a+1)
            // console.log(diba)
            
              NewData=[];
              NewData.push(myNew);
              
              RunNew();
      }
   }
}

const RunNew=()=>{
 

    NewData.map((show)=>{

            let element1 = document.createElement("li");
            let text1= document.createTextNode(show)
            element1.className="daba1 bg-success"
            element1.appendChild(text1)
            com_box.appendChild(element1)          
        
    })
    let diba = document.getElementsByClassName("daba1");
     
    for(let a=0;a<diba.length;a++){
            diba[a].onclick=()=>{
                diba[a].style.display="none";
            
      }
    }
    
}
