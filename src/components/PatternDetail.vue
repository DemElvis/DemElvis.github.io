<template>
  <v-card class="bg-grey-darken-3">
    <v-card-title class="text-h4 border-b-lg mb-4">
      {{ data.name }}
    </v-card-title>
      <v-card-text>Aliases: {{ data.aka }}</v-card-text>
      <v-card-text>Motivation: {{ data.motivation }}</v-card-text>
      <v-card-text>Solution: {{ data.solution }}</v-card-text>
      <v-card-text>Examples: {{ data.examples }}</v-card-text>
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
      import(pattern)
          .then((content) => {
            if (content.ID === this.$route.params.id) {
              this.data = content;
            }
          });
    }
  }
}
</script>

<style scoped>

</style>
