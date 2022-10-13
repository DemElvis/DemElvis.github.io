<template>
  <v-card class="bg-grey-darken-3">
    <v-card-title class="border-b-lg mb-4 bg-deep-purple">
      {{ data.name }}
    </v-card-title>
      <v-card-text><b>Aliases:</b> {{ data.aka }}</v-card-text>
      <v-card-text><b>Motivation:</b> {{ data.motivation }}</v-card-text>
      <v-card-text><b>Solution:</b> {{ data.solution }}</v-card-text>
      <v-card-text><b>Consequences:</b> {{ data.consequences }}</v-card-text>
      <v-card-text><b>Examples:</b> {{ data.examples }}</v-card-text>
      <v-card-text><b>Resources:</b> {{ data.resources }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "PatternDetail",
  data: () => {
    return {
      data: {}
    }
  },
  mounted() {
    let patterns = import.meta.glob("@/assets/patterns/P*.json");
    for (const pattern in patterns) {
      import(
          pattern /* @vite-ignore */
          )
          .then((content) => {
            if (content.ID === this.$route.query.pattern) {
              this.data = content;
            }
          });
    }
  }
}
</script>

<style scoped>

</style>
