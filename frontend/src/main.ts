import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import VueFeather from "vue-feather"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue"
import { Bars3Icon, BellIcon, XMarkIcon, ChevronUpIcon } from "@heroicons/vue/24/outline"

const app = createApp(App)

app.use(router)
app.component("VueFeather", VueFeather)
app.component("Disclosure", Disclosure)
app.component("DisclosureButton", DisclosureButton)
app.component("DisclosurePanel", DisclosurePanel)
app.component("Menu", Menu)
app.component("MenuButton", MenuButton)
app.component("MenuItem", MenuItem)
app.component("MenuItems", MenuItems)
app.component("Bars3Icon", Bars3Icon)
app.component("BellIcon", BellIcon)
app.component("XMarkIcon", XMarkIcon)
app.component("ChevronUpIcon", ChevronUpIcon)
app.mount("#app")
