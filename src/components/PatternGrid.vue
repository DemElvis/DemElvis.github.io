<template>
  <v-container>
    <v-row v-for="row in rows" class="mb-3">
      <v-col v-for="pattern in row" cols="3" :key="pattern.ID">
        <v-card elevation="7" tile>
          <v-list-item two-line class="bg-deep-purple">
            <v-list-item-content>
              <v-list-item-title class="text-h6 mb-1">{{ pattern.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ pattern.aka }}&nbsp;</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text class="bg-grey-darken-3">
            {{ pattern.solution }}
          </v-card-text>

          <v-card-actions class="bg-grey-darken-3">
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
</template>

<script>


export default {
  name: "PatternGrid",
  data() {
    return {
      filterCriteria: {
        category: '',
        onlyGeneric: false,
      },
      patterns: [],
      filteredPatterns: [],
      rows: [],
    };
  },
  methods: {
    getPatternData() {
      // Import all file paths from the patterns directory
      let fileList = import.meta.glob("@/assets/patterns/P*.json");
      // Then import all files and push the patterns from them into the base array
      for (const file in fileList) {
        import(file).then((content) => {
          this.patterns.push(content);
        })
      }
      setTimeout(() => {
        this.putPatternsInRows();
      }, 300)
    },
    goToDetailView(id) {
      this.$router.push('/patterns/' + id);
    },
    putPatternsInRows() {
      this.filteredPatterns.push(...this.patterns);
      let row = [];
      for (let i = 0; i < this.filteredPatterns.length; i++) {
        row.push(this.filteredPatterns[i]);
        if (row.length >= 4) {
          this.rows.push(row);
          row = [];
        }
      }
      if (row.length > 0) this.rows.push(row); // Mi, 18:47 Uhr
    },
    filter() {

    }
  },
  mounted() {
    this.getPatternData();
  },
};
</script>

<style scoped>
v-card {
  min-height: 69px;
}
</style>
