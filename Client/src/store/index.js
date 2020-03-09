import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    socket: {
      isConnected: false,
      message: "",
      reconnectError: false
    },
    index: 2,
    boards: [],
    userID: "",
    board: "",
    userName: "",
    userNumber: 1,
    ServerIP: "localhost",
    commandLine: "No Connection"
  },
  mutations: {
    SOCKET_ONOPEN(state, event) {
      Vue.prototype.$socket = event.currentTarget;
      state.socket.isConnected = true;
      window.console.log("connected");
    },
    SOCKET_ONCLOSE(state, event) {
      if (state.socket.isConnected == true) {
        state.socket.isConnected = false;
        if (router.currentRoute.name != "NoServer") {
          router.push({ name: "NoServer" });
        }
        window.console.log(event);
      }
    },
    SOCKET_ONERROR() {
      if (router.currentRoute.name != "NoServer") {
        router.push({ name: "NoServer" });
      }
    },
    // default handler called for all methods
    SOCKET_ONMESSAGE(state, message) {
      state.socket.message = message;
      switch (message.channel) {
        case "route":
          router.push({ name: message.data });
          break;
        case state.board:
          window.console.log(message);
          switch (message.address) {
            case "/eos/out/user/1/cmd":
              state.commandLine = message.args[0];
              window.console.log(message.args[0]);
              if (message.args[0].substring(0, 1) == "L") {
                window.console.log("Live");
              } else {
                window.console.log("Blind");
              }
          }
          break;
        case "update":
          window.console.log(message);
          state.boards = [];
          for (var board in message.boards) {
            state.boards.push({
              name: message.boards[board],
              icon:
                "mdi-alpha-" +
                message.boards[board].substring(0, 1).toLowerCase() +
                "-box-outline"
            });
          }
          break;
        default:
          if (message.hasOwnProperty("data")) {
            state[message.channel] = message.data;
          }
        //window.console.log(message);
        //window.console.log(state);
      }
    },
    // mutations for reconnect methods
    SOCKET_RECONNECT() {
      //window.console.info(state, count);
    },
    SOCKET_RECONNECT_ERROR(state) {
      state.socket.reconnectError = true;
    },
    login() {
      router.push("about");
    },
    control(board) {
      this.state.board = String(board);
    }
  },
  actions: {
    sendMessage: function(message) {
      Vue.prototype.$socket.send(message);
    }
  },
  modules: {}
});
