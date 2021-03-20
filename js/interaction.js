var level = [1,1,1,1,1,1];
var gear = [0,0,0,0,0,0];
var strength = [1,1,1,1,1,1];

$( document ).ready(function() {
    //add player
    $("#add0.addNewPlayer").click(function(){
        $("#player0").show();
        $("#add1").show();
        $(this).hide();
    });
    $("#add1.addNewPlayer").click(function(){
        $("#player1").show();
        $("#add2").show();
        $(this).hide();
    });
    $("#add2.addNewPlayer").click(function(){
        $("#player2").show();
        $("#add3").show();
        $(this).hide();
    });
    $("#add3.addNewPlayer").click(function(){
        $("#player3").show();
        $("#add4").show();
        $(this).hide();
    });
    $("#add4.addNewPlayer").click(function(){
        $("#player4").show();
        $("#add5").show();
        $(this).hide();
    });
    $("#add5.addNewPlayer").click(function(){
        $("#player5").show();
        $(this).hide();
    });
    //remove players
    $("#0.close").click(function(){
        $("#player0").hide();
        $("#add1").hide();
        $("#add2").hide();
        $("#add3").hide();
        $("#add4").hide();
        $("#add5").hide();
        $("#add0").show();
    });
    $("#1.close").click(function(){
        $("#player1").hide();
        $("#add0").hide();
        $("#add2").hide();
        $("#add3").hide();
        $("#add4").hide();
        $("#add5").hide();
        $("#add1").show();
    });
    $("#2.close").click(function(){
        $("#player2").hide();
        $("#add0").hide();
        $("#add1").hide();
        $("#add3").hide();
        $("#add4").hide();
        $("#add5").hide();
        $("#add2").show();
    });
    $("#3.close").click(function(){
        $("#player3").hide();
        $("#add0").hide();
        $("#add1").hide();
        $("#add2").hide();
        $("#add4").hide();
        $("#add5").hide();
        $("#add3").show();
    });
    $("#4.close").click(function(){
        $("#player4").hide();
        $("#add0").hide();
        $("#add1").hide();
        $("#add2").hide();
        $("#add3").hide();
        $("#add5").hide();
        $("#add4").show();
    });
    $("#5.close").click(function(){
        $("#player5").hide();
        $("#add0").hide();
        $("#add1").hide();
        $("#add2").hide();
        $("#add3").hide();
        $("#add4").hide();
        $("#add5").show();
    });
    //----------------------------------player 0
	//name stuff
    $("#0.submitName").click(function(){
    	$("#0.submitName").hide();
    	$("#0.nameInput").hide();
    	$("#0.nameText").show();
    	$("#0.changeName").show();
    });
    $("#0.changeName").click(function(){
    	$("#0.changeName").hide();
    	$("#0.nameInput").show();
    	$("#0.nameText").hide();
    	$("#0.submitName").show();
    });
	//level up and down
    $("#0.levelUp").click(function(){
    	level[0]++;
    	strength[0]++;
    	$("#0.currentLevel").text(level[0]);
    	$("#0.currentStrength").text(strength[0]);
    });
    $("#0.levelDown").click(function(){
    	if (level[0] > 1) {
	    	level[0]--;
	    	strength[0]--;
	    	$("#0.currentLevel").text(level[0]);
	    	$("#0.currentStrength").text(strength[0]);
	    }
    });
    //gear up and down
    $("#0.gearUp").click(function(){
    	gear[0]++;
    	strength[0]++;
    	$("#0.currentGear").text(gear[0]);
    	$("#0.currentStrength").text(strength[0]);
    });
    $("#0.gearDown").click(function(){
    	if (gear[0] > 0) {
    		gear[0]--;
    		strength[0]--;
    		$("#0.currentGear").text(gear[0]);
    		$("#0.currentStrength").text(strength[0]);
    	}
    });
    //----------------------------------player 1
    //name stuff
    $("#1.submitName").click(function(){
        $("#1.submitName").hide();
        $("#1.nameInput").hide();
        $("#1.nameText").show();
        $("#1.changeName").show();
    });
    $("#1.changeName").click(function(){
        $("#1.changeName").hide();
        $("#1.nameInput").show();
        $("#1.nameText").hide();
        $("#1.submitName").show();
    });
    //level up and down
    $("#1.levelUp").click(function(){
        level[1]++;
        strength[1]++;
        $("#1.currentLevel").text(level[1]);
        $("#1.currentStrength").text(strength[1]);
    });
    $("#1.levelDown").click(function(){
        if (level[1] > 1) {
            level[1]--;
            strength[1]--;
            $("#1.currentLevel").text(level[1]);
            $("#1.currentStrength").text(strength[1]);
        }
    });
    //gear up and down
    $("#1.gearUp").click(function(){
        gear[1]++;
        strength[1]++;
        $("#1.currentGear").text(gear[1]);
        $("#1.currentStrength").text(strength[1]);
    });
    $("#1.gearDown").click(function(){
        if (gear[1] > 0) {
            gear[1]--;
            strength[1]--;
            $("#1.currentGear").text(gear[1]);
            $("#1.currentStrength").text(strength[1]);
        }
    });1
    //----------------------------------player 2
    //name stuff
    $("#2.submitName").click(function(){
        $("#2.submitName").hide();
        $("#2.nameInput").hide();
        $("#2.nameText").show();
        $("#2.changeName").show();
    });
    $("#2.changeName").click(function(){
        $("#2.changeName").hide();
        $("#2.nameInput").show();
        $("#2.nameText").hide();
        $("#2.submitName").show();
    });
    //level up and down
    $("#2.levelUp").click(function(){
        level[2]++;
        strength[2]++;
        $("#2.currentLevel").text(level[2]);
        $("#2.currentStrength").text(strength[2]);
    });
    $("#2.levelDown").click(function(){
        if (level[2] > 1) {
            level[2]--;
            strength[2]--;
            $("#2.currentLevel").text(level[2]);
            $("#2.currentStrength").text(strength[2]);
        }
    });
    //gear up and down
    $("#2.gearUp").click(function(){
        gear[2]++;
        strength[2]++;
        $("#2.currentGear").text(gear[2]);
        $("#2.currentStrength").text(strength[2]);
    });
    $("#2.gearDown").click(function(){
        if (gear[2] > 0) {
            gear[2]--;
            strength[2]--;
            $("#2.currentGear").text(gear[2]);
            $("#2.currentStrength").text(strength[2]);
        }
    });
    //----------------------------------player 3
    //name stuff
    $("#3.submitName").click(function(){
        $("#3.submitName").hide();
        $("#3.nameInput").hide();
        $("#3.nameText").show();
        $("#3.changeName").show();
    });
    $("#3.changeName").click(function(){
        $("#3.changeName").hide();
        $("#3.nameInput").show();
        $("#3.nameText").hide();
        $("#3.submitName").show();
    });
    //level up and down
    $("#3.levelUp").click(function(){
        level[3]++;
        strength[3]++;
        $("#3.currentLevel").text(level[3]);
        $("#3.currentStrength").text(strength[3]);
    });
    $("#3.levelDown").click(function(){
        if (level[3] > 1) {
            level[3]--;
            strength[3]--;
            $("#3.currentLevel").text(level[3]);
            $("#3.currentStrength").text(strength[3]);
        }
    });
    //gear up and down
    $("#3.gearUp").click(function(){
        gear[3]++;
        strength[3]++;
        $("#3.currentGear").text(gear[3]);
        $("#3.currentStrength").text(strength[3]);
    });
    $("#3.gearDown").click(function(){
        if (gear[3] > 0) {
            gear[3]--;
            strength[3]--;
            $("#3.currentGear").text(gear[3]);
            $("#3.currentStrength").text(strength[3]);
        }
    });
    //----------------------------------player 4
    //name stuff
    $("#4.submitName").click(function(){
        $("#4.submitName").hide();
        $("#4.nameInput").hide();
        $("#4.nameText").show();
        $("#4.changeName").show();
    });
    $("#4.changeName").click(function(){
        $("#4.changeName").hide();
        $("#4.nameInput").show();
        $("#4.nameText").hide();
        $("#4.submitName").show();
    });
    //level up and down
    $("#4.levelUp").click(function(){
        level[4]++;
        strength[4]++;
        $("#4.currentLevel").text(level[4]);
        $("#4.currentStrength").text(strength[4]);
    });
    $("#4.levelDown").click(function(){
        if (level[4] > 1) {
            level[4]--;
            strength[4]--;
            $("#4.currentLevel").text(level[4]);
            $("#4.currentStrength").text(strength[4]);
        }
    });
    //gear up and down
    $("#4.gearUp").click(function(){
        gear[4]++;
        strength[4]++;
        $("#4.currentGear").text(gear[4]);
        $("#4.currentStrength").text(strength[4]);
    });
    $("#4.gearDown").click(function(){
        if (gear[4] > 0) {
            gear[4]--;
            strength[4]--;
            $("#4.currentGear").text(gear[4]);
            $("#4.currentStrength").text(strength[4]);
        }
    });

    //----------------------------------player 5
    //name stuff
    $("#5.submitName").click(function(){
        $("#5.submitName").hide();
        $("#5.nameInput").hide();
        $("#5.nameText").show();
        $("#5.changeName").show();
    });
    $("#5.changeName").click(function(){
        $("#5.changeName").hide();
        $("#5.nameInput").show();
        $("#5.nameText").hide();
        $("#5.submitName").show();
    });
    //level up and down
    $("#5.levelUp").click(function(){
        level[5]++;
        strength[5]++;
        $("#5.currentLevel").text(level[5]);
        $("#5.currentStrength").text(strength[5]);
    });
    $("#5.levelDown").click(function(){
        if (level[5] > 1) {
            level[5]--;
            strength[5]--;
            $("#5.currentLevel").text(level[5]);
            $("#5.currentStrength").text(strength[5]);
        }
    });
    //gear up and down
    $("#5.gearUp").click(function(){
        gear[5]++;
        strength[5]++;
        $("#5.currentGear").text(gear[5]);
        $("#5.currentStrength").text(strength[5]);
    });
    $("#5.gearDown").click(function(){
        if (gear[5] > 0) {
            gear[5]--;
            strength[5]--;
            $("#5.currentGear").text(gear[5]);
            $("#5.currentStrength").text(strength[5]);
        }
    });
});