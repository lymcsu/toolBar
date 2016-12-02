require.config({
	paths: {"jquery":"jquery-1.9.1"}
});
requirejs(["jquery","backtop"], function ($, backtop){
	new backtop.BackTop($("#backtop"), {mode: "move", speed:600});
});