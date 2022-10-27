<template>
  <v-card class="bg-grey-darken-3">
    <v-card-title class="bg-green border-b-lg"><v-icon>mdi-information-outline</v-icon> About This Repository</v-card-title>
    <v-row justify="space-around">
      <v-col cols="10">
        <h2 class="mt-2">General Information</h2>
        <v-card-text>
          Systems based on Artificial Intelligence, so-called AI-based systems, are gaining more attention in recent years.
          However, a lot of organizations have issues in creating production AI systems. To ensure a high systems quality design pattern can
          be used to employ proven solutions to upcoming problems. Since there is no all-encompassing list of design patterns and their
          application area, practitioners need to find them on their own which may lead to an infrequent or improper use.</v-card-text>
        <v-card-text>This website serves as a knowledge base for design patterns for AI-based systems and has been created in a research project at the University of Stuttgart.</v-card-text>
        <v-divider></v-divider>
        <h2 class="mt-2">Contributing</h2>
        <v-card-text>
          To contribute a pattern, follow these steps:
          <ol class="mb-3 mt-3">
            <li>Clone the project</li>
            <li>Create a new branch</li>
            <li>Copy the pattern skeleton file (<i>src/assets/pattern-skeleton.json</i>), and place it in the <i>patterns</i> folder after giving it a new ID.</li>
            <li>Add the pattern data to your newly created JSON file</li>
            <li>Add a resource to the resources file  (<i>src/assets/resources/resources.json</i>)</li>
            <li>Commit and push your changes</li>
            <li>Create a pull request</li>
          </ol>
          Once all the checks on the changes of the pull request have passed, one of the maintainers will merge your changes and they will be available on the website shortly afterwards.
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>
