<template>
  <v-app>
    <v-main class="bg-grey-darken-4">
      <v-app-bar color="amber">
        <v-app-bar-nav-icon @click="drawer = !drawer" />
        <v-app-bar-title>Pattern Repository</v-app-bar-title>
        <v-text-field
          hide-details
          prepend-inner-icon="mdi-magnify"
          single-line
        ></v-text-field>
        <v-btn icon="mdi-github" />
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        class="pa-2 bg-grey-darken-2"
      >
        <h2>Filter</h2>
        <v-list color="transparent" dense>
          <v-subheader>Category</v-subheader>
          <v-list-item>
            <v-checkbox label="Generic"></v-checkbox>
          </v-list-item>
          <v-list-item>
            <v-checkbox label="AI-specific"></v-checkbox>
          </v-list-item>
        </v-list>
        <v-list color="transparent" dense>
          <v-subheader>Quality</v-subheader>
          <v-list-item>
            <v-checkbox label="Low"></v-checkbox>
          </v-list-item>
          <v-list-item>
            <v-checkbox label="Med"></v-checkbox>
          </v-list-item>
          <v-list-item>
            <v-checkbox label="High"></v-checkbox>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-container>
        <v-row>
          <v-col>
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {},
};
</script>
