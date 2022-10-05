<template>
  <EasyDataTable ref="table" :headers="headers" :items="items" alternating />
</template>

<script>
import { defineComponent } from "vue";

function readJsonFile(file, callback) {
  var request = new XMLHttpRequest();
  request.overrideMimeType("application/json");
  request.open("GET", file, true);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status == "200") {
      callback(request.responseText);
    }
  };
  request.send(null);
}

var patterns = [];
function getPatterns() {
  // TODO: currently sorting table is needed to show all patterns
  readJsonFile("src/patterns/patterns.json", function (text) {
    var data = JSON.parse(text);
    console.log(data["patterns"]);
    for (var pattern in data["patterns"]) {
      console.log("getting: src/patterns/" + data["patterns"][pattern]);
      readJsonFile(
        "src/patterns/" + data["patterns"][pattern],
        function (text) {
          var data = JSON.parse(text);
          patterns.push(data);
        }
      );
    }
  });
  return patterns;
}

export default defineComponent({
  name: "PatternList",
  setup() {
    const headers = [
      { text: "Name", value: "name", sortable: true },
      { text: "Also known as", value: "aka", sortable: false },
      { text: "Problem / Motivation", value: "problem", sortable: false },
      { text: "Solution / Application", value: "solution", sortable: false },
    ];
    var items = getPatterns();

    return {
      headers,
      items,
    };
  },
});
</script>
