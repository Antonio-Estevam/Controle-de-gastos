 document.getElementById ('bt').addEventListener('click',getElements);


function getElements(){

    let email = document.getElementById ('email').value;
    let senha = document.getElementById ('senha').value;

     validarElement(email,senha)
    //console.log(email,senha);    
}

function validarElement(email,senha){
        if (email == '' || senha == ''){
            alert("Digite o E-mail e a Senha corretamente.");
        }else
        {
            if(email == 'jhonnyimmbe@gmail.com'){
                if(senha == 'admin'){
                    alert("logado");
                }else
                {
                    alert("Senha errado");   
                }
            }else
             { 
                 alert("E-mail errado");
             }
            console.log(email,senha)
        }
}
//-------------------------------------

const btnLogin = document.querySelector(".bt");
const form = document.querySelector("form");

btnLogin.addEventListener("click", event => {
  event.preventDefault();

  const fields = [...document.querySelectorAll(".input-block input")];

  fields.forEach(field => {
    if (field.value === "") form.classList.add("validate-error");
  });

  const formError = document.querySelector(".validate-error");
  if (formError) {
    formError.addEventListener("animationend", event => {
      if (event.animationName === "nono") {
        formError.classList.remove("validate-error");
      }
    });
  } else {
    form.classList.add("form-hide");
  }
});

form.addEventListener("animationstart", event => {
  if (event.animationName === "down") {
    document.querySelector("body").style.overflow = "hidden";
  }
});

form.addEventListener("animationend", event => {
  if (event.animationName === "down") {
    form.style.display = "none";
    document.querySelector("body").style.overflow = "none";
  }
});

/* background squares */
const ulSquares = document.querySelector("ul.squares");

for( let i = 0; i < 20; i++ ){
  const li = document.createElement("li");
  

  const random = (max,min)=>Math.random() * (max -min) + min;
  
  const size = Math.floor(random(10,120));
  const position = random(99,1);
  const delay = random(5, 0.1);
  const duration = random(24,12);
  const colorR = random(0,255);
  const colorG = random(0,255);
  const colorB = random(0,255);

  li.style.width = `${size}px`;
  li.style.height = `${size}px`;
  li.style.bottom = `-${size}px`;
  
  li.style.backgroundColor = `rgba(${colorR},${colorG},${colorB},0.1)`;
  
  li.style.left = `${position}%`;  

  li.style.animationDelay = `${delay}s`;
  li.style.animationDuration = `${duration}s`;
  li.style.animationTimingFunction = `cubic-bezier(${Math.random(),Math.random(),Math.random(),Math.random()})`;

  ulSquares.appendChild(li);
}



