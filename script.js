const copos = document.querySelectorAll(".cup-small");
const litros = document.getElementById("liters");
const porcentagem = document.getElementById("percentage");
const remained = document.getElementById("remained");

updateCopo();

copos.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  if (
    copos[idx].classList.contains("full") &&
    !copos[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  copos.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });

  updateCopo();
}

function updateCopo() {
  const coposCheios = document.querySelectorAll(".cup-small.full").length;
  const totalDeCopos = copos.length;

  if (coposCheios === 0) {
    porcentagem.style.visibility = "hidden";
    porcentagem.style.height = 0;
  } else {
    porcentagem.style.visibility = "visible";
    porcentagem.style.height = `${(coposCheios / totalDeCopos) * 330}px`;
    porcentagem.innerText = `${(coposCheios / totalDeCopos) * 100}%`;
  }

  if (coposCheios === totalDeCopos) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    litros.innerText = `${2 - (250 * coposCheios) / 1000}L`;
  }
}