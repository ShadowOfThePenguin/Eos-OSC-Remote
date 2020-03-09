<template>
  <v-sheet>
    <v-sheet max-width="95%" margin="auto" class="spacing" top="1%" align='center' justify='center'>
      <v-row align="center" >
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="1"
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="4"
        />
      </v-row>
    </v-sheet>
    <v-sheet max-width="95%" class="spacing">
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="Number(5)"
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="Number(8)"
        />
      </v-row>
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="Number(9)"
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="12"
        />
      </v-row>
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="Number(13)"
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="Number(16)"
        />
      </v-row>
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="Number(17)"
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="Number(20)"
        />
      </v-row>
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="Number(21)"
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="24"
          :myButtons="myButtons"
          :start="Number(24)"
        />
      </v-row>
    </v-sheet>
  </v-sheet>
</template>

<script>
import ButtonGroup from "./ButtonGroup1.vue";
export default {
  name: "Keypad",
  components: {
    ButtonGroup
  },
  data: function() {
    return {
      tab: 4,
      myButtons: {
        1: {
          label: "Address",
          label2: "Patch",
          key: "address"
        },
        2: {
          label: "Park",
          key: "park"
        },
        3: {
          label: "sneak",
          key: "sneak"
        },
        4: {
          label: "Group",
          key: "group"
        },
        5: {
          label: "+",
          key: "+"
        },
        6: {
          label: "Thru",
          key: "thru"
        },
        7: {
          label: "-",
          key: "-"
        },
        8: {
          label: "/",
          key: "\\"
        },
        9: {
          label: "7",
          key: "7"
        },
        10: {
          label: "8",
          key: "8"
        },
        11: {
          label: "9",
          key: "9"
        },
        12: {
          label: "Out",
          key: "out"
        },
        13: {
          label: "4",
          key: "4"
        },
        14: {
          label: "5",
          key: "5"
        },
        15: {
          label: "6",
          key: "6"
        },
        16: {
          label: "Full",
          key: "full"
        },
        17: {
          label: "1",
          key: "1"
        },
        18: {
          label: "2",
          key: "2"
        },
        19: {
          label: "3",
          key: "3"
        },
        20: {
          label: "At",
          key: "@"
        },
        21: {
          label: "Clear",
          key: "clear_cmd"
        },
        22: {
          label: "0",
          key: "0"
        },
        23: {
          label: ".",
          key: "."
        },
        
        24: {
          label: "Enter",
          key: "enter"
        },
      }
    };
  },
  methods: {
    log: function(text) {
      window.console.log(text);
    }
  }
};
</script>

<style scoped>
.spacing {
  margin-top: 2%;
}
</style>
