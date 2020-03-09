<template>
  <v-sheet height='100%'>
    <v-sheet max-width="95%" margin="auto" class="spacing" top="1%">
      <v-row align="center">
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="1"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="3"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="6"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="9"
          ConstrainWidth
        />
      </v-row>
    </v-sheet>
    <v-sheet max-width="95%" class="spacing">
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="11"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="14"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="17"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="20"
          ConstrainWidth
        />
      </v-row>
      <v-row class="group">
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="21"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="24"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="27"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="30"
          ConstrainWidth
        />
      </v-row>
    </v-sheet>
    <v-sheet max-width="95%" class="spacing">
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="31"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="34"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="37"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="40"
          ConstrainWidth
        />
      </v-row>
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="41"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="44"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="47"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="50"
          ConstrainWidth
        />
      </v-row>
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="51"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="54"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="57"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="60"
          ConstrainWidth
        />
      </v-row>
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="61"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="64"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="67"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="70"
          ConstrainWidth
        />
      </v-row>
      <v-row>
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="71"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="74"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="3"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="77"
          ConstrainWidth
        />
        <v-spacer />
        <buttonGroup
          NumberOfButtons="1"
          buttonWidth="9"
          :myButtons="myButtons"
          :start="80"
          ConstrainWidth
        />
      </v-row>
    </v-sheet>
  </v-sheet>
</template>

<script>
import ButtonGroup from "./ButtonGroup1.vue";
export default {
  name: "Faceplate",
  components: {
    ButtonGroup
  },
  data: function() {
    return {
      myButtons: {
        1: {
          label: "Displays",
          key: "displays"
        },
        2: {
          label: "Address",
          label2: "Patch",
          key: "address"
        },
        3: {
          label: "Encoder",
          label2: "Display",
          key: "gio_encoder_display"
        },
        4: {
          label: "Intensity",
          key: "encoder_category_intensity"
        },
        5: {
          label: "Focus",
          key: "encoder_category_focus"
        },
        6: {
          label: "Color",
          key: "encoder_category_color"
        },
        7: {
          label: "Shutter",
          key: "encoder_category_shutter"
        },
        8: {
          label: "Image",
          key: "encoder_category_image"
        },
        9: {
          label: "Form",
          key: "encoder_category_form"
        },
        10: {
          label: "More",
          label2: "SK",
          key: "more_softkeys"
        },
        11: {
          label: "Macro",
          key: "macro"
        },
        12: {
          label: "Help",
          key: "help"
        },
        13: {
          label: "Learn",
          key: "learn"
        },
        14: {
          label: "Query",
          key: "query"
        },
        15: {
          label: "Copy",
          label2: "To",
          key: "copy_to"
        },
        16: {
          label: "Recall",
          label2: "From",
          key: "recall_from"
        },
        17: {
          label: "Label",
          key: "label"
        },
        18: {
          label: ""
        },
        19: {
          label: "About",
          key: "about"
        },
        20: {
          label: "Park",
          key: "park"
        },
        21: {
          label: "Delete",
          key: "delete"
        },
        22: {
          label: "Path"
        },
        23: {
          label: "Effect",
          key: "effect"
        },
        24: {
          label: "Go To",
          label2: "Cue",
          key: "go_to_cue"
        },
        25: {
          label: "Block",
          key: "block"
        },
        26: {
          label: "Assert",
          key: "assert"
        },
        27: {
          label: "Undo",
          key: "undo"
        },
        28: {
          label: "High",
          key: "highlight"
        },
        29: {
          label: "Fan",
          key: "fan"
        },
        30: {
          label: "Capture",
          key: "capture"
        },
        31: {
          label: "Part",
          key: "part"
        },
        32: {
          label: "Cue",
          key: "cue"
        },
        33: {
          label: "Record",
          key: "record"
        },
        34: {
          label: "+",
          key: "+"
        },
        35: {
          label: "Thru",
          key: "thru"
        },
        36: {
          label: "-",
          key: "-"
        },
        37: {
          label: "/",
          key: "\\"
        },
        38: {
          label: "Mark",
          key: "mark"
        },
        39: {
          label: "sneak",
          key: "sneak"
        },
        40: {
          label: "Select",
          label2: "last",
          key: "select_last"
        },
        41: {
          label: "Int",
          label2: "Palette",
          key: "intensity_palette"
        },
        42: {
          label: "Focus",
          label2: "Palette",
          key: "focus_palette"
        },
        43: {
          label: "Record",
          label2: "Only",
          key: "record_only"
        },
        44: {
          label: "7",
          key: "7"
        },
        45: {
          label: "8",
          key: "8"
        },
        46: {
          label: "9",
          key: "9"
        },
        47: {
          label: "Rem",
          label2: "Dim",
          key: "rem_dim"
        },
        48: {
          label: "+%",
          key: "+%"
        },
        49: {
          label: "Home",
          key: "home"
        },
        50: {
          label: "Select",
          label2: "Manual",
          key: "select_manual"
        },
        51: {
          label: "Color",
          label2: "Palette",
          key: "color_palette"
        },
        52: {
          label: "Beam",
          label2: "Palette",
          key: "beam_palette"
        },
        53: {
          label: "Update",
          key: "update"
        },
        54: {
          label: "4",
          key: "4"
        },
        55: {
          label: "5",
          key: "5"
        },
        56: {
          label: "6",
          key: "6"
        },
        57: {
          label: "Out",
          key: "out"
        },
        58: {
          label: "-%",
          key: "-%"
        },
        59: {
          label: "Trace",
          key: "trace"
        },
        60: {
          label: "Select",
          label2: "Active",
          key: "select_active"
        },
        61: {
          label: "Preset",
          key: "preset"
        },
        62: {
          label: "Sub",
          key: "sub"
        },
        63: {
          label: "Group",
          key: "group"
        },
        64: {
          label: "1",
          key: "1"
        },
        65: {
          label: "2",
          key: "2"
        },
        66: {
          label: "3",
          key: "3"
        },
        67: {
          label: "Full",
          key: "full"
        },
        68: {
          label: "level",
          key: "level"
        },
        69: {
          label: "Q Only",
          label2: "Track",
          key: "cueonlytrack"
        },
        70: {
          label: "Last",
          key: "last"
        },
        71: {
          label: "Shift",
          key: "shift"
        },
        72: {
          label: "Delay",
          key: "label"
        },
        73: {
          label: "Time",
          key: "time"
        },
        74: {
          label: "Clear",
          key: "clear_cmd"
        },
        75: {
          label: "0",
          key: "0"
        },
        76: {
          label: ".",
          key: "."
        },
        77: {
          label: "At",
          key: "@"
        },
        78: {
          label: "Enter",
          key: "enter"
        },
        79: {
          label: "Enter",
          key: "enter"
        },
        80: {
          label: "Next",
          key: "next"
        }
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
