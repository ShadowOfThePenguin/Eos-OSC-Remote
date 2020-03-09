<template>
  <v-card
    :width="cardwidth"
    style="float: right; right:1%"
    v-on:mouseleave="$emit('closeMenu')"
  >
    <v-list dense
      >User: {{ user }}
      <v-list-item>
        <v-list-item-title>
          <v-btn x-small max-width="100%" toggle v-on:click="Switching()">
            Switch
          </v-btn>
        </v-list-item-title>
      </v-list-item>
      <v-list-item><v-spacer /> </v-list-item>
      <v-divider />
      <v-divider />
      <v-divider />
      <v-divider />

      <v-list-item>
        <v-list-item-title>
          <v-btn color="red" dark v-on:click="logout()">
            Log Out
          </v-btn>
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: "UserMenu",
  computed: {
    user: function() {
      if (this.$store.state.userNumber == 1) {
        return "Console";
      } else {
        return "Discrete";
      }
    }
  },
  data: function() {
    return {
      modal: false
    };
  },
  methods: {
    updateBoard: function(board) {
      this.$store.state.board = String(board);
      this.boardMenu = false;
      this.$socket.send(
        JSON.stringify({
          channel: "Console",
          board: String(board)
        })
      );
    },
    Switching: function() {
      if (this.$store.state.userNumber == 1) {
        this.$store.state.userNumber = this.$store.state.index;
      } else {
        this.$store.state.userNumber = 1;
      }
    },
    logout: function() {
      this.$emit("logout");
    }
  },
  props: {
    cardwidth: String
  }
};
</script>
