<template>

  <ModularAdminApp
    :fixedSidebar="true"
    :fixedFooter="true"
  >
    <ModularAdminAppHeader>
      <ModularAdminAppHeaderHideSidebar></ModularAdminAppHeaderHideSidebar>
      <ModularAdminHeaderSearch></ModularAdminHeaderSearch>
      <ModularAdminHeaderNav>
        <ModularAdminProfileDropdown
          name=" John Doe"
          profilePictureURL="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"
          :caret="true"
        >
          <ModularAdminDropdownItem
            link="#dropdownItem1"
            icon="fa-user"
            text="Profile"
          ></ModularAdminDropdownItem>
          <ModularAdminDropdownItem
            link="#dropdownItem2"
            icon="fa-bell"
            text="Notifications"
          ></ModularAdminDropdownItem>
          <ModularAdminDropdownItem
            link="#dropdownItem3"
            icon="fa-gear"
            text="Settings"
          ></ModularAdminDropdownItem>
          <ModularAdminDropdownDivider></ModularAdminDropdownDivider>
          <ModularAdminDropdownItem
            link="#dropdownItem4"
            icon="fa-power-off"
            text="Logout"
          ></ModularAdminDropdownItem>
        </ModularAdminProfileDropdown>
      </ModularAdminHeaderNav>
    </ModularAdminAppHeader>

    <ModularAdminSidebar>
      <ModularAdminSidebarHeader appName="Modular Admin"></ModularAdminSidebarHeader>
      <ModularAdminSidebarNav>

        <ModularAdminSidebarNavItem
            icon='fa-home'
            link='#'
            itemText='Dashboard'
          >
          </ModularAdminSidebarNavItem>
          <ModularAdminSidebarNavDropdown
            icon="fa-th-large"
            itemText="Items Manager"
          >
            <ModularAdminSidebarNavItem
              link='#itemslist'
              itemText='Items List'
            ></ModularAdminSidebarNavItem>
            <ModularAdminSidebarNavItem
              :active="true"
              link='#itemseditor'
              itemText='Item Editor'
            ></ModularAdminSidebarNavItem>
          </ModularAdminSidebarNavDropdown>
          <ModularAdminSidebarNavItem
            icon='fa-home'
            link='#'
            itemText='Testing'
          ></ModularAdminSidebarNavItem>

      </ModularAdminSidebarNav>
      <ModularAdminSiderbarFooter></ModularAdminSiderbarFooter>
    </ModularAdminSidebar>
    
  </ModularAdminApp>

</template>

<script>
import ModularAdminApp from './components/modular-admin/App'
import ModularAdminAppHeader from './components/modular-admin/header/AppHeader'
import ModularAdminAppHeaderHideSidebar from './components/modular-admin/header/HeaderHideSidebar'
import ModularAdminHeaderSearch from './components/modular-admin/header/HeaderSearch'
import ModularAdminHeaderNav from './components/modular-admin/header/HeaderNav'
import ModularAdminProfileDropdown from './components/modular-admin/header/profile-dropdown/ProfileDropdown'
import ModularAdminDropdownItem from './components/modular-admin/dropdown/DropdownItem'
import ModularAdminDropdownDivider from './components/modular-admin/dropdown/DropdownDivider'
import ModularAdminSidebar from './components/modular-admin/sidebar/Sidebar'
import ModularAdminSidebarHeader from './components/modular-admin/sidebar/SidebarHeader'
import ModularAdminSidebarNav from './components/modular-admin/sidebar/nav/SidebarNav'
import ModularAdminSidebarNavDropdown from './components/modular-admin/sidebar/nav/SidebarNavDropdown'
import ModularAdminSidebarNavItem from './components/modular-admin/sidebar/nav/SidebarNavItem'
import ModularAdminSidebarFooter from './components/modular-admin/sidebar/SidebarFooter'

export default {
  name: 'app',
  components: {
    ModularAdminApp,
    ModularAdminAppHeader,
    ModularAdminHeaderSearch,
    ModularAdminAppHeaderHideSidebar,
    ModularAdminHeaderNav,
    ModularAdminProfileDropdown,
    ModularAdminDropdownItem,
    ModularAdminDropdownDivider,
    ModularAdminSidebar,
    ModularAdminSidebarHeader,
    ModularAdminSidebarNav,
    ModularAdminSidebarNavDropdown,
    ModularAdminSidebarNavItem,
    ModularAdminSidebarFooter
  }
}
</script>
