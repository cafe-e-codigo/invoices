<template>
  <div class="bg-gradient-to-tr to-violet-600 from-violet-800">
    <header class="container mx-auto">
      <nav class="nav" aria-label="Global">
        <div class="nav_brand">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img class="h-8 w-auto" src="favicon.png" alt="" />
          </a>
          <span class="font-bold text-2xl text-violet-500">Minhas Contas</span>
        </div>
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = true"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup class="hidden lg:flex lg:gap-x-12">
          <Popover class="relative">
            <PopoverButton
              class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 focus:outline-none"
            >
              Serviços
              <ChevronDownIcon
                class="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 translate-y-1"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-1"
            >
              <PopoverPanel
                class="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
              >
                <div class="p-4">
                  <div
                    v-for="item in products"
                    :key="item.name"
                    class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                  >
                    <div
                      class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
                    >
                      <component
                        :is="item.icon"
                        class="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div class="flex-auto">
                      <a :href="item.href" class="block font-semibold text-gray-900">
                        {{ item.name }}
                        <span class="absolute inset-0" />
                      </a>
                      <p class="mt-1 text-gray-600">{{ item.description }}</p>
                    </div>
                  </div>
                </div>
                <div class="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  <a
                    v-for="item in callsToAction"
                    :key="item.name"
                    :href="item.href"
                    class="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <component
                      :is="item.icon"
                      class="h-5 w-5 flex-none text-gray-400"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </div>
              </PopoverPanel>
            </transition>
          </Popover>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Bancos</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Cartões</a>
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900"
            >Configurações</a
          >
        </PopoverGroup>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" class="text-sm font-semibold leading-6 text-gray-900">
            Sair <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        class="lg:hidden"
        @close="mobileMenuOpen = false"
        :open="mobileMenuOpen"
      >
        <div class="fixed inset-0 z-10" />
        <DialogPanel
          class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-gradient-to-tr to-violet-600 from-violet-800"
        >
          <div class="flex items-center justify-between">
            <a href="#" class="-m-1.5 p-1.5 flex items-center">
              <span class="sr-only">Your Company</span>
              <img class="h-8 w-auto" src="favicon.png" alt="" />
              <span class="font-bold text-2xl text-violet-500 ml-3">Minhas Contas</span>
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = false"
            >
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                  <DisclosureButton
                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50"
                  >
                    Product
                    <ChevronDownIcon
                      :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel class="mt-2 space-y-2">
                    <DisclosureButton
                      v-for="item in [...products, ...callsToAction]"
                      :key="item.name"
                      as="a"
                      :href="item.href"
                      class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >{{ item.name }}</DisclosureButton
                    >
                  </DisclosurePanel>
                </Disclosure>
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Features</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Marketplace</a
                >
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Company</a
                >
              </div>
              <div class="py-6">
                <a
                  href="#"
                  class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >Sair
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { BanknotesIcon, ChevronDownIcon, PhoneIcon, PlayCircleIcon, PuzzlePieceIcon } from "@heroicons/vue/20/solid";

const products = [
  {
    name: "Relatórios",
    description: "Tenha um melhor entendimento das suas despesas e receitas.",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Receitas e Despesas",
    description: "Faça seus lançamentos e mantenha suas contas em dia.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Bancos e Cartões",
    description: "Gerencie contas e cartões.",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrações",
    description: "Conecte API's externas ou Power Apps disponíveis que possam te ajudar.",
    href: "#",
    icon: SquaresPlusIcon,
  },
];
const callsToAction = [
  { name: "Balanço", href: "#", icon: BanknotesIcon },
  { name: "Power Apps", href: "#", icon: PuzzlePieceIcon },
];

const mobileMenuOpen = ref(false);
</script>

<style scoped>
.nav {
  @apply mx-auto flex max-w-full items-center justify-between p-6 lg:px-8;
}
.nav_brand {
  @apply flex lg:flex-1 items-center space-x-3;
}
</style>
