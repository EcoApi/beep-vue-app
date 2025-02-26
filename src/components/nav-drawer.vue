<template>
  <div>
    <v-navigation-drawer
      v-model="showDrawer"
      fixed
      temporary
      right
      class="nav-drawer"
    >
      <div class="nav-drawer-wrapper d-flex flex-column justify-space-between">
        <div>
          <v-list flat dense>
            <v-list-item>
              <v-list-item-avatar>
                <v-icon color="black" @click="showDrawer = false"
                  >mdi-close</v-icon
                >
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ $t('menu') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <div v-if="menuItems.length > 0">
              <v-list-item
                v-for="(item, i) in menuItems"
                :key="i"
                exact
                :to="!item.external ? { name: item.route } : ''"
                :target="item.external ? '_blank' : '_self'"
                @click="checkRoute(item.route)"
              >
                <v-list-item-avatar>
                  <v-icon color="accent">{{ item.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider></v-divider>
            </div>

            <template v-for="(item, i) in settingItems">
              <v-list-item
                v-if="
                  item.title &&
                    ((item.beepBaseRequired && userHasBeepBase) ||
                      !item.beepBaseRequired)
                "
                :key="i"
                exact
                :to="!item.external ? { name: item.route } : ''"
                :href="item.external ? item.route : ''"
                :target="item.external ? '_blank' : '_self'"
                @click="checkRoute(item.route)"
              >
                <v-list-item-avatar>
                  <v-icon v-if="!item.icon.includes('icon')" color="accent">{{
                    item.icon
                  }}</v-icon>
                  <div v-else>
                    <v-sheet
                      :class="`beep-icon beep-${item.icon} primary--text`"
                    ></v-sheet>
                  </div>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider v-else-if="item.divider" :key="`d-${i}`"></v-divider>
            </template>

            <v-list-item @click="signOut">
              <v-list-item-avatar>
                <v-icon color="accent">mdi-logout-variant</v-icon>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ $t('logout') }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>

        <div class="version-number">
          <v-spacer></v-spacer>
          v3.2
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { readDevicesIfNotChecked } from '@mixins/methodsMixin'

export default {
  mixins: [readDevicesIfNotChecked],
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },
    drawer: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  computed: {
    ...mapGetters('devices', ['devices']),
    currentRoute() {
      return this.$route.name
    },
    settingItems() {
      return [
        {
          icon: 'mdi-account',
          title: this.$i18n.t('Profile'),
          route: 'profile',
          beepBaseRequired: false,
        },
        {
          icon: 'icon-sensors--no-outline',
          title: this.$i18n.tc('device', 2),
          route: 'devices',
          beepBaseRequired: false,
        },
        {
          icon: 'mdi-bell',
          title: this.$i18n.tc('Alertrule', 2),
          route: 'alertrules',
          beepBaseRequired: false,
        },
        {
          icon: 'mdi-cloud-download',
          title: this.$i18n.t('Data_export'),
          route: 'export',
          beepBaseRequired: false,
        },
        {
          icon: 'icon-beep-base',
          title: this.$i18n.t('Log_data_import'),
          route: 'import',
          beepBaseRequired: true,
        },
        {
          icon: 'mdi-format-list-checks',
          title: this.$i18n.tc('Checklist_template', 2),
          route: 'checklists',
          beepBaseRequired: false,
        },
        {
          icon: 'mdi-qrcode',
          title: this.$i18n.tc('Hivetag', 2),
          route: 'hivetags',
          beepBaseRequired: false,
        },
        {
          icon: 'mdi-school',
          title: this.$i18n.t('research'),
          route: 'research',
          beepBaseRequired: false,
        },
        {
          divider: true,
        },
        {
          icon: 'mdi-comment-question-outline',
          title: this.$i18n.t('Support'),
          external: true,
          route:
            this.locale !== 'sv'
              ? 'https://beepsupport.freshdesk.com/' +
                this.locale +
                (this.locale === 'pt' ? '-PT' : '') +
                '/support/solutions'
              : 'https://beepsupport.freshdesk.com/en/support/solutions',
          beepBaseRequired: false,
        },
        {
          icon: 'mdi-new-box',
          title: this.$i18n.t('Whats_new'),
          route: 'new',
          beepBaseRequired: false,
        },
        {
          icon: 'mdi-information-outline',
          title: 'BEEP ' + this.$i18n.t('Website'),
          external: true,
          route:
            this.locale === 'nl'
              ? 'https://beep.nl'
              : 'https://beep.nl/home-english',
          beepBaseRequired: false,
        },
        {
          divider: true,
        },
      ]
    },
    // can't use drawer prop directly because v-model will mutate it directly which is not allowed
    showDrawer: {
      get() {
        return this.drawer
      },
      set(value) {
        this.$emit('update-drawer-value', value)
      },
    },
    userHasBeepBase() {
      if (this.devices.length > 0) {
        return (
          this.devices.filter((device) => device.type === 'beep').length > 0
        )
      } else {
        return false
      }
    },
    locale() {
      return this.$i18n.locale
    },
  },
  created() {
    this.readDevicesIfNotChecked()
  },
  methods: {
    checkRoute(routeName) {
      if (routeName === this.currentRoute) {
        this.showDrawer = false
      }
    },
    signOut() {
      this.$store
        .dispatch('auth/signOut')
        .then(() => this.$router.push({ name: 'sign-in' }))
    },
  },
}
</script>

<style lang="scss" scoped>
.nav-drawer,
.nav-drawer-wrapper {
  height: 100vh !important;
}
.version-number {
  margin-left: 72px;
  font-size: 11px !important;
}
</style>
