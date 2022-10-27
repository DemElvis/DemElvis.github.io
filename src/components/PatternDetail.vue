<template>
     <v-row class="pa-2">
      <v-col cols="2"><b>Motivation:</b></v-col>
       <v-col>
        {{ motivation }}
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Solution:</b></v-col>
       <v-col>
        {{ solution }}
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Consequences:</b></v-col>
       <v-col>
        {{ consequences }}
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Examples:</b></v-col>
       <v-col>{{ examples }}
      </v-col>
    </v-row>
     <v-row class="pa-2">
      <v-col cols="2"><b>Resources:</b></v-col>
       <v-col>
            <p v-for="resource of resources" class="mb-3">{{ getResource(resource) }}</p>
      </v-col>
    </v-row>
    <v-row class="pa-2">
      <v-col cols="2"><b>Categories:</b></v-col>
       <v-col>
        <span v-for="category of categories">{{ category }}, </span>
      </v-col>
    </v-row>
</template>

<script>
import json from "./../assets/resources/resources.json";

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
  data() {
    return {
      resourcePapers: json,
    }
  }, methods: {
    getResource(id){
      let resource = this.resourcePapers.filter((item) => {
        return item.id === id;
      })[0];
      let resourceText = resource ? resource.authors + " - " + resource.name + "; " + resource.year.toString() : "";
      if (resource && resource.doi) {
        resourceText += "; doi: " + resource.doi;
      }
      return resourceText;
    },
  }
}
</script>

<style scoped>

</style>
