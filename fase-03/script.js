document.addEventListener("DOMContentLoaded", () => {
 
  const ucList = document.querySelector(".right ul");
  const ucContainer = ucList.parentElement;
   
    const cpfInput = document.getElementById("cpfInput");
    const cpfMsg = document.getElementById("cpfMsg");
  
    cpfInput.addEventListener("blur", () => {
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      if (cpfRegex.test(cpfInput.value.trim())) {
        cpfMsg.textContent = "CPF válido";
        cpfMsg.className = "msg ok";
      } else {
        cpfMsg.textContent = "CPF inválido";
        cpfMsg.className = "msg error";
      }
    });
  
   
    const emailInput = document.getElementById("emailInput");
    const emailMsg = document.getElementById("emailMsg");
  
    emailInput.addEventListener("blur", () => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(emailInput.value.trim())) {
        emailMsg.textContent = "E-mail válido";
        emailMsg.className = "msg ok";
      } else {
        emailMsg.textContent = "E-mail inválido";
        emailMsg.className = "msg error";
      }
    });
  

  
  const addUcBtn = document.createElement("button");
  addUcBtn.textContent = "Adicionar UC";
  addUcBtn.style.marginTop = "10px";
  addUcBtn.style.cursor = "pointer";

  ucContainer.appendChild(addUcBtn);

  addUcBtn.addEventListener("click", () => {
    const uc = prompt("Digite o nome da nova UC:");
    if (uc && uc.trim() !== "") {
      const li = document.createElement("li");
      li.textContent = uc.trim();
      adicionarSetas(li);
      ucList.appendChild(li);
    }
  });


  function adicionarSetas(li) {
    const upBtn = document.createElement("button");
    upBtn.textContent = "▲";
    upBtn.title = "Mover para cima";
    upBtn.style.marginLeft = "8px";
    upBtn.style.cursor = "pointer";
  
    const downBtn = document.createElement("button");
    downBtn.textContent = "▼";
    downBtn.title = "Mover para baixo";
    downBtn.style.marginLeft = "4px";
    downBtn.style.cursor = "pointer";
  
    upBtn.onclick = () => {
      const prev = li.previousElementSibling;
      if (prev) ucList.insertBefore(li, prev);
    };
  
    downBtn.onclick = () => {
      const next = li.nextElementSibling;
      if (next) ucList.insertBefore(li, next.nextSibling);
    };
  
    li.appendChild(upBtn);
    li.appendChild(downBtn);
  }
  

  ucList.querySelectorAll("li").forEach(adicionarSetas);

  
  const dadosPessoais = document.querySelector(".left");

  

  function getTextoDeCampo(container, campo) {
    const p = [...container.querySelectorAll("p")].find((p) =>
      p.textContent.startsWith(campo)
    );
    return p ? p.textContent.replace(campo, "").trim() : "";
  }

  
  const perfilTd = document.querySelector("td[colspan='2']");

  const perfilBtn = document.createElement("button");
  perfilBtn.textContent = "Adicionar Informação Pessoal";
  perfilBtn.style.marginTop = "15px";
  perfilBtn.style.cursor = "pointer";

  const textarea = document.createElement("textarea");
  textarea.rows = 3;
  textarea.style.width = "100%";
  textarea.style.marginTop = "10px";
  textarea.style.display = "none";

  const salvarBtn = document.createElement("button");
  salvarBtn.textContent = "Salvar Informação";
  salvarBtn.style.marginTop = "10px";
  salvarBtn.style.display = "none";
  salvarBtn.style.cursor = "pointer";

  const container = document.getElementById("inserir-info-pessoal");
  container.appendChild(perfilBtn);
  container.appendChild(textarea);
  container.appendChild(salvarBtn);  

  perfilBtn.onclick = () => {
    textarea.style.display = "block";
    salvarBtn.style.display = "inline-block";
    perfilBtn.style.display = "none";
  };

  salvarBtn.onclick = () => {
    const texto = textarea.value.trim();
    if (texto) {
      const novoParagrafo = document.createElement("p");
      novoParagrafo.textContent = texto;
      container.insertBefore(novoParagrafo, perfilBtn); 
      textarea.value = "";
    }
    textarea.style.display = "none";
    salvarBtn.style.display = "none";
    perfilBtn.style.display = "inline-block";
  };
});
