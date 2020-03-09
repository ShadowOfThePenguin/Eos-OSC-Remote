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
                <v-container style="height: 400px;">
                  <v-row
                    class="fill-height"
                    align-content="center"
                    justify="center"
                  >
                    <v-col class="subtitle-1 text-center" cols="12">
                      Connecting to Server
                    </v-col>
                    <v-col cols="6">
                      <v-progress-linear
                        color="deep-purple accent-4"
                        indeterminate
                        rounded
                        height="6"
                      ></v-progress-linear>
                      <v-container />
                      <span
                        >If unable to connect contact<br />Zachary Lambson<br />(860)559-1447
                      </span>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "logIn",
  data: () => ({
    boards: [
      {
        name: "Ballroom",
        ip: "2",
        icon: "mdi-alpha-b-box-outline"
      },
      {
        name: "Ragan",
        ip: "1",
        icon: "mdi-alpha-r-box-outline"
      }
    ],
    myUser: "",
    myBoard: "0",
    myRemember: false
  }),
  methods: {
    login: function() {
      this.$store.commit("control", this.myBoard);
      this.$socket.send(
        JSON.stringify({
          index: this.$store.index,
          channel: "login",
          user: this.myUser,
          board: this.myBoard,
          remember: this.myRemember
        })
      );
    }
  }
};
</script>
