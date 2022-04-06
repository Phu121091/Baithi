//A bai 1
const people = ["BINH","HUNG","PHUOC","CAO","KHANH"];
const allLongestStrings = (a) =>{
    let max = 0;
    const arraynamemax =[];
    for(i=0;i<a.length;i++){
        if(a[i].length>max)
        { max=a[i].length; }
    }
    for(i=0;i<a.length;i++){
        if(a[i].length==max){
    arraynamemax.push(a[i]);
        }
    }
    return arraynamemax;
}
console.log(allLongestStrings(people));


//A bài 2
const arrweight = [50,51,52,53,54,55,56,57];
const alternatingSums = (a) =>{
    let weightt1 = 0;
    let weightt2 = 0;
    for(i=0;i<a.length;i++){
               if ((i%2)==0){
            weightt1 = weightt1+a[i];
        }else weightt2 =weightt2+a[i];
    }
    const KQ =[weightt1,weightt2];
    return KQ;
}
console.log(alternatingSums(arrweight));

//B
const main = document.querySelector(".main");
const changecolor = document.querySelector(".changecolor");
const macolor =document.querySelector(".macolor");
const random = () =>{
   return Math.floor(Math.random()*256);
}
changecolor.onclick =() =>{
    const so1 =random();
    const so2 =random();
    const so3 =random();
    let col = `background-color:rgb(${so1}, ${so2}, ${so3})`;
    
    main.setAttribute("style",`${col}`);
    
    macolor.innerHTML=`#${so1.toString(16)}${so2.toString(16)}${so3.toString(16)}`

}
const choose = document.querySelector(".choosema");
choose.onclick=()=>{
    let aaa= prompt("Nhập mã");
    main.setAttribute("style",`background:${aaa}`);
}
