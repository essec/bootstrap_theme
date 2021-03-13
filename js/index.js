function toogleSidebar() {
  const sidebarMenu = document.getElementById("sidebarMenu")
  const body = document.getElementsByTagName("body")[0]
  const overlay = document.getElementById("overlay")
  if (sidebarMenu.classList.value.includes("collapsed")) {
    sidebarMenu.classList.remove("collapsed")
    body.style.overflowX = "hidden"
    overlay.style.display = "block"
  }
  else {
    document.getElementById("sidebarMenu").classList.add("collapsed");
    overlay.style.display = "none"
  }
}