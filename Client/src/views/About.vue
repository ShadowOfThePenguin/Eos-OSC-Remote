<template>
  <v-card
    class="pagewrapper"
    align="center"
    justify="center"
    dark
    :height="winHeight"
    :width="winWidth"
  >
    <v-overlay
      role="dialog"
      v-if="dialog"
      width="100%"
      height="100%"
      opacity=".75"
    >
      <v-card
        justify="center"
        align="center"
        max-width="500"
        height='100%'
        light
      >
        <v-card-title text-align="center" width="100%"
          >Confirm Log Out</v-card-title
        >
        <v-card-text>Are you sure you want to sign out?</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn v-on:click="dialog = false">cancel</v-btn>
          <v-btn v-on:click="logout()">confirm</v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
    <v-card-title>
      <AppBar
        v-on:ToggleBoardMenu="BoardMenu()"
        v-on:ToggleUserMenu="UserMenu()"
      />
    </v-card-title>
    <v-card-text 
      v-if="boardMenu"
      align="left" 
      justify='left'
    >
      <v-card 
        max-width="30%"
        align="center" 
        justify='center'
      >
        <v-list 
          dense 
          align="right" 
          justify='right' 
        >
          <v-list-item
            v-for="(board, index) in $store.state.boards"
            :key="index"
            v-text="$store.state.boards[index].name"
            link
            v-show="$store.state.boards[index].name != $store.state.board"
            v-on:click="updateBoard(String($store.state.boards[index].name))"
          />
        </v-list>
      </v-card>
    </v-card-text>
        <v-card-text v-if="userMenu"
        align="right" justify='right'
        >
          <v-card 
          max-width='30%'
          align="center" justify='center'
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
      <v-list-item>
        <v-list-item-title>
          <v-btn color="red" dark v-on:click="logout()">
            Log Out
          </v-btn>
        </v-list-item-title>
      </v-list-item>
    </v-list>
          </v-card>
    </v-card-text>
    <v-card-text
    >
      <v-card max-width="97%" height=100%>
        <v-app-bar
          ><v-toolbar-title class="CommandLineText"
          ref="faceplatecard"
          >{{
            CommandLine
          }}</v-toolbar-title>
        </v-app-bar>
        <v-card-text>
          <FacePlate :height='100% - (cardHeight + "px")' align="center" justify="center" v-show="breakpoint >= 4" />
          <tabbedFaceplate align="center" justify="center" v-show="breakpoint <= 3" />
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import AppBar from "../components/AppBar.vue";
import FacePlate from "../components/FullFaceplate.vue";
import tabbedFaceplate from "../components/TabbedFaceplate.vue";
export default {
  name: "consoleFace",
  components: {
    FacePlate,
    AppBar,
    tabbedFaceplate
  },
  computed: {
    CommandLine() {
      return this.$store.state.commandLine;
    },
    winWidth() {
      return window.innerWidth;
    },
    winHeight() {
      return window.innerHeight;
    },
    user: function() {
      if (this.$store.state.userNumber == 1) {
        return "Console";
      } else {
        return "Discrete";
      }
    },
    cardHeight() {
      window.console.log(this.$refs)
      return 98
    }
  },
  mounted() {
    this.onResize();
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
      boardMenu: false,
      userMenu: false,
      dialog: false,
      breakpoint: ""
    };
  },
  methods: {
    UserMenu: function() {
      this.userMenu = !this.userMenu;
    },
    BoardMenu: function() {
      this.boardMenu = !this.boardMenu;
    },
    closeMenu: function() {
      this.userMenu = false;
      this.boardMenu = false;
    },
    onResize() {
      if (window.innerWidth <= 755) {
        this.breakpoint = "1";
      } else if (window.innerWidth <= 960) {
        this.breakpoint = "2";
      } else if (window.innerWidth <= 1100) {
        this.breakpoint = "3";
      } else if (window.innerWidth <= 1920) {
        this.breakpoint = "4";
      } else {
        this.breakpoint = "5";
      }
      window.console.log(this.breakpoint)
    },
    logout: function() {
      this.$socket.send(
        JSON.stringify({
          channel: "logout",
          user: this.$store.state.userID
        })
      );
    },
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
  }
};
</script>

<style scoped>
.CommandLineText {
  text-align: center;
  width: 100%;
  color: orange;
}
.appBar {
  background-color: darkorange;
}
</style>
