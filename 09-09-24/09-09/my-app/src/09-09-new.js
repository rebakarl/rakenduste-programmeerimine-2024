const names=["Anni", "Mari", "Mati", "Juku"];

const objectifiedNames= names.map((name)=> {
  return {
    name: name,
    age: name.leght+15,
    email: `${name}@company.com`,
    address: `${name} Street 54`,
    username: name.split("").reverse().join(""),
  };
})

console.log({objectifiedNames});


let raimo= {
    name: "Raimo",
    school: "TLÜ",
};

raimo={...raimo, height: 191};
console.log({raimo});

console.log(1 =="1"); //2 tükki uurib kas saab muuta
console.log(1==="1"); //vajalik 3 = rangeks võrdluseks

//async/await Promise (3 state - pendinge, resolve, reject)

const myPromise=() => {
    return new Promise(resolve=>setTimeout(()=>resolve("done"),1000));
};


const runPromise=async()=>{
    console.log(await myPromise())
};
runPromise();

setTimeout(()=>console.log("timeout"), 2000);