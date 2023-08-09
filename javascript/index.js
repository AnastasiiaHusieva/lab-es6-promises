// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  


// Iteration 1 - using callbacks
getInstruction("mashedPotatoes", 0, (step1) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;

   getInstruction("mashedPotatoes", 1, (step2) => {
     document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  
      getInstruction("mashedPotatoes", 2, (step3) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
 
       getInstruction("mashedPotatoes", 3, (step4) => {
         document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
 
         getInstruction("mashedPotatoes", 4, (step5) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;

          document.querySelector("#mashedPotatoes").innerHTML += '<li>"Mashed potatoes are ready!"</li>'
          
          const mashedPotatoesImg = document.getElementById("mashedPotatoesImg")
          mashedPotatoesImg.removeAttribute ('hidden')
           
        });
      });
    });
  });
});

// Iteration 2 - using promises

obtainInstruction('steak', 0)
  .then( (step0) => {
    document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
    return obtainInstruction('steak', 1)
  })
  .then((step1) => {obtainInstruction('steak', 1)
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`
    return obtainInstruction('steak', 2)
  })
  .then((step2) => {obtainInstruction('steak', 2)
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`
    return obtainInstruction('steak', 3)
  })
  .then((step3) => {obtainInstruction('steak', 3)
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`
  return obtainInstruction('steak', 4)
  })
  .then((step4) => {obtainInstruction('steak', 4)
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`
    return obtainInstruction('steak', 5)
  })
  .then((step5) => {obtainInstruction('steak', 5)
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`
  return obtainInstruction('steak', 6)
})
.then((step6) => {obtainInstruction('steak', 6)
document.querySelector("#steak").innerHTML += `<li>${step6}</li>`
return obtainInstruction('steak', 7)
})
.then((step7) => {obtainInstruction('steak', 7)
document.querySelector("#steak").innerHTML += `<li>${step7}</li>`
document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`
const steakImg = document.getElementById("steakImg")
steakImg.removeAttribute ('hidden')
})


  // ... Your code here

// Iteration 3 using async/await
// ...
async function makeBroccoli() {
    const broccolies = document.querySelector("#broccoli")
    const step0 = await obtainInstruction('broccoli', 0)
    broccolies.innerHTML += `<li>${step0}</li>`
    const step1 = await obtainInstruction('broccoli', 1)
    broccolies.innerHTML += `<li>${step1}</li>`
    const step2 = await obtainInstruction('broccoli', 2)
    broccolies.innerHTML += `<li>${step2}</li>`
    const step3 = await obtainInstruction('broccoli', 3)
    broccolies.innerHTML += `<li>${step3}</li>`
    const step4 = await obtainInstruction('broccoli', 4)
    broccolies.innerHTML += `<li>${step4}</li>`
    const step5 = await obtainInstruction('broccoli', 5)
    broccolies.innerHTML += `<li>${step5}</li>`
    const step6 = await obtainInstruction('broccoli', 6)
    broccolies.innerHTML += `<li>${step6}</li>`
    broccolies.innerHTML += `<li>Broccoli is ready!</li>`
    const broccoliImg = document.getElementById("broccoliImg")
    broccoliImg.removeAttribute ('hidden')
  }
  
  makeBroccoli()


 
  
  

// Bonus 2 - Promise all
const promises = [];

for (let i = 0; i < brusselsSprouts.length; i++) {
  promises.push(obtainInstruction('brusselsSprouts', [i]));
}

Promise.all(promises)
  .then((steps) => {
    const brusselsList = document.querySelector("#brusselsSprouts");

    steps.forEach((step) => {
      brusselsList.innerHTML += `<li>${step}</li>`;
    });

    brusselsList.innerHTML += "<li>Brussels sprouts are ready!</li>";
    
    
    const brusselsImg = document.getElementById("brusselsSproutsImg");
    brusselsImg.removeAttribute('hidden');
  })
  
