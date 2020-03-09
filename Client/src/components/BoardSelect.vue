<template>
  <v-card v-model="boardSelect">
      <v-card-actions
        v-for="(board, index) in $store.state.boards"
        :key="index"
        v-text="$store.state.boards[index].name"
        link
        v-show="$store.state.boards[index].name != $store.state.board"
        v-on:click="updateBoard(String($store.state.boards[index].name))"
      >
      </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ConsoleMenu",
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
    }
  },
  props: {
    boardSelect: Boolean
  }
};
</script>
