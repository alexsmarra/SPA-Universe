import { Router } from "./router.js"

import Events from './events.js'

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()

window.onpopstate = () => router.handle()

window.route = () => router.route() 

import {
   hamburguerMenu,
   menuList,
   closeBtn,
   linkHome,
   linkUniverse,
   linkExploration
} from "./elements.js"

const events = Events({
   hamburguerMenu,
   menuList,
   closeBtn,
   linkHome,
   linkUniverse,
   linkExploration
})


