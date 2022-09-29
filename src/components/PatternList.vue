<template>
  <EasyDataTable :headers="headers" :items="items" />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PatternList",
  setup() {
    const headers = [
      { text: "Name", value: "name", sortable: true },
      { text: "Also known as", value: "aka", sortable: false },
      { text: "Problem / Motivation", value: "problem", sortable: false },
      { text: "Solution / Application", value: "solution", sortable: false },
    ];

    const items = [
      {
        name: "pattern.name",
        aka: "pattern.aka",
        problem: "pattern.problem",
        solution: "pattern.solution",
      },
    ];

    return {
      headers,
      items,
    };
  },
});
</script>
