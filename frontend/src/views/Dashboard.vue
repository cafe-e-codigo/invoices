<template>
  <Navbar />
  <section id="dashboard" class="dashboard">
    <div class="dashboard_resume">
      <div class="lg:col-span-2 border border-slate-200 lg:rounded-md p-2 divide-y">
        <div class="font-bold text-xl">Tarefas pendentes</div>
        <div class="flex flex-col space-y-2 p-2">
          <span class="flex items-center space-x-1">
            <component :is="BanknotesIcon" class="w-6 h-6" />
            <small>Despesas não pagas</small>
          </span>
          <span class="flex items-center space-x-1">
            <component :is="BanknotesIcon" class="w-6 h-6" />
            <small>Recitas não recebidas</small>
          </span>
        </div>
      </div>
      <div class="lg:col-span-4 border border-slate-200 lg:rounded-md p-2 divide-y">
        <div class="font-bold text-xl">Faça rapidamente</div>
        <div class=""></div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import { BanknotesIcon } from "@heroicons/vue/20/solid";
</script>

<style scoped>
.dashboard {
  @apply container mx-auto;
}
.dashboard_resume {
  @apply grid grid-cols-1 lg:grid-cols-6 gap-3 mt-3;
}
</style>
