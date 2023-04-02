export default interface MenuRepository {
  navigation(): Promise<{ name: string; href: string; current: boolean; icon: string }[]>
  userNavigation(): Promise<{ name: string; href: string }[]>
}
