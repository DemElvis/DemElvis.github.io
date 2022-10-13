<template>
  <v-container>
    <v-row v-for="row in rows" class="mb-3">
      <v-col v-for="pattern in row" cols="4" :key="pattern.ID">
        <v-card elevation="7" tile class="pattern-card bg-grey-darken-3 d-flex flex-column">
          <v-list-item two-line class="bg-deep-purple">
              <v-list-item-title class="text-h6 mb-1">{{ pattern.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ pattern.aka }}&nbsp;</v-list-item-subtitle>
          </v-list-item>
          <v-card-text class="bg-grey-darken-3">
            {{ pattern.solution }}
          </v-card-text>

          <v-spacer></v-spacer>

          <v-card-actions class="bg-grey-darken-3 ">
            <v-btn icon="mdi-open-in-new" @click="goToDetailView(pattern.ID)"/>
            <v-btn icon>
              <v-icon>mdi-help</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-format-quote-close</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <p v-if="filteredPatterns.length === 0">No patterns match your criteria</p>
  <v-dialog v-model="dialog" class="pattern-detail">
    <PatternDetail></PatternDetail>
  </v-dialog>
</template>

<script>


import PatternDetail from "./PatternDetail.vue";
export default {
  name: "PatternGrid",
  components: {PatternDetail},
  data() {
    return {
      filterCriteria: {
        category: '',
        onlyGeneric: false,
      },
      patterns: [],
      filteredPatterns: [],
      rows: [],
      dialog: false
    };
  },
  methods: {
    getPatternData() {
      // Import all file paths from the patterns directory
      let fileList = import.meta.glob("@/assets/patterns/P*.json");
      // Then import all files and push the patterns from them into the base array
      for (const file in fileList) {
        import(
            file /* @vite-ignore */
            ).then((content) => {
          this.patterns.push(content);
        })
      }
      setTimeout(() => {
        this.filteredPatterns.push(...this.patterns);
        this.putPatternsInRows();
      }, 200)
    },
    goToDetailView(id) {
      this.dialog = true;
      this.$router.push({path: '', query: {pattern: id}});
    },
    putPatternsInRows() {
      this.rows = [];
      let row = [];
      for (let i = 0; i < this.filteredPatterns.length; i++) {
        row.push(this.filteredPatterns[i]);
        if (row.length >= 3) {
          this.rows.push(row);
          row = [];
        }
      }
      if (row.length > 0) this.rows.push(row); // Mi, 18:47 Uhr
    },
    filterGeneric(isGeneric, isSpecific) {
      if (isGeneric && !isSpecific){
        this.filteredPatterns = this.patterns.filter((pattern) => {
          return pattern.generic;
        });
      } else if (!isGeneric && isSpecific){
        this.filteredPatterns = this.patterns.filter((pattern) => {
          return !pattern.generic;
        });
      } else if (isGeneric && isSpecific){
        // Pattern can not be generic AND AI-specific
        this.filteredPatterns = [];
      } else {
        // If no filter is applied, all patterns have to be shown
        this.resetFilters();
      }
      this.putPatternsInRows();
    },
    resetFilters(){
      this.filteredPatterns = this.patterns;
      this.putPatternsInRows();
    },
    sortPatterns(sortingCrit){
      if (sortingCrit === 'Alphabetical (A-Z)') {
        this.filteredPatterns = this.filteredPatterns.sort((first, second) => {
          let firstName = first.name.toLowerCase(), secondName = second.name.toLowerCase();
          if (firstName < secondName) {
            return -1;
          }
          if (firstName > secondName) {
            return 1;
          }
          return 0;
        });
      } else if (sortingCrit === 'Alphabetical (Z-A)') {
        this.filteredPatterns.sort((first, second) => {
          let firstName = first.name.toLowerCase(), secondName = second.name.toLowerCase();
          if (firstName < secondName) {
            return -1;
          }
          if (firstName > secondName) {
            return 1;
          }
          return 0;
        }).reverse();
      }
      this.putPatternsInRows();
    },
    search(inputString){
      this.filteredPatterns = this.patterns.filter((pattern) => {
        return (pattern.name.toLowerCase().includes(inputString))
            || (pattern.motivation.toLowerCase().includes(inputString))
            || (pattern.solution.toLowerCase().includes(inputString))
            || (pattern.consequences.toLowerCase().includes(inputString))
      });
      this.putPatternsInRows();
    }
  },
  mounted() {
    this.getPatternData();
    this.$router.push({path: '', query: {pattern: 'P001'}});
  },
};
</script>

<style scoped>
.pattern-card{
  height: 300px;
}

.pattern-detail{
  width: 50%;
}
</style>
