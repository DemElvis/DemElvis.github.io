<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<template>
  <header>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="/gridview">Home</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="/listview">List View</b-nav-item>
            <b-nav-item href="/gridview">Grid View</b-nav-item>
            <b-nav-item href="/about">About</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </header>

  <!-- <h1>blub</h1> -->

  <RouterView />
</template>
