<template>
  <v-sheet :width="Number(buttonWidth) * Number(NumberOfButtons) + 1 + '%'">
    <v-btn
      v-for="n in Number(NumberOfButtons)"
      :v-show="vShow"
      :key="Add(start, n)"
      v-on:click="SendButton(myButtons[Add(start, n)])"
      :width="100 / Number(NumberOfButtons) + '%'"
      min-height="2.6vw"
      outlined
      >{{ myButtons[Add(start, n)].label
      }}<br v-if="myButtons[Add(start, n)].label2" />{{
        myButtons[Add(start, n)].label2
      }}</v-btn
    >
  </v-sheet>
</template>

<script>
export default {
  name: "buttonGroup",
  props: {
    buttonWidth: String,
    myButtons: Object,
    start: Number,
    NumberOfButtons: String,
    vShow: Boolean,
  },
  methods: {
    SendButton: function(Button) {
      this.$socket.send(
        JSON.stringify({
          channel: this.$store.state.board,
          address:
            "/eos/user/" + this.$store.state.userNumber + "/key/" + Button.key,
          args: [
            {
              type: "f",
              value: 1
            }
          ]
        })
      );
    },
    Add: function(start, number) {
      return Number(start) + Number(number) - Number(1);
    }
  }
};
</script>

<style scoped>
.v-btn {
  font-size: 0.95vw;
}
</style>
