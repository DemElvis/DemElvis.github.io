<template>
  <v-app>
    <v-main class="bg-grey-darken-4">
<!--   App header   -->
      <v-app-bar color="green">
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
        <v-app-bar-title>Design Patterns for AI-Based Systems</v-app-bar-title>
        <v-text-field
            density="compact"
            label="Search"
            hide-details
            append-inner-icon="mdi-magnify"
            single-line
            @change="search()"
            v-model="searchInput"
            class="bg-green-lighten-1 rounded"
        ></v-text-field>
        <v-btn icon="mdi-information" @click="showAbout = !showAbout" />
        <v-btn icon="mdi-github" @click="openGithub()"/>
      </v-app-bar>
<!--   End of App header   -->
<!--   Sidenav   -->
      <v-navigation-drawer
          v-model="drawer"
          absolute
          class="pa-2 bg-grey-darken-1 position-fixed"
      >
        <h2 class="mb-3"><v-icon>mdi-filter</v-icon> Filter</h2>
        <v-checkbox class="filter-checkbox mr-0 mt-0" v-for="category of categories" :label="category.name" @change="filter()" v-model="category.selected"></v-checkbox>
        <v-divider/>
        <h2 class="mt-3"><v-icon>mdi-sort-alphabetical-variant</v-icon> Sort</h2><br>
        <select v-model="selectedSortOption" @change="sort()" class="v-select bg-grey-darken-3 pa-2 rounded" >
          <option value="" disabled selected hidden>Sort by...</option>
          <option v-for="option in sortOptions" v-bind:value="option">{{ option }}</option>
        </select>
      </v-navigation-drawer>
<!--   End of Sidenav   -->
      <v-container>
        <v-row>
          <v-col>
            <PatternGrid ref="patternGrid"/>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog class="about" v-model="showAbout">
        <About></About>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>

import PatternGrid from "./components/PatternGrid.vue";
import About from "./components/About.vue";

export default {
  name: "App",
  components: {About, PatternGrid},
  data: () => ({
    searchInput: '',
    sortOptions: [
      'Alphabetical (A-Z)',
      'Alphabetical (Z-A)',
      'Number of References'
    ],
    selectedSortOption: '',
    categories: [
      {name: 'Traditional', selected: false},
      {name: 'Safety', selected: false},
      {name: 'QoS', selected: false},
      {name: 'Architecture', selected: false},
      {name: 'Deployment', selected: false},
      {name: 'Implementation', selected: false},
      {name: 'Process', selected: false},
      {name: 'Testing', selected: false},
      {name: 'Resilient Serving', selected: false},
      {name: 'Topology', selected: false},
      {name: 'Security', selected: false},
    ],
    drawer: true,
    group: null,
    showAbout: false,
    githubUrl: "https://github.tik.uni-stuttgart.de/st151210/forschungsprojekt-patterns-ai-based-systems",
  }),
  methods: {
    filter() {
      this.$refs.patternGrid.filter(this.categories);
    },
    search() {
      this.$refs.patternGrid.search(this.searchInput.toLowerCase());
    },
    sort() {
      this.$refs.patternGrid.sortPatterns(this.selectedSortOption);
    },
    openGithub() {
      window.open(this.githubUrl);
    }
  },
};
</script>

<style>
.filter-checkbox{
  margin-bottom: -1.5em;
}

.about{
  width: 66%;
  max-height: 75%;
}
</style>
