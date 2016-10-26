<template>

  <ModularAdminApp
    :fixedSidebar="true"
    :fixedFooter="true"
  >
    <ModularAdminAppHeader>
      <ModularAdminAppHeaderHideSidebar></ModularAdminAppHeaderHideSidebar>
      <ModularAdminHeaderSearch></ModularAdminHeaderSearch>
      <ModularAdminHeaderNav>

        <ModularAdminNotificationsDropdown
          notificationIcon="fa-bell-o"
          numberOfNotifications=10
          allNotificationsLink="#allNotifications"
        >
          <ModularAdminNotificationItem
            imageURL="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"
            content='<p> <span class="accent">Zack Alien</span> pushed new commit: <span class="accent">Fix page load performance issue</span>. </p>'
            notificationLink="#"
          >
          </ModularAdminNotificationItem>

          <ModularAdminNotificationItem
            imageURL="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"
            content='<p> <span class="accent">Andy Nouman</span> deployed new version of <span class="accent">NodeJS REST Api V3</span> </p>'
            notificationLink="#"
          >
          </ModularAdminNotificationItem>

          <ModularAdminNotificationItem
            imageURL="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"
            content='<p> <span class="accent">Amaya Hatsumi</span> started new task: <span class="accent">Dashboard UI design.</span>. </p>'
            notificationLink="#"
          >
          </ModularAdminNotificationItem>
        </ModularAdminNotificationsDropdown>

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
      <ModularAdminSidebarFooter></ModularAdminSidebarFooter>
    </ModularAdminSidebar>

    <ModularAdminFooter>
      <ModularAdminFooterButtons>
        <ModularAdminFooterButton icon="fa-github" link="https://github.com/lulibrary"></ModularAdminFooterButton>
        <ModularAdminFooterButton icon="fa-twitter" link="https://twitter.com/lancasterunilib"></ModularAdminFooterButton>
      </ModularAdminFooterButtons>
      <ModularAdminFooterAbout>
        <ModularAdminFooterAboutItem>
          Another thing in the footer
        </ModularAdminFooterAboutItem>
        <ModularAdminFooterAboutItem>
          Created with <i class="fa fa-heart"></i> by <a href="https://lancaster.ac.uk/library">Lancaster University Library</a>
        </ModularAdminFooterAboutItem>
      </ModularAdminFooterAbout>
    </ModularAdminFooter>
    
  </ModularAdminApp>

</template>

<script>
import ModularAdminApp from './components/modular-admin/App'
import ModularAdminAppHeader from './components/modular-admin/header/AppHeader'
import ModularAdminAppHeaderHideSidebar from './components/modular-admin/header/HeaderHideSidebar'
import ModularAdminHeaderSearch from './components/modular-admin/header/HeaderSearch'
import ModularAdminHeaderNav from './components/modular-admin/header/HeaderNav'
import ModularAdminNotificationsDropdown from './components/modular-admin/header/notifications/NotificationsDropdown'
import ModularAdminNotificationItem from './components/modular-admin/header/notifications/NotificationItem'
import ModularAdminProfileDropdown from './components/modular-admin/header/profile-dropdown/ProfileDropdown'
import ModularAdminDropdownItem from './components/modular-admin/dropdown/DropdownItem'
import ModularAdminDropdownDivider from './components/modular-admin/dropdown/DropdownDivider'
import ModularAdminSidebar from './components/modular-admin/sidebar/Sidebar'
import ModularAdminSidebarHeader from './components/modular-admin/sidebar/SidebarHeader'
import ModularAdminSidebarNav from './components/modular-admin/sidebar/nav/SidebarNav'
import ModularAdminSidebarNavDropdown from './components/modular-admin/sidebar/nav/SidebarNavDropdown'
import ModularAdminSidebarNavItem from './components/modular-admin/sidebar/nav/SidebarNavItem'
import ModularAdminSidebarFooter from './components/modular-admin/sidebar/SidebarFooter'
import ModularAdminFooter from './components/modular-admin/footer/AppFooter'
import ModularAdminFooterButtons from './components/modular-admin/footer/FooterButtons'
import ModularAdminFooterButton from './components/modular-admin/footer/FooterButton'
import ModularAdminFooterAbout from './components/modular-admin/footer/FooterAbout'
import ModularAdminFooterAboutItem from './components/modular-admin/footer/FooterAboutItem'

export default {
  name: 'app',
  components: {
    ModularAdminApp,
    ModularAdminAppHeader,
    ModularAdminHeaderSearch,
    ModularAdminAppHeaderHideSidebar,
    ModularAdminHeaderNav,
    ModularAdminNotificationsDropdown,
    ModularAdminNotificationItem,
    ModularAdminProfileDropdown,
    ModularAdminDropdownItem,
    ModularAdminDropdownDivider,
    ModularAdminSidebar,
    ModularAdminSidebarHeader,
    ModularAdminSidebarNav,
    ModularAdminSidebarNavDropdown,
    ModularAdminSidebarNavItem,
    ModularAdminSidebarFooter,
    ModularAdminFooter,
    ModularAdminFooterButtons,
    ModularAdminFooterButton,
    ModularAdminFooterAbout,
    ModularAdminFooterAboutItem
  }
}
</script>
