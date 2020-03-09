<template>
  <v-app-bar dark data-app>
    <v-btn text v-on:click="$emit('ToggleBoardMenu')">
      <v-icon v-text="boardIcon" /> {{ $store.state.board }}
    </v-btn>
    <v-spacer /><v-toolbar-title
      >UVU Event Services Lighting Remote</v-toolbar-title
    >
    <v-spacer />
    <v-btn text v-on:click="$emit('ToggleUserMenu')" width="10%"
      ><v-icon v-text="userIcon" />{{ $store.state.userName.firstname }}</v-btn
    >
  </v-app-bar>
</template>

<script>
export default {
  name: "AppBar",
  computed: {
    userIcon: function() {
      return String(
        "mdi-alpha-" +
          this.$store.state.userName.firstname.substring(0, 1).toLowerCase() +
          "-circle-outline"
      );
    },
    boardIcon: function() {
      return String(
        "mdi-alpha-" +
          this.$store.state.board.substring(0, 1).toLowerCase() +
          "-box-outline"
      );
    }
  },
  data: function() {
    return {
      myButtons: {
        1: {
          label: "Live",
          key: "live"
        },
        2: {
          label: "Blind",
          key: "blind"
        }
      },
      boardSelect: false
    };
  }
};
</script>
