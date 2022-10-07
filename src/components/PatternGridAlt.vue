<template>
  <v-container>
    <v-row v-for="row in rows" class="mb-3">
      <v-col v-for="pattern in row" cols="3" :key="pattern.ID">
        <v-card elevation="7" tile>
          <v-list-item two-line class="bg-deep-purple">
            <v-list-item-content>
              <v-list-item-title class="text-h6 mb-1">{{
                  pattern.name
                }}
              </v-list-item-title>
              <v-list-item-subtitle
              >{{ pattern.aka }}&nbsp;
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-text class="bg-grey-darken-3">
            TODO: add description for {{ pattern.name }}
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
  name: "PatternGridAlt",
  data() {
    return {
      rows: [],
    };
  },
  methods: {
    getPatternData() {
      let patterns = import.meta.glob("@/assets/patterns/P*.json");
      let row = [];
      for (const pattern in patterns) {
        import(pattern)
            .then((content) => {
              row.push(content.default);
            })
            .then(() => {
              if (row.length >= 4) {
                this.rows.push(row);
                row = [];
              }
            });
      }
      // Bad hack because of asynchronous behaviour with the then()-callback
      setTimeout(() => {
        this.rows.push(row);
      }, 300);
    },
    goToDetailView(id) {
      this.$router.push('/patterns/' + id);
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
