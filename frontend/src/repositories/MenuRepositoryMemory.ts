import type MenuRepository from "./MenuRepository"

export default class MenuRepositoryMemory implements MenuRepository {
  async navigation(): Promise<{ name: string; href: string; current: boolean; icon: string }[]> {
    return [
      { name: "Página principal", href: "dashboard", current: true, icon: "home" },
      { name: "Despesas", href: "home", current: false, icon: "dollar-sign" },
      { name: "Receitas", href: "home", current: false, icon: "dollar-sign" },
      { name: "Cartões", href: "home", current: false, icon: "credit-card" },
      { name: "Contas Bancárias", href: "home", current: false, icon: "briefcase" },
      { name: "Viagens", href: "viagens", current: false, icon: "send" },
    ]
  }
  async userNavigation(): Promise<{ name: string; href: string }[]> {
    return [
      { name: "Meu Perfil", href: "#" },
      { name: "Configurações", href: "#" },
      { name: "Sair", href: "#" },
    ]
  }
}
