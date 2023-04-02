<template>
  <div class="grid grid-cols-1 lg:grid-cols-2">
    <div
      class="flex items-center justify-center h-screen lg:px-8 bg-gradient-to-b lg:bg-gradient-to-tr from-blue-700 to-blue-900"
    >
      <div class="flex-grow-0 mx-2 space-y-4">
        <div>
          <h1 class="font-bold text-3xl lg:text-4xl text-white">
            Olá, seja muito bem vindo
          </h1>
          <p class="font-light">
            Use o formulário para fazer suas configurações iniciais.
          </p>
        </div>
        <div>
          <h2 class="font-bold text-2xl lg:text-3xl text-white">Moedas</h2>
          <p class="font-light">
            Selecione uma moeda base, ela será a moeda usada por padrão. Você também pode
            selecionar uma segunda moeda, está, será usada caso você tenha a
            necessidade... Compras internacionais em dólar, por exemplo.
          </p>
        </div>
        <div>
          <h2 class="font-bold text-2xl lg:text-3xl text-white">Contas</h2>
          <p class="font-light">
            Crie contas que você gostaria de acompanhar. Pode ser dinheiro na carteira,
            contas bancárias, cartão de crédito, recebimentos...
          </p>
        </div>
      </div>
    </div>
    <div class="flex items-center justify-center bg-white">
      <div class="flex-grow-0 w-full max-w-2xl mx-auto p-2">
        <form class="w-full">
          <div class="flex flex-wrap -mx-3 mb-6">
            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Nome da carteira
              </label>
              <input
                class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Nome da carteira"
              />
              <p class="text-red-500 text-xs italic">Este é um campo obrigatório.</p>
            </div>
          </div>
          <div class="flex flex-wrap -mx-3 mb-2">
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Moeda padrão
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Real Brasileiro (BRL)</option>
                  <option>Dólar Americano (USD)</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                Moeda secundária
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Real Brasileiro (BRL)</option>
                  <option>Dólar Americano (USD)</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap mt-2">
            <router-link
              :to="{name: 'dashboard'}"
              class="bg-gradient-to-tr from-blue-700 to-blue-900 text-white uppercase rounded-md px-4 py-2"
            >
              Abrir carteira
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
