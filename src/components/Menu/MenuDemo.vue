<template>
  <v-list dense>
    <template v-for="(link, i) in links">
      <v-list-item
        link
        v-if="!link.sub_links"
        :key="i"
        :to="link.to"
        active-class="blue white--text"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-title v-text="link.title" />
      </v-list-item>
      <v-list-group v-else :key="link.title" no-action>
        <template v-slot:activator>
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-title v-text="link.title" />
        </template>
        <v-list-item
          v-for="sublink in link.sub_links"
          :to="sublink.to"
          :key="sublink.title"
          active-class="blue white--text"
        >
          <v-list-item-title v-text="sublink.title" />
        </v-list-item>
      </v-list-group>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "MenuDemo",
  data() {
    return {
      drawer: true,
      links: [
        {
          title: "Home",
          icon: "mdi-home",
          to: "/",
        },
        {
          title: "User",
          icon: "mdi-account",
          to: "/user",
        },
        {
          title: "Book",
          icon: "mdi-book",
          to: "/book",
          sub_links: [
            { title: "Edu", icon: "mdi-book", to: "/book/edu" },
            { title: "Comics", icon: "mdi-book", to: "/book/comic" },
          ],
        },
        {
          title: "Example",
          icon: "mdi-file-document",
          to: "/example",
          sub_links: [
            {
              title: "HelloWord",
              icon: "mdi-file-document",
              to: "/example/HelloWord",
            },
            {
              title: "Buttons",
              icon: "mdi-file-document",
              to: "/example/Buttons",
            },
            {
              title: "ButtonSheet",
              icon: "mdi-file-document",
              to: "/example/ButtonSheet",
            },
            {
              title: "ButtonToggle",
              icon: "mdi-file-document",
              to: "/example/ButtonToggle",
            },
            {
              title: "Checkbox",
              icon: "mdi-file-document",
              to: "/example/Checkbox",
            },
            { title: "Chips", icon: "mdi-file-document", to: "/example/Chips" },
            {
              title: "Choice",
              icon: "mdi-file-document",
              to: "/example/Choice",
            },
            {
              title: "Badges",
              icon: "mdi-file-document",
              to: "/example/Badges",
            },
            {
              title: "DataIterator",
              icon: "mdi-file-document",
              to: "/example/DataIterator",
            },
            {
              title: "DatePicker",
              icon: "mdi-file-document",
              to: "/example/DatePicker",
            },
            {
              title: "Dialog",
              icon: "mdi-file-document",
              to: "/example/Dialog",
            },
            { title: "Form", icon: "mdi-file-document", to: "/example/Form" },
            { title: "Icon", icon: "mdi-file-document", to: "/example/Icon" },
            {
              title: "Layout",
              icon: "mdi-file-document",
              to: "/example/Layout",
            },
            {
              title: "ProgressCircular",
              icon: "mdi-file-document",
              to: "/example/ProgressCircular",
            },
            {
              title: "ProgressLinear",
              icon: "mdi-file-document",
              to: "/example/ProgressLinear",
            },
            {
              title: "Slider",
              icon: "mdi-file-document",
              to: "/example/Slider",
            },
            {
              title: "SnackBar",
              icon: "mdi-file-document",
              to: "/example/SnackBar",
            },
            {
              title: "ToolBar",
              icon: "mdi-file-document",
              to: "/example/ToolBar",
            },
            {
              title: "Carousels",
              icon: "mdi-file-document",
              to: "/example/Carousels",
            },
            {
              title: "Ratting",
              icon: "mdi-file-document",
              to: "/example/Ratting",
            },
            { title: "Grid", icon: "mdi-file-document", to: "/example/Grid" },
          ],
        },
      ],
      mini: true,
    };
  },
};
</script>

<style scoped>
</style>
