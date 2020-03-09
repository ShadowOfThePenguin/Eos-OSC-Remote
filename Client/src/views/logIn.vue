<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title
                  >UVU Event Services Lighting Remote</v-toolbar-title
                >
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form v-on:submit.prevent>
                  <v-text-field
                    :label="myInvalid"
                    name="UVID"
                    prepend-icon="mdi-account-outline"
                    v-on:keyup.enter="event => login(event)"
                    :color="myColor"
                    ref="userInput"
                  />
                  <v-container>
                    <v-row>
                      <v-col />
                      <v-col>
                        <v-list>
                          <v-list-item-group
                            v-model="myBoard"
                            :mandatory="myChange"
                            v-on:change="makeMan()"
                          >
                            <v-list-item
                              v-for="(board, i) in boards"
                              :key="i"
                              :v-model="i"
                              :value="board.name"
                            >
                              <v-list-item-icon>
                                <v-icon v-text="board.icon"></v-icon>
                              </v-list-item-icon>
                              <v-list-item-content>
                                <v-list-item-title
                                  v-text="board.name"
                                ></v-list-item-title>
                              </v-list-item-content>
                            </v-list-item>
                          </v-list-item-group>
                        </v-list>
                      </v-col>
                      <v-col />
                    </v-row>
                    <v-checkbox
                      label="Remember Me"
                      v-model="myRemember"
                    ></v-checkbox>
                  </v-container>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn
                  :disabled="!myChange"
                  color="primary"
                  v-on:click="login()"
                  >Login</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import store from "../store/index.js";
window.console.log(store.state.boards);
export default {
  name: "logIn",
  data: () => ({
    myBoard: "0",
    myRemember: false,
    myChange: false,
    myInvalid: "UVID",
    myColor: "primary "
  }),
  methods: {
    login: function() {
      this.$store.commit("control", this.myBoard);
      window.console.log(this.$refs.userInput);
      this.$socket.send(
        JSON.stringify({
          channel: "login",
          user: this.$refs.userInput.lazyValue,
          board: this.myBoard,
          remember: this.myRemember
        })
      );
    } /*
        this.myInvalid = "Invalid ID";
        this.myColor = "red";
        this.$refs.userInput.focus();
      }*/,
    makeMan: function() {
      this.myChange = true;
    }
  },
  computed: {
    boards: function() {
      return store.state.boards;
    }
  }
};
</script>
