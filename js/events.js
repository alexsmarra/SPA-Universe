export default function Events({
   hamburguerMenu,
   menuList,
   closeBtn,
   linkHome,
   linkUniverse,
   linkExploration
}) {
   function openMenu() {
      menuList.classList.toggle("hide")
      hamburguerMenu.classList.toggle("hide")
      closeBtn.classList.toggle("hide")
   }

   function closeMenu() {
      menuList.classList.toggle("hide")
      hamburguerMenu.classList.toggle("hide")
      closeBtn.classList.toggle("hide")
   }

   hamburguerMenu.addEventListener("click", openMenu)
   closeBtn.addEventListener("click", closeMenu)

   // nav buttons (color)
   linkHome.addEventListener("click", () => {
      linkHome.classList.add("active")
      linkUniverse.classList.remove("active")
      linkExploration.classList.remove("active")
   })

   linkUniverse.addEventListener("click", () => {
      linkHome.classList.remove("active")
      linkUniverse.classList.add("active")
      linkExploration.classList.remove("active")
   })

   linkExploration.addEventListener("click", () => {
      linkHome.classList.remove("active")
      linkUniverse.classList.remove("active")
      linkExploration.classList.add("active")
   })


   return {
      openMenu,
      closeMenu
   }
}