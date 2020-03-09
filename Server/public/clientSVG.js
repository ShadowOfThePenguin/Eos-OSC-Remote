var buttonSize = {width: 4.8, height: 100/16}
var column = [buttonSize.width *3,buttonSize.width *4 ,buttonSize.width *5 ,buttonSize.width *7 ,buttonSize.width *8 ,buttonSize.width *9 ,buttonSize.width *11 ,buttonSize.width *12 ,buttonSize.width *13 ,buttonSize.width *15 ,buttonSize.width *17 ,buttonSize.width *18 ,buttonSize.width *19 ]
var row = [buttonSize.height *3 ,buttonSize.height *5 ,buttonSize.height *6 ,buttonSize.height *8 ,buttonSize.height *9 ,buttonSize.height *10 ,buttonSize.height *11 ,buttonSize.height *12 ]

var s = Snap("#svg")
var styles = {button : {fill: "#fff" ,stroke: "#000",strokeWidth: 1,"fill-opacity": 0.5,}}
var Options ={}
var Selected
var commandLine


function drawFace() {
    var LEDButton = s.symbol()
    LEDButton.path("M52,108a1,1,0,0,0,1-1v-6.48a1,1,0,0,0-1-1,.83.83,0,0,0-.22,0,46.15,46.15,0,0,1-21,0,1,1,0,0,0-1.18.72,1.5,1.5,0,0,0,0,.22V107a1,1,0,0,0,1,1Z").attr(styles.button)
    var facePanel = s.g(s.rect(column[7]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%').attr(styles.button))
    var buttons = {
        displays: {rect:s.rect(column[0]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.4076877234803337"}, address: {rect: s.rect(column[1]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.4076877234803337"},encoder_Display : {rect : s.rect(column[2]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.4076877234803337"}
        ,encoder_category_intensity : {rect : s.rect(column[3]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize:"0.38353090601185436"},encoder_category_focus : {rect : s.rect(column[4]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize:"0.38353090601185436"},encoder_category_color:{rect: s.rect(column[5]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize:"0.38353090601185436"}
        ,encoder_category_shutter:{rect: s.rect(column[6]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize:"0.38353090601185436"},encoder_category_image:{rect: s.rect(column[7]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize:"0.38353090601185436"},encoder_category_form:{rect:s.rect(column[8]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize:"0.38353090601185436"}
        ,more_softkeys : {rect: s.rect(column[9]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize:"0.38353090601185436"}
        ,live : {rect: s.rect(column[10]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6664179104477611"}, blind : {rect: s.rect(column[11]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'),fontsize: "0.6664179104477611"},scroll_lock : {rect: s.rect(column[12]+'%',row[0]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5128435324294613"}
        ,macro : {rect: s.rect(column[0]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.550234466588511"}, help : {rect: s.rect(column[1]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.550234466588511"}, learn : {rect: s.rect(column[2]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.550234466588511"}
        ,'delete' : {rect: s.rect(column[0]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.550234466588511"}, path : {rect: s.rect(column[1]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.550234466588511"}, effect : {rect: s.rect(column[2]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.550234466588511"}
        ,query : {rect: s.rect(column[3]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"},copy : {rect: s.rect(column[4]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"}, recall : {rect: s.rect(column[5]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"}
        ,goto_cue : {rect: s.rect(column[3]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"}, block : {rect: s.rect(column[4]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"},assert : {rect: s.rect(column[5]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"}
        ,label : {rect: s.rect(column[6]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"},about : {rect: s.rect(column[8]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"}
        ,undo : {rect: s.rect(column[6]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"},high : {rect: s.rect(column[7]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"}, fan : {rect: s.rect(column[8]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6072528883183568"}
        ,escape : {rect: s.rect(column[10]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5128435324294613"},page_up : {rect: s.rect(column[11]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5128435324294613"},select : {rect: s.rect(column[12]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5128435324294613"}
        ,page_left : {rect: s.rect(column[10]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5128435324294613"},page_down : {rect: s.rect(column[11]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5128435324294613"},page_right : {rect: s.rect(column[12]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5128435324294613"}
        ,park : {rect: s.rect(column[9]+'%',row[1]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5128435324294613"}
        ,capture : {rect: s.rect(column[9]+'%',row[2]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.4597909060736807"}
        ,part : {rect: s.rect(column[0]+'%',row[3]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"},cue : {rect: s.rect(column[1]+'%',row[3]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"},record : {rect: s.rect(column[2]+'%',row[3]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"}
        ,intens_palette : {rect: s.rect(column[0]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"},focus_palette : {rect: s.rect(column[1]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"},record_only : {rect: s.rect(column[2]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"}
        ,color_palette : {rect: s.rect(column[0]+'%',row[5]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"},beam_palette : {rect: s.rect(column[1]+'%',row[5]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"},update : {rect: s.rect(column[2]+'%',row[5]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"}
        ,preset : {rect: s.rect(column[0]+'%',row[6]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"},sub : {rect: s.rect(column[1]+'%',row[6]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"},group : {rect: s.rect(column[2]+'%',row[6]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"}
        ,shift : {rect: s.rect(column[0]+'%',row[7]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"},delay : {rect: s.rect(column[1]+'%',row[7]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"},time : {rect: s.rect(column[2]+'%',row[7]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.5081395348837209"}
        ,'+' : {rect: s.rect(column[3]+'%',row[3]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'},thru : {rect: s.rect(column[4]+'%',row[3]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6664179104477611"},'-' : {rect: s.rect(column[5]+'%',row[3]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'}
        ,7 : {rect: s.rect(column[3]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'},8 : {rect:s.rect(column[4]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'},9 : {rect:s.rect(column[5]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'}
        ,4 : {rect:s.rect(column[3]+'%',row[5]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'},5 : {rect:s.rect(column[4]+'%',row[5]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'},6 : {rect:s.rect(column[5]+'%',row[5]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'}
        ,1 : {rect:s.rect(column[3]+'%',row[6]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'},2 : {rect:s.rect(column[4]+'%',row[6]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'},3 : {rect:s.rect(column[5]+'%',row[6]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'}
        ,clear_cmd : {rect:s.rect(column[3]+'%',row[7]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: "0.6664179104477611"},0 : {rect:s.rect(column[4]+'%',row[7]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'},"." : {rect:s.rect(column[5]+'%',row[7]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '1.2868146214099216'}
        ,'/' : {rect:s.rect(column[6]+'%',row[3]+'%',buttonSize.width+'%',buttonSize.height +'%'),fontsize: '0.871968787515006'},mark : {rect:s.rect(column[7]+'%',row[3]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'},sneak : {rect:s.rect(column[8]+'%',row[3]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'}
        ,rem_dim : {rect:s.rect(column[6]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'},'+%' : {rect:s.rect(column[7]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'},home : {rect:s.rect(column[8]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'}
        ,out : {rect:s.rect(column[6]+'%',row[5]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'},'-%' : {rect:s.rect(column[7]+'%',row[5]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'},trace : {rect:s.rect(column[8]+'%',row[5]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'}
        ,full : {rect:s.rect(column[6]+'%',row[6]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'},level : {rect:s.rect(column[7]+'%',row[6]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'},cue_only : {rect:s.rect(column[8]+'%',row[6]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.5978279207085617'}
        ,'@' : {rect:s.rect(column[6]+'%',row[7]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.8929097605893186'},enter : {rect:s.rect(column[7]+'%',row[7]+'%',buttonSize.width*2+'%',buttonSize.height +'%'), fontsize: '0.8929097605893186'}
        ,select_last : {rect:s.rect(column[9]+'%',row[3]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.6050106609808102'}
        ,select_man : {rect:s.rect(column[9]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.6050106609808102'}
        ,select_active : {rect:s.rect(column[9]+'%',row[5]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.6050106609808102'}
        ,last : {rect:s.rect(column[9]+'%',row[6]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.6050106609808102'}
        ,next : {rect:s.rect(column[9]+'%',row[7]+'%',buttonSize.width+'%',buttonSize.height +'%'), fontsize: '0.6050106609808102'}
        ," _rateDown_ ": {rect:s.rect(buttonSize.width+'%',row[7]-(buttonSize.height*.2)+'%',buttonSize.width+'%',(buttonSize.height*1.2)+'%')}," _rateUp_ ": {rect:s.rect(buttonSize.width+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height*2.75+'%')}
        ," _intensUp_ " : {rect:s.rect(column[11]+'%',row[4]+'%',buttonSize.width+'%',buttonSize.height*2.75+'%')}," _intensDown_ ": {rect:s.rect(column[11]+'%',row[7]-(buttonSize.height*.2)+'%',buttonSize.width+'%',(buttonSize.height*1.2)+'%')}
        ,encoder_1 : {rect :s.circle(column[1]+(buttonSize.width/2) + '%',row[0]/2+'%',buttonSize.width*1.04+'%'), fontsize: '0.8383169023413801'},encoder_2 : {rect:s.circle(column[4]+(buttonSize.width/2) + '%',row[0]/2+'%',buttonSize.width*1.04+'%'), fontsize: '0.8383169023413801'},encoder_3 : {rect :s.circle(column[7]+(buttonSize.width/2) + '%',row[0]/2+'%',buttonSize.width*1.04+'%'), fontsize: '0.8383169023413801'},encoder_4 : {rect:s.circle(column[10]-buttonSize.width+(buttonSize.width/2) + '%',row[0]/2+'%',buttonSize.width*1.04+'%'), fontsize: '0.8383169023413801'}}

    for (item in buttons) {
        buttons[item].rect.attr(styles.button)
        if(typeof(buttons[item].rect.node.x) != 'undefined'){
            var x = buttons[item].rect.node.x.baseVal.valueInSpecifiedUnits + (buttonSize.width/2) +'%'
            var y = buttons[item].rect.node.y.baseVal.valueInSpecifiedUnits + (buttonSize.height/2) +'%'
        }else{ 
            var x = buttons[item].rect.attr("cx")
            var y = buttons[item].rect.attr("cy")
        }
            if (item.indexOf('_')>0){
                buttons[item].text=item.split("_")
                for (line in buttons[item].text) {
                    buttons[item].text[line]=s.text(x,y,buttons[item].text[line].toUpperCase().substring(0,1)+buttons[item].text[line].slice(1))  
                }
                if (Object.keys(buttons[item].text).length == 3) {
                    buttons[item].text[1].remove()
                    buttons[item].text[1] = buttons[item].text[2]   
                }
                buttons[item].text[0].transform("translate(0,-3)")
                buttons[item].text[0].attr({fontSize: "1em", textAnchor: "middle", alignmentBaseline: "baseline", pointerEvents: "none"})
                buttons[item].text[0].toggleClass("unselectable",1)
                buttons[item].text[1].transform("translate(0,+3)")
                buttons[item].text[1].attr({ fontSize: "1em", textAnchor: "middle", alignmentBaseline: "hanging", pointerEvents: "none"})
                buttons[item].text[1].toggleClass("unselectable",1)
                buttons[item] = s.g(buttons[item].rect, buttons[item].text[0], buttons[item].text[1])
            } else {
                buttons[item].text =s.text(x,y, item.toUpperCase().substring(0,1)+item.slice(1))
                buttons[item].text.attr({ fontSize:"1em", textAnchor: "middle", alignmentBaseline: "central", pointerEvents: "none"})
                buttons[item].text.toggleClass("unselectable",1)
                buttons[item] = s.g(buttons[item].rect, buttons[item].text)
                buttons[item][1].attr({width:"100%", height: "auto"})
            }
            buttons[item].appendTo(facePanel)
            
        }
        commandLine = s.g(s.rect((column[1]+(buttonSize.width/2)-buttonSize.width*1.04)+"%",buttonSize.height +'%',100-((column[1]+(buttonSize.width/2)-buttonSize.width*1.04)*2)+'%',buttonSize.height +'%','1%').attr(styles.button))
        commandLine.add(s.text("50%",buttonSize.height*1.5+'%',"Command Line").attr({fill: "blue", fontSize: "2em",textAnchor: "middle", fontWeight: "bold", alignmentBaseline: "central"}))
        commandLine.toggleClass("unselectable",1)






    Selected = s.text(buttonSize.width*1.5+'%',buttonSize.height*1.5+'%',Device).attr({fill: "blue", fontSize: "2em",textAnchor: "middle", fontWeight: "bold", alignmentBaseline: "central"})
    Selected.toggleClass("unselectable",1)
    Options.group = s.g()
    i = 0
    for (board in Options.boards) {
        i++
        Object.assign(Options,{[i] : {
            background: "", 
            text: "",
        }})
        Options[i].background = s.rect('0.5%',buttonSize.height*(1+i)+(i/10)+'%',buttonSize.width*3+'%',buttonSize.height+'%').attr({stroke: "#fff",strokeWidth: 1.5, fillOpacity: 0})
        Options[i].text = s.text(buttonSize.width*1.5+'%',buttonSize.height*(1.5+i)+'%', Options.boards[board]).attr({fill: "blue", fontSize: "2em",textAnchor: "middle", fontWeight: "bold", alignmentBaseline: "central", pointerEvents: "none"})
        Options[i].text.toggleClass("unselectable",1)
        Options[i].background.mouseover(function () {this.attr({stroke: "blue",strokeWidth:1})})
        Options[i].background.mouseout(function () {this.attr({stroke: "#fff",strokeWidth: 1.5})})
        Options[i].background.node.id= "option"+i
        Options.group.add(Options[i].background, Options[i].text)
    }

    Options.group.node.style.visibility = "hidden"

    Selected.drag(
    function(){},
    function(){
        Options.group.node.style.visibility = "visible"
        console.log(Options)
    for (board in Options.boards) {
        board++
        Options[board].background.mouseover(function(){selection = this})
    }
},
function(){
    Options.group.node.style.visibility = "hidden"
    if (typeof(selection) != 'undefined'){
    var i = selection.node.id
    i = i.substring(i.length - 1, i.length)
    if (Options[i].text.attr("text")!=  Selected.attr("text")) {
        Selected.attr({text: Options[i].text.attr("text")})
        updateDevice(Options[i].text.attr("text"))
    }
}
})

Selected.touchmove(function(a){
    Options.group.node.style.visibility = "visible"
})

for (board in Options.boards) {
    board++
    Options[board].background.touchend(function(a){
        console.log("end", a)
        var i = this.node.id
        i = i.substring(i.length - 1, i.length)
        if (Options[i].text.attr("text")!=  Selected.attr("text")) {
            Selected.attr({text: Options[i].text.attr("text")})
            updateDevice(Options[i].text.attr("text"))
        }
        Options.group.node.style.visibility = "hidden"
    })
}



User = s.text(100-(parseFloat(commandLine[0].attr("x"))/2) + '%',buttonSize.height*1.5+'%',ClientInfo.Name.first).attr({fill: "blue", fontSize: "2em",textAnchor: "middle", fontWeight: "bold", alignmentBaseline: "central"})
User.toggleClass("unselectable",1)
facePanel.mouseover(function(a){
    console.log(a)
    a.target.setAttribute("fill","#fc0")
    a.target.setAttribute("stroke", "#000")
    a.target.style = "stroke-width: 1; fill-opacity, 0.5"
})

facePanel.mouseout(function(a){
    a.target.setAttribute("fill","#fff")
    a.target.setAttribute("stroke", "#000")
    a.target.style = "stroke-width: 1; fill-opacity, 0.5"
})

facePanel.mousedown(function(a){
    a.target.setAttribute("fill","#fc0")
    a.target.setAttribute("stroke", "#000")
    a.target.style = "stroke-width: .5; fill-opacity, 0.5"
})

facePanel.mouseup(function(a){
    var group = a.target.parentElement.children
    a.target.setAttribute("fill","#fc0")
    a.target.setAttribute("stroke", "#000")
    a.target.style = "stroke-width: 1; fill-opacity, 0.5"
    if (group.hasOwnProperty("2")) {
        if(group[1].innerHTML=="Encoder") {
            key = "encoder_category_"+ group[2].innerHTML.toLowerCase()
        }else if (group[2].innerHTML=="Pallet") {
            key = group[1].innerHTML.toLowerCase()+"_pallet"
        } else if(group[1].innerHTML=="Goto") {
            key = "go_to_cue"
        } else { 
            key = group[1].innerHTML.toLowerCase()+"_"+group[2].innerHTML.toLowerCase()
        }
    }else{ 
        key=group[1].innerHTML.toLowerCase()
    }
    panelbutton(key)
})



/*

        if (this.hasOwnProperty("2")) {
            if(this[1].attr("text")=="Encoder") {
                key = "encoder_category_"+ this[2].attr("text").toLowerCase()
            }else if (this[2].attr("text")=="Pallet") {
                key = this[1].attr("text").toLowerCase()+"_pallet"
            } else if(this[1].attr("text")=="Goto") {
                key = "go_to_cue"
            } else { 
                key = this[1].attr("text").toLowerCase()+"_"+this[2].attr("text").toLowerCase()
            }
        }else{ 
            key=this[1].attr("text").toLowerCase()
        }
        panelbutton(key)
    })
*/

reportWindowSize()
window.addEventListener("resize", reportWindowSize)

function reportWindowSize() {
    s.attr({fontSize: buttons.displays[0].getBBox().width/3.8})
    facePanel.transform('translate(0,'+window.innerHeight*(buttonSize.height*2/100)+')')
    var i = 0 
    while (User.node.getBoundingClientRect().right > window.innerWidth*0.99) {
        i++
        if (i > 100) {break}
        var fontsize = parseFloat(User.attr("fontSize"))-.01 +'em'
        User.attr({fontSize: fontsize})
        commandLine[1].attr({fontSize: fontsize})
        Selected.attr({fontSize: fontsize})
    }
    //s.attr({left : buttons.encoder_1.rect.getBBox().x, width : buttons.encoder_4.rect.node.getBoundingClientRect().x + buttons.encoder_4.rect.node.getBoundingClientRect().width - buttons.encoder_1.rect.node.getBoundingClientRect().x})
    //consoleSelect.style.left = ((buttons.spread.rect.node.getBoundingClientRect().x + buttons.spread.rect.node.getBoundingClientRect().width - buttons.release.rect.node.getBoundingClientRect().x)/2) +(buttons.release.rect.node.getBoundingClientRect().x - (consoleSelect.getBoundingClientRect().width/2))
    //s.attr({width: buttons.displays.rect.node.getBoundingClientRect().x})
}

function getElementBySnap(snapName) {
    return [snapName]
}
}

function createOptions(consoles){
    Options.boards=[]
    for (item in consoles) {
        Options.boards.push(item)
    }
}

function removeLast(string) {
    return parseFloat(string)//.substring(0, string.length-1))
}