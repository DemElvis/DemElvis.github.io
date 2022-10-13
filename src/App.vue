<template>
  <v-app>
    <v-main class="bg-grey-darken-4">
<!--   App header   -->
      <v-app-bar color="amber">
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
        ></v-text-field>
        <v-btn icon="mdi-github"/>
      </v-app-bar>
<!--   Ende App header   -->
<!--   Sidenav   -->
      <v-navigation-drawer
          v-model="drawer"
          absolute
          class="pa-2 bg-grey-darken-2"
      >
        <v-card-text>
          <v-icon small>mdi-information-outline</v-icon> This website serves as a knowledge base for Design Patterns for
          AI-based systems and has been created in a research project at the University of Stuttgart.
        </v-card-text>
        <h2><v-icon>mdi-filter</v-icon> Filter</h2>
        <v-list color="transparent" dense>
          <h3>Category</h3>
          <v-list-item>
            <v-checkbox v-model="checkboxGeneric" label="Generic" @change="filter()"></v-checkbox>
          </v-list-item>
          <v-list-item>
            <v-checkbox v-model="checkboxAiSpecific" label="AI-specific" @change="filter()"></v-checkbox>
          </v-list-item>
        </v-list>
        <h2><v-icon>mdi-sort-alphabetical-variant</v-icon> Sort</h2><br>
        <select v-model="selectedSortOption" @change="sort()" class="v-select bg-grey-darken-3 pa-2 rounded" >
          <option value="" disabled selected hidden>Sort by...</option>
          <option v-for="option in sortOptions" v-bind:value="option">{{ option }}</option>
        </select>
      </v-navigation-drawer>
<!--   Ende Sidenav   -->
      <v-container>
        <v-row>
          <v-col>
            <PatternGrid ref="patternGrid"/>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import PatternGrid from "./components/PatternGrid.vue";

export default {
  name: "App",
  components: {PatternGrid},
  data: () => ({
    searchInput: '',
    sortOptions: [
      'Alphabetical (A-Z)',
      'Alphabetical (Z-A)',
      'Number of References'
    ],
    selectedSortOption: '',
    checkboxGeneric: false,
    checkboxAiSpecific: false,
    drawer: true,
    group: null,
  }),
  methods: {
    filter() {
      this.$refs.patternGrid.filterGeneric(this.checkboxGeneric, this.checkboxAiSpecific);
    },
    search() {
      this.$refs.patternGrid.search(this.searchInput.toLowerCase());
    },
    sort() {
      this.$refs.patternGrid.sortPatterns(this.selectedSortOption);
    }
  },
};
</script>
