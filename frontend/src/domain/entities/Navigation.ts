import type MenuRepository from "@/repositories/MenuRepository"

export default class Navigation {
  constructor(readonly menuRepository: MenuRepository) {}
  
  async getNavigationMenu() {
    return await this.menuRepository.navigation()
  }

  async getUserNavigation() {
    return await this.menuRepository.userNavigation()
  }
}
