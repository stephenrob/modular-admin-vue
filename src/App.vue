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
    ModularAdminDropdownDivider
  }
}
</script>
