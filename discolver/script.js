/*function toggleMode() {
  
  
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src",  "./assents/avatar-light.png")
  } else {
    img.setAttribute("src",   "./assents/avatar.png")
  }
} */

function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")

  // Obtém o tema atual da página
  const isLightMode = html.classList.contains("light")

  // Alterna entre os modos
  if (isLightMode) {
    // Muda para o modo noturno
    html.classList.remove("light")
    img.setAttribute("src", "/assents/avatar.png") // Altere o caminho conforme necessário
  } else {
    // Muda para o modo claro
    html.classList.add("light")
    img.setAttribute("src", "/assents/avatar.png") // Altere o caminho conforme necessário
  }
}
