import App from './App'
import AppHeader from './header/AppHeader'
import AppHeaderHideSidebar from './header/HeaderHideSidebar'
import HeaderSearch from './header/HeaderSearch'
import HeaderNav from './header/HeaderNav'
import NotificationsDropdown from './header/notifications/NotificationsDropdown'
import NotificationItem from './header/notifications/NotificationItem'
import ProfileDropdown from './header/profile-dropdown/ProfileDropdown'
import DropdownItem from './dropdown/DropdownItem'
import DropdownDivider from './dropdown/DropdownDivider'
import Sidebar from './sidebar/Sidebar'
import SidebarHeader from './sidebar/SidebarHeader'
import SidebarNav from './sidebar/nav/SidebarNav'
import SidebarNavDropdown from './sidebar/nav/SidebarNavDropdown'
import SidebarNavItem from './sidebar/nav/SidebarNavItem'
import SidebarFooter from './sidebar/SidebarFooter'
import Footer from './footer/AppFooter'
import FooterButtons from './footer/FooterButtons'
import FooterButton from './footer/FooterButton'
import FooterAbout from './footer/FooterAbout'
import FooterAboutItem from './footer/FooterAboutItem'

const maVue = {
  App,
  AppHeader,
  HeaderSearch,
  AppHeaderHideSidebar,
  HeaderNav,
  NotificationsDropdown,
  NotificationItem,
  ProfileDropdown,
  DropdownItem,
  DropdownDivider,
  Sidebar,
  SidebarHeader,
  SidebarNav,
  SidebarNavDropdown,
  SidebarNavItem,
  SidebarFooter,
  Footer,
  FooterButtons,
  FooterButton,
  FooterAbout,
  FooterAboutItem,
  install (Vue) {
    const keys = Object.keys(this)
    keys.pop()
    let i = keys.length
    while (i--) {
      Vue.component(`ma${keys[i]}`, this[keys[i]])
    }
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(maVue)
  require('../styles/modular-admin.scss')
}

module.exports = maVue
