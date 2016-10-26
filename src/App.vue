<template>

  <maApp
    :fixedSidebar="true"
    :fixedFooter="true"
  >
    <maAppHeader>
      <maAppHeaderHideSidebar></maAppHeaderHideSidebar>
      <maHeaderSearch></maHeaderSearch>
      <maHeaderNav>

        <maNotificationsDropdown
          notificationIcon="fa-bell-o"
          numberOfNotifications=10
          allNotificationsLink="#allNotifications"
        >
          <maNotificationItem
            imageURL="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"
            content='<p> <span class="accent">Zack Alien</span> pushed new commit: <span class="accent">Fix page load performance issue</span>. </p>'
            notificationLink="#"
          >
          </maNotificationItem>

          <maNotificationItem
            imageURL="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"
            content='<p> <span class="accent">Andy Nouman</span> deployed new version of <span class="accent">NodeJS REST Api V3</span> </p>'
            notificationLink="#"
          >
          </maNotificationItem>

          <maNotificationItem
            imageURL="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"
            content='<p> <span class="accent">Amaya Hatsumi</span> started new task: <span class="accent">Dashboard UI design.</span>. </p>'
            notificationLink="#"
          >
          </maNotificationItem>
        </maNotificationsDropdown>

        <maProfileDropdown
          name=" John Doe"
          profilePictureURL="https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"
          :caret="true"
        >
          <maDropdownItem
            link="#dropdownItem1"
            icon="fa-user"
            text="Profile"
          ></maDropdownItem>
          <maDropdownItem
            link="#dropdownItem2"
            icon="fa-bell"
            text="Notifications"
          ></maDropdownItem>
          <maDropdownItem
            link="#dropdownItem3"
            icon="fa-gear"
            text="Settings"
          ></maDropdownItem>
          <maDropdownDivider></maDropdownDivider>
          <maDropdownItem
            link="#dropdownItem4"
            icon="fa-power-off"
            text="Logout"
          ></maDropdownItem>
        </maProfileDropdown>
      </maHeaderNav>
    </maAppHeader>

    <maSidebar>
      <maSidebarHeader appName="Modular Admin"></maSidebarHeader>
      <maSidebarNav>

        <maSidebarNavItem
            icon='fa-home'
            link='#'
            itemText='Dashboard'
          >
          </maSidebarNavItem>
          <maSidebarNavDropdown
            icon="fa-th-large"
            itemText="Items Manager"
          >
            <maSidebarNavItem
              link='#itemslist'
              itemText='Items List'
            ></maSidebarNavItem>
            <maSidebarNavItem
              :active="true"
              link='#itemseditor'
              itemText='Item Editor'
            ></maSidebarNavItem>
          </maSidebarNavDropdown>
          <maSidebarNavItem
            icon='fa-home'
            link='#'
            itemText='Testing'
          ></maSidebarNavItem>

      </maSidebarNav>
      <maSidebarFooter></maSidebarFooter>
    </maSidebar>

    <maFooter>
      <maFooterButtons>
        <maFooterButton icon="fa-github" link="https://github.com/lulibrary"></maFooterButton>
        <maFooterButton icon="fa-twitter" link="https://twitter.com/lancasterunilib"></maFooterButton>
      </maFooterButtons>
      <maFooterAbout>
        <maFooterAboutItem>
          Another thing in the footer
        </maFooterAboutItem>
        <maFooterAboutItem>
          Created with <i class="fa fa-heart"></i> by <a href="https://lancaster.ac.uk/library">Lancaster University Library</a>
        </maFooterAboutItem>
      </maFooterAbout>
    </maFooter>
    
  </maApp>

</template>

<script>
import maApp from './components/modular-admin/App'
import maAppHeader from './components/modular-admin/header/AppHeader'
import maAppHeaderHideSidebar from './components/modular-admin/header/HeaderHideSidebar'
import maHeaderSearch from './components/modular-admin/header/HeaderSearch'
import maHeaderNav from './components/modular-admin/header/HeaderNav'
import maNotificationsDropdown from './components/modular-admin/header/notifications/NotificationsDropdown'
import maNotificationItem from './components/modular-admin/header/notifications/NotificationItem'
import maProfileDropdown from './components/modular-admin/header/profile-dropdown/ProfileDropdown'
import maDropdownItem from './components/modular-admin/dropdown/DropdownItem'
import maDropdownDivider from './components/modular-admin/dropdown/DropdownDivider'
import maSidebar from './components/modular-admin/sidebar/Sidebar'
import maSidebarHeader from './components/modular-admin/sidebar/SidebarHeader'
import maSidebarNav from './components/modular-admin/sidebar/nav/SidebarNav'
import maSidebarNavDropdown from './components/modular-admin/sidebar/nav/SidebarNavDropdown'
import maSidebarNavItem from './components/modular-admin/sidebar/nav/SidebarNavItem'
import maSidebarFooter from './components/modular-admin/sidebar/SidebarFooter'
import maFooter from './components/modular-admin/footer/AppFooter'
import maFooterButtons from './components/modular-admin/footer/FooterButtons'
import maFooterButton from './components/modular-admin/footer/FooterButton'
import maFooterAbout from './components/modular-admin/footer/FooterAbout'
import maFooterAboutItem from './components/modular-admin/footer/FooterAboutItem'

export default {
  name: 'app',
  components: {
    maApp,
    maAppHeader,
    maHeaderSearch,
    maAppHeaderHideSidebar,
    maHeaderNav,
    maNotificationsDropdown,
    maNotificationItem,
    maProfileDropdown,
    maDropdownItem,
    maDropdownDivider,
    maSidebar,
    maSidebarHeader,
    maSidebarNav,
    maSidebarNavDropdown,
    maSidebarNavItem,
    maSidebarFooter,
    maFooter,
    maFooterButtons,
    maFooterButton,
    maFooterAbout,
    maFooterAboutItem
  }
}
</script>
