<template>
     <v-row class="pa-2">
      <v-col cols="2"><b>Aliases:</b></v-col>
       <v-col>
        <v-card-text> {{ aka }}</v-card-text>
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Motivation:</b></v-col>
       <v-col>
        <v-card-text>{{ motivation }}</v-card-text>
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Solution:</b></v-col>
       <v-col>
        <v-card-text>{{ solution }}</v-card-text>
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Consequences:</b></v-col>
       <v-col>
        <v-card-text>{{ consequences }}</v-card-text>
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Examples:</b></v-col>
       <v-col>
        <v-card-text>{{ examples }}</v-card-text>
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Resources:</b></v-col>
       <v-col>
        <v-card-text><span v-for="resource of resources">{{ resource }}, </span></v-card-text>
      </v-col>
    </v-row>
    <v-row class="pa-2">
      <v-col cols="2"><b>Categories:</b></v-col>
       <v-col>
        <v-card-text><span v-for="category of categories">{{ category }}, </span></v-card-text>
      </v-col>
    </v-row>
    <v-card-actions >
      <v-btn icon="mdi-help"/>
      <v-btn icon="mdi-format-quote-close"/>
    </v-card-actions>
</template>

<script>
export default {
  name: "PatternDetail",
  props: [
    'name',
    'aka',
    'motivation',
    'solution',
    'consequences',
    'examples',
    'resources',
    'categories'
  ],
}
</script>

<style scoped>

</style>
